import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState("2023");

  const filteredExpenses =
    filterYear !== "" ? expenses.filter((expense) => expense.date.getFullYear().toString() === filterYear) : expenses;

  const filterYearHandler = (e) => {
    setFilterYear(e.target.value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter filterYearHandler={filterYearHandler} filterYear={filterYear} />
      {filteredExpenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </Card>
  );
}
