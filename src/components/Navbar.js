import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useLogout } from '../customHooks/useLogout'
import { useAuthContext } from '../customHooks/useAuthContext'

export const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()
  return (
    
    <nav className={styles.navbar}>
        <ul>
        <span className="material-symbols-outlined">paid </span>
            <li className={styles.title}><Link to="/">My_Budget</Link></li>
            
            {user &&
            <li> {user.displayName}</li>}
            {!user && (
              <>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">login</Link></li>
            
            </>
            )}
            <li><Link to="/category">Filter</Link></li>
            {user &&<button className='btn-log' onClick={logout}> <Link to="/login">Logout</Link></button>}
        </ul>
        

    </nav>
  )
}
