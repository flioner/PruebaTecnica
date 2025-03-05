"use client";
import React from "react";
import DataTable from "./dataTable";

const columns = [
  { key: "commercialName", label: "Nombre comercial" },
  { key: "incorporationDate", label: "Fecha de constitución" },
  { key: "businessType", label: "Giro" },
  { key: "rfc", label: "RFC" },
];

const data = [
  {
    key: "1",
    commercialName: "Tech Solutions",
    incorporationDate: "2010-06-25",
    businessType: "Software Development",
    rfc: "TSO100625ABC",
  },
  {
    key: "2",
    commercialName: "Green Energy Co.",
    incorporationDate: "2015-09-10",
    businessType: "Renewable Energy",
    rfc: "GEC150910XYZ",
  },
  {
    key: "3",
    commercialName: "HealthFirst",
    incorporationDate: "2012-03-18",
    businessType: "Healthcare Services",
    rfc: "HFI120318LMN",
  },
  {
    key: "4",
    commercialName: "AutoMotive Plus",
    incorporationDate: "2008-11-05",
    businessType: "Automobile Manufacturing",
    rfc: "AMP081105DEF",
  },
];

export default function MoralTable() {
  return <DataTable columns={columns} data={data} />;
}
