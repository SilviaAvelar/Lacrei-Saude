// src/components/Footer/Footer.styles.ts
import Link from 'next/link';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.lacreiGrey};
  padding: ${({ theme }) => theme.spacings.xlarge} 21rem;
  border-top: 1px solid ${({ theme }) => theme.colors.lacreiLightGrey};
  flex-shrink: 0;

  @media (max-width: 1100px) {
    padding: ${({ theme }) => theme.spacings.large} 8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.medium} ${({ theme }) => theme.spacings.small};
  }
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.large};
`;

export const LogoAndNavSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.large};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacings.medium}; 
  }
`;

export const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    flex: 1;
    // min-width: 200px;
    // max-width: 250px;
  }
`;

export const LogoLink = styled(Link)`
  display: inline-block;
  img {
    display: block;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.medium};
  margin-top: ${({ theme }) => theme.spacings.large};
`;

export const SocialIconLink = styled.a`
  color: ${({ theme }) => theme.colors.lacreiGreen};
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
  svg {
    width: 2rem;
    height: 2rem;
    display: block;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.lacreiDarkGreenButtonBg || '#016a4f'};
    transform: scale(1.1);
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.lacreiGreen};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.small};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 1;
    // min-width: 180px;
    // max-width: 220px;
    text-align: left;
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 1px)) {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacings.medium};
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const ColumnTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.mediumPlus};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lacreiGreen};
  margin: 0 0 ${({ theme }) => theme.spacings.xsmall} 0;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xsmall};
`;

export const FooterLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.lacreiGrey};
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.lacreiGreen};
    text-decoration: underline;
  }
`;

export const DisclaimerArea = styled.div`
  padding-top: ${({ theme }) => theme.spacings.medium};
  border-top: 1px solid ${({ theme }) => theme.colors.lacreiLightGrey};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xsmall};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

export const DisclaimerText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1.6;
  margin: 0;

  a {
    color: ${({ theme }) => theme.colors.lacreiGreen};
    font-weight: 600;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const CopyrightArea = styled.div`
  padding-top: ${({ theme }) => theme.spacings.xsmall};
`;

export const CopyrightText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0;
`;