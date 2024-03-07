import React from "react";
import "./ExpenseItems.css";

export default function ExpenseItems(props) {
  return (
    <>
      <div className="expense-item">
        <div>{props.date.toDateString()}</div>
        <div className="expense-item_description">
          <h2>{props.title}</h2>
          <div className="expense-item_price">{props.amt}</div>
        </div>
      </div>
    </>
  );
}
