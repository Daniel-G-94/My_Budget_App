import { useEffect, useState } from "react"
import { useFirestore } from "../../customHooks/useFirestore"
import './Home.module.css'
export default function TransactionForm({uid}) {
    const [name,setName] = useState('')
    const [ammount,setAmmount]= useState('')
    const [category,setCategory]= useState('')
    const { addDocument,response} = useFirestore('transactions')
    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            uid,
            name,
            ammount,
            category,
            
        })
    }
    
    useEffect(() => {
        if(response.success){
            setName('')
            setAmmount('')
            
        }
    },[response.success])

  return (
    <>
        <h3 style={{marginTop: "40px"}}>Add a transcation</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Transaction name:</span>
                <input
                type="text"
                required
                placeholder="Enter name of transaction"
                onChange={(e) => setName (e.target.value)}
                value={name}/>
            </label>
            <label>
                <span>Ammount £ :</span>
                <input
                type="number"
                min={0}
                placeholder="Enter ammount"
                required
                onChange={(e) => setAmmount (e.target.value)}
                value={ammount}/>
            </label>
            <label>
            <span>Category:</span>  
            <div className="select">
                <select  onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">(Select one....)</option>
                    <option value="House">House</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Transport">Transport</option>
                </select>
            </div>
  </label>
               
            <button>Add Transaction</button>
        </form>

    </>
  )
}
