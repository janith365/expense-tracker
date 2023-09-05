import { useState } from "react";
import "./ExpensesFilter.css";

export default function ExpensesFilter({ filterExpenseHandler }) {
  const [year, setYear] = useState("");

  const changeHandler = (e) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);
    filterExpenseHandler(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={year} onChange={changeHandler}>
          <option value="">Select</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}
