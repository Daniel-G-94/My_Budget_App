import { useEffect,useRef,useState } from "react"
import { db } from "../Firebase/config"
import { collection, onSnapshot,query,where,orderBy } from "firebase/firestore"




export const useCollection = (collectionTrans, _queryNew,_orderTrans,_queryCollection) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    // We we dont user useRef it will cause infinite loop in useEffect
    // _queryNew is arrray and it will be different on every function call
    const queryNew = useRef(_queryNew).current
    const order = useRef(_orderTrans).current
    let queryCollection = useRef(_queryCollection).current
    //console.log(queryCollection)

    useEffect(() => {
        let ref =collection(db,collectionTrans)
       
        if (queryNew) {
            ref = query(ref,where(...queryNew))
        }
        if (order) {
            ref = query(ref,orderBy(...order))
            
        }
        if (queryCollection)
        {
            ref = query(ref,where(...queryCollection))
            console.log(ref)
        }
        const unsubscribe = onSnapshot(ref,(querySnapshot) => {
            let results = []
            querySnapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id})
            });

            //update state
            setDocuments(results)
            setError(null)
        }, (error) => {
            console.log(error)
            setError('Data not fetched')
        })

        //unsubscribe on unmount
        return () => unsubscribe()
    }, [collectionTrans,queryNew,order,queryCollection])
    return {documents,error}
}