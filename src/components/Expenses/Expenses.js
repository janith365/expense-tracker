import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";

export default function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState(new Date().getFullYear().toString());

  const filteredExpenses =
    filterYear !== "" ? expenses.filter((expense) => expense.date.getFullYear().toString() === filterYear) : expenses;

  const filterYearHandler = (e) => {
    setFilterYear(e.target.value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter filterYearHandler={filterYearHandler} filterYear={filterYear} />
      <Chart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}
