import React, { createRef, useEffect, useMemo, useRef, useState } from "react";
import UpperMenu from "./UpperMenu";
import { useTestMode } from "../Context/TestModeContext";
import Stats from "./Stats";


var randomWords =  require('random-words');

const TypingBox = ()=>{

    let inputRef = useRef(null);
    let {testTime} = useTestMode();
    let [countDown, setCountDown] = useState(15);
    let [testStart, setTestStart] = useState(false);
    let [testEnd, setTestEnd] = useState(false);
    let [currWordIndex, setCurrWordIndex] = useState(0);
    let [currCharIndex, setCurrCharIndex] = useState(0);
    let [intervalId, setIntervalId] = useState(null);
    let [correctChars, setCorrectChars] = useState(0);
    let [incorrectChars, setIncorrecctChars] = useState(0);
    let [missedChars, setMissedChars] = useState(0);
    let [extraChars, setExtraChars] = useState(0);
    let [correctWords, setCorrectWords] = useState(0);
    let [graphData, setGraphData] = useState([]);

    let [wordsArray, setWordsArray] = useState(() =>{
        return randomWords(50);
    })

    const wordSpanRef = useMemo(() =>{
        return Array(wordsArray.length).fill(0).map(i => createRef(null));
    }, [wordsArray])

    
    const startTimer = ()=>{

        const intervalId = setInterval(timer, 1000);
        setIntervalId(intervalId);

        function timer(){
            setCountDown((latestCountDown) =>{
                setCorrectChars((correctChars)=>{
                    setGraphData((graphData)=>{
                        return ([...graphData, [
                            testTime-latestCountDown+1,
                            (correctChars/5)/((testTime-latestCountDown+1)/60)
                        ]]);

                    })
                    return correctChars;
                })

                if(latestCountDown === 1){
                    setTestEnd(true);
                    clearInterval(intervalId);
                    removeFocus();
                    return 0;
                }
                return latestCountDown-1;
            });
        }
    }


    const resetTest = ()=>{
        clearInterval(intervalId);
        setCountDown(testTime);
        setCurrWordIndex(0);
        setCurrCharIndex(0);
        setTestStart(false);
        setTestEnd(false);
        setWordsArray(randomWords(50));
        setCorrectChars(0);
        setCorrectWords(0);
        setIncorrecctChars(0);
        setMissedChars(0);
        setExtraChars(0);
        focusInput();
        if(!testEnd){
            resetWordSpanRefClassname();
        }        
        
    }

    const resetWordSpanRefClassname = ()=>{

        wordSpanRef.map((i)=>(
            Array.from(i.current.childNodes).map((j)=>(
                j.className = ''
            ))
        ))
        wordSpanRef[0].current.childNodes[0].className = 'current';
    }

    const calculateWPM = ()=>{
        
        return Math.round((correctChars/5)/(testTime/60));
    }

    const calculateAcc = ()=>{
        console.log((correctWords/currWordIndex)*100, correctWords, currWordIndex);
        return Math.round((correctWords/currWordIndex)*100);
    }

    const handleInput = (e)=>{

        if(!testStart){
            startTimer();
            setTestStart(true);
        }

        let allCurrChars = wordSpanRef[currWordIndex].current.childNodes;

        if(e.keyCode === 32){
            // space logic

            let correctCharsInWords = wordSpanRef[currWordIndex].current.querySelectorAll('.correct');
            if(correctCharsInWords.length === allCurrChars.length){
                setCorrectWords(correctWords+1);
            }

            

            if(allCurrChars.length <= currCharIndex){
                // remove cursor from last place in a word
                allCurrChars[currCharIndex-1].classList.remove('current-right');
            }else{
                // remove cursore from in betweeen word
                setMissedChars(missedChars + (allCurrChars.length-currCharIndex));
                allCurrChars[currCharIndex].classList.remove('current');
            }

            wordSpanRef[currWordIndex+1].current.childNodes[0].className ='current';
            setCurrWordIndex(currWordIndex+1);
            setCurrCharIndex(0);
            
            return;
        }

        if(e.keyCode === 8){
            // logic for backspace

            if(currCharIndex !== 0){

                if(allCurrChars.length === currCharIndex){

                    if(allCurrChars[currCharIndex-1].className.includes('extra')){
                        allCurrChars[currCharIndex-1].remove();
                        allCurrChars[currCharIndex-2].className += ' current-right'
                    }else{
                        allCurrChars[currCharIndex-1].className = 'current';
                    }

                    
                    setCurrCharIndex(currCharIndex-1);
                    return;
                }

                allCurrChars[currCharIndex].className = '';
                allCurrChars[currCharIndex-1].className = 'current';
                setCurrCharIndex(currCharIndex-1);
            }

           return;
        }

        if(currCharIndex === allCurrChars.length){

            let newSpan = document.createElement('span');
            newSpan.innerText = e.key;
            newSpan.className = 'wrong extra current-right';
            allCurrChars[currCharIndex-1].classList.remove('current-right');
            wordSpanRef[currWordIndex].current.append(newSpan);
            setCurrCharIndex(currCharIndex+1);
            setExtraChars(extraChars+1);
            return;
        }

        if(e.key === allCurrChars[currCharIndex].innerText){
            allCurrChars[currCharIndex].className = 'correct';
            setCorrectChars(correctChars+1);
        }else{
            allCurrChars[currCharIndex].className = 'wrong';
            setIncorrecctChars(incorrectChars+1); 
        }

        if(currCharIndex+1 === allCurrChars.length){
            allCurrChars[currCharIndex].className += " current-right";
        }else{
            allCurrChars[currCharIndex+1].className = "current";
        }

        setCurrCharIndex(currCharIndex+1);

    }

    const focusInput = ()=>{
        inputRef.current.focus();
    }

    const removeFocus = ()=>{
        inputRef.current.blur();
    }

    useEffect(()=>{
        resetTest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [testTime]); 

    const handleEffect = ()=>{
        focusInput();
        wordSpanRef[currWordIndex].current.childNodes[currCharIndex].className = 'current'; 
    }
    useEffect(()=>{
        handleEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
 

    return (
        <div className="typingBox">
            <UpperMenu counter={countDown} reset={resetTest}/>
            {(testEnd)?(<Stats wpm={calculateWPM()} accuracy={calculateAcc()} correctChars={correctChars} incorrectChars={incorrectChars}
                missedChars={missedChars} extraChars={extraChars}   
                graphData={graphData}         
            />): 
            (<div className="type-box" onClick={focusInput}>
                <div className="words">
                    {
                        wordsArray.map((word, index)=>(
                            <span className="word" ref={wordSpanRef[index]}>
                                {
                                    word.split('').map(char=>(
                                        <span>{char}</span>
                                    ))
                                }
                            </span>
                        ))
                    }
                </div>
            </div>)}
            <input 
                className="hidden-input"
                type="text"
                onKeyDown={handleInput}
                ref={inputRef}
            />
        </div>
    )
}

export default TypingBox;