"use client";

import { useState } from "react";
import inititalOutgoings from "../../data/outgoings.json";

export default function Home() {
  const [outgoings, setOutgoings] = useState(inititalOutgoings);
  const columns = ["title", "amount", "category", "date"];

  const handleDelete = (id) => {
    setOutgoings(outgoings.filter((outgoing) => outgoing.id !== id));
  };

  return (
    <table>
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
              <button onClick={() => handleDelete(outgoing.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
