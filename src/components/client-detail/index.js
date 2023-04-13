import Jobs from './client-jobs/index.js';
import Header from '../header/index.js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../banner/index.js';
import './client-detail-styles.css' 
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box, 
} from '@chakra-ui/react'
 

const ClientDetail = (props) =>{    
    const client_id = useParams(props.clientid)     
    const [name, setName] = useState('')
    const [instagram, setInstagram] = useState('')
    const [organization, setOrg] = useState('')
    const [phone, setPhone] = useState('')
    const user_token = localStorage.getItem('token')

    useEffect(() => {
        fetch(process.env.REACT_APP_CLIENT + client_id.clientid,
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
            <Banner /> 
            <Accordion style={{ 'display': 'flex', 'justifyContent': 'center','marginTop':'-100px'}} variant="simple" allowToggle>
                <AccordionItem>
                <h2>
                    <AccordionButton style={{
                        "color":"#fff",
                        "background": "linear-gradient(90deg, rgba(8,193,251,1) 15%, rgba(124,14,252,1) 51%, rgba(255,112,186,1) 98%)",
                        'borderRadius': '10px',
                        'color': '#ffffff',     
                        'padding': '10px',
                        'justifyContent': 'center',
                        'textAlign': 'center'
                    }}>
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
            <Jobs client_id={client_id}/>
        </>
            
    )

}

export default ClientDetail