import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Container, AppBar, Toolbar, Typography, Box, Button, Stack } from '@mui/material';
import Card from './Card';
import AppButton from './Button';

const theme = createTheme({
    palette: {
        primary: { main: '#5c6bc1' },
        secondary: { main: '#ec407a' },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
    },
    shape: { borderRadius: 10 },
});

const CARDS = [
    { title: 'Analytics', desc: 'Real-time dashboard metrics and KPI tracking.', color: '#e8eaf6' },
    { title: 'Users', desc: 'Manage accounts, roles and access permissions.', color: '#fce4ec' },
    { title: 'Settings', desc: 'Configure app behaviour and integrations.', color: '#e0f2f1' },
];

export default function App() {
    const [active, setActive] = useState(null);
  
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static" elevation={0} sx={{ bgcolor: 'primary.main' }}>
                <Toolbar>
                    <Typography variant="h6" fontWeight={700} sx={{ flexGrow: 1 }}>
                        My MUI App
                    </Typography>
                    <AppButton variant="outlined" color="inherit" size="small">Sign In</AppButton>
                </Toolbar>
            </AppBar>

            <Container maxWidth="md" sx={{ py: 6 }}>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                    Dashboard
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={4}>
                    Welcome back! Here's what's happening today.
                </Typography>

                <Stack direction="row" spacing={3} flexWrap="wrap">
                    {CARDS.map((c) => (
                        <Card
                            key={c.title}
                            title={c.title}
                            description={c.desc}
                            bgcolor={c.color}
                            selected={active === c.title}
                            onSelect={() => setActive(c.title)}
                        />
                    ))}
                </Stack>

                {active && (
                    <Box mt={4} p={3} bgcolor="grey.50" borderRadius={2} border="1px solid" borderColor="grey.200">
                        <Typography variant="subtitle1" fontWeight={600}>{active} — Detail View</Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Extended content for the <strong>{active}</strong> section would render here.
                        </Typography>
                        <Button sx={{ mt: 2 }} variant="contained" size="small" onClick={() => setActive(null)}>
                            Close
                        </Button>
                    </Box>
                )}
            </Container>
        </ThemeProvider>
    );
}