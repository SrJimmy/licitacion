import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import licitacion from "../helpers/licitacion";

export default function Form() {
  const [presupuestoBase, setPresupuestoBase] = useState("");

  const handlePresupuestoBaseChange = (event) => {
    setPresupuestoBase(event.target.value);
  };

  const [licitadores, setLicitadores] = useState([
    { nombre: "", oferta: undefined, temeraria: false },
  ]);

  const handleLicitadoresChange = (index, event) => {
    const values = [...licitadores];
    if (event.target.name === "oferta") {
      values[index] = {
        ...values[index],
        [event.target.name]: parseFloat(event.target.value),
      };
    } else {
      values[index] = {
        ...values[index],
        [event.target.name]: event.target.value,
      };
    }
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
      <Box component="form" onSubmit={handleFormSubmit}>
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
          />
        </Box>

        {licitadores.map((licitador, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", gap: 3, mb: 1 }}
          >
            <TextField
              label="Nombre"
              name="nombre"
              onChange={(event) => handleLicitadoresChange(index, event)}
              required
              size="small"
              sx={{ width: "50%" }}
              value={licitador.nombre}
              variant="outlined"
            />
            <TextField
              label="Oferta"
              name="oferta"
              onChange={(event) => handleLicitadoresChange(index, event)}
              required
              size="small"
              sx={{ width: "50%" }}
              value={licitador.oferta}
              variant="outlined"
            />
          </Box>
        ))}
      </Box>

      <TableContainer sx={{ mt: 6 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Oferta</TableCell>
              <TableCell>Temeraria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultados.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.nombre}</TableCell>
                <TableCell>{item.oferta}</TableCell>
                <TableCell>{item.temeraria ? "Sí" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
