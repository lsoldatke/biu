function Outgoings({ outgoings, onDelete, onSelect }) {
  const columns = ["title", "amount", "category", "date"];

  return (
    <div id="outgoings">
      <h2>Outgoings</h2>
      {outgoings.length > 0 ? (
        <table id="outgoings-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {outgoings.map((outgoing) => (
              <tr key={outgoing.id} onClick={() => onSelect(outgoing)}>
                {columns.map((column) => (
                  <td key={column}>{outgoing[column]}</td>
                ))}
                <td>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(outgoing.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items</p>
      )}
    </div>
  );
}

export default Outgoings;
