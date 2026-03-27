import LogItem from "./LogItem";

export default function LogList({ logs }) {
  return (
    <div className="log-table">
      {/* TABLE HEADER */}
      <div className="log-header">
        <span>TIME</span>
        <span>SEVERITY</span>
        <span>CATEGORY</span>
        <span>ACTION</span>
        <span>USERNAME</span>
        <span>EMAIL</span>
      </div>

      {/* DATA ROWS */}
      {logs.map((log) => (
        <LogItem key={log.id} log={log} />
      ))}
    </div>
  );
}