
import {
    Card,
    CardHeader,
    CardBody,
    Box,
    Text,
    Heading,
    Stack,
    StackDivider
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../banner/index.js';
import './client-detail-styles.css'

const ClientDetail = (props) =>{
    
    const client_id = useParams(props.clientid)

     
    const [name, setName] = useState('')
    const [instagram, setInstagram] = useState('')
    const [organization, setOrg] = useState('')
    const [phone, setPhone] = useState('')
     


    console.log()
    useEffect(() => {
        fetch('https://apiclientes.vercel.app/clientes/' + client_id.clientid ).then((res) => {
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
        <div>
            <Banner desc={ `${name} (Info)`}/>   
            {name && (
            <div className='user'>
            <div className='user-info'>
                <div className='user-info_name'>{name}</div>
                <div className='user-info__org'> {organization} </div>            
                <div className='user-info_instagram'> {instagram} </div>
                <div className='user-info_phone'> {phone} </div>
            </div>
            </div>

            )}
        </div>
            
    )

}

export default ClientDetail