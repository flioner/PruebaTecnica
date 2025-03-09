"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from "@heroui/react";
import { useAsyncList } from "@react-stately/data";
import DeleteButton from "./components/deleteButton";

interface RowData {
  key: string;
  [key: string]: string;
}

interface DataTableProps {
  columns: { key: string; label: string; render?: string }[];
  data: RowData[];
  onDelete: (row: RowData) => void;
}

export default function DataTable({ columns, data, onDelete }: DataTableProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  let list = useAsyncList<RowData>({
    async load() {
      setIsLoading(false);
      return { items: data };
    },
    async sort({ items, sortDescriptor }) {
      const { column, direction } = sortDescriptor;
      return {
        items: [...items].sort((a, b) => {
          let first = a[column];
          let second = b[column];

          let cmp = first.localeCompare(second, undefined, { numeric: true });

          return direction === "descending" ? -cmp : cmp;
        }),
      };
    },
  });

  return (
    <Table
      aria-label="Data Table"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
    >
      <TableHeader>
        {columns.map(({ key, label }) => (
          <TableColumn key={key} allowsSorting>
            {label}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={list.items}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => {
              if (
                columns.find(
                  (col) => col.key === columnKey && col.key === "actions"
                )
              ) {
                return (
                  <TableCell>
                    <DeleteButton item={item} onDelete={onDelete} />
                  </TableCell>
                );
              }

              return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export const DeleteIcon = () => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
    >
      <path
        d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M8.60834 13.75H11.3833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.91669 10.4167H12.0834"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
