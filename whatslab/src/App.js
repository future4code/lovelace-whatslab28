import React from 'react'
import styled, {createGlobalStyle}  from "styled-components";
import Post from './components/Post/Post'
import Chat from './components/Chat/Chat'


const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans Condensed', sans-serif;
  }
`;

const ContainerHeader = styled.header`
  background-color: #03663b;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

const GeneralContainer = styled.div`
  display: flex;
  height: 100vh;

`

const SideBar = styled.div`
  width: 35%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
`

const UserPhoto = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 10px;

`

const Pesquisar = styled.div`
  background-color: #f2f2f2;
  border-bottom: 1px solid #bab8b8;
  padding: 5px;
  display:flex;
  align-items: center;
  
`

const ImgPesquisaar = styled.img`
  height: 18px;
  margin: 0 10px;
  cursor: pointer;
  

`

const InputPesquisar = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  outline: 0;
  flex: 1;
  border-radius: 20px;
  padding: 10px;
  text-align: center;

`

const ListaChatBackground = styled.div`
    background-color: white;
    flex: 1;
`

class App extends React.Component {

  state = {

    topo: [
      {
        id: 1,
        perfil: 'https://picsum.photos/50/50',
        nome: 'Luan',
      },

      {
        id: 2,
        perfil: 'https://picsum.photos/50/51',
        nome: 'Lx',
      },

      {
        id: 3,
        perfil: 'https://picsum.photos/50/53',
        nome: 'Cleiton',
      },

      {
        id: 4,
        perfil: 'https://picsum.photos/50/54',
        nome: 'Maisa',
      },
    ]
  }

  onChangeButton = () => {

  }

  render() {
    return (
          <GeneralContainer>
            <GlobalStyle/>  
            <SideBar>
                  <ContainerHeader>
                    <UserPhoto src={'https://www.wikihow.com/images_en/thumb/6/60/Center-an-Image-in-HTML-Step-10.jpg/-crop-342-184-244px-Center-an-Image-in-HTML-Step-10.jpg.webp'} alt={'Imagem do usuario'}/>
                  </ContainerHeader>

                  <Pesquisar>
                      <ImgPesquisaar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4mYQ5j90_U84a7gBNiVQumK0_vhKyKkTHDkiTeW0Cb2bZkMDYr42axltqdcUsMR4HaI&usqp=CAU'/>
                     <InputPesquisar placeholder="Pesquisar ou começar uma nova conversa"/>
                  </Pesquisar>

                  <ListaChatBackground>  
                      {this.state.topo.map(({ key, perfil, nome }) => {
                      return (
                          <div onClick={this.onChangeButton}>
                            <Post 
                              key = {key}
                              perfil = {perfil}
                              nome = {nome}
                            />
                         </div>
                      )
                    }
                )} 
              </ListaChatBackground>


            </SideBar>
            <Chat></Chat>
          </GeneralContainer>
    );
  }
}

export default App;
