import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({ addExpense }) {
  const [showForm, setShowForm] = useState(false);
  const clickHandler = () => {
    setShowForm(true);
  };
  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={clickHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm addExpense={addExpense} setShowForm={setShowForm} />
      )}
    </div>
  );
}
