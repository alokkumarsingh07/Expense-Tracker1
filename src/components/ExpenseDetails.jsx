import React from "react";

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
