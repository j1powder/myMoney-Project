import { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';

const TransactionList = (props) => {
const [name, setName] = useState('');
const [amount, setAmount] = useState('');
const { addDocument, response} = useFirestore('transactions')

const handleSubmit = (e) => {
    e.preventDefault()
 console.log({name, amount})
 addDocument({uid:props.uid, name, amount})
 setName('')
 setAmount('')
}
return(
    <>
    <h3>Add a Transaction</h3>
    <form onSubmit={handleSubmit}>
        <label>
            <span>Transaction Name</span>
            <input type='text'
                    required
                    onChange={(e)=> setName(e.target.value)}
                    value={name} />
        </label>
        <label>
            <span>Amount: </span>
            <input type='number'
                    required
                    onChange={(e)=> setAmount(e.target.value)}
                    value={amount} />
        </label>
        <button>Add Transaction</button>
    </form>
    </>
)
}

export default TransactionList;