export const LevelFilter = ({ value, onChange }) => {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option value="all">All</option>
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select>
  );
};