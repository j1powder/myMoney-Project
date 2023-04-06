import { useState } from 'react';
import styles from './Signup.module.css';

const Signup = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(displayName, email, password)
    }
    
        return <div>
            <form className={styles['signup-form']} onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label>
                    <span>Pick Display Name</span>
                    <input type='text'
                    onChange={(e)=>setDisplayName(e.target.value)}
                    value={displayName}
                    />
                </label>

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
                <button className='btn'>Sign Up</button>
            </form>
        </div>
    }

export default Signup;