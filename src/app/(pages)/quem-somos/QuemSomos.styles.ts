// src/app/(pages)/quem-somos/QuemSomos.styles.ts
import styled from 'styled-components';
import NextImage from 'next/image';

export const QuemSomosWrapper = styled.main`
  padding-top: ${({ theme }) => `calc(95px + ${theme.spacings.xlarge})`};
  padding-bottom: ${({ theme }) => theme.spacings.xlarge};
  min-height: 'calc(100vh - 95px)';
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacings.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacings.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacings.small};
  }
`;

export const HeroSectionQuemSomos = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 55rem; 

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    gap: ${({ theme }) => theme.spacings.large};
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 35.4rem;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 35.4rem;
    align-items: center;
  }
`;

export const MainHeadline = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const HeadlineDivider = styled.div`
  width: 10rem;
  height: 2px;
  background: ${({ theme }) => theme.colors.lacreiGreen};
  border-radius: 4px;
  margin-top: ${({ theme }) => theme.spacings.xsmall};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

export const ParagraphHero = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
  color: #2D2D2D;
  width: 34rem;
  max-width: 100%;
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 34rem;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ImageBlock = styled.div`
  width: 30.7rem;
  margin-top: 8rem;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 30.7rem;
    margin-top: ${({ theme }) => theme.spacings.large};
  }
`;

export const StyledImage = styled(NextImage)`
  width: 100%;
  height: auto;
  border-radius: 2rem;
  object-fit: cover;
  display: block;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

export const MotivationSection = styled.section`
  margin-top: ${({ theme }) => `calc(${theme.spacings.xlarge} + ${theme.spacings.xlarge})`};
  padding-top: ${({ theme }) => theme.spacings.xlarge};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;  
`;

export const MotivationTitle = styled.h2`
  width: 48rem;
  max-width: 100%;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 3rem;
  text-align: center;
  margin-bottom: 0;
  padding:0;

  @media (max-width: 48rem) {
    width: 90%;
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export const MotivationDivider = styled.div`
  width: 10rem;
  height: 3px;
  background: ${({ theme }) => theme.colors.lacreiGreen};
  border-radius: 4px;
  margin-top: ${({ theme }) => theme.spacings.xsmall};
  margin-bottom: ${({ theme }) => theme.spacings.large};
`;

export const MotivationParagraph = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 60ch; 
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  &:last-of-type {
    margin-bottom: 0;
  }
`;