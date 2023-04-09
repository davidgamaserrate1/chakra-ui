import './login-styles.css'
import { useState } from 'react'



const Login = () => {
    const [login,  setLogin]=useState("")
    const [password, setPassword]=useState("")




    return (
        <div className="login-container">            
            <div className="login-card">
                <img className='login__logo' src= '/static/media/logo.0f09a3bd7f34cd191329.png'/>
                <div className='login__login'>Login</div>
                
                <form className="login-form" onSubmit={null}>
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
                    <div className="login-button" >Entrar</div>
                </form>
            </div>
        </div>
    )
}

export default Login