import './banner-styles.css'
import logo from '../../assets/logo.png'
import { Children } from 'react'

const Banner =(props) =>{
    return(
      <div className='banner'>
        <div className='banner-desc'>{props.desc} </div>
          {props.children}
        <div className='banner-logo'>  
          <img  className='header-logo__image' src={logo} alt='logo image'/> 
        </div>
      </div>
    )
}

export default Banner