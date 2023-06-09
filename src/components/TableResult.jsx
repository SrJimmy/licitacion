import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function TableResult({ resultados }) {
  return (
    <TableContainer sx={{ mb: 0 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Licitador</TableCell>
            <TableCell>Oferta</TableCell>
            <TableCell>Anormalmente baja</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultados.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.nombre}</TableCell>
              <TableCell>{item.oferta.toLocaleString("es-ES", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}</TableCell>
              <TableCell>
                <Typography color={item.temeraria ? "error" : ""}>
                  {item.temeraria ? "Sí" : "No"}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
