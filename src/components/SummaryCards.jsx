export default function SummaryCards({ logs }) {
  const count = (type) => logs.filter((l) => l.severity === type).length;

  return (
    <div className="summary">
      <span>INFO {count("INFO")}</span>
      <span>WARN {count("WARN")}</span>
      <span>ERROR {count("ERROR")}</span>
      <span>SUCCESS {count("SUCCESS")}</span>
    </div>
  );
}
