import styles from './Home.module.css';
import TransactionList from './TransactionList';
import useAuthContext from '../../hooks/useAuthContext';
//import useCollection from '../../hooks/useCollection';
import ActualList from './ActualList';


const Home = () => {
const { user } = useAuthContext()
//const {documents, error} = useCollection('transactions')
    return <div className={styles.container}>
        
        {user &&
        <>
        <div className={styles.content}>
           
            <ActualList />
            </div>
        <div className={styles.sidebar}>
            <TransactionList uid={user.uid}></TransactionList>
        </div></> }
    </div>
}

export default Home;