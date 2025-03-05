"use client";
import React from "react";
import DataTable from "./dataTable";

const columns = [
  { key: "commercialName", label: "Nombre comercial" },
  { key: "incorporationDate", label: "Fecha de constitución" },
  { key: "businessType", label: "Giro" },
  { key: "rfc", label: "RFC" },
];

interface MoralTableProps {
  data: Array<{
    key: string;
    commercialName: string;
    incorporationDate: string;
    businessType: string;
    rfc: string;
  }>;
}

export default function MoralTable({ data }: MoralTableProps) {
  return <DataTable columns={columns} data={data} />;
}
