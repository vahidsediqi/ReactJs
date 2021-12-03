import React, { useState } from "react";
import './expenseForm.css'

 const ExpenseForm = () => {
 const [newTitle, setNewTitle] = useState('');
 const [newAmount, setNewAmount] = useState('');
 const [newDate, setNewDate] = useState('');

// const [userInput, setUserInput] = useState ({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
// })


//  const dateChangeHandler = (event) => {
//     setUserInput(() => {
//         return ({
//             ...userInput, 
//             enteredDate: event.target.value
//         })
//     })
//  }

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

  const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate)
  }
    
 console.log(expenseData)
}
    return (
            <form onSubmit={sumbitHandler}>
                <div className="new-expense__controls">
                  <div className="new-expense__control">
                      <label>Title:</label>
                      <input type="text"/>
                  </div>

                  <div className="new-expense__control">
                      <label>Amount:</label>
                      <input  type="text"/>
                  </div>

                  <div className="new-expense__control">
                      <label>Date:</label>
                      <input type="date"/>
                  </div>
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
           )
          }

export default ExpenseForm