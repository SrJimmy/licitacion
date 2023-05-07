import React, { useState } from "react";
import { Container, Box, Button, TextField } from "@mui/material";

import licitacion from "../helpers/licitacion";

export default function Form() {
  const [presupuestoBase, setPresupuestoBase] = useState("");

  const handlePresupuestoBaseChange = (event) => {
    setPresupuestoBase(event.target.value);
  };

  const [licitadores, setInputField] = useState([
    { nombre: "", oferta: "", temeraria: false },
  ]);

  const handleLicitadoresChange = (index, event) => {
    const values = [...licitadores];
    values[index][event.target.name] = event.target.value;
    setInputField(values);
  };

  const addLicitador = () => {
    setInputField([
      ...licitadores,
      { nombre: "", oferta: "", temeraria: false },
    ]);
  };

  const rmLicitador = () => {
    if (licitadores.length > 1) {
      setInputField(licitadores.slice(0, -1));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(licitacion(presupuestoBase, licitadores));
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleFormSubmit}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3 }}>
          <Button
            color="success"
            onClick={addLicitador}
            sx={{ width: "33%" }}
            variant="contained"
          >
            Añadir licitador
          </Button>
          <Button
            color="primary"
            sx={{ width: "33%" }}
            type="submit"
            variant="contained"
          >
            Calcular
          </Button>
          <Button
            color="error"
            onClick={rmLicitador}
            sx={{ width: "33%" }}
            variant="contained"
          >
            Quitar licitador
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
    </Container>
  );
}
