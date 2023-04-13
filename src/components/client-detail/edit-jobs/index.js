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
    MenuItem
  } from "@chakra-ui/react";
import { useState,useEffect } from "react";

const EditJob = (props) =>{
    let { isOpen,  onOpen, onClose } = useDisclosure()

    const cliente_id = props.cliente_id.clientid;    
    const user_token = localStorage.getItem('token');
    const job_id = props.job_id

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState('')
    const [valor, setValor] = useState('')     
    
    useEffect(( ) => {        
        fetch(process.env.REACT_APP_EDIT_JOB + job_id,
        {headers: { 'Authorization' : `Bearer ${user_token}`} }).then((res) => {          
          return res.json();
      }).then((resp) => {        
          setNome(resp[0].nome)
          setDescricao(resp[0].descricao)
          setData(resp[0].data)
          setValor(resp[0].valor)
          
      }).catch((err) => {
          console.log(err.message)
      })
    }, [])


    const handleSubmit = (e)=>{
        e.preventDefault();
        const job = { nome, descricao, data, valor, cliente_id };        
        const config = 
        {
          method:'PUT',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': `Bearer ${user_token}` },
          body: JSON.stringify(job)           
        }
      
        fetch(process.env.REACT_APP_EDIT_JOB  +job_id,
        config)
          .then((res)=>{
            window.location.reload();
        })

    }

    return(
        <MenuItem style={{color:'#fff',background:'rgba(255,112,186,1)' }}  onClick={onOpen}> Editar
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Editar Serviço</ModalHeader>
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
        </MenuItem>
    )
}

export default EditJob;