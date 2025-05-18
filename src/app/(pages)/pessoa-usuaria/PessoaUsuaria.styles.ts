// src/app/(pages)/pessoa-usuaria/PessoaUsuaria.styles.ts
import styled from 'styled-components';
import NextImageComponent from 'next/image';
import Link from 'next/link';

export const LoginPageWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
    background: linear-gradient(rgb(245, 255, 251) 1.9225rem, rgb(255, 255, 255) calc(15vh)) no-repeat;
`;

export const LoginSectionContainer = styled.section`
    display: flex;
    max-width: 1100px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const ContentSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 52%;
    padding: 2rem 0; 

    @media (max-width: 900px) {
        width: 100%;
        padding: 1rem 0;
        align-items: center;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 1.75rem;
    color: #018762;
    margin-bottom: 0.5rem;
    font-weight: 700;
`;

export const Subtitle = styled.p`
    font-size: 1rem;
    color: rgb(31, 31, 31);
    margin-bottom: 2rem;
    line-height: 1.6;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 400px; 
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 900px) {
        align-items: stretch; 
    }
`;

export const Label = styled.label`
    display: block;
    font-size: 0.875rem;
    color: rgb(31, 31, 31);
    margin-bottom: 0.5rem;
    font-weight: 600;
    text-align: left; 
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.2s;
    background-color: #fff; 
    color: #333;

    &:focus {
        outline: none;
        border-color: #018762;
    }

    &::placeholder {
        color: #aaa;
    }
`;

export const SubmitButton = styled.button`
    background-color: #018762;
    color: white;
    padding: 0.875rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #017352;
    }
`;

export const LinksContainer = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
`;

export const StyledLink = styled(Link)`
    color: #018762;
    text-decoration: none;
    font-size: 0.875rem;

    &:hover {
        text-decoration: underline;
    }
`;

export const ImageSide = styled.div`
    width: 48%;
    position: relative; 
    aspect-ratio: 506 / 421;

    @media (max-width: 900px) {
        width: 80%; 
        max-width: 400px; 
        margin-top: 2rem; 
        order: -1;         
    }

    @media (max-width: 600px) {
        width: 100%; 
    }
`;

export const StyledNextImage = styled(NextImageComponent)`    
    object-fit: contain;
`;