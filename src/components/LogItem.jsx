export default function LogItem({ log }) {
  return (
    <div className={`log-item ${log.severity.toLowerCase()}`} tabIndex="0">
      <span>{log.time}</span>
      <span>{log.severity}</span>
      <span>{log.category}</span>
      <span>{log.action}</span>
      <span>{log.username}</span>
      <span>{log.user}</span>
    </div>
  );
}