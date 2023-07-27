import { styled } from "styled-components"
import logo from './../../assets/imgs/logo.png';

export default function LoginPage() {

    return (
        <ContainerLoginPage>
            <img src={logo} alt="logo" />
            <ContainerForm>
                <form>
                    <label>
                        <input type="email" placeholder="e-mail:"/>
                    </label>
                    <label>
                        
                        <input type="password" placeholder="Senha"/>
                    </label>
                    <Entrar>
                        <button type="submit"> Entrar</button>
                    </Entrar>
                    <Cadastrar>
                        <button type="button"> Não tem uma conta? Cadastre-se!</button>
                    </Cadastrar>
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

const ContainerForm = styled.div`
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

const Entrar = styled.div`
        button{
            background-color: #52B6FF;
            color: #FFFFFF;
            margin-top: 30px;
            border-radius: 5px;
            width: 303px;
            height: 45px;
        }
`
const Cadastrar = styled.div`
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