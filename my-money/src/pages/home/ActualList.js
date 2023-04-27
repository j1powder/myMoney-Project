import styles from './Home.module.css';
import useCollection from '../../hooks/useCollection';
import useAuthContext from '../../hooks/useAuthContext';

const ActualList = () => {
    const { user } = useAuthContext();
    const {documents, error } = useCollection('transactions',["uid", "==",user.uid])
    console.log(documents)
    return (
        <ul className={styles.transactions}>
            {documents && 
            documents.map((document)=>(
                <li key={document.id}>
                    <p className={styles.name}>{document.name}</p>
                    <p className={styles.amount}>${document.amount}</p>
                </li>
            ))}
            {!documents && <p>....LOADING</p>}

        </ul>
    )
}

export default ActualList;