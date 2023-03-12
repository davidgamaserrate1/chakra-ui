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
    const [validation, setValidation] = useState(false)

    
    useEffect(( ) => {
        fetch(process.env.REACT_APP_CLIENT + clientid).then((res) => {
            return res.json();
        }).then((resp) => {
            setNome(resp.nome)
            setInstagram(resp.instagram)
            setTelefone(resp.telefone)
            setOrganizacao(resp.organizacao)
            setValidation(resp.validation)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])
    
    const updateClient = (e) => {
        e.preventDefault();
        const cliente = { nome, instagram, telefone, organizacao };
        
        
        fetch( process.env.REACT_APP_EDIT_CLIENT + clientid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(cliente)            
        }).then((res)=>{
            window.location.reload();
      }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <MenuItem   onClick={onOpen}> Editar
              
             
              
        
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
                onChange={e=>setInstagram(e.target.value)}/>
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
            <Button colorScheme='pink' mr={3} onClick={updateClient}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
     
    </MenuItem>
    )
}

export default EditClient