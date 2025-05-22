"use client";

import { useState } from "react";
import inititalOutgoings from "../../data/outgoings.json";

export default function Home() {
  const [outgoings, setOutgoings] = useState(inititalOutgoings);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const columns = ["title", "amount", "category", "date"];

  const handleDelete = (id) => {
    setOutgoings(outgoings.filter((outgoing) => outgoing.id !== id));
  };

  const filteredOutgoings = outgoings.filter((outgoing) => {
    const matchCategory = categoryFilter
      ? outgoing.category === categoryFilter
      : true;
    const matchDate = dateFilter ? outgoing.date === dateFilter : true;

    return matchCategory && matchDate;
  });

  return (
    <>
      <div id="filters">
        <p>Filters: </p>
        <label htmlFor="category-filter">Category: </label>
        <select
          id="category-filter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All categories</option>
          <option value="Jedzenie">Food</option>
          <option value="Rachunki">Bills</option>
          <option value="Rozrywka">Entertainment</option>
        </select>
        <label htmlFor="date-filter">Date: </label>
        <input
          id="date-filter"
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
      </div>

      <h2>Outgoings</h2>
      <table id="outgoings">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOutgoings.map((outgoing) => (
            <tr key={outgoing.id}>
              {columns.map((column) => (
                <td key={column}>{outgoing[column]}</td>
              ))}
              <td>
                <button onClick={() => handleDelete(outgoing.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
