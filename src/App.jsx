import React, { useState } from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  InputAdornment
} from '@mui/material';

import {
  Add,
  Delete,
  Business,
  Sell
} from '@mui/icons-material';

const App = () => {
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
    setInputField(inputField.slice(0, -1));
  };

  return (
    <>
      <CssBaseline />

      <AppBar position="relative" sx={{ mb: 3 }}>
        <Toolbar>
          <Typography variant="h6">Consorcio</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}>
          <Button
            variant="contained"
            color="success"
            startIcon={<Add />}
            onClick={addLicitador}
          >
            Añadir licitador
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<Delete />}
            onClick={rmLicitador}
          >
            Quitar licitador
          </Button>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ mb: 3 }}>
        <form>
          {inputField.map((inputField, index) => (
            <Box key={index} sx={{ mb: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}>
              <TextField
                name="nombre"
                label="Nombre"
                value={inputField.nombre}
                size="small"
                variant="outlined"
                onChange={(event) => handleChange(index, event)}
                InputProps={{ startAdornment: (<InputAdornment position="start"><Business /></InputAdornment>) }}
              />
              <TextField
                name="oferta"
                label="Oferta"
                value={inputField.oferta}
                size="small"
                variant="outlined"
                onChange={(event) => handleChange(index, event)}
                InputProps={{ startAdornment: (<InputAdornment position="start"><Sell /></InputAdornment>) }}
              />
            </Box>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log(inputField)}
          >
            Calcular
          </Button>
        </form>
      </Container>
    </>
  );
}

export default App;