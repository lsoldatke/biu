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

  const filteredOutgoings: Outgoing[] = outgoings.filter((outgoing) => {
    const matchCategory = categoryFilter
      ? outgoing.category === categoryFilter
      : true;
    const matchDate = dateFilter ? outgoing.date === dateFilter : true;

    return matchCategory && matchDate;
  });

  const handleAdd = (newOutgoing: Outgoing) => {
    setOutgoings((prevOutgoings) => [...prevOutgoings, newOutgoing]);
  };

  const handleEdit = (updatedOutgoing: Outgoing) => {
    setOutgoings(
      outgoings.map((outgoing) =>
        outgoing.id === updatedOutgoing.id ? updatedOutgoing : outgoing
      )
    );
  };

  const handleDelete = (id: number) => {
    setOutgoings(outgoings.filter((outgoing) => outgoing.id !== id));
  };

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
          setEditingOutgoing(null);
          setIsFormOpen(true);
        }}
        onEdit={(outgoing: Outgoing) => {
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
          isEditing={true}
          initialValues={editingOutgoing}
          onSubmit={handleEdit}
          onClose={() => {
            setEditingOutgoing(null);
            setIsFormOpen(false);
          }}
        />
      )}
      {isFormOpen && !editingOutgoing && (
        <OutgoingForm
          isEditing={false}
          onSubmit={handleAdd}
          onClose={() => {
            setIsFormOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Home;
