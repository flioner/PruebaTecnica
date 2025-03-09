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
  columns: Array<{
    key: string;
    label: string;
    sortable: boolean;
    render?: (item: any, onDelete: (row: any) => void) => React.ReactNode;
  }>;
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
        {columns.map(({ key, label, sortable }) => (
          <TableColumn key={key} allowsSorting={sortable}>
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
              const column = columns.find((col) => col.key === columnKey);
              return (
                <TableCell>
                  {column?.render
                    ? column.render(item, onDelete)
                    : getKeyValue(item, columnKey)}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
