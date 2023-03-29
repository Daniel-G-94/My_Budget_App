// import React, { useState } from "react";
// import { useTransactionsByCategory } from "../../customHooks/useTransactionCategory";

// export default function TransactionsByCategory ({ transactionsRef })  {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const {transactions} = useTransactionsByCategory('transactions',selectedCategory);

//   const categories = ["all", "shopping", "entertainment", "transport", "other"];
  
//    const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value); 
//   };
  

  

//   return (
//     <div>
//     <h2>Transactions by Category</h2>
//     <label>
//   Select a category:
//     <div>
//         <label htmlFor="category">Filter by category:</label>
//         <select id="category" onChange={handleCategoryChange}>
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//   <tbody>
//           {transactions.map((transaction) => (
//             <tr key={transaction.id}>
//               <td>{transaction.name}</td>
//               <td>{transaction.category}</td>
//               <td>{transaction.ammount}</td>
//             </tr>
//           ))}
//         </tbody>
// </label>
    
//     {/* <ul>
//       {filteredTransactions.map((transaction) => (
//         <li key={transaction.id}>
//           {transaction.name} - £{transaction.amount} ({transaction.category})
//         </li>
//       ))}
//     </ul> */}
//   </div>
// )}