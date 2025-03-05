"use client";
import React from "react";
import DataTable from "./dataTable";

const columns = [
  { key: "name", label: "Nombre" },
  { key: "surname", label: "Apellidos" },
  { key: "birthdate", label: "Fecha de nacimiento" },
  { key: "rfc", label: "RFC" },
];

interface FisicaTableProps {
  data: Array<{
    key: string;
    name: string;
    surname: string;
    birthdate: string;
    rfc: string;
  }>;
}

export default function FisicaTable({ data }: FisicaTableProps) {
  return <DataTable columns={columns} data={data} />;
}
