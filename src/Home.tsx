/** @jsxImportSource @emotion/react */

import Button from '@mui/material-next/Button';
import Add from '@mui/icons-material/Add'
import { css } from '@emotion/react'

import { useNavigate } from "react-router-dom";

export const Home = () => {
	const nav = useNavigate();

    return (
      <>
        <h3>
          Lorcana Log
        </h3>
        <Button 
          size="large" 
          variant="filled"
          color="primary"
          startIcon={<Add />}
          css={css`margin-top: 20px`}
          onClick={() => nav("/logentry")}
          >
          Add Log Entry
        </Button>
      </>
    );
};