import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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

    return (
        <div>
            <div className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses = {filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </div>
        </div>
    )
}

export default Expenses;