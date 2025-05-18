// src/app/home/page.tsx
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as S from './Home.styles';

export default function HomePage() {
    const router = useRouter();

    const handleNavigate = (path: string) => {
        router.push(path);
    };

    return (
        <>
            <S.HeroSection>
                <S.BackgroundImageWrapper>
                    <Image
                        src="/banner.png" 
                        alt="Banner principal da Lacrei Saúde" 
                        layout="fill"
                        objectFit="cover"
                        quality={75}
                        priority
                    />
                </S.BackgroundImageWrapper>

                <S.ContentWrapper>
                    <S.MainTitle>
                        Olá, você está <br />
                        na Lacrei Saúde!
                    </S.MainTitle>
                    <S.Subtitle>
                        Conectamos pessoas com <strong>profissionais de saúde qualificados</strong>,
                        proporcionando experiências de cuidado seguras e inclusivas.
                    </S.Subtitle>
                    <S.ButtonGroup>
                        <S.ActionButton onClick={() => handleNavigate('/pessoa-usuaria')}>
                            Para pacientes
                        </S.ActionButton>
                        <S.ActionButton onClick={() => handleNavigate('/profissional')}>
                            Para profissionais
                        </S.ActionButton>
                    </S.ButtonGroup>
                </S.ContentWrapper>
            </S.HeroSection>
        </>
    );
}