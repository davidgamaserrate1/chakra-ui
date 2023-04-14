import React, { useState } from 'react';
import './add-client-styles.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from "@chakra-ui/react";
import { Stack } from '@chakra-ui/react';
  import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const AddClient = (props) =>{
  let { isOpen,  onOpen, onClose } = useDisclosure()

  const [id] = useState("")
  const [nome, setNome] = useState("")
  const [instagram, setInstagram] = useState("")
  const [telefone, setTelefone] = useState("")
  const [organizacao, setOrganizacao] = useState("")
  const [validation, setValidation] = useState(false)
  const navigate = useNavigate();
  
  
  const user_token = localStorage.getItem('token')
 
  const handleSubmit = (e)=>{
    e.preventDefault();
    const cliente = { nome, instagram, telefone, organizacao };
    
    const config = 
    {
      method:'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${user_token}` },
      body: JSON.stringify(cliente),
      cache: 'default',
      type: 'cors'
    }

    fetch(process.env.REACT_APP_ADD_CLIENT,config)
          .then((res)=>{
          window.location.reload();
    })
   }
 
    
    return(
      <div className='add-client'>
        <Button colorScheme='pink' onClick={onOpen}> Adicionar</Button>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Adicionar Cliente</ModalHeader>
            <ModalCloseButton />
          
            <ModalBody pb={1}>
              <form className='form-add-client'>
                <input className='form-add-client_name' type='name' placeholder='nome' 
                  value={nome} onChange={e=>setNome(e.target.value)}
                />
                <input className='form-add-client_instagram' type='text' placeholder='@instagram' 
                  value={instagram}
                  onChange={e=>setInstagram(e.target.value)}
                  />
                <input className='form-add-client_phone' type='phone' placeholder='telefone'
                  value={telefone}
                  onChange={e=>setTelefone(e.target.value)}
                />
                <input className='form-add-client_org' type='text' placeholder='organização' 
                  value={organizacao}
                  onChange={e=>setOrganizacao(e.target.value)}
                />
              </form>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='pink' mr={3} onClick={handleSubmit}>
                Salvar
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
      </Modal>
     
    </div>
    
    );
   
}

export default AddClient