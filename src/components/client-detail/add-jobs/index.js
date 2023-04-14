 
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
import { useState } from "react";
 

const AddJob = (props) =>{
 
    let { isOpen,  onOpen, onClose } = useDisclosure()
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState('')
    const [valor, setValor] = useState('')

    const cliente_id = props.cliente_id;
    
    const user_token = localStorage.getItem('token')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const job = { nome, descricao, data, valor, cliente_id };
    
        const config = 
        {
          method:'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${user_token}` },
          body: JSON.stringify(job)           
        }
      
        fetch(process.env.REACT_APP_ADD_JOB + cliente_id,
        config)
          .then((res)=>{
          window.location.reload();
        })

    }
    console.log(cliente_id)
     
    return(
      <div className='add-client'>
        <Button onClick={onOpen}  colorScheme='pink'>Adicionar</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Adicionar Serviço</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <form className='form-add-client'>
                      <input className='form-add-client_name' type='name' placeholder='nome' 
                          value={nome} onChange={e=>setNome(e.target.value)}
                      />
                      <input className='form-add-client_instagram' type='text' placeholder='descricao' 
                          value={descricao}
                          onChange={e=>setDescricao(e.target.value)}/>
                      <input className='form-add-client_phone' type='date' placeholder='data'
                          value={data}
                          onChange={e=>setData(e.target.value)}
                      />                      
                      <input className='form-add-client_org' type='number' placeholder='valor' 
                          value={valor}
                          onChange={e=>setValor(e.target.value)}
                      />
              </form>        
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='pink' mr={3} onClick={handleSubmit}>
                Salvar
              </Button>
              <Button   variant='ghost' onClick={onClose}>cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
}

export default AddJob;