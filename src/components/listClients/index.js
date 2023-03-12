import './listClients-styles.css'
import Client from '../client'
import ButtonAdd from '../button'
import { useEffect, useState } from 'react'
 





const ListClients = ()=>{
    const [client, setClient] =useState();
    
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL_USERS).then((res) => {
            return res.json();
        }).then((resp) => {
            setClient(resp);             
    }).catch((err) => {
        console.log(err.message)
    })
}, [])

  
     
    return (
       <div className='list-clients-container'>
        <ButtonAdd name='adicionar'/>
        <div className='list-clients-table'>
            <div className='list-clients-head'>                
                <div className='list-clients-data__name'>NOME</div>
                <div className='list-clients-data__instagram'>INSTAGRAM</div>
                <div className='list-clients-data__tel'>TELEFONE</div>
                <div className='list-clients-data__org'>Organização</div>
                <div className='list-clients-data__action'>Ação </div>
            </div>
        {client && client.map((client)=>(
            <Client name={client.nome} instagram={client.instagram} phone={client.telefone}org={client.organizacao}/>
        ))}    
        </div>
       </div>
    )
}

export default ListClients

 
 