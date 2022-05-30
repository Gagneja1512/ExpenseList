import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        //console.log('Expensesjs') ;
        //console.log(selectedYear) ;
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No Expenses found</p> ;
    if(filteredExpenses.length > 0)
    {
        expensesContent = filteredExpenses.map((expense) => 
        (
            <ExpenseItem key={expense.id} 
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} />
        )) ;
    }

    return (
        <div>
            <div className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                {expensesContent}
                {/*<ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>*/}
            </div>
        </div>
    )
}

export default Expenses;