import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ expenses, filterExpenseHandler }) {
  return (
    <Card className="expenses">
      <ExpensesFilter filterExpenseHandler={filterExpenseHandler} />
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </Card>
  );
}
