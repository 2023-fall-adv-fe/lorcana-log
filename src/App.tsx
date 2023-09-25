/** @jsxImportSource @emotion/react */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material-next/Button';
import Add from '@mui/icons-material/Add'
import { css } from '@emotion/react'

function App() {
  return (
    <div className="App">
      <Button 
        size="large" 
        variant="filled"
        color="primary"
        startIcon={<Add />}
        css={css`margin-top: 20px`}
      >
        Add Log Entry
      </Button>
    </div>
  );
}

export default App;
