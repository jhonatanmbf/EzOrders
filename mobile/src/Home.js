import React, {useState} from 'react'
import Order from './components/Orders'

import logo from './images/logo.png'
import {Container, Logo, NewOrderContainer} from './styles'
import Button from './components/Button'
import Modal from './components/Modal'

export default function Home(){
  const [isModalOpened, setIsModalOpened]= useState(false);

  function handleToggleModal(){
    setIsModalOpened((prevState)=> !prevState);
  }

  return (
    <Container>
      <Logo source={logo} resizeMode="contain"/>

      <Order />

      <NewOrderContainer>
        <Button onPress={handleToggleModal}>
          <Button.Label>Novo Pedido</Button.Label>
        </Button>
      </NewOrderContainer>

      <Modal
        visible={isModalOpened}
        onClose={handleToggleModal}
      />
    </Container>
  );
}