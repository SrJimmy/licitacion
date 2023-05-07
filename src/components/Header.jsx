import React from "react";
import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";

export default function Header(props) {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ mb: 3 }}>
        <Toolbar>
          <Typography variant="h6">{props.title}</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
