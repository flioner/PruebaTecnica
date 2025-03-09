"use client";
import React from "react";
import DataTable from "./dataTable";
import api from "@/app/api/api";
import DeleteButton from "./components/deleteButton";

const columns = [
  { key: "commercialName", label: "Nombre comercial", sortable: true },
  { key: "incorporationDate", label: "Fecha de constitución", sortable: true },
  { key: "businessType", label: "Giro", sortable: true },
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

interface MoralTableProps {
  data: Array<{
    key: string;
    commercialName: string;
    incorporationDate: string;
    businessType: string;
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
  api.removeMoralData(row.key);
  setRefetch({ modifiedTable: "moral", shouldRefresh: true });
};

export default function MoralTable({ data, setRefetch }: MoralTableProps) {
  const onDeleteHandler = (row: any) => {
    handleDelete(row, setRefetch);
  };
  return <DataTable columns={columns} data={data} onDelete={onDeleteHandler} />;
}
