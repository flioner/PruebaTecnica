"use client";
import React from "react";
import DataTable from "./dataTable";
import api from "@/app/api/api";
const columns = [
  { key: "commercialName", label: "Nombre comercial" },
  { key: "incorporationDate", label: "Fecha de constitución" },
  { key: "businessType", label: "Giro" },
  { key: "rfc", label: "RFC" },
];

const data = api.getMoralData();

export default function MoralTable() {
  return <DataTable columns={columns} data={data} />;
}
