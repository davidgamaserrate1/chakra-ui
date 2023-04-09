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

import Header from '../../header/index.js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../banner/index.js'
import '../client-detail-styles.css'
 
import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'
 

const Jobs = () =>{


    return(
        <> 
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
                <Tr>defalt
                    <Th style={{ "color":"#fff",}}>total</Th>
                    <Th> </Th>
                    <Th> </Th>
                    <Th style={{ "color":"#fff",}}>1 </Th>
                </Tr>
                </Tfoot>
            </Table>
            </TableContainer>

        </div>
        
    </>
    )
}

export default Jobs