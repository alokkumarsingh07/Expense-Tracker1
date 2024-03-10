import React from "react";
import ExpenseItems from "./ExpenseItems.jsx";
import { expenses } from "../data/Data";
// import "./ExpenseList.css";
const ExpensesList = (props) => {
  //Conditionally render warning bases on if expenses are logged in or not

  // if (props.items.length === 0) {
  //   return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  // }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amt={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
