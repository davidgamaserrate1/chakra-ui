import { useEffect, useState } from 'react'
import '../client-detail-styles.css'
import AddJob from '../add-jobs/index.js'
import  {ChevronDownIcon }from '@chakra-ui/icons'
import  EditJob from '../edit-jobs/index.js'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react' 
  
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
   
const Jobs = (props) =>{
    const [job, setJob] = useState('');
 
    const id_client = props.client_id    
    const user_token = localStorage.getItem('token')
    

    const deleteJob =(id)=>{
        const config = { method:'DELETE',headers: {  'Authorization': `Bearer ${user_token}` } }
      
        if(window.confirm('Tem certeza que deseja remover este serviço ?')){
            fetch(process.env.REACT_APP_JOBS + id ,config).then((res)=>{
                window.location.reload();
            }).catch((err) => {
                console.log(err + ' resp : ' + err.message)
            })
        }
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_JOBS + '6413e312aacfd36c04ab3d8a',//+ id_client
        {headers:{Authorization: `Bearer ${user_token}`}}
        ).then((res) => {
            return res.json();
        }).then((resp) => {
            setJob( resp )            
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])  
    
    
    function getTotal() {
        let totalFromUser = 0
        for(let i = 0 ; i < job.length; i++){
            totalFromUser += job[i].valor
        }
        return totalFromUser
    }
    
    let totalFromUser = getTotal()   

    return(
        <> 
            <div>
                <AddJob cliente_id={id_client}/>            
            </div>
            <div className='table'>            
                <TableContainer className='table-container'>
                <Table>                
                    <Thead>
                        <Tr >
                        <Th style={{ "color":"#fff",}}>Arte</Th>
                            <Th style={{ "color":"#fff"}}>Descrição</Th>
                            <Th style={{ "color":"#fff"}}>Data</Th>
                            <Th isNumeric style={{"color":"#fff"}}> Valor</Th >
                            <Th style={{ "color":"#fff"}}>Ação</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    {job && job.map((job) => (
                        <Tr key={job._id}>
                            <Td>{job.nome}</Td>
                            <Td>{job.descricao} </Td>
                            <Td>{job.data}</Td>
                            <Td>R$ {job.valor}</Td>
                            <Td>
                                <Menu>
                                    <MenuButton style={{background:'rgba(255,112,186,1)'}} as={Button} rightIcon={<ChevronDownIcon />}>                            
                                    </MenuButton>
                                    <MenuList minWidth="60px" style={{background:'rgba(255,112,186,1)', padding:'5px'}}>
                                        <MenuItem   style={{color:'#fff',background:'rgba(255,112,186,1)'}}>
                                             
                                            <div className='edit-job'>
                                                <EditJob
                                                    job_id={job._id}
                                                    cliente_id ={id_client}
                                                    nome={job.nome}
                                                    descricao={job.descricao} 
                                                    data={job.jobdata}
                                                    valor= {job.valor}                                                 
                                                />
                                            </div>
                                        </MenuItem>
                                        <MenuItem maxWidth="40px" style={{color:'#fff',background:'rgba(255,112,186,1)'}} 
                                            onClick={() => { deleteJob(job._id) }}
                                            >
                                            Remover
                                        </MenuItem>                                
                                    </MenuList>
                                </Menu>                       
                            </Td>
                        </Tr>
                    ))}                     
                    </Tbody>
                    <Tfoot>
                    <Tr> 
                        <Th style={{ "color":"#fff",}}>total</Th>
                        <Th> </Th>
                        <Th> </Th>
                        <Th style={{ "color":"#fff","textDecoration":"underline"}}>R$ {totalFromUser} </Th>                     
                    </Tr>
                    </Tfoot>
                </Table>
                </TableContainer> 
            </div>
    </>)
}

export default Jobs