"use client";
import React, { useState } from "react";
import FisicaTable from "./components/dataTable/fisicaTable";
import MoralTable from "./components/dataTable/moralTable";
import { Button } from "@heroui/react";
import Navbar from "./components/navigation/navbar";

export default function Home() {
  const [selectedTable, setSelectedTable] = useState<"fisica" | "moral">(
    "fisica"
  );

  return (
    <div>
      <Navbar
        selectedTable={selectedTable}
        setSelectedTable={setSelectedTable}
      />

      <div className="p-5">
        {selectedTable === "fisica" ? <FisicaTable /> : <MoralTable />}
      </div>
    </div>
  );
}
