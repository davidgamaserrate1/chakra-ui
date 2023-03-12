 
import './client-styles.css'
import { ExpandMore } from '@mui/icons-material'  
 

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    
  } from '@chakra-ui/react'
 
const Client = (props) =>{
    return(
        <div className='cliente'>        
            <div className='cliente__name'> {props.name} </div>
            <div className='cliente__instagram'>{props.instagram} </div>
            <div className='cliente__phone'> {props.phone} </div>
            <div className='cliente__org'>{props.org} </div>
            <Menu  className='cliente__action'>
                <MenuButton   className='menuButton' > <ExpandMore  /> </MenuButton>
                <MenuList className='menuList' >
                    <MenuItem  className='menuItem' >   <a href={`/clientes/editar/${props._id}`}>Editar</a></MenuItem>
                    <MenuItem  className='menuItem' >Detalhes</MenuItem>
                    <MenuItem  className='menuItem' >Remover</MenuItem>                     
                </MenuList>
            </Menu>
            
        
            {/* <Link to={{pathname : `/clientes/${item._id}`, state:  item._id }}   className='btn btn-primary'>  Detalhes</Link>   
                                                    
            <a onClick={() => { RemoveClient(item._id) }} className='btn btn-dark'> Remover</a> */}
        </div>
        
    )
}

export default Client

