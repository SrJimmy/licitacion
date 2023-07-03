import React, { useState } from "react";
import { Container, Box, Button, TextField, Typography } from "@mui/material";

import TableResult from "./TableResult";
import TemplateResult from "./TemplateResult";

import licitacion from "../helpers/licitacion";

export default function Form() {
  const [presupuestoBase, setPresupuestoBase] = useState("");

  const handlePresupuestoBaseChange = (event) => {
    setPresupuestoBase(event.target.value);
  };

  const [licitadores, setLicitadores] = useState([
    { nombre: "", oferta: "", temeraria: false },
  ]);

  const handleLicitadoresChange = (index, event) => {
    const values = [...licitadores];
    let newValue;
    if (event.target.name === "oferta") {
      newValue = parseFloat(event.target.value);
      if (isNaN(newValue)) {
        newValue = undefined;
      }
    } else {
      newValue = event.target.value;
    }
    values[index] = {
      ...values[index],
      [event.target.name]: newValue,
    };
    setLicitadores(values);
  };

  const addLicitador = () => {
    setLicitadores([
      ...licitadores,
      { nombre: "", oferta: "", temeraria: false },
    ]);
  };

  const rmLicitador = () => {
    if (licitadores.length > 1) {
      setLicitadores(licitadores.slice(0, -1));
    }
  };

  const resetForm = () => {
    setPresupuestoBase("");
    setLicitadores([{ nombre: "", oferta: "", temeraria: false }]);
  };

  const [resultados, setResultados] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedLicitadores = licitadores.map((licitador) => {
      return { ...licitador, temeraria: false };
    });
    setLicitadores(updatedLicitadores);
    const result = licitacion(presupuestoBase, updatedLicitadores);
    setResultados(result);
    console.log(result);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" align="center">
          Cálculo licitación pública
        </Typography>
        <Typography variant="h6" align="center">
          Contratos mayores
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleFormSubmit} sx={{ mb: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3 }}>
          <Button
            color="success"
            onClick={addLicitador}
            sx={{ width: "25%" }}
            variant="contained"
          >
            Añadir
          </Button>
          <Button
            color="primary"
            sx={{ width: "25%" }}
            type="submit"
            variant="outlined"
          >
            Calcular
          </Button>
          <Button
            color="secondary"
            onClick={resetForm}
            sx={{ width: "25%" }}
            variant="outlined"
          >
            Reset
          </Button>
          <Button
            color="error"
            onClick={rmLicitador}
            sx={{ width: "25%" }}
            variant="contained"
          >
            Quitar
          </Button>
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            label="Presupuesto Base"
            name="presupuestoBase"
            onChange={handlePresupuestoBaseChange}
            required
            size="small"
            sx={{ width: "100%" }}
            value={presupuestoBase}
            variant="outlined"
            type="number"
            step={0.01}
          />
        </Box>

        {licitadores.map((licitador, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", gap: 3, mb: 2 }}
          >
            <TextField
              label="Licitador"
              name="nombre"
              onChange={(event) => handleLicitadoresChange(index, event)}
              required
              size="small"
              sx={{ width: "60%" }}
              value={licitador.nombre}
              variant="outlined"
            />
            <TextField
              label="Oferta"
              name="oferta"
              onChange={(event) => handleLicitadoresChange(index, event)}
              required
              size="small"
              sx={{ width: "40%" }}
              value={licitador.oferta}
              variant="outlined"
              type="number"
              step={0.01}
            />
          </Box>
        ))}
      </Box>

      <TemplateResult
        presupuestoBase={presupuestoBase}
        resultados={resultados}
      />
      <TableResult resultados={resultados} />
    </Container>
  );
}
