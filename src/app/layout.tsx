// src/app/layout.tsx
import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import ClientProviders from '@/components/ClientProviders/ClientProviders';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Lacrei Saúde',
  description: 'Conectando você ao cuidado seguro.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerHeight = '95px';

  return (
    <html lang="pt-BR" style={{ height: '100%' }}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <StyledComponentsRegistry>
          <ClientProviders>
            <Header />
            <main style={{
              paddingTop: headerHeight,
              flex: '1 0 auto'
            }}>
              {children}
            </main>
            <Footer /> 
          </ClientProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}