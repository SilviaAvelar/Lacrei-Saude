
# Lacrei Saúde - Desafio Frontend

![Node.js](https://img.shields.io/badge/node.js-18.x-green?logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-9.x-red?logo=npm&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue?logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-5.3.11-DB7093?logo=styled-components&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-29.5.0-C21325?logo=jest&logoColor=white)
![React Testing Library](https://img.shields.io/badge/React_Testing_Library-14.0.0-5A32A3?logo=testing-library&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Production-000000?logo=vercel&logoColor=white)

...

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
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra no navegador: [http://localhost:3000](http://localhost:3000)

---

### 🛠️ Build e Deploy

- Build para produção:
```bash
npm run build
```

- Deploy:  
Este projeto pode ser implantado na plataforma Vercel, que detecta automaticamente os pushes para a branch principal (`main`), executa o build e publica a aplicação.

Link de produção:  
https://lacrei-saude-z9yo.vercel.app/home

---

### 🧪 Testes Aplicados

Este projeto utiliza Jest e React Testing Library para testes unitários.

**Componentes testados:**

- **Header**
  - Renderização do logo
  - Presença dos links principais ("Quem Somos", "Ajuda")
  - Botão de ação "Entrar"

- **Footer**
  - Renderização do logo
  - Títulos das seções ("Lacrei Saúde", "Saúde", "Segurança e Privacidade")
  - Links específicos e seus atributos
  - Ícones de mídias sociais
  - Texto de copyright

**Como rodar os testes:**

```bash
npm test
```

**Para rodar em modo watch (re-executa ao detectar alterações):**

```bash
npm run test:watch
```

**Para gerar relatório de cobertura:**

```bash
npm run test:coverage
```

---

### ⏪ Rollback Simples

- **Na Vercel:**  
  1. Acesse o dashboard do projeto.  
  2. Vá na aba “Deployments”.  
  3. Encontre o deploy anterior estável.  
  4. Clique em “Redeploy” ou “Promote to Production”.

- **Usando Git manualmente:**

```bash
git log
git revert <hash_do_commit_problematico>
git push origin main
```

---

### 🎨 Escolhas Visuais e Técnicas

**Visuais:**
- Estilização com Styled-components para CSS modular e theming dinâmico.
- Guia de estilo baseado no Marsha Design System da Lacrei Saúde.
- Tipografia Nunito e uso consistente das cores oficiais.
- Responsividade para mobile, tablet e desktop.
- Acessibilidade (uso de HTML semântico, aria-labels, contraste adequado).
- Ícones via react-icons.

**Técnicas:**
- Framework Next.js (App Router) para renderização otimizada.
- Código em TypeScript para maior segurança e qualidade.
- Hooks React para gerenciamento local de estado.
- Estrutura de pastas organizada (`src/app`, `src/components`, `src/styles`).
- Configuração de ESLint e Prettier para padronização de código.
- Mock de hooks Next.js para testes unitários.

---

### 🔗 Simulação de API Back-end (Opcional)

Neste desafio, a integração com API real não foi implementada.  
A funcionalidade de login é simulada via `alert()`.  
Dados estáticos e links no Header e Footer são definidos localmente no código.  
Para futuras integrações, o projeto pode ser facilmente adaptado para consumir APIs reais ou mockadas.

---

## 🙋‍♀️ Sobre Mim

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&color=F7C52C&center=true&vCenter=true&width=700&height=70&lines=Olá,+sou+a+Sílvia+Avelar!;Desenvolvedora+Front-End;Apaixonada+por+Código+e+Café;Eternamente+Aprendendo..." alt="Typing SVG" />
</p>

<p align="center">
  Desenvolvido com 💙 por <strong>Sílvia Avelar</strong>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/silvia-avelar/" target="_blank">
    <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  &nbsp;
  <a href="https://silviaavelar.github.io/Portfolio/" target="_blank">
    <img src="https://img.shields.io/badge/-Portfólio-FF4081?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfólio">
  </a>
</p>

<p align="center">Entre em contato ou veja outros projetos!</p>