import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import useAuthContext from '../hooks/useAuthContext';

const Navbar = () => {
 const { logout } = useLogout(); 
 const { user } = useAuthContext()
    return <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>My Money</li>

           {!user &&  (
            <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Login'>Login</Link> </li>
            <li><Link to='/Signup'>Signup</Link></li>
            </>
            )}

            {user && (
            <>
            <li>Hello {user.displayName}</li> 
            <li><form><button type="submit" className={styles.btn} onClick={logout}>Logout</button></form></li>
            </>
            )}

        </ul>
    </nav>
}

export default Navbar;