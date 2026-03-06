import React from 'react';
import {
    Card as MuiCard, CardContent, CardActions,
    Typography, Button, Box, Chip,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

/**
 * Card — Reusable info card built on top of MUI Card.
 *
 * Props:
 *   title        {string}
 *   description  {string}
 *   bgcolor      {string}   Background colour for the card header band
 *   selected     {boolean}
 *   onSelect     {Function}
 */
export default function Card({ title, description, bgcolor = '#f5f5f5', selected, onSelect }) {
    return (
        <MuiCard
            elevation={selected ? 6 : 1}
            onClick={onSelect}
            sx={{
                width: 220,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: '2px solid',
                borderColor: selected ? 'primary.main' : 'transparent',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 },
            }}
        >
            {/* Coloured header band */}
            <Box sx={{ height: 8, bgcolor }} />

            <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                    <Typography variant="subtitle1" fontWeight={700}>
                        {title}
                    </Typography>
                    {selected && <Chip label="Active" size="small" color="primary" />}
                </Box>
                <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
                    {description}
                </Typography>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
                <Button size="small" endIcon={<OpenInNewIcon fontSize="inherit" />} sx={{ textTransform: 'none' }}>
                    Open
                </Button>
            </CardActions>
        </MuiCard>
    );
}
