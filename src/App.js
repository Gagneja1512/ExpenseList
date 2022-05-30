import logo from './logo.svg';
import React , {useState} from 'react';

import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const DUMMY_EXPENSES = [
  {
    title: 'Food items',
    amount: 100,
    date: new Date(2021, 7, 14),
    id: 'e1',
  },
  { 
    title: 'New TV', 
    amount: 29999 , 
    date: new Date(2021, 2, 12) ,
    id: 'e2', 
  },
  {
    title: 'Car Insurance',
    amount: 3499,
    date: new Date(2021, 2, 28),
    id: 'e3',
  },
  {
    title: 'New Desk (Wooden)',
    amount: 4999,
    date: new Date(2021, 5, 12),
    id: 'e4',
  },
];

const App = () => {
  const [expenses , setExpenses] = useState(DUMMY_EXPENSES) ;

  const addExpenseHandler = (expense) => {
    //console.log('Inapp')
    setExpenses((prevExpenses) => {
      return [expense , ...prevExpenses] ;
    }) ;
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
