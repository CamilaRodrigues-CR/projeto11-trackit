import { styled } from "styled-components"
import weekDay from "./weekDay"

export default function NovoHabito() {


    return (
        <ContainerMeusHabitos>
            <input type="text" placeholder="nome do hábito"></input>
            <BotoesHabitsDay>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </BotoesHabitsDay>
            

        </ContainerMeusHabitos>
    )
}

const ContainerMeusHabitos = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 35px;


    input{
        width: 303px;
        height: 45px;
        border: 1px #D4D4D4 solid;
    }
`
const BotoesHabitsDay = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 303px;
margin-top: 15px;
margin-bottom: 25px;
button{
    width: 30px;
    height:30px;
}
`