import React from "react";
import "./App.css";
import ExpenseItem from "./components/Expense/ExpenseItems";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenses } from "./components/data/Data";

const App = () => {
  const [expense, setExpense] = React.useState(expenses);

  const addExpenseHandler = (expens) => {
    setExpense((prevState) => [...prevState, expens]);
  };
  return (
    <>
      <NewExpense onSaveExpense={addExpenseHandler} />
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amt={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </>
  );
};

export default App;
