import './listClients-styles.css'
import Client from '../client/index.js'
import { useEffect, useState } from 'react'
import AddClient from '../add-client/index.js'
import './listClients-styles.css'
import Header    from '../header/index.js'
import Banner from '../banner/index.js'
import { SearchIcon } from '@chakra-ui/icons'
import { Spinner,Stack } from '@chakra-ui/react'

const ListClients = () => {
    const [clientList, setClientList] = useState("");
    const [client, setClient] = useState();
    const user_token = localStorage.getItem('token')

    function removerSpecials(texto) {        
        texto = texto.replace(/[ÀÁÂÄÅã]/,"a");        
        texto = texto.replace(/[ÈÉÊË]/,"E");                
        texto = texto.replace(/[ç]/,"c");        
        texto = texto.replace(/îìïí/,"i");
        texto = texto.replace(/ÓÔÒØÕÖ/,"o");
        texto = texto.replace(/ÚÛÙÜ/,"u");
        return texto.replace(/[^a-z0-9]/gi,''); 
    }
    
     useEffect(() => {
        fetch(process.env.REACT_APP_API_URL_USERS,
            { headers: { 'Authorization' : `Bearer ${user_token}`} }
        ).then((res) => { 
            return res.json();
        }).then((resp) => {
            setClient(resp);
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    return (
       
        <div  className='list-clients-master'> 
            <Header index={true} />
            <Banner desc='Cadastro De Clientes' />
                <div className='search'>
                    <input className='search-client' type='text' placeholder='pesquisar (nome)' onChange={(e)=>setClientList(e.target.value)}/>
                    <SearchIcon />
                </div>
                <AddClient />
            
              
            
               { client ? ( <div className='list-clients-container'>                
                    <div className='list-client'>
                        <div className='list-clients-table'>
                            <div className='list-clients-head'>
                                <div className='list-clients-data__name'>NOME</div>
                                <div className='list-clients-data__instagram'>INSTAGRAM</div>
                                <div className='list-clients-data__tel'>TELEFONE</div>
                                <div className='list-clients-data__org'>Organização</div>
                                <div className='list-clients-data__action'>Ação </div>
                            </div>    {console.log(clientList)}                         
                            { 
                             clientList ? (client.filter((cli)=>{
                                    return removerSpecials(cli.nome.toLowerCase()).includes(removerSpecials(clientList.toLowerCase())) ? cli :''       
                                }).map((cli)=>{ 
                                        return <Client key={cli._id} name={cli.nome} instagram={cli.instagram} phone={cli.telefone} org={cli.organizacao} _id={cli._id} />
                                    })) 
                             : (client.map((client) => (
                                            <Client key={client._id} name={client.nome} instagram={client.instagram} phone={client.telefone} org={client.organizacao} _id={client._id} />
                                        )))
                            }
                            
                        </div>
                    </div>
                </div> ) :   <Stack spacing={4}>                         
                                    <Spinner style={{
                                        'display':'flex',
                                        'justifyContent':'center',
                                        'margin': '13px auto'
                                    }} size='xl' />
                            </Stack>}
        </div>

    
    )
}

export default ListClients


