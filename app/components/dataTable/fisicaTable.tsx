"use client";
import React from "react";
import DataTable from "./dataTable";

const columns = [
  { key: "name", label: "Nombre" },
  { key: "surname", label: "Apellidos" },
  { key: "birthdate", label: "Fecha de nacimiento" },
  { key: "rfc", label: "RFC" },
];

const data = [
  {
    key: "1",
    name: "Tony",
    surname: "Reichert",
    birthdate: "1980-05-12",
    rfc: "TRC800512XXX",
  },
  {
    key: "2",
    name: "Zoey",
    surname: "Lang",
    birthdate: "1990-08-15",
    rfc: "ZLG900815XXX",
  },
  {
    key: "3",
    name: "Jane",
    surname: "Fisher",
    birthdate: "1985-11-30",
    rfc: "JFS851130XXX",
  },
  {
    key: "4",
    name: "William",
    surname: "Howard",
    birthdate: "1978-03-22",
    rfc: "WHH780322XXX",
  },
];

export default function FisicaTable() {
  return <DataTable columns={columns} data={data} />;
}
