"use client";
import React from "react";
import { Button } from "@heroui/button";

interface NavbarProps {
  selectedTable: "fisica" | "moral";
  setSelectedTable: React.Dispatch<React.SetStateAction<"fisica" | "moral">>;
}

const Navbar: React.FC<NavbarProps> = ({ selectedTable, setSelectedTable }) => {
  return (
    <div className="p-5 flex justify-between items-center">
      <div>Prueba Técnica</div>
      <div className="flex gap-3">
        <button
          className={`transition-all duration-300 ${
            selectedTable === "fisica"
              ? "text-blue-500 text-white"
              : "text-gray-400 hover:text-black"
          }`}
          onClick={() => setSelectedTable("fisica")}
        >
          Fisica
        </button>
        <button
          className={`transition-all duration-300 ${
            selectedTable === "moral"
              ? "text-blue-500 text-white"
              : "text-gray-400 hover:text-black"
          }`}
          onClick={() => setSelectedTable("moral")}
        >
          Moral
        </button>
      </div>
      <Button color="primary">Añadir Usuario +</Button>
    </div>
  );
};

export default Navbar;
