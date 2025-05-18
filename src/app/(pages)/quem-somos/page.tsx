// src/app/(pages)/quem-somos/page.tsx
'use client';

import * as S from './QuemSomos.styles';

export default function QuemSomosPage() {
    return (
        <S.QuemSomosWrapper>
            <S.ContentContainer>
                <S.HeroSectionQuemSomos>
                    <S.TextBlock>
                        <S.MainHeadline>
                            Atendimento qualificado, seguro e inclusivo
                        </S.MainHeadline>
                        <S.HeadlineDivider />
                        <S.ParagraphHero>
                            Acreditamos que, ao possibilitar a inclusão clínica da
                            nossa comunidade, transformamos o mundo.
                        </S.ParagraphHero>
                        <S.ParagraphHero>
                            Foi pensando nisso, que a Lacrei Saúde nasceu em 2020
                            com o propósito de oferecer a melhor experiência no
                            acesso à profissionais da saúde para as pessoas LGBTQIAPN+.
                        </S.ParagraphHero>
                        <S.ParagraphHero>
                            Atuamos de forma ética e embasada nas regras e diretrizes
                            estabelecidas pelos órgãos de classe e regulamentadores.
                        </S.ParagraphHero>
                    </S.TextBlock>
                    <S.ImageBlock>
                        <S.StyledImage
                            src="/about-us-image.png" 
                            alt="Ilustração ou foto que represente o cuidado e a inclusão na Lacrei Saúde"
                            width={491} 
                            height={491} 
                            priority 
                        />
                    </S.ImageBlock>
                </S.HeroSectionQuemSomos>

                <S.MotivationSection>
                    <S.MotivationTitle>
                        Missão, visão e valores da Lacrei Saúde
                    </S.MotivationTitle>
                    <S.MotivationDivider />
                    <S.MotivationParagraph>
                        O que nos motiva
                    </S.MotivationParagraph>
                </S.MotivationSection>
            </S.ContentContainer>
        </S.QuemSomosWrapper>
    );
}