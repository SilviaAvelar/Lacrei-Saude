// src/app/(pages)/profissional/Profissional.styles.ts
import styled from 'styled-components';
import NextImage from 'next/image';

export const LoginPageWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 95px;
  box-sizing: border-box;
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    margin: ${({ theme }) => theme.spacings.medium};
    max-width: 600px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: ${({ theme }) => theme.spacings.small};
  }
`;

export const ContentSide = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacings.xlarge};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacings.large};
    order: 2;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.medium};
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lacreiGreen};
  margin-bottom: ${({ theme }) => theme.spacings.small};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.lacreiGrey};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacings.large};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium};
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.lacreiGrey};
  margin-bottom: ${({ theme }) => theme.spacings.xsmall};
  display: block;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.small};
  border: 1px solid ${({ theme }) => theme.colors.lacreiLightGrey};
  border-radius: 4px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.lacreiGreen};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.lacreiLightGreen};
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.small};
  background-color: ${({ theme }) => theme.colors.lacreiGreen};
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.lacreiGreen};
  border-radius: 8px;
  width: 100%;
  height: 3rem;
  padding: 10px ${({ theme }) => theme.spacings.medium};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.mediumPlus};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lacreiDarkGreenButtonBg || '#016a4f'};
    border-color: ${({ theme }) => theme.colors.lacreiDarkGreenButtonBg || '#016a4f'};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.lacreiDarkGreenButtonBg || '#016a4f'};
    outline-offset: 2px;
  }
`;

export const LinksContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacings.medium};
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacings.small};
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.lacreiGreen};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImageSide = styled.div`
  flex: 1.2;
  background-color: #e0f2eb; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
    min-height: 300px;
    flex: none;
    width: 100%;
  }
`;

export const StyledNextImage = styled(NextImage)`
  object-fit: cover;
`;