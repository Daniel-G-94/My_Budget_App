import { useAuthContext } from '../../customHooks/useAuthContext'
import styles from './Home.module.css'
import TransactionForm from './TransactionForm'
import { useCollection } from '../../customHooks/useCollection'
import TransactionList from './TransactionList'
import Filter from '../Filter/Filter'
import { useState } from 'react'
import Income from '../../components/Income'
import { useSummary } from '../../customHooks/useSummary'

export const Home = () => {
  
  const {user} = useAuthContext()
  const [currentFilter,setCurrentFilter] =useState('all')
  const {documents,error} = useCollection('transactions',
  ["uid","==",user.uid],
  ["createdAt","desc"])
  const totals = useSummary('transactions',
  ["uid","==",user.uid],)
  

  const categories = documents?.filter((document) => {
  const { category, assignedUsersList } = document;
 
    if (currentFilter === "All") {
      return true;
    } else if (currentFilter === "mine") {
      return assignedUsersList.map((user) => user.id);
    } else {
      return category === currentFilter;
    }
  });

    
  const categoryTotals = categories ? categories.reduce((totals, transaction) => {
      const category = transaction.category;
      const amount = parseFloat(transaction.ammount);
      if (category in totals) {
        totals[category] += amount;
      } 
      else {
        totals[category] = amount;
      }
      return totals;
    }, {})
  : {};




  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
    
  }
  console.log(currentFilter)
  return (
    
    <div className={styles['container']}>
      <div className={styles['content']}>
        
        <Income income={'£ 50 000'}/>

        {error && <p>{error}</p>}
        {documents && (
        <Filter currentFilter={currentFilter} changeFilter={changeFilter}/>)}

        {categories && <TransactionList transactions={categories} />}  
      </div>
      
      <div className={styles['sidebar']}>
        <TransactionForm uid={user.uid}/>
      <div>
      {currentFilter === "All" &&
        <>
      <div style={{marginTop: "10%"}}>Total Spending: ${totals}
      </div><br/>
      <h3>Each category :</h3>
        </>}
      
        {Object.entries(categoryTotals).map(([category, total]) => (
          <div key={category}>
            
            {category}: £{total}
            
          </div> 
        ))}
      </div>
      </div>
      
     
      
    </div>
  )
}
