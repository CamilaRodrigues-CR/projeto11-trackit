import { styled } from "styled-components"

export default function Navbar (){

    return (
        <ContainerNavbar>
            <p> TrackIt</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgotqleYD6N218bbtOIU6pVh_uS1i8VijLzp-SiTPJDs-pr-XrbYBpGd6F-ZILPj976o&usqp=CAU" alt="foto de perfil" />
        </ContainerNavbar>
    )
}

// ---------------------------------------------------------------Estilização-----------------------------------------------------

const ContainerNavbar = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:#126BA5;
    height:70px;

    p{
        width:97px;
        height: 49px;
        font-family: "Playball";
        font-weight: 400;
        font-size: 38.98px;
        color: #FFFFFF;
    }
    img{
        width:51px;
        height: 51px;
        border-radius: 99px;
    }
`