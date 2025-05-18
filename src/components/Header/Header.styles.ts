// src/components/Header/Header.styles.ts
import Link from 'next/link';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  height: 95px;
  padding: 0 10rem; 
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacings.small};
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LogoText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lacreiGreen};
  margin: 0;
  line-height: 1;
`;

export const NavAndActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {    
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.medium};
`;

export const NavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.small};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.mediumPlus};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lacreiGreen};
  letter-spacing: 0.02rem;
  text-decoration: none;
  height: 3rem;
  padding: 10px ${({ theme }) => theme.spacings.large};
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.lacreiGreen};
    background-color: ${({ theme }) => theme.colors.navLinkHoverBg};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary}; 
    font-weight: 900;    
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.lacreiGreen};
    outline-offset: 1px;
  }
`;

export const LoginActionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.small};
  position: relative;
  background-color: ${({ theme }) => theme.colors.lacreiGreen};
  border: 2px solid ${({ theme }) => theme.colors.lacreiGreen};
  color: ${({ theme }) => theme.colors.secondary};
  height: 3rem;
  padding: 10px ${({ theme }) => theme.spacings.large};
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.mediumPlus};
  font-weight: 700;
  letter-spacing: 0.02rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.lacreiGreen};
    border-color: ${({ theme }) => theme.colors.lacreiGreen};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.lacreiGreen};
    outline-offset: 1px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    // padding: 10px ${({ theme }) => theme.spacings.small};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.dropdownBorder};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 500;
  min-width: 212px;
  padding: ${({ theme }) => theme.spacings.small};
  display: flex;
  flex-direction: column;
`;

export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 48px;
  padding: 0 ${({ theme }) => theme.spacings.xsmall};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.dropdownText};
  text-decoration: none;
  text-transform: none;
  border-left: 4px solid transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dropdownBorder};
  margin-bottom: ${({ theme }) => theme.spacings.xsmall};
  padding-bottom: ${({ theme }) => theme.spacings.xsmall};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-left-color 0.2s ease-in-out;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  span > svg {
    margin-right: ${({ theme }) => theme.spacings.small};
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    color: ${({ theme }) => theme.colors.black}; 
    flex-shrink: 0;
    transition: color 0.2s ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lacreiLightGreen};
    color: ${({ theme }) => theme.colors.lacreiGreen};
    border-left-color: ${({ theme }) => theme.colors.lacreiDarkGreenButtonBg};

    span > svg {
      color: ${({ theme }) => theme.colors.lacreiGreen}; 
    }
  }

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lacreiGreen};
    background-color: ${({ theme }) => theme.colors.lacreiLightGreen};
    border-left-color: ${({ theme }) => theme.colors.lacreiDarkGreenButtonBg};
    // padding-left: calc(${({ theme }) => theme.spacings.xsmall} - 4px);

    span > svg {
      color: ${({ theme }) => theme.colors.lacreiGreen};
    }
  }
`;