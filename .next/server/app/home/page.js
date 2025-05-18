(()=>{var e={};e.id=620,e.ids=[620],e.modules={440:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>a});var t=i(1658);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3434:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>h});var t=i(687),a=i(474),s=i(6189),o=i(7237);let n=o.Ay.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 33.6875rem; /* 540px */
  padding: ${({theme:e})=>e.spacings.large} 7.625rem;
  color: ${({theme:e})=>e.colors.text};
  overflow: hidden;

  @media (max-width: 1100px) {
    padding: ${({theme:e})=>e.spacings.medium} 7rem;
    min-height: auto;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: ${({theme:e})=>e.spacings.medium} ${({theme:e})=>e.spacings.small};
    align-items: center;
    text-align: center;
  }
`,l=o.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`,d=o.Ay.div`
  position: relative;
  z-index: 1;
  max-width: 600px;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    max-width: 100%;
  }
`,c=o.Ay.h1`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.625rem;
  color: ${({theme:e})=>e.colors.lacreiGreen};
  margin-top: 3rem;
  margin-bottom: ${({theme:e})=>e.spacings.small};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    font-size: 2.5rem;
    line-height: 3rem;
    margin-top: ${({theme:e})=>e.spacings.large};
  }
`,p=o.Ay.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
  color: ${({theme:e})=>e.colors.lacreiGrey};
  margin-bottom: ${({theme:e})=>e.spacings.large};

  strong {
    font-weight: 700;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: ${({theme:e})=>e.spacings.medium};
  }
`,m=o.Ay.div`
  display: inline-flex;
  gap: ${({theme:e})=>e.spacings.medium};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: ${({theme:e})=>e.spacings.small};
  }
`,u=o.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacings.small};
  position: relative;
  background-color: ${({theme:e})=>e.colors.lacreiGreen};
  color: ${({theme:e})=>e.colors.secondary};
  border: 2px solid ${({theme:e})=>e.colors.lacreiGreen};
  border-radius: 8px;
  min-width: 13.25rem;
  height: 3rem;
  padding: 10px ${({theme:e})=>e.spacings.medium};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.mediumPlus};
  font-weight: 700;
  letter-spacing: 0.02rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${({theme:e})=>e.colors.lacreiDarkGreenButtonBg||"#016a4f"};
    border-color: ${({theme:e})=>e.colors.lacreiDarkGreenButtonBg||"#016a4f"};
    transform: translateY(-2px);
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
  }

  &:focus-visible {
    outline: 3px solid ${({theme:e})=>e.colors.lacreiDarkGreenButtonBg||"#016a4f"};
    outline-offset: 2px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    width: 100%;
    max-width: 300px;
  }
`;function h(){let e=(0,s.useRouter)(),r=r=>{e.push(r)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(n,{children:[(0,t.jsx)(l,{children:(0,t.jsx)(a.default,{src:"/banner.png",alt:"Banner principal da Lacrei Sa\xfade",layout:"fill",objectFit:"cover",quality:75,priority:!0})}),(0,t.jsxs)(d,{children:[(0,t.jsxs)(c,{children:["Ol\xe1, voc\xea est\xe1 ",(0,t.jsx)("br",{}),"na Lacrei Sa\xfade!"]}),(0,t.jsxs)(p,{children:["Conectamos pessoas com ",(0,t.jsx)("strong",{children:"profissionais de sa\xfade qualificados"}),", proporcionando experi\xeancias de cuidado seguras e inclusivas."]}),(0,t.jsxs)(m,{children:[(0,t.jsx)(u,{onClick:()=>r("/pessoa-usuaria"),children:"Para pacientes"}),(0,t.jsx)(u,{onClick:()=>r("/profissional"),children:"Para profissionais"})]})]})]})})}},3615:(e,r,i)=>{"use strict";i.r(r),i.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d});var t=i(5239),a=i(8088),s=i(8170),o=i.n(s),n=i(893),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);i.d(r,l);let d={children:["",{children:["home",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,7840)),"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\app\\home\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,4431)),"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(i.t.bind(i,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(i.t.bind(i,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\app\\home\\page.tsx"],p={require:i,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/home/page",pathname:"/home",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3873:e=>{"use strict";e.exports=require("path")},6679:(e,r,i)=>{Promise.resolve().then(i.bind(i,7840))},7840:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>t});let t=(0,i(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Silvia-Avelar\\\\Documents\\\\LacreiSaude\\\\lacrei-saude-challenge\\\\src\\\\app\\\\home\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Silvia-Avelar\\Documents\\LacreiSaude\\lacrei-saude-challenge\\src\\app\\home\\page.tsx","default")},7910:e=>{"use strict";e.exports=require("stream")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9551:e=>{"use strict";e.exports=require("url")},9823:(e,r,i)=>{Promise.resolve().then(i.bind(i,3434))}};var r=require("../../webpack-runtime.js");r.C(e);var i=e=>r(r.s=e),t=r.X(0,[447,655,658,379],()=>i(3615));module.exports=t})();