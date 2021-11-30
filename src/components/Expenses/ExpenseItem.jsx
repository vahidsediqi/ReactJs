import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';

const ExpenseItem = ({title, date, amount}) => {

    return (
      <Card className="expenses">
           <div className="expense-item">
             <ExpenseDate date={date}/>
               <div className="expense-item__description">
                   <h2>Expense title: {title}</h2>
                   <div className="expense-item__price">${amount}</div>
               </div>
           </div>
      </Card>
        )
}

export default ExpenseItem;