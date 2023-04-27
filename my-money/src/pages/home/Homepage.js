import styles from './Home.module.css';
import TransactionList from './TransactionList';


const Home = () => {

    return <div className={styles.container}>
        <div className={styles.content}>Transaction List</div>
        <div className={styles.sidebar}>
            <TransactionList></TransactionList>
        </div>
    </div>
}

export default Home;