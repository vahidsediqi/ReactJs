import React, { useState } from "react";
import './expenseForm.css'

 const ExpenseForm = () => {
 const [newTitle, setNewTitle] = useState('');
 const [newAmount, setNewAmount] = useState('');
 const [newDate, setNewDate] = useState('');


const titleChangeHandler = (event) => {
   setNewTitle(event.target.value)
}
const amountChangeHandler = (event) => {
    setNewAmount(event.target.value)
}
const dateChangeHandler = (event) => {
    setNewDate(event.target.value)
}
 
const sumbitHandler = (event) => {
    event.preventDefault();
  
    const expenseDadaFromUser = {
        title: newTitle,
        amount: newAmount,
        date: new Date(newDate)
    }
      
    console.log(expenseDadaFromUser);
    setNewTitle('');
    setNewAmount('');
    setNewDate('');
  }

    return (
            <form onSubmit={sumbitHandler}>
                <div className="new-expense__controls">
                  <div className="new-expense__control">
                      <label>Title: </label>
                      <input
                      value={newTitle} 
                      onChange={titleChangeHandler} type="text"/>
                  </div>

                  <div className="new-expense__control">
                      <label>Amount:</label>
                      <input 
                      value={newAmount}
                      onChange={amountChangeHandler} type="text"/>
                  </div>

                  <div className="new-expense__control">
                      <label>Date:</label>
                      <input 
                      value={newDate}
                      onChange={dateChangeHandler} type="date"/>
                  </div>
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
           )
          }

export default ExpenseForm