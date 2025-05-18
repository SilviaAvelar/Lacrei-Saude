// src/app/(pages)/profissional/page.tsx
'use client';

import * as S from './Profissional.styles';

export default function ProfissionalPage() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Funcionalidade de login não implementada neste desafio.');
    };

    return (
        <S.LoginPageWrapper>
            <S.LoginContainer>
                <S.ContentSide>
                    <S.Title>Acesso Profissional</S.Title>
                    <S.Subtitle>
                        Gerencie seu perfil, agendamentos e conecte-se com pacientes
                        na plataforma Lacrei Saúde.
                    </S.Subtitle>
                    <S.Form onSubmit={handleSubmit}>
                        <div>
                            <S.Label htmlFor="loginField">Email ou CRM/CRP</S.Label>
                            <S.Input
                                type="text"
                                id="loginField"
                                name="loginField"
                                placeholder="Digite seu email ou registro profissional"
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
                        <S.StyledLink href="#">Quero me cadastrar como profissional</S.StyledLink>
                    </S.LinksContainer>
                </S.ContentSide>
                <S.ImageSide>
                    <S.StyledNextImage
                        src="/images/placeholder-login-profissional.svg" 
                        alt="Ilustração decorativa para a página de login de profissionais da saúde"
                        layout="fill"
                        priority
                    />
                </S.ImageSide>
            </S.LoginContainer>
        </S.LoginPageWrapper>
    );
}