import React from "react";
import './ExpenseItems.css'
function ExpenseDetails({title,amt}) {
  return (
    <>
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">{amt}</div>
      </div>
    </>
  );
}

export default ExpenseDetails;
