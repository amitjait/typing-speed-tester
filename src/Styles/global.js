import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`


*{
    box-sizing:border-box;
}

body{
    background : ${({theme})=>theme.background};
    padding:0;
    margin:0;
    transition: all 0.25s linear;
    color:${({theme})=>theme.textColor};
}

.footer{
    width:1000px;
    display:flex;
    justify-content:space-between;
    margin-left :auto;
    margin-right :auto;
}

.upper-menu{
    
    display:flex;
    align-items:center;
    justify-content: space-between;
    max-width:1000px;
    font-size:28px;
    margin-right:auto;
    margin-left:auto;
    padding-bottom:1rem;    
}

.modes{
    display:flex;
    gap:0.5rem;
}

.canvas{
    display:grid;
    min-height:100vh;
    grid-auto-flow:row;
    grid-template-row:auto 1fr auto;
    gap:0.5rem;
    padding: 2rem;
    width:100vw;
    align-items:center;
    text-align:center; 
}

.type-box{
    display:block;
    max-width:1000px;
    height:150px;
    margin-left:auto;
    margin-right:auto;
    overflow:hidden;
    color: ${({theme}) => theme.typeBoxText};
}

.words{
    font-size:32px;
    display:flex;
    flex-wrap:wrap;
}

.word{
    margin:5px;
    padding-right:2px;
}

.hidden-input{
    opacity:0;
}

.current{
    border-left: 1px solid white;

    animation: blinking-left 1s infinite;

    @keyframes blinking-left{
        0%{border-left-color:white;}
        25%{border-left-color:balck;}
        50%{border-left-color:white;}
        75%{border-left-color:black;}
        100%{border-left-color:white;}
    }
}

.current-right{
    border-right: 1px solid;

    animation: blinking 2s infinite;

    @keyframes blinking{
        0%{border-right-color:white;}
        25%{border-right-color:black;}
        50%{border-right-color:white;}
        75%{border-right-color:black;}
        100%{border-right-color:white;}
    }
}

.correct{
    color:${({theme}) => theme.textColor};
}

.wrong{
    color:red;
}

.test-mode:hover{
    color:green;
    cursor:pointer;
}

.links{
    display :flex;
    gap:1rem;
}

.link:hover{
    color:gray;
    cursor:pointer;
}


.resume a:link{
    color:red
}

.resume a:visited{
    color:orange
}

.linkedin a:link{
    color:white;
}

.linkedin a:visited{
    color:grey;
}

.state-box{
    display:flex;
    width : 1000px;
    height:auto;
    margin-left: auto;
    margin-right: auto;
}

.left-stats{
    width:30%;
    padding:30px;

}

.right-stats{
    width:70%;

}

.title{
    font-size:20px;
    color:${({theme}) => theme.typeBoxText};
}

.subtitle{
    font-size:30px;
}

.header{
    width:1000px;
    display:flex;
    justify-content:space-between;
    margin-left:auto;
    margin-right:auto;
}



`
