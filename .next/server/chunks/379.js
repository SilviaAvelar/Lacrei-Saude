exports.id=379,exports.ids=[379],exports.modules={84:(e,r,o)=>{"use strict";o.d(r,{default:()=>i});let i=(0,o(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Silvia-Avelar\\\\Documents\\\\LacreiSaude\\\\lacrei-saude-challenge\\\\src\\\\lib\\\\registry.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\lib\\registry.tsx","default")},155:(e,r,o)=>{Promise.resolve().then(o.bind(o,602)),Promise.resolve().then(o.bind(o,613)),Promise.resolve().then(o.bind(o,5021)),Promise.resolve().then(o.bind(o,8033))},602:(e,r,o)=>{"use strict";o.d(r,{default:()=>a});var i=o(687);o(3210);var t=o(7237);let s=(0,t.DU)`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${({theme:e})=>e.fonts.primary};
    font-size: ${({theme:e})=>e.fontSizes.medium};
    background-color: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.fonts.primary};
    color: ${({theme:e})=>e.colors.lacreiGreen}; 
    margin-bottom: ${({theme:e})=>e.spacings.small};
  }

  p {
    line-height: 1.6;
    margin-bottom: ${({theme:e})=>e.spacings.small};
  }

  a {
    color: ${({theme:e})=>e.colors.primary}; /
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    font-family: ${({theme:e})=>e.fonts.primary};
  }
`,n={colors:{primary:"#SEU_CODIGO_HEX_PARA_PRIMARY",lacreiGreen:"#018762",secondary:"#FFFFFF",lacreiDarkGreenButtonBg:"#014C37",lacreiLightGreen:"#B0E0D3",navLinkHoverBg:"#E6F3EF",lacreiGrey:"#515151",lacreiLightGrey:"#E0E0E0",text:"#333333",background:"#F9F9F9",headerBackground:"#F5FFFB",dropdownBorder:"#CFCFCF",dropdownText:"#2D2D2D",black:"#000000"},fonts:{primary:"'Nunito', sans-serif"},fontSizes:{mediumPlus:"1.125rem",medium:"1rem",small:"0.875rem",large:"1.25rem",xlarge:"1.5rem",xxlarge:"2rem"},spacings:{xxsmall:"0.25rem",xsmall:"0.5rem",small:"1rem",medium:"1.5rem",large:"2rem",xlarge:"3rem",xxlarge:"6rem"},breakpoints:{mobile:"768px",tablet:"992px",desktop:"1200px"}};function a({children:e}){return(0,i.jsxs)(t.NP,{theme:n,children:[(0,i.jsx)(s,{}),e]})}},613:(e,r,o)=>{"use strict";o.d(r,{default:()=>A});var i=o(687),t=o(474),s=o(5814),n=o.n(s),a=o(7237);let l=a.Ay.footer`
  background-color: ${({theme:e})=>e.colors.headerBackground};
  color: ${({theme:e})=>e.colors.lacreiGrey};
  padding: ${({theme:e})=>e.spacings.xlarge} 21rem;
  border-top: 1px solid ${({theme:e})=>e.colors.lacreiLightGrey};
  flex-shrink: 0;

  @media (max-width: 1100px) {
    padding: ${({theme:e})=>e.spacings.large} 8rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: ${({theme:e})=>e.spacings.medium} ${({theme:e})=>e.spacings.small};
  }
`,c=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacings.large};
`,d=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacings.large};

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${({theme:e})=>e.spacings.medium}; 
  }
`,m=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    align-items: flex-start;
    flex: 1;
    // min-width: 200px;
    // max-width: 250px;
  }
`,p=(0,a.Ay)(n())`
  display: inline-block;
  img {
    display: block;
  }
`,h=a.Ay.div`
  display: flex;
  gap: ${({theme:e})=>e.spacings.medium};
  margin-top: ${({theme:e})=>e.spacings.large};
`,f=a.Ay.a`
  color: ${({theme:e})=>e.colors.lacreiGreen};
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
  svg {
    width: 2rem;
    height: 2rem;
    display: block;
  }
  &:hover {
    color: ${({theme:e})=>e.colors.lacreiDarkGreenButtonBg||"#016a4f"};
    transform: scale(1.1);
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.lacreiGreen};
    outline-offset: 2px;
    border-radius: 4px;
  }
`,g=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacings.small};
  text-align: center;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex: 1;
    // min-width: 180px;
    // max-width: 220px;
    text-align: left;
  }

  @media (max-width: calc(${({theme:e})=>e.breakpoints.tablet} - 1px)) {
    width: 100%;
    margin-bottom: ${({theme:e})=>e.spacings.medium};
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`,u=a.Ay.h3`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.mediumPlus};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.lacreiGreen};
  margin: 0 0 ${({theme:e})=>e.spacings.xsmall} 0;
`,x=a.Ay.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacings.xsmall};
`,b=(0,a.Ay)(n())`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.medium};
  color: ${({theme:e})=>e.colors.lacreiGrey};
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({theme:e})=>e.colors.lacreiGreen};
    text-decoration: underline;
  }
`,v=a.Ay.div`
  padding-top: ${({theme:e})=>e.spacings.medium};
  border-top: 1px solid ${({theme:e})=>e.colors.lacreiLightGrey};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacings.xsmall};
  text-align: center;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    text-align: left;
  }
`,$=a.Ay.p`
  font-size: ${({theme:e})=>e.fontSizes.small};
  line-height: 1.6;
  margin: 0;

  a {
    color: ${({theme:e})=>e.colors.lacreiGreen};
    font-weight: 600;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`,y=a.Ay.div`
  padding-top: ${({theme:e})=>e.spacings.xsmall};
`,w=a.Ay.p`
  font-size: ${({theme:e})=>e.fontSizes.small};
  margin: 0;
`;var k=o(9587),j=o(255);let S=[{title:"Lacrei Sa\xfade",links:[{label:"Quem Somos",href:"/quem-somos"},{label:"Nosso Prop\xf3sito",href:"/nosso-proposito"},{label:"Miss\xe3o, Vis\xe3o e Valor",href:"/missao-visao-valor"},{label:"Acessibilidade",href:"/acessibilidade"}]},{title:"Sa\xfade",links:[{label:"Buscar atendimento",href:"/buscar-atendimento"},{label:"Oferecer atendimento",href:"/oferecer-atendimento"}]},{title:"Seguran\xe7a e Privacidade",links:[{label:"Pol\xedtica de Privacidade",href:"/politica-de-privacidade"},{label:"Termos de Uso",href:"/termos-de-uso"},{label:"Direitos de Titular",href:"/direitos-de-titular"}]}],P=[{label:"Facebook da Lacrei Sa\xfade",href:"https://www.facebook.com/lacrei.saude/",icon:(0,i.jsx)(k.ok6,{})},{label:"Instagram da Lacrei Sa\xfade",href:"https://www.instagram.com/lacrei.saude/",icon:(0,i.jsx)(k.ao$,{})},{label:"LinkedIn da Lacrei Sa\xfade",href:"https://www.linkedin.com/company/lacrei-saude/posts/?feedView=all",icon:(0,i.jsx)(k.H1h,{})},{label:"Email de contato da Lacrei Sa\xfade",href:"mailto:contato@lacreisaude.com.br",icon:(0,i.jsx)(j.vD0,{})}],A=()=>(0,i.jsx)(l,{children:(0,i.jsxs)(c,{children:[(0,i.jsxs)(d,{children:[(0,i.jsxs)(m,{children:[(0,i.jsx)(p,{href:"/","aria-label":"P\xe1gina principal da Lacrei Sa\xfade",children:(0,i.jsx)(t.default,{src:"/global-logo.svg",alt:"Lacrei Sa\xfade",width:170,height:48})}),(0,i.jsx)(h,{children:P.map(e=>(0,i.jsx)(f,{href:e.href,"aria-label":e.label,target:e.href.startsWith("mailto:")?"_self":"_blank",rel:e.href.startsWith("mailto:")?void 0:"noopener noreferrer",children:e.icon},e.label))})]}),S.map(e=>(0,i.jsxs)(g,{children:[(0,i.jsx)(u,{children:e.title}),(0,i.jsx)(x,{children:e.links.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(b,{href:e.href,children:e.label})},e.label))})]},e.title))]}),(0,i.jsxs)(v,{children:[(0,i.jsx)($,{children:"A Lacrei Sa\xfade n\xe3o oferece tratamento m\xe9dico emergencial. Em caso de emerg\xeancia procure o hospital mais pr\xf3ximo."}),(0,i.jsxs)($,{children:["Em caso de aux\xedlio psicol\xf3gico, ligue para 188 (CVV) ou acesse o site"," ",(0,i.jsx)("a",{href:"https://www.cvv.org.br",target:"_blank",rel:"noopener noreferrer",children:"www.cvv.org.br"})]}),(0,i.jsx)(y,{children:(0,i.jsxs)(w,{children:["Copyright \xa9 ",new Date().getFullYear()," Lacrei Sa\xfade. Todos os direitos reservados. CNPJ: 51.265.351/0001-65"]})})]})]})})},4431:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>c,metadata:()=>l});var i=o(7413),t=o(84),s=o(6185),n=o(9641),a=o(7325);let l={title:"Lacrei Sa\xfade",description:"Conectando voc\xea ao cuidado seguro."};function c({children:e}){return(0,i.jsx)("html",{lang:"pt-BR",style:{height:"100%"},children:(0,i.jsx)("body",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",margin:0},children:(0,i.jsx)(t.default,{children:(0,i.jsxs)(s.default,{children:[(0,i.jsx)(n.default,{}),(0,i.jsx)("main",{style:{paddingTop:"95px",flex:"1 0 auto"},children:e}),(0,i.jsx)(a.default,{})]})})})})}},4499:(e,r,o)=>{Promise.resolve().then(o.bind(o,6185)),Promise.resolve().then(o.bind(o,7325)),Promise.resolve().then(o.bind(o,9641)),Promise.resolve().then(o.bind(o,84))},5021:(e,r,o)=>{"use strict";o.d(r,{default:()=>y});var i=o(687),t=o(474),s=o(5814),n=o.n(s),a=o(7237);let l=a.Ay.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.headerBackground};
  height: 95px;
  padding: 0 10rem; 
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: 0 ${({theme:e})=>e.spacings.small};
  }
`,c=(0,a.Ay)(n())`
  display: flex;
  align-items: center;
  text-decoration: none;
`;a.Ay.h1`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.xlarge};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.lacreiGreen};
  margin: 0;
  line-height: 1;
`;let d=a.Ay.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacings.medium};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {    
  }
`,m=a.Ay.nav`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacings.medium};
`,p=(0,a.Ay)(n())`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacings.small};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.mediumPlus};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.lacreiGreen};
  letter-spacing: 0.02rem;
  text-decoration: none;
  height: 3rem;
  padding: 10px ${({theme:e})=>e.spacings.large};
  border-radius: 8px;
  border: none;
  background-color: ${({theme:e})=>e.colors.secondary};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    color: ${({theme:e})=>e.colors.lacreiGreen};
    background-color: ${({theme:e})=>e.colors.navLinkHoverBg};
  }

  &.active {
    color: ${({theme:e})=>e.colors.primary}; 
    font-weight: 900;    
  }

  &:focus-visible {
    outline: 3px solid ${({theme:e})=>e.colors.lacreiGreen};
    outline-offset: 1px;
  }
`,h=a.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
`,f=a.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacings.small};
  position: relative;
  background-color: ${({theme:e})=>e.colors.lacreiGreen};
  border: 2px solid ${({theme:e})=>e.colors.lacreiGreen};
  color: ${({theme:e})=>e.colors.secondary};
  height: 3rem;
  padding: 10px ${({theme:e})=>e.spacings.large};
  border-radius: 8px;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.mediumPlus};
  font-weight: 700;
  letter-spacing: 0.02rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.colors.secondary};
    color: ${({theme:e})=>e.colors.lacreiGreen};
    border-color: ${({theme:e})=>e.colors.lacreiGreen};
  }

  &:focus-visible {
    outline: 3px solid ${({theme:e})=>e.colors.lacreiGreen};
    outline-offset: 1px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 100%;
    // padding: 10px ${({theme:e})=>e.spacings.small};
  }
`,g=a.Ay.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: ${({theme:e})=>e.colors.secondary};
  border: 1px solid ${({theme:e})=>e.colors.dropdownBorder};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 500;
  min-width: 212px;
  padding: ${({theme:e})=>e.spacings.small};
  display: flex;
  flex-direction: column;
`,u=(0,a.Ay)(n())`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 48px;
  padding: 0 ${({theme:e})=>e.spacings.xsmall};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.medium};
  color: ${({theme:e})=>e.colors.dropdownText};
  text-decoration: none;
  text-transform: none;
  border-left: 4px solid transparent;
  border-bottom: 1px solid ${({theme:e})=>e.colors.dropdownBorder};
  margin-bottom: ${({theme:e})=>e.spacings.xsmall};
  padding-bottom: ${({theme:e})=>e.spacings.xsmall};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-left-color 0.2s ease-in-out;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  span > svg {
    margin-right: ${({theme:e})=>e.spacings.small};
    font-size: ${({theme:e})=>e.fontSizes.xlarge};
    color: ${({theme:e})=>e.colors.black}; 
    flex-shrink: 0;
    transition: color 0.2s ease-in-out;
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.lacreiLightGreen};
    color: ${({theme:e})=>e.colors.lacreiGreen};
    border-left-color: ${({theme:e})=>e.colors.lacreiDarkGreenButtonBg};

    span > svg {
      color: ${({theme:e})=>e.colors.lacreiGreen}; 
    }
  }

  &.active {
    font-weight: bold;
    color: ${({theme:e})=>e.colors.lacreiGreen};
    background-color: ${({theme:e})=>e.colors.lacreiLightGreen};
    border-left-color: ${({theme:e})=>e.colors.lacreiDarkGreenButtonBg};
    // padding-left: calc(${({theme:e})=>e.spacings.xsmall} - 4px);

    span > svg {
      color: ${({theme:e})=>e.colors.lacreiGreen};
    }
  }
`;var x=o(6189),b=o(3210),v=o(9587);let $=()=>(0,i.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:(0,i.jsx)("polyline",{points:"6 9 12 15 18 9"})}),y=()=>{let e=(0,x.usePathname)(),[r,o]=(0,b.useState)(!1),s=(0,b.useRef)(null);(0,b.useEffect)(()=>{let e=e=>{s.current&&!s.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[s]);let n=[{label:"Paciente",icon:(0,i.jsx)(v.K9B,{}),href:"/pessoa-usuaria"},{label:"Profissional",icon:(0,i.jsx)(v.VdZ,{}),href:"/profissional"}];return(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{href:"/",children:(0,i.jsx)(t.default,{src:"/logo_lacrei.svg",alt:"Lacrei Sa\xfade",width:187,height:24,priority:!0})}),(0,i.jsxs)(d,{children:[(0,i.jsx)(m,{children:[{label:"Quem Somos",href:"/quem-somos"},{label:"Ajuda",href:"/ajuda"}].map(r=>(0,i.jsx)(p,{href:r.href,className:e===r.href?"active":"",children:r.label},r.href))}),(0,i.jsxs)(h,{ref:s,children:[(0,i.jsxs)(f,{onClick:()=>o(!r),"aria-expanded":r,"aria-haspopup":"true",children:["Entrar",(0,i.jsx)($,{})]}),r&&(0,i.jsx)(g,{children:n.map(r=>(0,i.jsxs)(u,{href:r.href,onClick:()=>o(!1),className:e===r.href?"active":"",children:[r.icon&&(0,i.jsx)("span",{children:r.icon}),r.label]},r.href))})]})]})]})}},5153:(e,r,o)=>{Promise.resolve().then(o.t.bind(o,6346,23)),Promise.resolve().then(o.t.bind(o,7924,23)),Promise.resolve().then(o.t.bind(o,5656,23)),Promise.resolve().then(o.t.bind(o,99,23)),Promise.resolve().then(o.t.bind(o,8243,23)),Promise.resolve().then(o.t.bind(o,8827,23)),Promise.resolve().then(o.t.bind(o,2763,23)),Promise.resolve().then(o.t.bind(o,7173,23))},6185:(e,r,o)=>{"use strict";o.d(r,{default:()=>i});let i=(0,o(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Silvia-Avelar\\\\Documents\\\\LacreiSaude\\\\lacrei-saude-challenge\\\\src\\\\components\\\\ClientProviders\\\\ClientProviders.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\components\\ClientProviders\\ClientProviders.tsx","default")},7325:(e,r,o)=>{"use strict";o.d(r,{default:()=>i});let i=(0,o(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Silvia-Avelar\\\\Documents\\\\LacreiSaude\\\\lacrei-saude-challenge\\\\src\\\\components\\\\Footer\\\\Footer.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\components\\Footer\\Footer.tsx","default")},8033:(e,r,o)=>{"use strict";o.d(r,{default:()=>a});var i=o(687),t=o(3210),s=o(6189),n=o(7237);function a({children:e}){let[r]=(0,t.useState)(()=>new n.E);return(0,s.useServerInsertedHTML)(()=>{let e=r.getStyleElement();return(0,i.jsx)(i.Fragment,{children:e})}),(0,i.jsx)(n.ID,{sheet:r.instance,children:e})}},9473:(e,r,o)=>{Promise.resolve().then(o.t.bind(o,6444,23)),Promise.resolve().then(o.t.bind(o,6042,23)),Promise.resolve().then(o.t.bind(o,8170,23)),Promise.resolve().then(o.t.bind(o,9477,23)),Promise.resolve().then(o.t.bind(o,9345,23)),Promise.resolve().then(o.t.bind(o,2089,23)),Promise.resolve().then(o.t.bind(o,6577,23)),Promise.resolve().then(o.t.bind(o,1307,23))},9641:(e,r,o)=>{"use strict";o.d(r,{default:()=>i});let i=(0,o(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Silvia-Avelar\\\\Documents\\\\LacreiSaude\\\\lacrei-saude-challenge\\\\src\\\\components\\\\Header\\\\Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\components\\Header\\Header.tsx","default")}};