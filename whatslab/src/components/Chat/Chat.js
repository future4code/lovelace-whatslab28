import React from 'react'
import styled from "styled-components";
import Img from './img/whatsapp.png'

const ContainerChat = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fafafa;
`

const ImgChat = styled.img`
    margin: 30px;
    width: 300px;

`

const TituloChat = styled.h3`
    color: #999696;
    font-size: 1.5em;
    font-family: Courier New, monospace;
    margin: 10px;

`

const ParagrafoChat = styled.p`
    color: #a6a4a4;
    font-size: 0.9em;
    text-align: center;
    
`

const ParagrafoChatComLinha = styled.p`
    width: 50%;
    color: #a6a4a4;
    font-size: 0.9em;
    text-align: center;
    border-top: 1px solid #948f8f;
    padding-top: 40px;
    margin: 50px;
    
`

class Chat extends React.Component {
    render() {
        return (
            <ContainerChat>
                <ImgChat src={Img}/>
                <TituloChat>Mantenha seu celular conectado</TituloChat> 
                <ParagrafoChat>O whatsapp conecta ao seu celular para sicronizar suas mensagens. Para<br/> reduzir o uso de dados, conecte o seu celular a uma rede wi-fi</ParagrafoChat>
                <ParagrafoChatComLinha>O whatsapp está disponível para Windows. Baixe Aqui.</ParagrafoChatComLinha>
            </ContainerChat>

        )

    }
}

export default Chat;