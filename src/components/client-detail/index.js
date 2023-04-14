import Jobs from './client-jobs/index.js';
import Header from '../header/index.js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../banner/index.js';
import './client-detail-styles.css' 
import fundoDet from '../../assets/fundo-detalhado.png'
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
        <div className='client-detail'>
            <Header/>
            <Banner /> 
            <Accordion style={{ 'display': 'flex', 'justifyContent': 'center','marginTop':'-100px',}} variant="simple" allowToggle>
                <AccordionItem minWidth="60px">
                <h2>
                    <AccordionButton minWidth="60px" style={{
                        "color":"#fff",
                        "background": "#fc3369 ",   
                        'borderRadius': '10px',
                        'color': '#ffffff',     
                        'padding': '10px',
                        'justifyContent': 'center',
                        'textAlign': 'center'
                    }}>
                    <Box as="span" flex='1' textAlign='center'>
                       Cliente : {name}
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
        </div>
            
    )

}

export default ClientDetail