"use client";
import React from "react";
import DataTable from "./dataTable";
import { Button } from "@heroui/button";
import api from "@/app/api/api";
import DeleteButton from "./components/deleteButton";

const columns = [
  { key: "name", label: "Nombre", sortable: true },
  { key: "surname", label: "Apellidos", sortable: true },
  { key: "birthdate", label: "Fecha de nacimiento", sortable: true },
  { key: "rfc", label: "RFC", sortable: true },
  {
    key: "actions",
    label: "Acciones",
    sortable: false,
    render: (item: any, onDelete: (row: any) => void) => (
      <DeleteButton item={item} onDelete={() => onDelete(item)} />
    ),
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
