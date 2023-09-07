import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart({ expenses }) {
  const dataPoints = [
    { label: "Jan", amount: 0 },
    { label: "Feb", amount: 0 },
    { label: "Mar", amount: 0 },
    { label: "Apr", amount: 0 },
    { label: "May", amount: 0 },
    { label: "Jun", amount: 0 },
    { label: "Jul", amount: 0 },
    { label: "Aug", amount: 0 },
    { label: "Sep", amount: 0 },
    { label: "Oct", amount: 0 },
    { label: "Nov", amount: 0 },
    { label: "Dec", amount: 0 }
  ];

  expenses.forEach((expense) => {
    const expenseMonth = expense.date.getMonth();
    dataPoints[expenseMonth].amount += expense.amount;
  });

  const totalYearlyExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="chart">
      {dataPoints.map((datapoint) => (
        <ChartBar key={datapoint.label} datapoint={datapoint} totalYearlyExpense={totalYearlyExpense} />
      ))}
    </div>
  );
}
