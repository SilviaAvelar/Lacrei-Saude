// src/app/home/Home.styles.ts
import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 33.6875rem; /* 540px */
  padding: ${({ theme }) => theme.spacings.large} 7.625rem;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;

  @media (max-width: 1100px) {
    padding: ${({ theme }) => theme.spacings.medium} 7rem;
    min-height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.medium} ${({ theme }) => theme.spacings.small};
    align-items: center;
    text-align: center;
  }
`;

export const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.625rem;
  color: ${({ theme }) => theme.colors.lacreiGreen};
  margin-top: 3rem;
  margin-bottom: ${({ theme }) => theme.spacings.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
    line-height: 3rem;
    margin-top: ${({ theme }) => theme.spacings.large};
  }
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
  color: ${({ theme }) => theme.colors.lacreiGrey};
  margin-bottom: ${({ theme }) => theme.spacings.large};

  strong {
    font-weight: 700;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: ${({ theme }) => theme.spacings.medium};
  }
`;

export const ButtonGroup = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.spacings.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: ${({ theme }) => theme.spacings.small};
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.small};
  position: relative;
  background-color: ${({ theme }) => theme.colors.lacreiGreen};
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.lacreiGreen};
  border-radius: 8px;
  min-width: 13.25rem;
  height: 3rem;
  padding: 10px ${({ theme }) => theme.spacings.medium};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.mediumPlus};
  font-weight: 700;
  letter-spacing: 0.02rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${({ theme }) => theme.colors.lacreiDarkGreenButtonBg || '#016a4f'};
    border-color: ${({ theme }) => theme.colors.lacreiDarkGreenButtonBg || '#016a4f'};
    transform: translateY(-2px);
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.lacreiDarkGreenButtonBg || '#016a4f'};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 300px;
  }
`;