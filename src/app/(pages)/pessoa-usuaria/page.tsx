// src/app/(pages)/pessoa-usuaria/page.tsx
'use client';

import * as S from './PessoaUsuaria.styles';

export default function PessoaUsuariaPage() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Funcionalidade de login não implementada neste desafio.');
    };

    return (
        <S.LoginPageWrapper>
            <S.LoginSectionContainer>
                <S.ContentSide>
                    <S.Title>Boas vindas à Lacrei Saúde</S.Title>
                    <S.Subtitle>
                        Sua plataforma de saúde que conecta pacientes e profissionais
                        da comunidade LGBTQIAPN+.
                    </S.Subtitle>
                    <S.Form onSubmit={handleSubmit}>
                        <div>
                            <S.Label htmlFor="email">Email</S.Label>
                            <S.Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu email"
                                required
                            />
                        </div>
                        <div>
                            <S.Label htmlFor="password">Senha</S.Label>
                            <S.Input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Digite sua senha"
                                required
                            />
                        </div>
                        <S.SubmitButton type="submit">Entrar</S.SubmitButton>
                    </S.Form>
                    <S.LinksContainer>
                        <S.StyledLink href="#">Esqueci minha senha</S.StyledLink>
                        <S.StyledLink href="#">Criar uma conta</S.StyledLink>
                    </S.LinksContainer>
                </S.ContentSide>
                <S.ImageSide>
                    <S.StyledNextImage
                        src="/illustration-login.svg"
                        alt="Ilustração decorativa para a página de login de pacientes"
                        layout="fill"
                        priority
                    />
                </S.ImageSide>
            </S.LoginSectionContainer>
        </S.LoginPageWrapper>
    );
}