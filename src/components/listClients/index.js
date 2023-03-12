import './listClients-styles.css'
import Client from '../client'
import ButtonAdd from '../button'
 

const ListClients = ()=>{
    return (
       <div className='list-clients-container'>
        <ButtonAdd name='adicionar'/>
        <table className='list-clients-table'>
        
            <thead className='list-clients-head'>                
                <td className='list-clients-data__name'>NOME</td>
                <td className='list-clients-data__instagram'>INSTAGRAM</td>
                <td className='list-clients-data__tel'>TELEFONE</td>
                <td className='list-clients-data__action'>Ação </td>
            </thead>
        <Client name='David' instagram='igte213st' phone='67 912345' action='add'/>
        <Client name='David David' instagram='david' phone='67 9123415155' action='aasddd'/>
        <Client name='David' instagram='igte213st' phone='67 912345' action='add'/>
         
        </table>
       </div>
    )
}

export default ListClients

 
 