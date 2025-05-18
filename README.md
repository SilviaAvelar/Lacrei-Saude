# Lacrei Saúde - Desafio Frontend

Bem-vindo ao repositório do desafio frontend da Lacrei Saúde! Este projeto é uma aplicação Next.js construída com TypeScript e Styled-components, focada em criar uma interface amigável e acessível para conectar pacientes e profissionais da saúde da comunidade LGBTQIAPN+.

**Link da Aplicação em Produção:** [COLOQUE_SEU_LINK_DA_VERCEL_AQUI]
*(Exemplo: https://lacrei-saude-challenge-seu-usuario.vercel.app)*

## 📋 Sumário

- [🚀 Rodando o Projeto Localmente](#-rodando-o-projeto-localmente)
- [🛠️ Build e Deploy](#️-build-e-deploy)
- [🧪 Testes Aplicados](#-testes-aplicados)
- [⏪ Rollback Simples](#-rollback-simples)
- [🎨 Escolhas Visuais e Técnicas](#-escolhas-visuais-e-técnicas)
- [🔗 (Opcional) Simulação de API Back-end](#-opcional-simulação-de-api-back-end)

## 🚀 Rodando o Projeto Localmente

Siga estas instruções para configurar e rodar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

- Node.js (versão recomendada: LTS, ex: 18.x ou 20.x)
- npm (o projeto foi configurado para ser compatível com npm)

### Passos para Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO_GIT]
    cd lacrei-saude-challenge 
    ```
    *(Substitua `[URL_DO_SEU_REPOSITORIO_GIT]` pela URL do seu repositório e `lacrei-saude-challenge` pelo nome da pasta do seu projeto, se for diferente).*

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configuração de Variáveis de Ambiente (Opcional):**
    Este projeto, na sua forma atual, não requer variáveis de ambiente específicas para rodar localmente. Se futuras integrações (ex: API real) forem adicionadas, um arquivo `.env.local` poderá ser necessário.

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Abra [http://localhost:3000](http://localhost:3000) (ou a porta indicada no terminal) no seu navegador para ver a aplicação.

## 🛠️ Build e Deploy

### Build para Produção

Para criar uma build otimizada do projeto para produção:

```bash
npm run build
Use code with caution.
Markdown
Este comando gerará a pasta .next com os arquivos da build.
Deploy
A aplicação foi implantada utilizando a plataforma Vercel.
Link de Produção: [COLOQUE_SEU_LINK_DA_VERCEL_AQUI]
(Exemplo: https://lacrei-saude-challenge-seu-usuario.vercel.app)
Processo de Deploy (Vercel):
O código é enviado para o repositório Git (ex: GitHub).
A Vercel é conectada a este repositório e detecta automaticamente os pushes para a branch principal (geralmente main).
Um novo build é iniciado usando o comando npm run build.
Após o build bem-sucedido, a nova versão é automaticamente implantada e se torna a versão de produção.

🧪 Testes Aplicados
Este projeto utiliza Jest e React Testing Library para a implementação de testes unitários, com foco em garantir a correta renderização e funcionalidade básica dos componentes principais.
Componentes Testados:
Header Component:
Verificação da renderização da imagem do logo da Lacrei Saúde.
Confirmação da presença dos links de navegação principais: "Quem Somos" e "Ajuda".
Garantia da renderização do botão de ação "Entrar".
Observação: Hooks de navegação do Next.js (usePathname, useRouter) foram mockados para o ambiente de teste.
Footer Component:
Verificação da renderização da imagem do logo da Lacrei Saúde.
Confirmação da presença dos títulos das seções de navegação: "Lacrei Saúde", "Saúde", e "Segurança e Privacidade".
Teste de renderização de links específicos (ex: "Quem Somos", "Política de Privacidade") e validação dos seus atributos href.
Verificação da renderização dos ícones de mídia social e seus respectivos links.
Garantia da presença do texto de copyright (incluindo o ano dinâmico) e dos textos de disclaimer.
Como Rodar os Testes:
Para executar os testes unitários e verificar a integridade dos componentes, utilize o seguinte comando na raiz do projeto:
npm test
Use code with caution.
Bash
Para rodar os testes em modo "watch", que re-executa os testes automaticamente ao detectar alterações nos arquivos:
npm run test:watch
Use code with caution.
Bash
Para gerar um relatório de cobertura de código (se a configuração do Jest estiver habilitada para isso):
npm run test:coverage
Use code with caution.
Bash
Ferramentas Utilizadas:
Jest: Framework de testes JavaScript.
React Testing Library (@testing-library/react): Biblioteca para testar componentes React de forma que se assemelhe mais a como o usuário os utiliza.
@testing-library/jest-dom: Fornece matchers customizados para Jest para facilitar asserções sobre o estado do DOM (ex: toBeInTheDocument(), toHaveAttribute()).
Styled Components (ThemeProvider): Os componentes foram envolvidos com o ThemeProvider e um objeto de tema (real ou mockado) para garantir a correta aplicação dos estilos durante os testes.
Considerações Adicionais:
Os testes focam na verificação da UI renderizada e interações básicas.
Mocks foram utilizados para dependências externas ou hooks específicos do Next.js que não funcionam nativamente no ambiente de teste do Jest sem um setup de router completo.

⏪ Rollback Simples
A estratégia de rollback depende da plataforma de deploy utilizada.
Vercel (Recomendado):
Acesse o dashboard do seu projeto na Vercel.
Vá para a aba "Deployments".
Você verá uma lista de todos os deploys anteriores, cada um associado a um commit Git.
Encontre a versão estável anterior à qual deseja retornar.
Clique no menu de opções (geralmente "...") ao lado do deploy desejado e selecione "Redeploy" ou, mais diretamente, "Promote to Production". Isso tornará aquela versão específica a ativa novamente de forma rápida.
Outras Plataformas (Manual / Git):
Usando Git:
Identifique o hash do commit da versão estável anterior: git log
Reverta os commits problemáticos na branch principal e faça um novo push, que acionará um novo deploy no pipeline (se configurado):
git revert [HASH_DO_COMMIT_PROBLEMATICO]
git push origin main
Use code with caution.
Bash
Estratégia Geral: Manter um histórico de commits limpo e descritivo no Git é fundamental para identificar pontos de rollback. Pipelines de CI/CD configurados para deploy automático a partir de branches específicas facilitam o processo.

🎨 Escolhas Visuais e Técnicas
Visuais
Estilização: Styled-components foi a biblioteca escolhida para a estilização, permitindo a criação de componentes com escopo de CSS isolado, forte integração com JavaScript/TypeScript e theming dinâmico. Isso promove a reutilização e manutenibilidade dos estilos.
Guia de Estilo: O desenvolvimento visual seguiu as diretrizes do Marsha Design System da Lacrei Saúde, utilizando as cores, tipografia (Nunito), espaçamentos e princípios de design fornecidos para garantir a identidade visual e a experiência acolhedora da marca.
Tema: Um arquivo src/styles/theme.ts centraliza as constantes de design (cores, fontes, espaçamentos, breakpoints), que são injetadas nos componentes através do ThemeProvider do Styled-components.
Responsividade: A aplicação foi desenvolvida com foco na responsividade, utilizando media queries para adaptar o layout e os componentes a diferentes tamanhos de tela (mobile, tablet, desktop), garantindo uma boa experiência de usuário em todos os dispositivos.
Acessibilidade (A11y): Foram aplicadas práticas de acessibilidade, como o uso de HTML semântico, atributos alt para imagens, contraste de cores adequado (conforme o guia de estilo), aria-labels para elementos interativos e foco na navegabilidade por teclado.
Ícones: A biblioteca react-icons foi utilizada para a inclusão de ícones SVG, permitindo consistência e fácil customização.
Técnicas
Framework: Next.js (versão 15.x com App Router) foi utilizado como framework principal, aproveitando seus recursos como roteamento baseado em sistema de arquivos, renderização otimizada (Client Components para interatividade), e um ecossistema robusto para desenvolvimento e build.
Linguagem: TypeScript foi empregado para adicionar tipagem estática, melhorando a qualidade do código, a detecção precoce de erros e a experiência de desenvolvimento em equipe.
Gerenciamento de Estado: Para o estado local dos componentes, foram utilizados os hooks do React (useState, useEffect, useRef). Não foi necessário um gerenciador de estado global complexo para o escopo atual do projeto.
Estrutura de Pastas: O projeto segue uma estrutura organizada, com uma clara separação entre rotas (src/app/(pages)/), componentes reutilizáveis (src/components/), estilos (*.styles.ts e src/styles/), e mocks/dados.
ESLint e Prettier: Configurados para manter a consistência do código, seguir padrões de formatação e identificar potenciais problemas de qualidade.
Navegação: A navegação entre páginas é gerenciada pelo sistema de roteamento do Next.js, utilizando o componente Link de next/link e o hook useRouter de next/navigation.

🔗 (Opcional) Simulação de API Back-end
Para o escopo deste desafio, não foi implementada uma integração com API back-end. As funcionalidades de login são simuladas com um alert(), e os dados de navegação (como os links no Header e Footer) são definidos estaticamente no código frontend.
Dados Mockados: Itens de navegação e conteúdo estático das páginas são definidos diretamente nos componentes ou em arrays/objetos locais.
Interações: Ações como submissão de formulários de login resultam em alertas, indicando que a funcionalidade não está conectada a um sistema de autenticação real neste desafio.

Desenvolvido por Silvia Avelar