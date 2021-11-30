import React from "react";
import './expenseForm.css'

const ExpenseForm = () => {
    const titleChangeHandler = (event) => {
      console.log(event.target.value)
    }
    return (
            <form>
                <div className="new-expense__controls">
                  <div className="new-expense__control">
                      <label></label>
                      <input onChange={titleChangeHandler} type="text"/>
                  </div>

                  <div className="new-expense__control">
                      <label>Amount</label>
                      <input type="text"/>
                  </div>

                  <div className="new-expense__control">
                      <label>Date</label>
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