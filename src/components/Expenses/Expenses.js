import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </Card>
  );
}
