import './login-styles.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import logo from '../../assets/logo.png'
// console.log(logo)
const Login = () => {
    return (
        <div className="login-container">            
            <div className="login-card">
                <img className='login__logo' src= '/static/media/logo.0f09a3bd7f34cd191329.png'/>
                <div className='login__login'>Login</div>
                <form className="login-form" onSubmit={null}>
                    <label className="login-form__name"> Usuário </label>
                    <input className="login-form__name-input" type="text" name="user" />
                    <label className="login-form__password"> Senha </label>
                    <input className="login-form__password-input" type="password" name="password"  />
                    <div className="login-button" >Entrar</div>
                </form>
            </div>
        </div>
    )
}

export default Login