import { styled } from "styled-components"

export default function Menu (){

    return(
        <BotoesMenu>
            <button> Hábitos </button>
            <button> Hoje</button>
            <button> Histórico </button>
        </BotoesMenu>
    )
}

const BotoesMenu = styled.div `
    display: flex;
    justify-content: space-around;
    background-color: #FFFFFF;
    button{
        width: 68px;
        height: 22px;
        font-family: 'Lexend Deca';
        font-size: 17.98px;
        color: #52B6FF;
        background-color: #FFFFFF;
        border: none;
}
`