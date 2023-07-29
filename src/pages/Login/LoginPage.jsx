import logo from "../../assets/img/logo.svg";
import { useState } from "react";
import { ContainerLoginPage, ContainerForm, Entrar, CadastreSe } from "./styled";
import Cadastro from '../Register/Cadastro';
import axios from 'axios';


export default function LoginPage() {
    const [register, setRegister] = useState();

    function Register() {
        setRegister(true);
    }

    function login (){
        const data = {
        email: "...",
        name: "...",
        image: "...",
        password: "..."}
        const loginRequer = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login" , data)

    }



    return (
        (!register ? 
            (
                <ContainerLoginPage>
                <img src={logo} alt="logo" />
                <ContainerForm>
                    <form>
                        <label>
                            <input type="email" placeholder="e-mail:" />
                        </label>
                        <label>
    
                            <input type="password" placeholder="Senha" />
                        </label>
                        <Entrar>
                            <button type="submit"> Entrar</button>
                        </Entrar>
                        <CadastreSe>
                            <button onClick={Register}> Não tem uma conta? Cadastre-se!</button>
                        </CadastreSe>
                    </form>
                </ContainerForm>
            </ContainerLoginPage>
                
            )
            :
            (
                <Cadastro/>  
        ))
        
        //     <ContainerLoginPage>
        //         <img src={logo} alt="logo" />
        //         <ContainerForm>
        //             <form>
        //                 <label>
        //                     <input type="email" placeholder="e-mail:" />
        //                 </label>
        //                 <label>

        //                     <input type="password" placeholder="Senha" />
        //                 </label>
        //                 <Entrar>
        //                     <button type="submit"> Entrar</button>
        //                 </Entrar>
        //                 <CadastreSe>
        //                     <button> Não tem uma conta? Cadastre-se!</button>
        //                 </CadastreSe>
        //             </form>
        //         </ContainerForm>
        //     </ContainerLoginPage>
        // </>
    )

    
}

