function OutgoingDetails({ outgoing, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{outgoing.title}</h2>
        <p>
          <strong>Description:</strong> {outgoing.description}
        </p>
        <p>
          <strong>Category:</strong> {outgoing.category}
        </p>
        <p>
          <strong>Date:</strong> {outgoing.date}
        </p>
        <p>
          <strong>Amount:</strong> {outgoing.amount} zł
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default OutgoingDetails;
