import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

export default function ExpenseItems(props) {
  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} amt={props.amt} />
      </div>
    </>
  );
}
