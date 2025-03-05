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

interface RowData {
  key: string;
  [key: string]: string;
}

interface DataTableProps {
  columns: { key: string; label: string }[];
  data: RowData[];
}

export default function DataTable({ columns, data }: DataTableProps) {
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
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
