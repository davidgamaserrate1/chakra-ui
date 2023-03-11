import './header-styles.css'
import logo from '../../assets/logo.png'

const Header = ()=>{
    return (
     <>
     <div className='header-out'>
     </div>
       <header className='header'>
       <div className='header-desc'> Cadastro De Clientes </div>
       <div className='header-logo'>  <img  className='header-logo__image' src={logo}/> </div>
     </header>
     </>
    )
}

  export default Header