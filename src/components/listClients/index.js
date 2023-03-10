import './listClients-styles.css'
 
const header = [{
    name :'NOME',
    name :'INSTAGRAM',
    name :'TELEFONE',
    name :'ORGANIZACAO',
    name :'AÇÃO',
}]
const ListClients = ()=>{
    return (
       <div className='list-clients-modal'>
        
        <table className='list-clients'>
            <thead className=''>                
                <td>NOME</td>
                <td>INSTAGRAM</td>
                <td>TELEFONE</td>
                <td>AÇÃO</td>
            </thead>
            
            <tbody>
                <div className='client'> 
                    
                
                    </div>   
            </tbody>


       
        </table>
       </div>
    )
}

export default ListClients

 
 