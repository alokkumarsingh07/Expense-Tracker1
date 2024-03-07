import "./App.css";
import ExpenseItem from "./components/ExpenseItems";
import { expenses } from "./data/Data";

function App() {
  return (
    <>
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amt={expense.amount}
          date={expense.date}
        />
      ))}
    </>
  );
}

export default App;
