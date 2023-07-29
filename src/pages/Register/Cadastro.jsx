import { ContainerRegister, Cadastrar, CadastreSe } from "./style";
import logo from "../../assets/img/logo.svg";


export default function Cadastro(props) {



    return (
        <ContainerRegister>
            <img src={logo} alt="logo" />

            <form>
                <label>
                    <input type="email" placeholder="e-mail:" />
                </label>
                <label>
                    <input type="password" placeholder="senha" />
                </label>
                <label>
                    <input type="text" placeholder="nome::" />
                </label>
                <label>
                    <input type="url" placeholder="foto" />
                </label>

                <Cadastrar>
                    <button type="submit"> Cadastrar</button>
                </Cadastrar>
                <CadastreSe>
                    <button type="button"> Não tem uma conta? Cadastre-se!</button>
                </CadastreSe>
            </form>
        </ContainerRegister>
    )
}