import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import defaultExpenses from "./expenses";

export default function App() {
  const [expenses, setExpenses] = useState(defaultExpenses);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    defaultExpenses.push(expense);
  };

  const filterExpenseHandler = (filterYear) => {
    setExpenses(defaultExpenses);
    if (filterYear !== "") {
      const filteredExpenses = defaultExpenses.filter(
        (expense) => expense.date.getFullYear().toString() === filterYear
      );
      setExpenses(filteredExpenses);
    }
  };

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Expenses expenses={expenses} filterExpenseHandler={filterExpenseHandler} />
    </div>
  );
}
