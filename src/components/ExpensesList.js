import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    let expensesContent 
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }

    return (
        <ul className="expenses-list">
            {
                expensesContent = props.items.map((expense) =>
                (
                    <ExpenseItem key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />
                ))
            }
        </ul>
    )
};

export default ExpensesList;