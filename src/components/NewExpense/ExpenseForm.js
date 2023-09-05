import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ addExpense }) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: ""
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({ ...prevExpense, [name]: value }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setExpense((prevExpense) => ({ ...prevExpense, date: new Date(expense.date + "T00:00") }));
    addExpense(expense);
    setExpense({ title: "", amount: "", date: "" });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" value={expense.title} onChange={changeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" name="amount" value={expense.amount} min="0.01" step="0.01" onChange={changeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" name="date" value={expense.date} min="2019-01-01" onChange={changeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={clickHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
}
