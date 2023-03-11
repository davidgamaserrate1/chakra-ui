import './banner-styles.css'
import logo from '../../assets/logo.png'

const Banner =() =>{
    return(
    <div className='banner'>
      <div className='banner-desc'> Cadastro De Clientes </div>
      <div className='banner-logo'>  <img  className='header-logo__image' src={logo}/> </div>
    </div>
    )
}

export default Banner