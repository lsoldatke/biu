function Outgoings({ outgoings, onDelete }) {
  const columns = ["title", "amount", "category", "date"];

  return (
    <div id="outgoings">
      <h2>Outgoings</h2>
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
            <tr key={outgoing.id}>
              {columns.map((column) => (
                <td key={column}>{outgoing[column]}</td>
              ))}
              <td>
                <button onClick={() => onDelete(outgoing.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Outgoings;
