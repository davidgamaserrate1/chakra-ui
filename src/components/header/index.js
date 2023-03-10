import './header-styles.css'

import logoImage from '../../assets/logo.png'

const Header = ()=>{
    return (
    <header className='header'>
      <div className='header-name'>
        <div className='header-name_desc' >Cadastro De Clientes</div>
        
        <div className='header-logo' > 
          <img className='header-img' src={logoImage} />  
        </div>
      </div>
    </header>
    )
}

  export default Header