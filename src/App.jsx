import "./App.css";
import ExpenseItem from "./components/Expense/ExpenseItems";
import { expenses } from "./components/data/Data";

const App = () => {
  return (
    <>
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
