// export const categoryTotals = categories ? categories.reduce((totals, transaction) => {
//     const category = transaction.category;
//     const amount = parseFloat(transaction.ammount);
//     if (category in totals) {
//       totals[category] += amount;
//     } 
//     else {
//       totals[category] = amount;
//     }
//     return totals;
//   }, {})
// : {};