import React from 'react';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from './components/Expenses/NewExpense';

function App() {
const expenses = [
  {title: 'Car Insurance', amount: 452.45, date: new Date(2021, 2, 28)},
  {title: 'Picnik', amount: 120, date: new Date(2021, 2, 30)},
  {title: 'Bills', amount: 200.30, date: new Date(2021, 12, 30)},
]
  return (
      <div>
        <NewExpense />  
        <ExpenseItem title={expenses[0].title}  amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title}  amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title}  amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      </div>
  );
}

export default App;
