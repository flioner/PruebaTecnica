"use client";
import React from "react";
import DataTable from "./dataTable";
import api from "@/app/api/api";

const columns = [
  { key: "commercialName", label: "Nombre comercial" },
  { key: "incorporationDate", label: "Fecha de constitución" },
  { key: "businessType", label: "Giro" },
  { key: "rfc", label: "RFC" },
  {
    key: "actions",
    label: "Acciones",
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
