import './listClients-styles.css'
import Client from '../client/index.js'
import { useEffect, useState } from 'react'
import AddClient from '../add-client/index.js'
import './listClients-styles.css'
import Header    from '../header/index.js'
import Banner from '../banner/index.js'


const ListClients = () => {
    const [client, setClient] = useState();
    const user_token = localStorage.getItem('token')
    
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
            <AddClient />
                <div className='list-clients-container'>                
                    <div className='list-client'>
                        <div className='list-clients-table'>
                            <div className='list-clients-head'>
                                <div className='list-clients-data__name'>NOME</div>
                                <div className='list-clients-data__instagram'>INSTAGRAM</div>
                                <div className='list-clients-data__tel'>TELEFONE</div>
                                <div className='list-clients-data__org'>Organização</div>
                                <div className='list-clients-data__action'>Ação </div>
                            </div>
                            {client && client.map((client) => (
                                <Client key={client._id} name={client.nome} instagram={client.instagram} phone={client.telefone} org={client.organizacao} _id={client._id} />

                            ))}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ListClients


