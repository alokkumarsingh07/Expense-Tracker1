import { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card.jsx";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart.jsx";
import ExpenseItems from "./ExpenseItems.jsx";

function Expenses(props) {
  const [year, setYear] = useState("2021");

  const onSelectYear = (year) => {
    setYear(year);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() == year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={onSelectYear} selectedYear={year} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
