(()=>{var e={};e.id=601,e.ids=[601],e.modules={440:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var i=t(1658);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},879:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>s.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>l});var i=t(5239),a=t(8088),n=t(8170),s=t.n(n),o=t(893),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);t.d(r,d);let l={children:["",{children:["(pages)",{children:["pessoa-usuaria",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8825)),"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\app\\(pages)\\pessoa-usuaria\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,4431)),"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\app\\(pages)\\pessoa-usuaria\\page.tsx"],p={require:t,loadChunk:()=>Promise.resolve()},u=new i.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/(pages)/pessoa-usuaria/page",pathname:"/pessoa-usuaria",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},5545:(e,r,t)=>{Promise.resolve().then(t.bind(t,9114))},7910:e=>{"use strict";e.exports=require("stream")},8825:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});let i=(0,t(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Silvia-Avelar\\\\Documents\\\\LacreiSaude\\\\lacrei-saude-challenge\\\\src\\\\app\\\\(pages)\\\\pessoa-usuaria\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\app\\(pages)\\pessoa-usuaria\\page.tsx","default")},9097:(e,r,t)=>{Promise.resolve().then(t.bind(t,8825))},9114:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>w});var i=t(687),a=t(7237),n=t(474),s=t(5814),o=t.n(s);let d=a.Ay.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
    background: linear-gradient(rgb(245, 255, 251) 1.9225rem, rgb(255, 255, 255) calc(15vh)) no-repeat;
`,l=a.Ay.section`
    display: flex;
    max-width: 1100px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 2rem;
    }
`,c=a.Ay.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 52%;
    padding: 2rem 0; 

    @media (max-width: 900px) {
        width: 100%;
        padding: 1rem 0;
        align-items: center;
        text-align: center;
    }
`,p=a.Ay.h1`
    font-size: 1.75rem;
    color: #018762;
    margin-bottom: 0.5rem;
    font-weight: 700;
`,u=a.Ay.p`
    font-size: 1rem;
    color: rgb(31, 31, 31);
    margin-bottom: 2rem;
    line-height: 1.6;
`,m=a.Ay.form`
    width: 100%;
    max-width: 400px; 
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 900px) {
        align-items: stretch; 
    }
`,h=a.Ay.label`
    display: block;
    font-size: 0.875rem;
    color: rgb(31, 31, 31);
    margin-bottom: 0.5rem;
    font-weight: 600;
    text-align: left; 
`,x=a.Ay.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.2s;
    background-color: #fff; 
    color: #333;

    &:focus {
        outline: none;
        border-color: #018762;
    }

    &::placeholder {
        color: #aaa;
    }
`,g=a.Ay.button`
    background-color: #018762;
    color: white;
    padding: 0.875rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #017352;
    }
`,f=a.Ay.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
`,v=(0,a.Ay)(o())`
    color: #018762;
    text-decoration: none;
    font-size: 0.875rem;

    &:hover {
        text-decoration: underline;
    }
`,b=a.Ay.div`
    width: 48%;
    position: relative; 
    aspect-ratio: 506 / 421;

    @media (max-width: 900px) {
        width: 80%; 
        max-width: 400px; 
        margin-top: 2rem; 
        order: -1;         
    }

    @media (max-width: 600px) {
        width: 100%; 
    }
`,y=(0,a.Ay)(n.default)`    
    object-fit: contain;
`;function w(){return(0,i.jsx)(d,{children:(0,i.jsxs)(l,{children:[(0,i.jsxs)(c,{children:[(0,i.jsx)(p,{children:"Boas vindas \xe0 Lacrei Sa\xfade"}),(0,i.jsx)(u,{children:"Sua plataforma de sa\xfade que conecta pacientes e profissionais da comunidade LGBTQIAPN+."}),(0,i.jsxs)(m,{onSubmit:e=>{e.preventDefault(),alert("Funcionalidade de login n\xe3o implementada neste desafio.")},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(h,{htmlFor:"email",children:"Email"}),(0,i.jsx)(x,{type:"email",id:"email",name:"email",placeholder:"Digite seu email",required:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(h,{htmlFor:"password",children:"Senha"}),(0,i.jsx)(x,{type:"password",id:"password",name:"password",placeholder:"Digite sua senha",required:!0})]}),(0,i.jsx)(g,{type:"submit",children:"Entrar"})]}),(0,i.jsxs)(f,{children:[(0,i.jsx)(v,{href:"#",children:"Esqueci minha senha"}),(0,i.jsx)(v,{href:"#",children:"Criar uma conta"})]})]}),(0,i.jsx)(b,{children:(0,i.jsx)(y,{src:"/illustration-login.svg",alt:"Ilustra\xe7\xe3o decorativa para a p\xe1gina de login de pacientes",layout:"fill",priority:!0})})]})})}},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9551:e=>{"use strict";e.exports=require("url")}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[447,655,658,379],()=>t(879));module.exports=i})();