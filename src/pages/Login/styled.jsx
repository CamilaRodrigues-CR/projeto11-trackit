import { styled } from "styled-components";

export const ContainerLoginPage = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 250px;
    width: 400px;
    font-family: 'Lexend Deca';
        img {
            width: 180px;
            height: 178,38px; 
            margin-top: 25px;
        }


`

export const ContainerForm = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    width: 400px;
        
        input{
            flex-direction: column;
            width: 303px;
            height: 45px;
            border: #D4D4D4 , solid, 1px;
            border-radius: 5px;
            margin-top: 30px;
        }

`

export const Entrar = styled.div`
        button{
            background-color: #52B6FF;
            color: #FFFFFF;
            margin-top: 30px;
            border-radius: 5px;
            width: 303px;
            height: 45px;
        }
`
export const CadastreSe = styled.div`
    button{
        background-color: #FFFFFF;
        color:  #52B6FF;
        text-decoration: underline;
        margin-top: 30px;
        border-radius: 5px;
        width: 232px;
        height: 17px;
        border: #FFFFFF;
    }
    
`

