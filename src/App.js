import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import defaultExpenses from "./expenses";

export default function App() {
  const [expenses, setExpenses] = useState(defaultExpenses);

  const addExpense = (expense) => {
    expense = { ...expense, date: new Date(expense.date + "T00:00") };
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    defaultExpenses.push(expense);
  };

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}
