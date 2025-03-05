"use client";
import React, { useState } from "react";
import FisicaTable from "./components/dataTable/fisicaTable";
import MoralTable from "./components/dataTable/moralTable";
import Navbar from "./components/navigation/navbar";
import Form from "./components/form/form";
import { useDisclosure } from "@heroui/react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selectedTable, setSelectedTable] = useState<"fisica" | "moral">(
    "fisica"
  );

  return (
    <div>
      <Navbar
        selectedTable={selectedTable}
        setSelectedTable={setSelectedTable}
        onOpen={onOpen}
      />

      <div className="p-5">
        {selectedTable === "fisica" ? <FisicaTable /> : <MoralTable />}
      </div>

      <Form isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
