"use client";
import React, { useEffect, useState } from "react";
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

  /* Sección dedicada al manejo de la API simulada*/
  const [count, setCount] = useState(0);
  const [selectedTable, setSelectedTable] = useState<"fisica" | "moral">(
    "fisica"
  );
  const [fisicaData, setFisicaData] = useState(api.getFisicaData());
  const [moralData, setMoralData] = useState(api.getMoralData());
  const [refetch, setRefetch] = useState<{
    modifiedTable: string;
    shouldRefresh: boolean;
  }>({
    modifiedTable: "",
    shouldRefresh: false,
  });

  useEffect(() => {
    /* Como no es una API de verdad, hacemos el refetch con useEffect y useState cuando le damos sumbit*/
    if (refetch.shouldRefresh) {
      setCount(count + 1);
      if (refetch.modifiedTable === "fisica") {
        setFisicaData(api.getFisicaData());
        setSelectedTable("fisica");
      } else if (refetch.modifiedTable === "moral") {
        setMoralData(api.getMoralData());
        setSelectedTable("moral");
      }
      setRefetch({ modifiedTable: "", shouldRefresh: false });
    }
  }, [refetch]);
  /* Fin de Sección de API simualda*/

  return (
    <div>
      <Navbar
        selectedTable={selectedTable}
        setSelectedTable={setSelectedTable}
        onOpen={onOpen} /* Controla al Modal de Agregar Usuario*/
      />

      <div className="p-5">
        {selectedTable === "fisica" ? (
          <FisicaTable key={count} data={fisicaData} />
        ) : (
          <MoralTable key={count} data={moralData} />
        )}
      </div>

      <Form
        isOpen={isOpen}
        setRefetch={setRefetch}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}
