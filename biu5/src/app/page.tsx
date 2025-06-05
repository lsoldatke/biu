"use client";

import { useState } from "react";
import inititalOutgoings from "../../data/outgoings.json";
import Filters from "./components/Filters";
import OutgoingDetails from "./components/OutgoingDetails";
import OutgoingForm from "./components/OutgoingForm";
import Outgoings from "./components/Outgoings";
import { Outgoing } from "./types";

const Home = () => {
  const [outgoings, setOutgoings] = useState(inititalOutgoings);
  const [selectedOutgoing, setSelectedOutgoing] = useState(null);
  const [editingOutgoing, setEditingOutgoing] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const handleAdd = (newOutgoing) => {
    setOutgoings((prevOutgoings) => [...prevOutgoings, newOutgoing]);
  };

  const handleEdit = (updatedOutgoing) => {
    setOutgoings(
      outgoings.map((outgoing) =>
        outgoing.id === updatedOutgoing.id ? updatedOutgoing : outgoing
      )
    );
  };

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
        onAdd={() => {
          setEditingOutgoing("");
          setIsFormOpen(true);
        }}
        onEdit={(outgoing) => {
          setEditingOutgoing(outgoing);
          setIsFormOpen(true);
        }}
        onDelete={handleDelete}
      />

      {selectedOutgoing && (
        <OutgoingDetails
          outgoing={selectedOutgoing}
          onClose={() => setSelectedOutgoing(null)}
        />
      )}
      {isFormOpen && editingOutgoing && (
        <OutgoingForm
          initialValues={editingOutgoing}
          onSubmit={handleEdit}
          isEditing={true}
          onClose={() => {
            setEditingOutgoing("");
            setIsFormOpen(false);
          }}
        />
      )}
      {isFormOpen && !editingOutgoing && (
        <OutgoingForm
          onSubmit={handleAdd}
          isEditing={false}
          onClose={() => {
            setIsFormOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Home;
