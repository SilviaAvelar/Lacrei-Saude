(()=>{var e={};e.id=600,e.ids=[600],e.modules={103:(e,r,i)=>{"use strict";i.r(r),i.d(r,{GlobalError:()=>a.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var t=i(5239),o=i(8088),s=i(8170),a=i.n(s),n=i(893),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);i.d(r,l);let d={children:["",{children:["(pages)",{children:["profissional",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,7564)),"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\app\\(pages)\\profissional\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(i.t.bind(i,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(i.t.bind(i,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,4431)),"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(i.t.bind(i,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(i.t.bind(i,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\app\\(pages)\\profissional\\page.tsx"],p={require:i,loadChunk:()=>Promise.resolve()},u=new t.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/(pages)/profissional/page",pathname:"/profissional",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},440:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>o});var t=i(1658);let o=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2854:(e,r,i)=>{Promise.resolve().then(i.bind(i,7564))},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3534:(e,r,i)=>{Promise.resolve().then(i.bind(i,6190))},3873:e=>{"use strict";e.exports=require("path")},6190:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>v});var t=i(687),o=i(7237),s=i(474);let a=o.Ay.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.colors.background};
  padding-top: 95px;
  box-sizing: border-box;
`,n=o.Ay.div`
  display: flex;
  width: 100%;
  max-width: ${({theme:e})=>e.breakpoints.desktop};
  background-color: ${({theme:e})=>e.colors.secondary};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: column;
    margin: ${({theme:e})=>e.spacings.medium};
    max-width: 600px;
  }
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    margin: ${({theme:e})=>e.spacings.small};
  }
`,l=o.Ay.div`
  flex: 1;
  padding: ${({theme:e})=>e.spacings.xlarge};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: ${({theme:e})=>e.spacings.large};
    order: 2;
  }
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: ${({theme:e})=>e.spacings.medium};
  }
`,d=o.Ay.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.lacreiGreen};
  margin-bottom: ${({theme:e})=>e.spacings.small};
  text-align: left;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    text-align: center;
    font-size: 2rem;
  }
`,c=o.Ay.p`
  font-size: 1.125rem;
  color: ${({theme:e})=>e.colors.lacreiGrey};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.spacings.large};
  text-align: left;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    text-align: center;
    font-size: 1rem;
  }
`,p=o.Ay.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacings.medium};
`,u=o.Ay.label`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.lacreiGrey};
  margin-bottom: ${({theme:e})=>e.spacings.xsmall};
  display: block;
  text-align: left;
`,m=o.Ay.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacings.small};
  border: 1px solid ${({theme:e})=>e.colors.lacreiLightGrey};
  border-radius: 4px;
  font-size: 1rem;
  font-family: ${({theme:e})=>e.fonts.primary};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.lacreiGreen};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.lacreiLightGreen};
  }
`,x=o.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacings.small};
  background-color: ${({theme:e})=>e.colors.lacreiGreen};
  color: ${({theme:e})=>e.colors.secondary};
  border: 2px solid ${({theme:e})=>e.colors.lacreiGreen};
  border-radius: 8px;
  width: 100%;
  height: 3rem;
  padding: 10px ${({theme:e})=>e.spacings.medium};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.mediumPlus};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.colors.lacreiDarkGreenButtonBg||"#016a4f"};
    border-color: ${({theme:e})=>e.colors.lacreiDarkGreenButtonBg||"#016a4f"};
  }

  &:focus-visible {
    outline: 3px solid ${({theme:e})=>e.colors.lacreiDarkGreenButtonBg||"#016a4f"};
    outline-offset: 2px;
  }
`,f=o.Ay.div`
  margin-top: ${({theme:e})=>e.spacings.medium};
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacings.small};
  }
`,g=o.Ay.a`
  color: ${({theme:e})=>e.colors.lacreiGreen};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`,h=o.Ay.div`
  flex: 1.2;
  background-color: #e0f2eb; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    order: 1;
    min-height: 300px;
    flex: none;
    width: 100%;
  }
`,b=(0,o.Ay)(s.default)`
  object-fit: cover;
`;function v(){return(0,t.jsx)(a,{children:(0,t.jsxs)(n,{children:[(0,t.jsxs)(l,{children:[(0,t.jsx)(d,{children:"Acesso Profissional"}),(0,t.jsx)(c,{children:"Gerencie seu perfil, agendamentos e conecte-se com pacientes na plataforma Lacrei Sa\xfade."}),(0,t.jsxs)(p,{onSubmit:e=>{e.preventDefault(),alert("Funcionalidade de login n\xe3o implementada neste desafio.")},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(u,{htmlFor:"loginField",children:"Email ou CRM/CRP"}),(0,t.jsx)(m,{type:"text",id:"loginField",name:"loginField",placeholder:"Digite seu email ou registro profissional",required:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(u,{htmlFor:"password",children:"Senha"}),(0,t.jsx)(m,{type:"password",id:"password",name:"password",placeholder:"Digite sua senha",required:!0})]}),(0,t.jsx)(x,{type:"submit",children:"Entrar"})]}),(0,t.jsxs)(f,{children:[(0,t.jsx)(g,{href:"#",children:"Esqueci minha senha"}),(0,t.jsx)(g,{href:"#",children:"Quero me cadastrar como profissional"})]})]}),(0,t.jsx)(h,{children:(0,t.jsx)(b,{src:"/images/placeholder-login-profissional.svg",alt:"Ilustra\xe7\xe3o decorativa para a p\xe1gina de login de profissionais da sa\xfade",layout:"fill",priority:!0})})]})})}},7564:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>t});let t=(0,i(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Silvia-Avelar\\\\Documents\\\\LacreiSaude\\\\lacrei-saude-challenge\\\\src\\\\app\\\\(pages)\\\\profissional\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\app\\(pages)\\profissional\\page.tsx","default")},7910:e=>{"use strict";e.exports=require("stream")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9551:e=>{"use strict";e.exports=require("url")}};var r=require("../../../webpack-runtime.js");r.C(e);var i=e=>r(r.s=e),t=r.X(0,[447,655,658,379],()=>i(103));module.exports=t})();