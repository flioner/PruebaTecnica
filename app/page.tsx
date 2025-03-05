"use client";
import React, { useState } from "react";
import FisicaTable from "./components/dataTable/fisicaTable";
import MoralTable from "./components/dataTable/moralTable";
import { Button } from "@heroui/react";

export default function Home() {
  const [selectedTable, setSelectedTable] = useState<"fisica" | "moral">(
    "fisica"
  );

  return (
    <div>
      <div className="p-5 flex justify-between items-center">
        <div>Prueba Técnica</div>
        <div className="flex gap-3">
          <button
            className={`transition-all duration-300  ${selectedTable === "fisica" ? "text-blue-500 text-white" : "text-gray-400 hover:text-black"}`}
            onClick={() => setSelectedTable("fisica")}
          >
            Fisica
          </button>
          <button
            className={`transition-all duration-300  ${selectedTable === "moral" ? "text-blue-500 text-white" : "text-gray-400 hover:text-black"}`}
            onClick={() => setSelectedTable("moral")}
          >
            Moral
          </button>
        </div>
        <Button color="primary">Añadir Usuario</Button>
      </div>

      <div className="p-5">
        {selectedTable === "fisica" ? <FisicaTable /> : <MoralTable />}
      </div>
    </div>
  );
}
