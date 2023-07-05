import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { mediaOfertas } from "../helpers/licMath.js";

export default function TemplateResult({ presupuestoBase, resultados }) {
  const numLicts = resultados.length;
  const media = mediaOfertas(resultados);

  return (
    <>
      <Box sx={{ mb: 0 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Resultados del cálculo
        </Typography>
        <Typography>
          Resultados del cálculo para un presupuesto base de licitación (PBL) de{" "}
          <b>{presupuestoBase}</b>€ y las siguientes <b>{numLicts}</b> ofertas
          presentadas por los licitadores, siguiendo lo citado en el Artículo
          85.3 RGLCAP:
        </Typography>
        {resultados.map((item, index) => (
          <ul>
            <li key={index}>
              La oferta de la entidad <b>{item.nombre}</b> que asciende a{" "}
              <b>
                {item.oferta.toLocaleString("es-ES", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </b>
              € y supone una baja del{" "}
              <b>{(100 - (item.oferta / presupuestoBase) * 100).toFixed(2)}</b>%
              sobre el PBL, presenta valores{" "}
              <Typography
                display="inline"
                color={item.temeraria ? "error" : ""}
              >
                <b>{item.temeraria ? "anormales" : "normales"}</b>.
              </Typography>
            </li>
          </ul>
        ))}
      </Box>
      <TableContainer sx={{ mb: 1 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Baja superior a 25%</TableCell>
              <TableCell>Media aritmética</TableCell>
              <TableCell>Media -10%</TableCell>
              <TableCell>Media +10%</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {(presupuestoBase * 0.75).toLocaleString("es-ES", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </TableCell>
              <TableCell>
                {media.toLocaleString("es-ES", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </TableCell>
              <TableCell>
                {(media * 0.9).toLocaleString("es-ES", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </TableCell>
              <TableCell>
                {(media * 1.1).toLocaleString("es-ES", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
