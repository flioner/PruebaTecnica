"use client";
import React from "react";
import DataTable from "./dataTable";

const columns = [
  { key: "commercialName", label: "Nombre comercial" },
  { key: "incorporationDate", label: "Fecha de constitución" },
  { key: "businessType", label: "Giro" },
];

const data = [
  {
    key: "1",
    commercialName: "Tech Solutions",
    incorporationDate: "2010-06-25",
    businessType: "Software Development",
  },
  {
    key: "2",
    commercialName: "Green Energy Co.",
    incorporationDate: "2015-09-10",
    businessType: "Renewable Energy",
  },
  {
    key: "3",
    commercialName: "HealthFirst",
    incorporationDate: "2012-03-18",
    businessType: "Healthcare Services",
  },
  {
    key: "4",
    commercialName: "AutoMotive Plus",
    incorporationDate: "2008-11-05",
    businessType: "Automobile Manufacturing",
  },
];

export default function MoralTable() {
  return <DataTable columns={columns} data={data} />;
}
