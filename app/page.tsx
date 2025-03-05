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
      <div className="p-5 flex justify-between items-center bg-red-200">
        <div>Prueba Técnica</div>
        <div className="flex gap-3">
          <button
            className={`${selectedTable === "fisica" ? "text-blue-500 text-white" : "text-gray-800"}`}
            onClick={() => setSelectedTable("fisica")}
          >
            Fisica
          </button>
          <button
            className={` ${selectedTable === "moral" ? "text-blue-500 text-white" : "text-gray-800"}`}
            onClick={() => setSelectedTable("moral")}
          >
            Moral
          </button>
        </div>
        <Button color="primary">Button</Button>
      </div>

      <div className="p-5">
        {selectedTable === "fisica" ? <FisicaTable /> : <MoralTable />}
      </div>
    </div>
  );
}
