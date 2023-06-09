import styles from './Login.module.css';
import { useState } from 'react';
import useLogin from '../hooks/useLogin';

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { login, error, isPending } = useLogin()
const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    //console.log(email, password)
    setEmail('')
    setPassword('')
}

    return <div>
        <form className={styles['login-form']} onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                <span>Email:</span>
                <input type='email'
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>Password:</span>
                <input type='password'
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                />
            </label>
            {!isPending && <button className={styles.btn}>Login</button>}
            {isPending && <button className={styles.btn} disabled>...loading</button>}
            {error && <p>{error}</p>}
        </form>
    </div>
}

export default Login;