import React from "react";
import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";

export default function Header({ title }) {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ mb: 3 }}>
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
