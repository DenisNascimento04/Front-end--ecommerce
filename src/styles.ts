import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #fff;

    header{
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin-top: 40px;
        border-bottom: 1px solid var(--grayishBlue);
    };

    @media only screen and (max-width:425px){
        align-items: flex-start;
        header{
            align-items: center;
            padding: 20px;
            width: 89%;
            margin: 0;
            border: 0;
            justify-content: space-between;
            /* background-color: red; */
        }
    }
`;

export const Navegacao = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 60px;

    nav .close{
        display: none;
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
    };

    .mobile-menu{
        display: none;
    }

    nav p{
        padding-top: 10px;
        padding-bottom: 40px;
        transition: .1s;
        cursor: pointer;
        color: var(--darkGrayishBlue);
    };

    nav p:hover{
        border-bottom: 4px solid var(--orange);
        color: var(--veryDarkBlue);
    };

    @media only screen and (max-width:425px){
        align-items: center;
        justify-content: center;
        gap: 10px;
        nav{
            position: fixed;
            z-index: 999999;
            height: 100%;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 40px 150px 20px 20px;
            flex-direction: column;
            top: 0;
            gap: 0px;
            left: -100%;
            background-color: var(--white);

        }  
        
        nav.active{
            left: 0;
        }
        
        nav .close{
            display: block;
            margin-bottom: 50px;
        }

        nav p{
            color: var(--veryDarkBlue);
            font-weight: 700;
            padding: 10px 0;
        }

        img:nth-child(2){
            width: 150px;
        }

        .mobile-menu{
            display: block;
            /* background-color: red; */
        }
    }
`;

export const NavPerfil = styled.div`
    display: flex;
    align-items: flex-start;
    /* background-color: red; */

    .notifi-carinho{
        position: absolute;
        /* width: 50px;
        height: 50px; */
        padding: 2px 8px;
        right: -10px;
        top: 5px;
        border-radius: 10px;
        background-color: var(--orange);
    }

    .notifi-carinho p{
        font-size: 12px;
        color: var(--white);
    }

    div{
        display: flex;
        gap: 50px;
    }

    button{
        position: relative;
        background-color: #fff;
        padding: 0;
        border: 0;
        margin: 0;
        cursor: pointer;
    };

    button:nth-child(2) img{
        width: 50px;
        height: 50px;
    }

    button:nth-child(2):hover{
        border: 2px solid var(--orange);
        border-radius: 50px;
    }

    @media only screen and (max-width:425px){
        align-items: center;
        .notifi-carinho{
            top: -5px;
        }
        div{
            gap: 20px;
            align-items: center;
            justify-content: center;
        }

        button:nth-child(1) img{
            width: 20px;
            height: 20px;
        }
        button:nth-child(2) img{
            width: 20px;
            height: 20px;
        }
    }

`

export const Conteudo = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    flex: 2;
    gap: 40px;

    @media only screen and (max-width:425px){
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        padding-bottom: 120px;
        flex: 0;
        section{
            flex: 0;
            margin: 0;
            padding: 0 20px;
        }
    }
`

export const DadosProduto = styled.section`
    flex: 1;
    margin-top: -50px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding:  0 60px;

    p.desc{
        color: var(--darkGrayishBlue);
    }

    .titulos-produto h1:first-child{
        font-size: 14px;
        color: var(--orange);
        letter-spacing: 1px; 
        margin-bottom: 10px;
    }
    .titulos-produto h1{
        font-size: 40px;
    }

    .dados-preco{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .dados-preco .preco-ant{
        font-weight: 700;
        color: var(--grayishBlue);
        text-decoration: line-through;
    }

    .conatiner-preco{
        display: flex;
        gap: 15px;
    }

    .conatiner-preco p{
        font-weight: 700;
        font-size: 24px;
        color: var(--veryDarkBlue);
    }
    .conatiner-preco p:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 14px;
        padding: 0 8px;
        border-radius: 10px;
        background-color: var(--paleOrange);
        color: var(--orange);
    }

    .interacao{
        display: flex;
        flex: 4;
        max-height: 60px;
        width: 100%;
        gap: 20px;
        align-items: center;
    }
    
    .interacao .menos-mais a{
        cursor: pointer;
    }

    .interacao .menos-mais a:hover{
        opacity: .7;
    }
    
    .interacao .menos-mais{
        display: flex;
        flex: 1;
        padding: 20px;
        border-radius: 10px;
        align-items: center;
        justify-content: space-between;
        background-color: var(--lightGrayishBlue);
    }

    .interacao button:hover{
        opacity: .7;
    }

    .interacao button{
        flex: 3;
        border: 0;
        padding: 20px;
        cursor: pointer;
        color: var(--white);
        border-radius: 10px;
        font-weight: 700;
        font-family: Kumbh Sans, sans-serif;
        background-color: var(--orange);
    }

    @media only screen and (max-width: 425px) {
        gap: 20px;

        p.desc{
            line-height: 23px;
        }

        .titulos-produto h1{
            font-size: 32px;
        }
        .dados-preco{
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
        }

        .interacao{
            flex-direction: column;
            flex: 1;
        }
        .interacao .menos-mais{
            width: 90%;
        }

        .interacao button{
            width: 100%;
        }
    }
`

export const Slide = styled.aside`
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4%;
    gap: 20px;

    img{
        width: 80%;
        height: auto;
        border-radius: 10px;
    } 

    .anterior,.proximo{
        display: none;
    }

    
    .selecao{
        display: flex;
        align-items: center;
        /* background-color: red; */
        /* justify-content: flex-end; */
        list-style: none;
    }

    .selecao li{
        display: flex;
        /* width: auto; */
        /* height: auto; */
    }

    .selecao li img{
        width: 90%;
        height: auto;
    }

    .selecao li img.select{
        opacity: .3;
        border: 2px solid var(--orange);
        border-radius: 15px;
    }

    .selecao img:hover{
        opacity: .5;
    }

    @media only screen and (max-width:425px){
        padding: 0px;
        img{
            width: 100%;
            height: auto;
            border-radius: 0px;
        }
        .selecao{
            display: none;
        }

        .anterior{
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            z-index: 999;
            border: 0;
            padding: 10px 12px;
            border-radius: 50px;
            left: 5%;
            top: 50%;
        }

        .proximo{
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            z-index: 999;
            border: 0;
            padding: 10px 12px;
            border-radius: 50px;
            top: 50%;
            right: 5%;
        }

        .anterior img,
        .proximo img{
            width: 8px;
            height: 12px;
        }
    }
`

export const Carinho = styled.div`
    position: absolute;
    width: 360px;
    min-height: 200px;
    border-radius: 10px;
    background-color: #fff;
    right: 6%;
    top: 10%;
    -webkit-box-shadow: 0px 18px 36px -7px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 18px 36px -7px rgba(0,0,0,0.25);
    box-shadow: 0px 18px 36px -7px rgba(0,0,0,0.25);

    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    @-webkit-keyframes fadeInDown {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    }
    @keyframes fadeInDown {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    } 

    .cabeca{
        /* background-color: red; */
        padding: 20px;
        border-bottom: 1px solid var(--grayishBlue);
    }

    .cabeca h1{
        font-size: 16px;
    }

    .vazio{
        display: flex;
        height: 110px;
        align-items: center;
        justify-content: center;
    }

    .lista{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        /* background-color: red; */
    }

    .lista button{
        width: 100%;
        border-radius: 10px;
        padding: 20px;
        background-color: var(--orange);
        color: var(--white);
        border: 0;
    }

    .produto{
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* gap: 20px; */
    }

    .produto img{
        width: 50px;
        height: 50px;
        border-radius: 5px;
    }
    .produto img.delete{
        width: 18px;
        height: 20px;
    }

    .produto p{
        color: var(--darkGrayishBlue);
    }

    .produto .dados-preco{
        display: flex;
        gap: 6px;
    }
    .produto .dados-preco p:nth-child(3){
        font-weight: 700;
        color: var(--veryDarkBlue);
    }
    @media only screen and (max-width: 425px) {
        width: 320px;
        z-index: 999999;

        .produto p{
            font-size: 14px;
        }
        /* display: none; */
    }
`
