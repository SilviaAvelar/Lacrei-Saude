# Lacrei Saúde - Desafio Frontend

Este é o repositório do desafio frontend da Lacrei Saúde, uma aplicação Next.js com TypeScript e Styled-components para conectar pacientes e profissionais da saúde da comunidade LGBTQIAPN+.

---

## 📝 Documentação

### 🚀 Instruções para rodar o projeto localmente

#### Pré-requisitos
- Node.js (versão recomendada: LTS, ex: 18.x ou 20.x)
- npm (gerenciador de pacotes)

#### Passos para instalação e execução
1. Clone o repositório:
```bash
git clone https://github.com/SilviaAvelar/Lacrei-Saude.git
cd Lacrei-Saude
Instale as dependências:

bash
Copiar
Editar
npm install
Rode o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
Abra no navegador: http://localhost:3000

🛠️ Build e Deploy
Build para produção:
bash
Copiar
Editar
npm run build
Deploy:
Este projeto pode ser implantado na plataforma Vercel, que detecta automaticamente os pushes para a branch principal (main), executa o build e publica a aplicação.

Link de produção:
[COLOQUE_SEU_LINK_DA_VERCEL_AQUI]
(Exemplo: https://lacrei-saude-challenge-seu-usuario.vercel.app)

🧪 Testes Aplicados
Este projeto utiliza Jest e React Testing Library para testes unitários.

Componentes testados:

Header

Renderização do logo

Presença dos links principais ("Quem Somos", "Ajuda")

Botão de ação "Entrar"

Footer

Renderização do logo

Títulos das seções ("Lacrei Saúde", "Saúde", "Segurança e Privacidade")

Links específicos e seus atributos

Ícones de mídias sociais

Texto de copyright

Como rodar os testes:

bash
Copiar
Editar
npm test
Para rodar em modo watch (re-executa ao detectar alterações):

bash
Copiar
Editar
npm run test:watch
Para gerar relatório de cobertura:

bash
Copiar
Editar
npm run test:coverage
⏪ Rollback Simples
Na Vercel:

Acesse o dashboard do projeto.

Vá na aba “Deployments”.

Encontre o deploy anterior estável.

Clique em “Redeploy” ou “Promote to Production”.

Usando Git manualmente:

bash
Copiar
Editar
git log
git revert <hash_do_commit_problematico>
git push origin main
🎨 Escolhas Visuais e Técnicas
Visuais:

Estilização com Styled-components para CSS modular e theming dinâmico.

Guia de estilo baseado no Marsha Design System da Lacrei Saúde.

Tipografia Nunito e uso consistente das cores oficiais.

Responsividade para mobile, tablet e desktop.

Acessibilidade (uso de HTML semântico, aria-labels, contraste adequado).

Ícones via react-icons.

Técnicas:

Framework Next.js (App Router) para renderização otimizada.

Código em TypeScript para maior segurança e qualidade.

Hooks React para gerenciamento local de estado.

Estrutura de pastas organizada (src/app, src/components, src/styles).

Configuração de ESLint e Prettier para padronização de código.

Mock de hooks Next.js para testes unitários.

🔗 (Opcional) Simulação de API Back-end
Neste desafio, a integração com API real não foi implementada.

A funcionalidade de login é simulada via alert().

Dados estáticos e links no Header e Footer são definidos localmente no código.

Para futuras integrações, o projeto pode ser facilmente adaptado para consumir APIs reais ou mockadas.

Desenvolvido por Silvia Avelar
GitHub