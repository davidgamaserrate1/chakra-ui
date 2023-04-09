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

  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

import Header from '../header/index.js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../banner/index.js';
import './client-detail-styles.css'
import ButtonAdd from '../button/index.js' 
import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)

 

const ClientDetail = (props) =>{    
    const client_id = useParams(props.clientid)     
    const [name, setName] = useState('')
    const [instagram, setInstagram] = useState('')
    const [organization, setOrg] = useState('')
    const [phone, setPhone] = useState('')
    const user_token = localStorage.getItem('token')
    
    useEffect(() => {
        fetch('https://apiclientes.vercel.app/clientes/' + client_id.clientid,
        {headers:{Authorization: `Bearer ${user_token}`}}
        ).then((res) => {
            return res.json();
        }).then((resp) => {
            setName(resp.nome)
            setInstagram(resp.instagram)
            setOrg(resp.organizacao)
            setPhone(resp.telefone)

        }).catch((err) => {
            console.log(err.message)
        })
    }, [])     
    
    return(
        <>
            <Header/>
            <Banner desc={ `${name} (Info)`}/>  
            
            <Accordion 
            style={{
                    'display': 'flex',
                
                    'text-align': 'left',
                    'justify-content': 'center',
                }}
                variant="simple" allowToggle>
                <AccordionItem>
                <h2>
                <AccordionButton  
                style={{
                    "color":"#fff",
                    "background": "linear-gradient(90deg, rgba(8,193,251,1) 15%, rgba(124,14,252,1) 51%, rgba(255,112,186,1) 98%)",
                    'border-radius': '10px',
                    'color': '#ffffff',     
                    'padding': '10px',
                    
                    'justify-content': 'center',
                    'text-align': 'center'
                }}            
                >
                    <Box as="span" flex='1' textAlign='center'>
                        {name}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel style={{"color":"#fff"}} pb={4} textAlign='center'>
                <div className='user-info'>                
                    <div className='user-info__org'> {organization} </div>            
                    <div className='user-info_instagram'> {instagram} </div>
                    <div className='user-info_phone'> {phone} </div>
                </div>
                </AccordionPanel>
            </AccordionItem>
            </Accordion>

        
        <div className='table'>
            <TableContainer >
            <Table>                
                <Thead>
                    <Tr >
                    <Th style={{ "color":"#fff",}}>Arte</Th>
                        <Th style={{ "color":"#fff"}}>Descrição</Th>
                        <Th isNumeric style={{"color":"#fff"}}> Valor</Th >
                        <Th style={{ "color":"#fff"}}>Data</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Concept</Td>
                        <Td>concept </Td>
                        <Td isNumeric>25.4</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                <Tr>
                    <Th style={{ "color":"#fff",}}>total</Th>
                    <Th> </Th>
                    <Th> </Th>
                    <Th style={{ "color":"#fff",}}>1 </Th>
                </Tr>
                </Tfoot>
            </Table>
            </TableContainer>

        </div>
        <ButtonAdd name="adicionar"/>
        </>
            
    )

}

export default ClientDetail