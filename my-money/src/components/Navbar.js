import styles from './Navbar.module.css';
import { Link } from 'react-router-dom'

const Navbar = () => {

    return <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>My Money</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Login'>Login</Link> </li>
            <li><Link to='/Signup'>Signup</Link></li>

        </ul>
    </nav>
}

export default Navbar;