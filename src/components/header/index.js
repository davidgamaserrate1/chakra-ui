import { useNavigate , Link} from 'react-router-dom';
import './header-styles.css'
import  {ArrowBackIcon}   from '@chakra-ui/icons'

const Header = (props)=>{
  const navigate = useNavigate();
  
    const logout = (e)=>{
      e.preventDefault();
      if(window.confirm('Deseja desconectar ?')){
        localStorage.removeItem('token')
        navigate('/')
        window.location.reload();
      }
    }


    return (
     <header className='header-out'>       
      <ul className='header-options'> 
        {props.index ? '' :<Link className="header-back" to={{pathname : '/clientes'}}> <ArrowBackIcon/> </Link>   }
            
        <li className='header-top'> Central de cadastro de clientes</li>
        <li className='header-logout' onClick={logout}>sair</li>
      </ul>
     </header>
    )
}

  export default Header