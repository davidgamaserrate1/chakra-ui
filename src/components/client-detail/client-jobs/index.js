import { useEffect, useState } from 'react'
import '../client-detail-styles.css'
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
  } from '@chakra-ui/react' 
  
const Jobs = (props) =>{
    const [job, setJob] = useState('');
 
    const id_client = props.client_id    
    const user_token = localStorage.getItem('token')
   
    
    useEffect(() => {
        fetch('https://apiclientes.vercel.app/servico/6413e312aacfd36c04ab3d8a',
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
                        <Td>{job.valor}</Td>
                        <Td>v</Td>
                     </Tr>
                    

                    ))}
                     
                </Tbody>
                <Tfoot>
                <Tr> 
                    <Th style={{ "color":"#fff",}}>total</Th>
                    <Th> </Th>
                    <Th> </Th>
                    <Th style={{ "color":"#fff",}}> {totalFromUser} </Th>
                     
                </Tr>
                </Tfoot>
            </Table>
            </TableContainer> 

        </div>
        
        
        
    </>
    )
}

export default Jobs