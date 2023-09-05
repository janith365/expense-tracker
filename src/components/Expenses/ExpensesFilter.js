import "./ExpensesFilter.css";

export default function ExpensesFilter({ filterYearHandler, filterYear }) {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={filterYear} onChange={filterYearHandler}>
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
