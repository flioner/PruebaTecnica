"use client";
import React from "react";
import DataTable from "./dataTable";
import api from "@/app/api/api";

const columns = [
  { key: "name", label: "Nombre" },
  { key: "surname", label: "Apellidos" },
  { key: "birthdate", label: "Fecha de nacimiento" },
  { key: "rfc", label: "RFC" },
];

const data = api.getFisicaData();

export default function FisicaTable() {
  return <DataTable columns={columns} data={data} />;
}
