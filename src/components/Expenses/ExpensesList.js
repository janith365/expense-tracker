import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList({ expenses }) {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <div className="expenses-list">
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </div>
  );
}
