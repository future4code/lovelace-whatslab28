import React from 'react'
import styled, {createGlobalStyle}  from "styled-components";
import Chat from './components/Chat/Chat'
// import Img from './img/whatsapp.png'

// import SearchIcon from '@material-ui/icons/Search';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import CameraAltIcon from '@material-ui/icons/CameraAlt';
// import Chat from './components/Chat/Chat'


const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans Condensed', sans-serif;
  }
`;

const GeneralMaster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: black;
  flex: 1;
  
` 

const GeneralContainer = styled.div`
  max-width: 600px;
  width: 450px;
  height: 550px;
  display: grid;
  flex-direction: column;
  background-image: url('https://i.pinimg.com/originals/cf/14/0d/cf140dac517f37fc801b6b91aaf76fea.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4%;
        
`

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  height: 400px;
     
  span {
    word-wrap: break-word;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;      
    border: 2px solid transparent; 
  }
}
`

const BlocoMensagem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;

  div{
    background-color: white;
    max-width: 60%;
    min-width: 8%;
    margin-bottom: 1em;
    padding: 0.4em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 3px 3px 0px black;

    h3 {
      color: #9AAC8C;
      font-size: 0.8em;
    }
  }
`

class App extends React.Component {

    state = {
        msgGuard: [],
        user: '',
        text: '',
        isOn: false,
        isIcon: false
    }

    changeUserName = (event) => {
      this.setState({ user: event.target.value })
    }
  
    changeUserText = (event) => {
      this.setState({ text: event.target.value })
    }

    sendText = () => {
      const mensagem = { 
          userName: this.state.user,
          userText: this.state.text
      }

      if (this.state.text === ''){
        return;
      }

      if (this.state.user.length === 0){
        return;
      }

      const salvarValor = [mensagem, ...this.state.msgGuard];
      this.setState({ msgGuard: salvarValor })
      this.setState({ text: ''})
  }

  render() {
      <GlobalStyle/>
      const mensagensEnviadas = this.state.msgGuard.map((item) => {
          return (
             <BlocoMensagem> 
                
                <div>
                  <h3>{item.userName + ': '}</h3>
                  {item.userText}
                </div>                 
             </BlocoMensagem>
           )
        })
      
        return (
       <GeneralMaster>
            <GeneralContainer>
                <MessagesContainer>{mensagensEnviadas}</MessagesContainer>
                <Chat 
                    valueUser = {this.state.user}
                    valueTextUser = {this.state.text}
                    valueInput = {this.changeUserName}
                    valueInputText = {this.changeUserText}
                    onClickBotton = {this.sendText}
                />
            </GeneralContainer>
       </GeneralMaster>
      )
    }
}

export default App;