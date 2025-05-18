// src/components/ClientProviders/ClientProviders.tsx
'use client'; 

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/globalStyle'; 
import theme from '@/styles/theme';             

interface ClientProvidersProps {
    children: React.ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children} 
        </ThemeProvider>
    );
}