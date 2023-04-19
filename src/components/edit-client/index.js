import React, { useEffect, useState } from 'react';
 import './edit-client-styles.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    MenuList,
    MenuItem
  } from "@chakra-ui/react";
import { useNavigate, useParams } from 'react-router-dom';

const EditClient =(props) =>{
    const navigate = useNavigate();

    const   clientid  = props._id;
    let { isOpen,  onOpen, onClose } = useDisclosure()
    
    const [nome, setNome] = useState("")
    const [instagram, setInstagram] = useState("")
    const [telefone, setTelefone] = useState("")
    const [organizacao, setOrganizacao] = useState("")    
    const user_token = localStorage.getItem('token')

    
    useEffect(( ) => {        
          fetch(process.env.REACT_APP_CLIENT + clientid,
          {headers: { 'Authorization' : `Bearer ${user_token}`} }).then((res) => {          
            return res.json();
        }).then((resp) => {
            setNome(resp.nome)
            setInstagram(resp.instagram)
            setTelefone(resp.telefone)
            setOrganizacao(resp.organizacao)
            
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])
    
    const updateClient = (e) => {
      e.preventDefault();
      
      const cliente = { nome, instagram, telefone, organizacao };
      console.log(cliente)
        fetch( process.env.REACT_APP_EDIT_CLIENT + clientid, {
            method: "PUT",
            headers: { "content-type": "application/json" ,'Authorization' : `Bearer ${user_token}`},
            body: JSON.stringify(cliente)            
        }).then((res)=>{
           window.location.reload()
      }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <MenuItem   onClick={onOpen}> Editar
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Cliente</ModalHeader>
          <ModalCloseButton />         
          <ModalBody pb={1}>
            <form className='form-add-client'>
              <input className='form-add-client_name' 
                type='name' 
                placeholder='nome' 
                value={nome} 
                onChange={e=>setNome(e.target.value)}
              />
              <input className='form-add-client_instagram' 
                type='text' 
                placeholder='@instagram' 
                value={instagram}
                onChange={e=>setInstagram(e.target.value)}/>
              <input className='form-add-client_phone' 
                type='phone' 
                placeholder='telefone'
                value={telefone}
                onChange={e=>setTelefone(e.target.value)}
              />
              <input className='form-add-client_org' 
                type='text' 
                placeholder='organização' 
                value={organizacao}
                onChange={e=>setOrganizacao(e.target.value)}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='pink' mr={3} onClick={updateClient}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>     
    </MenuItem>
    )
}

export default EditClient