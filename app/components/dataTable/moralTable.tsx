"use client";
import React from "react";
import DataTable from "./dataTable";

const columns = [
  { key: "name", label: "Name" },
  { key: "surname", label: "Surname" },
  { key: "birthdate", label: "Date of Birth" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
];

const data = [
  {
    key: "1",
    name: "Tony",
    surname: "Reichert",
    birthdate: "1980-05-12",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey",
    surname: "Lang",
    birthdate: "1990-08-15",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane",
    surname: "Fisher",
    birthdate: "1985-11-30",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William",
    surname: "Howard",
    birthdate: "1978-03-22",
    role: "Community Manager",
    status: "Vacation",
  },
];

export default function MoralTable() {
  return <DataTable columns={columns} data={data} />;
}
