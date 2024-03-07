import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

export default function ExpenseItems(props) {
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} amt={props.amt} />
      </Card>
    </>
  );
}
