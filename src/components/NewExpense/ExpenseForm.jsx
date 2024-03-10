import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: " ",
  //   });

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    // setUserInput({ ...userInput, title: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const handleAmtChange = (event) => {
    setAmount(event.target.value);
    // setUserInput({ ...userInput, amount: event.target.value });
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    // setUserInput({ ...userInput, date: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onSaveExpense(expenseData);

    setAmount("");
    setDate("");
    setTitle("");

    props.onHideForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={handleAmtChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2100-12-31"
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onHideForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
