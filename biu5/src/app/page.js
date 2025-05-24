"use client";

import { useState } from "react";
import inititalOutgoings from "../../data/outgoings.json";
import Filters from "./components/Filters";
import OutgoingDetails from "./components/OutgoingDetails";
import Outgoings from "./components/Outgoings";

export default function Home() {
  const [outgoings, setOutgoings] = useState(inititalOutgoings);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [selectedOutgoing, setSelectedOutgoing] = useState("");

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
      <Filters
        categoryFilter={categoryFilter}
        dateFilter={dateFilter}
        onCategoryChange={setCategoryFilter}
        onDateChange={setDateFilter}
      />
      <Outgoings
        outgoings={filteredOutgoings}
        onSelect={setSelectedOutgoing}
        onDelete={handleDelete}
      />

      {selectedOutgoing && (
        <OutgoingDetails
          outgoing={selectedOutgoing}
          onClose={() => setSelectedOutgoing(null)}
        />
      )}
    </>
  );
}
