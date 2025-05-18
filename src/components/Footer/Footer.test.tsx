// src/components/Footer/Footer.test.tsx
import { render, screen } from '@testing-library/react';
import Footer from './Footer'; // Ajuste o caminho se necessário
import { ThemeProvider } from 'styled-components';
import mockTheme from '@/styles/theme'; // Seu tema ou mock

describe('Footer Component', () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={mockTheme}>
                <Footer />
            </ThemeProvider>
        );
    });

    it('renders the logo', () => {
        const logoImage = screen.getByAltText('Lacrei Saúde');
        expect(logoImage).toBeInTheDocument();
    });

    it('renders navigation section titles', () => {
        // highlight-start
        expect(screen.getByRole('heading', { name: /^lacrei saúde$/i, level: 3 })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /^saúde$/i, level: 3 })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /^segurança e privacidade$/i, level: 3 })).toBeInTheDocument();
        // highlight-end
    });

    it('renders specific navigation links with correct hrefs', () => {
        const quemSomosLink = screen.getByRole('link', { name: /quem somos/i });
        expect(quemSomosLink).toBeInTheDocument();
        expect(quemSomosLink).toHaveAttribute('href', '/quem-somos');

        const politicaLink = screen.getByRole('link', { name: /política de privacidade/i });
        expect(politicaLink).toBeInTheDocument();
        expect(politicaLink).toHaveAttribute('href', '/politica-de-privacidade');
    });

    it('renders social media icons with correct links', () => {
        const facebookLink = screen.getByLabelText(/facebook da lacrei saúde/i);
        expect(facebookLink).toBeInTheDocument();
        expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/lacrei.saude/');

        const instagramLink = screen.getByLabelText(/instagram da lacrei saúde/i);
        expect(instagramLink).toBeInTheDocument();
        expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/lacrei.saude/');
    });

    it('renders the copyright text', () => {
        const currentYear = new Date().getFullYear();
        const copyrightRegex = new RegExp(`Copyright © ${currentYear} Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65`, 'i');
        expect(screen.getByText(copyrightRegex)).toBeInTheDocument();
    });

    it('renders disclaimer texts', () => {
        expect(screen.getByText(/A Lacrei Saúde não oferece tratamento médico emergencial/i)).toBeInTheDocument();
        expect(screen.getByText(/Em caso de auxílio psicológico, ligue para 188 \(CVV\)/i)).toBeInTheDocument();
        const cvvLink = screen.getByRole('link', { name: /www.cvv.org.br/i });
        expect(cvvLink).toBeInTheDocument();
        expect(cvvLink).toHaveAttribute('href', 'https://www.cvv.org.br');
    });
});