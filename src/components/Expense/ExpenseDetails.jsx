import React, { useState } from "react";
import "./ExpenseItems.css";

function ExpenseDetails(props) {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amt);

  const changeAmt = () => {
    setAmount("$100");
    console.log(`${amount}`);
  };

  const clickHandler = () => {
    alert("Clicked!!!");
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <>
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">{amount}</div>
      </div>
      <hr />
      <button className="button" onClick={clickHandler}>
        Clicked-me
      </button>
      <br />
      <button className="button" onClick={changeAmt}>
        Change-amt
      </button>
    </>
  );
}

export default ExpenseDetails;
