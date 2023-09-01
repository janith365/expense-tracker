import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import defaultExpenses from "./expenses";

export default function App() {
  const [expenses, setExpenses] = useState(defaultExpenses);

  const addExpense = (expense) => {
    console.log(expense);
    expense = { ...expense, date: new Date(expense.date + "T00:00") };
    console.log(expense);
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}
