import { ContainerTopo, ContainerHabitos } from "./style";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import NovoHabito from "../../components/habits/NovoHabito.jsx";


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
            <NovoHabito/>

            <Menu />

        </>

    )

}
