import { styled } from "styled-components";
import Navbar from "../../components/Navbar";


export default function HabitsPage() {

    return (
        <>
            <Navbar/>
            <ContainerTopo>
                <p> Meus hábitos </p>
                <button>+</button>
            </ContainerTopo>
            <ContainerHabitos>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </ContainerHabitos>
        </>

    )

}

// ---------------------------------------------------------------Estilização-----------------------------------------------------


const ContainerTopo = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    p{
        color: #126BA5;
        width:148px;
        height: 29px;
        font-size:22.98px;
        font-family: "Lexend Deca";
        
    }
    button{
        background-color: #52B6FF;
        width:40px;
        height: 35px;
        border-radius: 5px;
        border-color: #52B6FF;
        color:#FFFFFF;
        font-weight: 700;
    }
`
const ContainerHabitos = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    p{
        color: #666666;
        width:338px;
        height: 74px;
        font-size:17.98pxpx;
        font-family: "Lexend Deca";
        font-weight:400;
    }

`