 
import './client-styles.css'
import EditClient from '../edit-client/index.js'
import { ExpandMore } from '@mui/icons-material'  
import { Link } from 'react-router-dom'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,    
} from '@chakra-ui/react'

 const user_token = localStorage.getItem('token')

 const deleteUser=(id)=>{
    if(window.confirm('Tem certeza que deseja remover este cliente ?')){
      fetch(process.env.REACT_APP_CLIENT+id, {method:'DELETE', headers:{authorization : `Bearer ${user_token}`}} ).then((res)=>{
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
                <MenuButton   className='menuButton' >
                    <ExpandMore/>
                </MenuButton>

                <MenuList minWidth="40px" className='menuList' >
                    <MenuItem  className='menuItem' >  
                    <EditClient
                        name={props.name}
                        instagram={props.instagram}
                        phone={props.phone}
                        org={props.org}
                        _id = {props._id}
                    />                    
                    </MenuItem >
                    <MenuItem  className='menuItem' >
                        <Link to={{pathname : `/clientes/${props._id}`, state: props._id }}>  Detalhes</Link>       
                    </MenuItem>
                    <div onClick={() => { deleteUser(props._id) }}>
                        <MenuItem  className='menuItem' >Remover</MenuItem>
                    </div>                                       
                </MenuList>
            </Menu>
        </div>
        
    )
}

export default Client

