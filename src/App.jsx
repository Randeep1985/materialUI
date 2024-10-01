import { useState } from "react";

import "./App.css";
import { Button, styled, Typography, useTheme } from "@mui/material";
import React from "react";
import { Settings } from "@mui/icons-material";

function App() {

  const DisabledButton = styled(Button)({
    randomColor:"red",
    "&:hover":{
      backgroundColor:"green"
    },
    "&:disabled":{
      backgroundColor:"blue"
    }
  })



  return (
    <>
      <Button variant="text">Text</Button>
      <Button
        color="violet"
        variant="contained"
        startIcon={<Settings />}
        // sx={{ bgcolor: 'ochre.dark' }}        
        size="small"
      >
        Contained
      </Button>

      <DisabledButton variant="outlined">Outlined</DisabledButton>
      <DisabledButton variant="outlined">Outlined 2</DisabledButton>

      <Button href="#text-buttons">Link</Button>

      <Typography  variant="h1" >
        h1. Heading
      </Typography>
    </>
  );
}

export default App;
