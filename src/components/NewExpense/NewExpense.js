import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({ addExpense }) {
  return (
    <div className="new-expense">
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
}
