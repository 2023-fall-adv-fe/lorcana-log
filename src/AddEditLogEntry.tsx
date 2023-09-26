/** @jsxImportSource @emotion/react */

import Button from '@mui/material-next/Button';
import { css } from '@emotion/react'
import { useNavigate } from "react-router-dom";

export const AddEditLogEntry = () => {

    const nav = useNavigate();

    return (
        <>
        <h3>
            Add/Edit Log Entry
        </h3>
        <Button 
            size="large" 
            variant="filled"
            color="primary"
            css={css`margin-top: 20px`}
            onClick={() => nav(-1)}
        >
            Done
        </Button>
        </>

    );
};