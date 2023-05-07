import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  TextField
} from '@mui/material';

export default function Form() {
  const [inputField, setInputField] = useState(
    [{ nombre: '', oferta: '', temeraria: false }]
  );

  const handleChange = (index, event) => {
    const values = [...inputField];
    values[index][event.target.name] = event.target.value;
    setInputField(values);
  };

  const addLicitador = () => {
    setInputField([...inputField, { nombre: '', oferta: '', temeraria: false }]);
  };

  const rmLicitador = () => {
    if (inputField.length > 1) {
      setInputField(inputField.slice(0, -1));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputField);
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
          <Button variant="contained" color="success" onClick={addLicitador} sx={{ width: '33%' }}>Añadir licitador</Button>
          <Button type="submit" variant="contained" color="primary" sx={{ width: '33%' }}>Calcular</Button>
          <Button variant="contained" color="error" onClick={rmLicitador} sx={{ width: '33%' }}>Quitar licitador</Button>
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField required type="number" name="presupuestoBase" label="Presupuesto Base" size="small" variant="outlined" sx={{ width: '100%' }} />
        </Box>

        {inputField.map((inputField, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 1 }}>
            <TextField required name="nombre" label="Nombre" value={inputField.nombre} size="small" variant="outlined" onChange={(event) => handleChange(index, event)} sx={{ width: '50%' }} />
            <TextField required name="oferta" label="Oferta" value={inputField.oferta} size="small" variant="outlined" onChange={(event) => handleChange(index, event)} sx={{ width: '50%' }} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};