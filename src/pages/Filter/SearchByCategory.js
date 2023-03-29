import { useAuthContext } from '../../customHooks/useAuthContext'
import styles from './Home.module.css'
import { useCollection } from '../../customHooks/useCollection'
import TransactionList from '../home/TransactionList'
import { useSummary } from '../../customHooks/useSummary'
import { useState } from 'react'



export const SearchByCategory = () => {
     
  const {user} = useAuthContext()
  const [category, setCategory] = useState("shopping");

  
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)  };
  const total = useSummary('transactions',
  ["uid","==",user.uid],)
  const {documents,error} = useCollection('transactions',
  ["uid","==",user.uid],
  ["createdAt","desc"],
  ["category","==",category])

  
    

 
  //console.log(filtered)
  //console.log({documents})
  
  return (
    
    <div className={styles['container']}>
      <div className={styles['content']}>
      <label>
        Select Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="ALL">--Select Category--</option>
          <option value="food">Food</option>
          <option value="shopping">Shopping</option>
          <option value="travel">Travel</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </label>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
        <div>Total Amount: ${total}</div>
        
      </div>
      
      
    </div>
  )
}
