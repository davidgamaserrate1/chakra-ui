import './header-styles.css'
import logo from '../../assets/logo.png'

const Header = ()=>{
    return (
     <>
     <header className='header-out'>       
      <ul className='header-options'> 
        <li className='header-top' >Central de cadastro de clientes</li>
        <li className='header-logout' >sair</li>
      </ul>
     </header>

    
     </>
    )
}

  export default Header