import './login-styles.css'

import logo from '../../assets/logo.png'

const Login = () => {
    return (
        <div className="login-container"   >


            <div className="login-card">
                <form className="login-form" onSubmit={null}>
                    <label className="login-form__name"> Usuário </label>
                    <input className="login-form__name-input" type="text" name="user" />

                    <label className="login-form__password"> Senha </label>
                    <input className="login-form__name-input" type="password" name="password" />
                </form>
            </div>


        </div>
    )
}

export default Login