import React from 'react'
import styled from 'styled-components'


const PostContainer = styled.div`
  display:flex;
  align-items: center;
  height: 60px;
  cursor: pointer;

  :hover{
    background-color: #f2f2f2;
  }

`

const UserPhoto = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 10px;
`

const NomeUsuario = styled.p`
    font-size: 1.3em;
`



class Post extends React.Component {

  render() {
    
    return (

        <PostContainer>
            <UserPhoto src={this.props.perfil} alt={'Imagem do usuario'}/>
            <NomeUsuario>{this.props.nome}</NomeUsuario>
            
        </PostContainer>

    )
  }
}

export default Post