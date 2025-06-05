const Filters = ({
  categoryFilter,
  dateFilter,
  onCategoryChange,
  onDateChange,
}) => {
  return (
    <div id="filters">
      <p>Filters: </p>

      <label htmlFor="category-filter">Category: </label>
      <select
        id="category-filter"
        value={categoryFilter}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">ALL CATEGORIES</option>
        <option value="Jedzenie">Food</option>
        <option value="Rachunki">Bills</option>
        <option value="Rozrywka">Entertainment</option>
      </select>

      <label htmlFor="date-filter">Date: </label>
      <input
        id="date-filter"
        type="date"
        value={dateFilter}
        onChange={(e) => onDateChange(e.target.value)}
      />
    </div>
  );
};

export default Filters;
