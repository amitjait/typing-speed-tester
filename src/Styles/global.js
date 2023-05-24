import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`


*{
    box-sizing:border-box;
    // overflow-x:hidden;
}

body{
    background : ${({theme})=>theme.background};
    padding:0;
    margin:0;
    transition: all 0.25s linear;
    color:${({theme})=>theme.textColor};
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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

.user-profile{
    width:1000px;
    margin:auto;
    display:flex;
    height:15rem;
    background: ${({theme})=> theme.typeBoxText};
    border-radius :20px;
    padding:1rem;
    justify-content:center;
    align-items:center;
}

.user{
    width:50%;
    display:flex;   

    font-size:1.5rem;
    // padding:1rem;
    border-right:2px solid;
    padding-right:1rem;
}
.picture{
    width:40%;
    margin:auto;
}

.info{
    width:70%;
    padding:1rem;
    margin-top:10px;
    text-align:left;
    margin-left:-2rem;
}

.total-tests{
    width:50%;
    aligh-items:center;
    font-size:2rem;
}

.table, .graph-user-data{
    margin:auto;
    width:1000px;
}

.center-of-screen{
    display:flex;
    min-height:100vh;
    justify-content:center;
    align-items:center;
    
}

`
