import { useReducer , useEffect, useState} from "react"
import { db, timestamp} from "../Firebase/config"
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore"
//import { Timestamp } from "firebase/firestore"

let initialState = {
    document: null,
    isPending: false,
    error: null, 
    success: null
}

//function for reducer

const firestoreReducer = (state,action) => {
    switch (action.type){
        case 'IS_PENDING':
        return {isPending:true, docuemnt:null, success:false,error:null}
        case 'ADDED_DOCUMENT':
            return {isPending:false, document:action.payload,success:true, error:null}
        case 'ERROR':
            return { isPending:false,document:null, success:false,error: action.payload}
        case 'DELETE_TRANS':
            return {isPending:false, document:null, success:true, error:null}
        default:
            return state
    }
}

export const useFirestore = (collectionNew) => {
  const [response, dispatch] =useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)


  // collection reference
  const ref = collection(db,collectionNew)
   
  //dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled){
        dispatch(action)
    }
  }

  // add a document
  const addDocument = async (doc) => {
    dispatch({type: 'IS_PENDING'})

    try {
        const createdAt = timestamp.fromDate((new Date()))
        const addedDocument= await addDoc(ref,{...doc,createdAt})
        console.log(addedDocument)
        dispatchIfNotCancelled({type: 'ADDED_DOCUMENT', payload: addedDocument})

    }
    catch (err){
        dispatchIfNotCancelled({type: 'ERROR',payload: err.message})

    }
  }

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({type:"DELETE_TRANS"})

    try {
        //signle doc ref
        const docRef = doc(db,collectionNew,id)
        
        deleteDoc(docRef)
        dispatchIfNotCancelled({type:"DELETE_TRANS"})
    }
    catch (err) {
        dispatchIfNotCancelled({type:"ERROR",payload: "Not deleted transacton"})
    }

  }
  
  useEffect( ()=> {
    return () => setIsCancelled(true)
  },[])


  

  return {addDocument, deleteDocument, response}
}
