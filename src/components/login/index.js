import './login-styles.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const [login,  setLogin]=useState("")
    const [password, setPassword]=useState("")
 
    const loginParams = { login, password }    
   

    async function handleSubmit (e) {
        e.preventDefault();
        
        const doLogin = await fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(loginParams),
            cache: 'default',
            type: 'cors'
        })
        
        const responseLogin = await doLogin.json();       
        const token_user = await responseLogin.token        
        localStorage.setItem('token', token_user);

        return token_user ? navigate('/clientes') : ''      
    }

    return (
        <div className="login-container">            
            <div className="login-card">
                <img className='login__logo' src= '/static/media/logo.0f09a3bd7f34cd191329.png'/>
                <div className='login__login'>Login</div>
                
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="login-form__name"> Usuário </label>
                    <input className="login-form__name-input" 
                        type="text" 
                        name="user" 
                        value={login} 
                        onChange={(e)=>{setLogin(e.target.value)}}
                    />
                    
                    <label className="login-form__password"> Senha </label>
                    <input className="login-form__password-input" 
                        type="password"
                        name="password"  
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    
                    <input  className="login-button" type="submit"  value="Entrar"/>
 
                </form>
            </div>
        </div>
    )
}

export default Login