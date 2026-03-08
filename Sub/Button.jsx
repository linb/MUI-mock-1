import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';

/**
 * AppButton — Thin wrapper around MUI Button with loading state support.
 *
 * Props:
 *   loading  {boolean}  Show spinner and disable interaction
 *   All other MUI Button props are forwarded as-is.
 */
export default function AppButton({ children, loading = false, disabled, startIcon, sx, ...rest }) {
    return (
        <MuiButton
            disabled={disabled || loading}
            startIcon={loading ? <CircularProgress size={14} color="inherit" /> : startIcon}
            sx={{ textTransform: 'none', fontWeight: 600, ...sx }}
            {...rest}
        >
            {children}
        </MuiButton>
    );
}
