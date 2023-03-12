
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
 
import './client-detail-styles.css'

const ClientDetail = (props) =>{
    
    const client_id = useParams(props.clientid)
    const [user, setUser] = useState('')
     
      

    
    // useEffect(()=>{
    //     fetch(
    //         'https://apiclientes.vercel.app/clientes/640e07af1e8acea0a8209aa8',{method:'GET'}
    //         // process.env.REACT_APP_API_URL_USERS + id_clientResponse.trim().replace('"','')
    //     ).then((resp)=>{            
    //         return resp.json()
    //     }).then((res)=>{
              
    //         setName=(res )
    //         setInstagram=(res)
    //         setOrganizacao=(res.organizacao)
    //         setPhone=(res.telefone)
            
    //     })

    // },[])


    useEffect(() => {
        fetch('https://apiclientes.vercel.app/clientes/640e07af1e8acea0a8209aa8').then((res) => {
            return res.json();
        }).then((resp) => {
            console.log('user ' + JSON.stringify(resp.nome))
            setUser=(JSON.stringify(resp))
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])
     
    return(
         
        (user &&
        (
             <Card  className='client-detail' >
        <CardHeader>
            <Heading size='md'>{props.name}</Heading>
        </CardHeader>
        
            <CardBody >
            <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    INSTAGRAM
                    </Heading>
                    <Text pt='3' fontSize='md'>
                    {user.instagram}
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    ORGANIZAÇÃO
                    </Heading>
                    <Text pt='3' fontSize='md'>
                    {user.organizacao}
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    TELEFONE
                    </Heading>
                    <Text pt='3' fontSize='md'>
                   {user.phone}
                    </Text>
                </Box>
            </Stack>
        </CardBody>
        
        
    </Card>)  )
       
)

}

export default ClientDetail