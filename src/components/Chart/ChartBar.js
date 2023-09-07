import "./ChartBar.css";

export default function ChartBar({ datapoint, totalYearlyExpense }) {
  const style = {
    height: "0%"
  };
  if (datapoint.amount > 0) {
    style.height = Math.round((datapoint.amount * 100) / totalYearlyExpense) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div style={style} className="chart-bar__fill"></div>
      </div>
      <div className="chart-bar__label">{datapoint.label}</div>
    </div>
  );
}
