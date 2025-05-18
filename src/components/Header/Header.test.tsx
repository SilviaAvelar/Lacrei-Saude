// src/components/Header/Header.test.tsx
import '@testing-library/jest-dom'; 
import { render, screen } from '@testing-library/react';
import Header from './Header'; 
import { ThemeProvider } from 'styled-components';
import mockTheme from '@/styles/theme'; 

jest.mock('next/navigation', () => ({
    usePathname: jest.fn().mockReturnValue('/'), 
    useRouter: jest.fn(() => ({ 
        push: jest.fn(),
    })),
}));

describe('Header Component', () => {
    it('renders the logo', () => {
        render(
            <ThemeProvider theme={mockTheme}>
                <Header />
            </ThemeProvider>
        );
        const logoImage = screen.getByAltText('Lacrei Saúde');
        expect(logoImage).toBeInTheDocument();
    });

    it('renders navigation links "Quem Somos" and "Ajuda"', () => {
        render(
            <ThemeProvider theme={mockTheme}>
                <Header />
            </ThemeProvider>
        );
        expect(screen.getByRole('link', { name: /quem somos/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /ajuda/i })).toBeInTheDocument();
    });

    it('renders the "Entrar" button', () => {
        render(
            <ThemeProvider theme={mockTheme}>
                <Header />
            </ThemeProvider>
        );
        expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
    });
});