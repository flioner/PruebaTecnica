"use client";
import React, { useState } from "react";
import FisicaTable from "./components/dataTable/fisicaTable";
import MoralTable from "./components/dataTable/moralTable";
import Navbar from "./components/navigation/navbar";
import Form from "./components/form/form";
import { useDisclosure } from "@heroui/react";
import { InitializeAPI } from "./api/apiInitialization";
import api from "./api/api";

export default function Home() {
  InitializeAPI();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedTable, setSelectedTable] = useState<"fisica" | "moral">(
    "fisica"
  );

  const moralData = api.getMoralData();
  const fisicaData = api.getFisicaData();

  return (
    <div>
      <Navbar
        selectedTable={selectedTable}
        setSelectedTable={setSelectedTable}
        onOpen={onOpen} /* Controla al Modal de Agregar Usuario*/
      />

      <div className="p-5">
        {selectedTable === "fisica" ? (
          <FisicaTable data={fisicaData} />
        ) : (
          <MoralTable data={moralData} />
        )}
      </div>

      <Form isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
