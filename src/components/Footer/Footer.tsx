//src/components/Footer/Footer.tsx
'use client';

import Image from 'next/image';
import * as S from './Footer.styles';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const navSections = [
    {
        title: 'Lacrei Saúde',
        links: [
            { label: 'Quem Somos', href: '/quem-somos' },
            { label: 'Nosso Propósito', href: '/nosso-proposito' },
            { label: 'Missão, Visão e Valor', href: '/missao-visao-valor' },
            { label: 'Acessibilidade', href: '/acessibilidade' },
        ],
    },
    {
        title: 'Saúde',
        links: [
            { label: 'Buscar atendimento', href: '/buscar-atendimento' },
            { label: 'Oferecer atendimento', href: '/oferecer-atendimento' },
        ],
    },
    {
        title: 'Segurança e Privacidade',
        links: [
            { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
            { label: 'Termos de Uso', href: '/termos-de-uso' },
            { label: 'Direitos de Titular', href: '/direitos-de-titular' },
        ],
    },
];

const socialLinks = [
    {
        label: 'Facebook da Lacrei Saúde',
        href: 'https://www.facebook.com/lacrei.saude/',
        icon: <FaFacebookF />,
    },
    {
        label: 'Instagram da Lacrei Saúde',
        href: 'https://www.instagram.com/lacrei.saude/',
        icon: <FaInstagram />,
    },
    {
        label: 'LinkedIn da Lacrei Saúde',
        href: 'https://www.linkedin.com/company/lacrei-saude/posts/?feedView=all', 
        icon: <FaLinkedinIn />,
    },
    {
        label: 'Email de contato da Lacrei Saúde',
        href: 'mailto:contato@lacreisaude.com.br', 
        icon: <MdOutlineMail />,
    },
];

const Footer = () => {
    return (
        <S.FooterWrapper>
            <S.MainContentContainer>
                <S.LogoAndNavSection>
                    <S.LogoColumn>
                        <S.LogoLink href="/" aria-label="Página principal da Lacrei Saúde">
                            <Image
                                src="/global-logo.svg" 
                                alt="Lacrei Saúde"
                                width={170}
                                height={48}
                            />
                        </S.LogoLink>
                        <S.SocialIconsContainer>
                            {socialLinks.map((social) => (
                                <S.SocialIconLink
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                >
                                    {social.icon}
                                </S.SocialIconLink>
                            ))}
                        </S.SocialIconsContainer>
                    </S.LogoColumn>

                    {navSections.map((section) => (
                        <S.LinkColumn key={section.title}>
                            <S.ColumnTitle>{section.title}</S.ColumnTitle>
                            <S.LinkList>
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <S.FooterLink href={link.href}>
                                            {link.label}
                                        </S.FooterLink>
                                    </li>
                                ))}
                            </S.LinkList>
                        </S.LinkColumn>
                    ))}
                </S.LogoAndNavSection>

                <S.DisclaimerArea>
                    <S.DisclaimerText>
                        A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de
                        emergência procure o hospital mais próximo.
                    </S.DisclaimerText>
                    <S.DisclaimerText>
                        Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site{' '}
                        <a href="https://www.cvv.org.br" target="_blank" rel="noopener noreferrer">
                            www.cvv.org.br
                        </a>
                    </S.DisclaimerText>
                    <S.CopyrightArea>
                        <S.CopyrightText>
                            Copyright © {new Date().getFullYear()} Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65
                        </S.CopyrightText>
                    </S.CopyrightArea>
                </S.DisclaimerArea>
            </S.MainContentContainer>
        </S.FooterWrapper>
    );
};

export default Footer;