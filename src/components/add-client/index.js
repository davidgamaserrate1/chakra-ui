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
    Button,
     
  } from "@chakra-ui/react";
   
  
 
 

const AddClient = (props) =>{
   
  let { isOpen,  onOpen, onClose } = useDisclosure()

 
    
    return(
      <div className='add-client'>
        <Button onClick={onOpen}>Adicionar</Button>
      
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Cliente</ModalHeader>
          <ModalCloseButton />
         
          <ModalBody pb={1}>
            <form className='form-add-client'>
              <input className='form-add-client_name' type='name' placeholder='nome'/>
              <input className='form-add-client_instagram' type='text' placeholder='@instagram'/>
              <input className='form-add-client_phone' type='phone' placeholder='telefone'/>
              <input className='form-add-client_org' type='text' placeholder='organização'/>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='pink' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
     
    </div>
    
    );
   
}

export default AddClient