🚀 Desafio Frontend - Lacrei Saúde
Bem-vindo ao repositório do desafio Frontend da Lacrei Saúde! Esta aplicação foi desenvolvida com Next.js (App Router), TypeScript e Styled-components, focando em uma interface acessível, responsiva e amigável à comunidade LGBTQIAPN+.

🔗 Link da aplicação em produção: https://lacrei-saude-challenge-seu-usuario.vercel.app
📌 Substitua com seu link real após deploy na Vercel.

📑 Sumário
📦 Rodando o Projeto Localmente

📤 Build e Deploy

🧪 Testes Aplicados

⏪ Rollback Simples

🎨 Decisões Visuais e Técnicas

🔗 Simulação de API (Opcional)

👩‍💻 Desenvolvedora

📦 Rodando o Projeto Localmente
✅ Pré-requisitos
Node.js (recomendado: LTS 18.x ou 20.x)

npm (ou yarn)

🛠️ Instalação
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/SilviaA... # substitua pela sua URL
cd lacrei-saude-challenge
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
Acesse http://localhost:3000 no navegador.

⚠️ O projeto não requer variáveis de ambiente para rodar localmente. Para futuras integrações, utilize um arquivo .env.local.

📤 Build e Deploy
📦 Build para produção
bash
Copiar
Editar
npm run build
Este comando cria a pasta .next com os arquivos otimizados.

🚀 Deploy com Vercel
Suba seu código para um repositório Git (ex: GitHub).

Conecte o repositório à Vercel.

Configure o build automático para a branch main.

A Vercel detectará o framework Next.js e rodará npm run build.

🔗 Link de Produção: https://lacrei-saude-challenge-seu-usuario.vercel.app

🧪 Testes Aplicados
Utiliza Jest e React Testing Library com foco em testes unitários dos principais componentes:

✅ Componentes Testados
Header

Verificação do logo

Presença dos links "Quem Somos" e "Ajuda"

Botão "Entrar"

Mocks para usePathname e useRouter (Next.js)

Footer

Renderização de seções: "Lacrei Saúde", "Saúde", "Segurança e Privacidade"

Verificação dos links e ícones sociais

Texto dinâmico de copyright

▶️ Comandos para testar:
Executar testes:

bash
Copiar
Editar
npm test
Modo watch:

bash
Copiar
Editar
npm run test:watch
Cobertura de código:

bash
Copiar
Editar
npm run test:coverage
🧰 Bibliotecas utilizadas
Jest

@testing-library/react

@testing-library/jest-dom

Styled-components com ThemeProvider mockado

⏪ Rollback Simples
🔁 Usando a Vercel
Acesse o projeto na Vercel.

Vá em Deployments.

Escolha um build anterior e clique em Promote to Production.

🔁 Usando Git
Identifique o commit anterior:

bash
Copiar
Editar
git log
Reverta com:

bash
Copiar
Editar
git revert <HASH_DO_COMMIT>
git push origin main
🎨 Decisões Visuais e Técnicas
🎨 Visuais
Styled-components para escopo de estilo, reutilização e suporte a theming.

Design System da Lacrei (Marsha): uso de cores, espaçamentos e tipografia (Nunito).

Responsividade: media queries para adaptação em mobile, tablet e desktop.

Acessibilidade (A11y):

HTML semântico

alt para imagens

aria-labels para botões

Navegação por teclado

Ícones: react-icons (SVG customizável)

💻 Técnicas
Framework: Next.js (15.x, App Router)

Linguagem: TypeScript

Gerenciamento de Estado: React Hooks (useState, useEffect, useRef)

Roteamento: next/link e useRouter (App Router)

Linting: ESLint + Prettier

Estrutura de Pastas:

arduino
Copiar
Editar
src/
├── app/             # rotas
├── components/      # componentes reutilizáveis
├── styles/          # tema global e arquivos .styles.ts
└── mocks/           # dados mockados
🔗 Simulação de API (Opcional)
Login: funcionalidade simulada com alert(), sem backend real.

Navegação e conteúdo: dados estáticos definidos em arrays/objetos locais.

Sem integração real com APIs.

👩‍💻 Desenvolvedora
Feito com 💜 por Silvia Avelar
🔗 LinkedIn | 🌐 Portfólio | 📧 seu@email.com