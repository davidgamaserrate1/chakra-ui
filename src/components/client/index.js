 
import './client-styles.css'
import { ExpandMore } from '@mui/icons-material'  


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    
  } from '@chakra-ui/react'

   
 const deleteUser=(id)=>{
    if(window.confirm('Tem certeza que deseja remover este cliente ?')){
      fetch(process.env.REACT_APP_CLIENT+id, {method:'DELETE'} ).then((res)=>{
        window.location.reload();
      }).catch((err) => {
        console.log(err + ' resp : ' + err.message)
    })
    }
  }


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
                    <a onClick={() => { deleteUser(props._id) }} className='btn btn-dark'>   <MenuItem  className='menuItem' >Remover</MenuItem></a>
                                       
                </MenuList>
            </Menu>
        </div>
        
    )
}

export default Client

