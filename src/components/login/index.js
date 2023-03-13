import './login-styles.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import logo from '../../assets/logo.png'

const Login = () => {
    return (
        <div className="login-container"   >
            <div className='login-logo'> <img className='login-logo__image' src={logo} alt='logo' /> </div>

            <div className="login-card">
                <form className="login-form" onSubmit={null}>
                    <label className="login-form__name"> Usuário </label>
                    <input className="login-form__name-input" type="text" name="user" />
                    <label className="login-form__password"> Senha </label>
                    <input className="login-form__name-input" type="password" name="password" />
                    <div className="login-button" >Entrar</div>
                </form>

            </div>


        </div>
    )
}

export default Login