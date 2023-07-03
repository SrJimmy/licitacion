import React from "react";
import { Box, Typography } from "@mui/material";

export default function TemplateResult({ presupuestoBase, resultados }) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Resultados del cálculo
      </Typography>
      <Typography>
        Resultados del cálculo para un presupuesto base de licitación (PBL) de{" "}
        <b>{presupuestoBase}</b>€ y las siguientes <b>{resultados.length}</b>{" "}
        ofertas presentadas por los licitadores, siguiendo lo citado en el{" "}
        Artículo 85.3 RGLCAP:
      </Typography>
      {resultados.map((item, index) => (
        <ul>
          <li key={index}>
            La oferta de la entidad <b>{item.nombre}</b> que asciende a{" "}
            <b>{item.oferta}</b>€ y supone una baja del{" "}
            <b>{(100 - (item.oferta / presupuestoBase) * 100).toFixed(2)}</b>%
            sobre el PBL, presenta valores{" "}
            <b>{item.temeraria ? "anormales" : "normales"}</b>.
          </li>
        </ul>
      ))}
    </Box>
  );
}
