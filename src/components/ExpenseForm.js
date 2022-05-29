import React , {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = () =>{
    //const [enteredTitle , setEnteredTitle] = useState('') ;
    //const [enteredAmount , setEnteredAmount] = useState('') ;
    //const [enteredDate , setEnteredDate] = useState('') ;
    const [userInput , setuserInput] = useState({
        enteredTitle : '' ,
        enteredAmount : '' ,
        enteredDate : '' ,

    });

    const titleChangeHandler = (event)=>{
        setuserInput({
            ...userInput ,
            enteredTitle : event.target.value ,
        })
    };

    const amountChangeHandler = (event) => {
        setuserInput({
            ...userInput ,
            enteredAmount : event.target.value ,
        })
    };

    const dateChangeHandler = (event) =>{
        setuserInput({
            ...userInput ,
            enteredDate : event.target.value ,
        })
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type = 'text' onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type = 'number' min='1' step='1'onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type = 'date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm ;