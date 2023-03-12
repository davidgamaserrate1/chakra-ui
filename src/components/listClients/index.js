import './listClients-styles.css'

import Client from '../client'

const ListClients = ()=>{
    return (
       <div className='list-clients-container'>
        
        <table className='list-clients-table'>
            <thead className='list-clients-head'>                
                <td className='list-clients-data__name'>NOME</td>
                <td className='list-clients-data__instagram'>INSTAGRAM</td>
                <td className='list-clients-data__tel'>TELEFONE</td>
                <td className='list-clients-data__action'>AÇÃO</td>
            </thead>
        <Client name='David' instagram='igtest' phone='67 912345' action='add'/>
        <Client/>
        <Client/>
        </table>
       </div>
    )
}

export default ListClients

 
 