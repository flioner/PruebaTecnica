"use client";
import React from "react";
import DataTable from "./dataTable";
import { Button } from "@heroui/button";
import api from "@/app/api/api";

const columns = [
  { key: "name", label: "Nombre" },
  { key: "surname", label: "Apellidos" },
  { key: "birthdate", label: "Fecha de nacimiento" },
  { key: "rfc", label: "RFC" },
  {
    key: "actions",
    label: "Acciones",
  },
];

interface FisicaTableProps {
  data: Array<{
    key: string;
    name: string;
    surname: string;
    birthdate: string;
    rfc: string;
  }>;
  setRefetch: React.Dispatch<
    React.SetStateAction<{ modifiedTable: string; shouldRefresh: boolean }>
  >;
}

const handleDelete = (
  row: any,
  setRefetch: React.Dispatch<
    React.SetStateAction<{ modifiedTable: string; shouldRefresh: boolean }>
  >
) => {
  api.removeFisicaData(row.key);
  setRefetch({ modifiedTable: "fisica", shouldRefresh: true });
};

export default function FisicaTable({ data, setRefetch }: FisicaTableProps) {
  const onDeleteHandler = (row: any) => {
    handleDelete(row, setRefetch);
  };
  return <DataTable columns={columns} data={data} onDelete={onDeleteHandler} />;
}
