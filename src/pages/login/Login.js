import styles from './Login.module.css'
import { useState } from 'react'
import { useLogin } from '../../customHooks/useLogin'


export const Login = () => {
   //states for email and password 
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const {login,error,isLoading} = useLogin()

const handleSubmit = (e)=> {
    e.preventDefault()
    login(email,password)

}

  return (
    <form onSubmit={handleSubmit}className={styles['login-form']}>
        <h2>Login</h2>
        <label>
            <span>Email:</span>
            <input
                type="email"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
            />
        </label>
        <label>
        <span>Password:</span>
        <input 
            type="password" autoComplete="current-password webauthn" 
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
        />
        </label>
        {!isLoading &&<button className='btn'>Login</button>}
        {isLoading && <button className='btn' disabled>Loading...</button>}
        {error && <p>{error}</p>}
    </form>
  )
}