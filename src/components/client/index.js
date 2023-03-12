 
import './client-styles.css'
 
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    
  } from '@chakra-ui/react'
 
const Client = (props) =>{
    return(
        <>
        
        <div className='cliente'>
        
            <div className='cliente__name'> {props.name} </div>
            <div className='cliente__instagram'>{props.instagram} </div>
            <div className='cliente__phone'> {props.phone} </div>
            <div className='cliente__action'> 
                <Menu className='cliente__action'>
                    <MenuButton   className='menuButton' > Opções </MenuButton>
                    <MenuList className='menuList' >
                        <MenuItem  className='menuItem' >Editar</MenuItem>
                        <MenuItem  className='menuItem' >Detalhes</MenuItem>
                        <MenuItem  className='menuItem' >Remover</MenuItem>                     
                    </MenuList>
                </Menu>
             </div>
        </div>
        </>
    )
}

export default Client

