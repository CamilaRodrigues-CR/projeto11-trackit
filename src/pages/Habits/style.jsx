import { styled } from "styled-components"

export const ContainerTopo = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    background-color: lightgray;
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
export const ContainerHabitos = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: lightgray;
    height: 100%;
    p{
        color: #666666;
        width:338px;
        height: 74px;
        font-size:17.98pxpx;
        font-family: "Lexend Deca";
        font-weight:400;
    }

`
