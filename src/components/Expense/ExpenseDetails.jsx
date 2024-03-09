import React from "react";
import "./ExpenseItems.css";

function ExpenseDetails({ title, amt }) {
  const clickHandler = () => {
    alert("Clicked!!!");
  };
  return (
    <>
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">{amt}</div>
      </div>
      <hr />
      <button className="button" onClick={clickHandler}>
        Clicked-me
      </button>
    </>
  );
}

export default ExpenseDetails;
