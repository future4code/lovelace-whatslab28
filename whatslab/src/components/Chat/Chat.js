import React from 'react'
import styled from "styled-components";
import SendIcon from '@material-ui/icons/Send';

const MessagesContainerChat = styled.div`
  heigth: 10vh;
  
   div{
      display: flex;
      background-color: #b9babd;
      height: 75px;
      justify-content: center;
      align-items: center;
  }

  input{ 
    height: 30px;
    width: 250px;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    margin: 0 5px;
    text-align: center;
    outline: none;    
  }

  input:nth-child(1) {
    width: 100px;
      
  }

  button{
    height: 50px;
    width: 50px;
    background-color: white;
    border-radius: 50%;
    outline: 0;
    border: none;

        :hover {
            background-color: #dcdcde;
            border-radius: 50%;
        }
    }
  }

`

class ChatMenssage extends React.Component {

    render() {
        return (
            <MessagesContainerChat>
                <div>
                <input placeholder="Nome: "
                    value = {this.props.valueUser}
                    onChange = {this.props.valueInput}
                />

                <input placeholder="mensagem: "
                    value={this.props.text}
                    onChange={this.props.valueInputText} 
                />

                <button onClick={this.props.onClickBotton}>
                    <SendIcon style={{height: "50px"}}/>
                </button>
                </div>
            </MessagesContainerChat>
        )
    }
}

export default ChatMenssage;