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
  const [count, setCount] = useState(0); // Se le pone como key a la tabla para forzar un re-render
  const [selectedTable, setSelectedTable] = useState<"fisica" | "moral">(
    "fisica"
  ); // Para controlar con botones, o al darle sumbit que tabla estamos viendo

  /* Llamada inicial a la API falsa */
  const [fisicaData, setFisicaData] = useState(api.getFisicaData());
  const [moralData, setMoralData] = useState(api.getMoralData());

  /* Refetch Simulado, en una API de verdad esto estaría en una sola linea*/
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
      if (refetch.modifiedTable === "fisica") {
        setFisicaData(api.getFisicaData()); // Actualizamos Datos
        setSelectedTable("fisica"); // Mostramos la tabla correcta
      } else if (refetch.modifiedTable === "moral") {
        setMoralData(api.getMoralData());
        setSelectedTable("moral");
      }
      setRefetch({ modifiedTable: "", shouldRefresh: false });
      setCount(count + 1);
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
          <FisicaTable key={count} data={fisicaData} setRefetch={setRefetch} />
        ) : (
          <MoralTable key={count} data={moralData} setRefetch={setRefetch} />
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
