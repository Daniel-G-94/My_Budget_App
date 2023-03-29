// import { collection, getDocs, query, where } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { db } from "../Firebase/config";

// export const useTransactionsByCategory = (collectionTrans, category) => {
//     const [transactions, setTransactions] = useState([]);
//     useEffect(() => {
//     let transactionsRef =collection(db,collectionTrans)  
//       const categoryQuery = query(transactionsRef, where("category", "==", category));
//       getDocs(categoryQuery)
//         .then((snapshot) => {
//           const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//           setTransactions(data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }, [collectionTrans, category]);
  
//     return {transactions};
//   };