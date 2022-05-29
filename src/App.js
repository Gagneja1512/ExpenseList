import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Food items',
      amount: 100,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 29999 , date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 3499,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 4999,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('Inapp') ;
    console.log(expense) ;
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
