import styles from './Signup.module.css'
import { useState } from 'react'
import { useSignup } from '../../customHooks/useSignup'


export const Signup = () => {

    //states
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [displayName,setdisplayName]=useState('')
    const {error,signup,isLoading} = useSignup()

    const handleSubmit = (e)=> {
        e.preventDefault()
        signup(email,password,displayName)
        

    }
  return (
    <form onSubmit={handleSubmit}className={styles['signup-form']}>
        
        <h2>Signup</h2>
        <label>
        <span>Username:</span>
        <input 
            type="text"  
            onChange={(e)=> setdisplayName(e.target.value)}
            value={displayName}
        />
        </label>
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
        {!isLoading &&<button className='btn'>Signup</button>}
        {isLoading && <button className='btn'>Loading....</button>}
       
        {error && <p>{error}</p>}
    </form>
  )
}