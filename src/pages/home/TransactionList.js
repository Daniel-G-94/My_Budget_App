import styles from './Home.module.css'
import { useFirestore } from '../../customHooks/useFirestore'


export default function TransactionList({transactions}) {
    const {deleteDocument,response} = useFirestore('transactions')
    console.log(response)
    
    //console.log(transactions)
      
      

    
  return (
    
    <ul className={styles['transactions']}>
        {transactions.map((transaction)=> (
            <li key={transaction.id}>
                <p classnme={styles['name']}>
                    {transaction.name}
                </p>
                <p className={styles['category']}>
                {transaction.category}
                </p>
                <p className={styles['amount']}>
                    £ {transaction.ammount}
                </p>
                
                
                <button onClick={() => deleteDocument(transaction.id)}>Delete</button>
            </li>
            
        ))}
        
    </ul>
    
  )
  
}
