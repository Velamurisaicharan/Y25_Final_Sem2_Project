export default function Filters({ search, setSearch, severity, setSeverity }) {
  return (
    <div className="filters">
      <input
        aria-label="Search logs"
        value={search}
        placeholder="Search logs..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        aria-label="Severity filter"
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
      >
        <option value="">All</option>
        <option>INFO</option>
        <option>WARN</option>
        <option>ERROR</option>
        <option>SUCCESS</option>
      </select>
    </div>
  );
}