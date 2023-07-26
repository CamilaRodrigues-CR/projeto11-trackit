import { styled } from "styled-components"
import logo from '../assets/imgs/logo.png';

export default function LoginPage() {

    return (
        <ContainerLoginPage>
            <img src={logo} alt="logo" />
            <ContainerForm>
                <form>
                    <label>
                        e-mail:
                        <input type="email" />
                    </label>
                    <label>
                        Senha:
                        <input type="password" />
                    </label>
                    <button type="submit"> Entrar</button>
                    <button type="button"> Não tem uma conta? Cadastre-se!</button>
                </form>
            </ContainerForm>
        </ContainerLoginPage>
    )
}


//----------------------------------------------------------Estilização---------------------------------------------------------------

const ContainerLoginPage = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: center;
    margin-left: 250px;
    width: 400px;
        img {
            width: 180px;
            height: 178,38px;
        }


`

const ContainerForm = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        button {
            background-color: #52B6FF;
            color: #FFFFFF;
            margin-top: 30px;
            border-radius: 5px;
            width: 303px;
            height: 45px;
        }
        input{
            flex-direction: column;
            width: 303px;
            height: 45px;
            border: #D4D4D4 , solid, 1px;
            border-radius: 5px;
            margin-top: 30px;
        }

`