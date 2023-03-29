import { useEffect,useRef,useState } from "react"
import { db } from "../Firebase/config"
import { collection, onSnapshot,query, where} from "firebase/firestore"

export const useSummary = (collectionTrans,_queryNew) => {
    const [total, setTotal] = useState(0);
    const queryNew = useRef(_queryNew).current
    useEffect(() => {
        let transactionsRef =collection(db,collectionTrans)
        if (queryNew) {
            transactionsRef = query(transactionsRef,where(...queryNew))
        }
        const transactionsQuery = query(transactionsRef);
      
        const unsubscribe = onSnapshot(transactionsQuery, (snapshot) => {
        const totalAmount = snapshot.docs.reduce((acc, doc) => acc + parseFloat(doc.data().ammount), 0);
        setTotal(totalAmount.toFixed(2));
      }, (error) => {
        console.error(error);
      });
  
      return unsubscribe;
    }, [collectionTrans,queryNew]);
  
    return total;
  };