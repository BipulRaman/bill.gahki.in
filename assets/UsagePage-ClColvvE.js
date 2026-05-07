import{D as e,E as t,Lt as n,O as r,Q as i,Rt as a,S as o,Ut as s,Wt as c,X as l,_t as u,m as d,ot as f,qt as p,t as m,vt as h,yt as g}from"./Card-k2uok_FN.js";import{i as _}from"./routes-BUtvyh4r.js";import{ct as v,t as y}from"./CardContent-DicAoh1L.js";import{t as b}from"./Skeleton-CgD88qCy.js";import{t as x}from"./Alert-CLM7JNoa.js";import{t as S}from"./Tooltip-DjX9Mol5.js";import{t as C}from"./PageTabs-CipdxBzP.js";import{a as w,i as T,n as E}from"./index-DMU0Lsat.js";import{t as D}from"./shared.module-BiEixs-K.js";import{t as O}from"./useUsage-BmvViinR.js";function k(e){return h(`MuiLinearProgress`,e)}u(`MuiLinearProgress`,[`root`,`colorPrimary`,`colorSecondary`,`determinate`,`indeterminate`,`buffer`,`query`,`dashed`,`dashedColorPrimary`,`dashedColorSecondary`,`bar`,`bar1`,`bar2`,`barColorPrimary`,`barColorSecondary`,`bar1Indeterminate`,`bar1Determinate`,`bar1Buffer`,`bar2Indeterminate`,`bar2Buffer`]);var A=p(c()),j=s(),M=4,N=a`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,P=typeof N==`string`?null:n`
        animation: ${N} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `,F=a`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,I=typeof F==`string`?null:n`
        animation: ${F} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `,L=a`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,R=typeof L==`string`?null:n`
        animation: ${L} 3s infinite linear;
      `,z=t=>{let{classes:n,variant:r,color:i}=t;return f({root:[`root`,`color${e(i)}`,r],dashed:[`dashed`,`dashedColor${e(i)}`],bar1:[`bar`,`bar1`,`barColor${e(i)}`,(r===`indeterminate`||r===`query`)&&`bar1Indeterminate`,r===`determinate`&&`bar1Determinate`,r===`buffer`&&`bar1Buffer`],bar2:[`bar`,`bar2`,r!==`buffer`&&`barColor${e(i)}`,r===`buffer`&&`color${e(i)}`,(r===`indeterminate`||r===`query`)&&`bar2Indeterminate`,r===`buffer`&&`bar2Buffer`]},k,n)},B=(e,t)=>e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:e.palette.mode===`light`?e.lighten(e.palette[t].main,.62):e.darken(e.palette[t].main,.5),V=i(`span`,{name:`MuiLinearProgress`,slot:`Root`,overridesResolver:(t,n)=>{let{ownerState:r}=t;return[n.root,n[`color${e(r.color)}`],n[r.variant]]}})(r(({theme:e})=>({position:`relative`,overflow:`hidden`,display:`block`,height:4,zIndex:0,"@media print":{colorAdjust:`exact`},variants:[...Object.entries(e.palette).filter(t()).map(([t])=>({props:{color:t},style:{backgroundColor:B(e,t)}})),{props:({ownerState:e})=>e.color===`inherit`&&e.variant!==`buffer`,style:{"&::before":{content:`""`,position:`absolute`,left:0,top:0,right:0,bottom:0,backgroundColor:`currentColor`,opacity:.3}}},{props:{variant:`buffer`},style:{backgroundColor:`transparent`}},{props:{variant:`query`},style:{transform:`rotate(180deg)`}}]}))),H=i(`span`,{name:`MuiLinearProgress`,slot:`Dashed`,overridesResolver:(t,n)=>{let{ownerState:r}=t;return[n.dashed,n[`dashedColor${e(r.color)}`]]}})(r(({theme:e})=>({position:`absolute`,marginTop:0,height:`100%`,width:`100%`,backgroundSize:`10px 10px`,backgroundPosition:`0 -23px`,variants:[{props:{color:`inherit`},style:{opacity:.3,backgroundImage:`radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)`}},...Object.entries(e.palette).filter(t()).map(([t])=>{let n=B(e,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`}}})]})),R||{animation:`${L} 3s infinite linear`}),U=i(`span`,{name:`MuiLinearProgress`,slot:`Bar1`,overridesResolver:(t,n)=>{let{ownerState:r}=t;return[n.bar,n.bar1,n[`barColor${e(r.color)}`],(r.variant===`indeterminate`||r.variant===`query`)&&n.bar1Indeterminate,r.variant===`determinate`&&n.bar1Determinate,r.variant===`buffer`&&n.bar1Buffer]}})(r(({theme:e})=>({width:`100%`,position:`absolute`,left:0,bottom:0,top:0,transition:`transform 0.2s linear`,transformOrigin:`left`,variants:[{props:{color:`inherit`},style:{backgroundColor:`currentColor`}},...Object.entries(e.palette).filter(t()).map(([t])=>({props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main}})),{props:{variant:`determinate`},style:{transition:`transform .${M}s linear`}},{props:{variant:`buffer`},style:{zIndex:1,transition:`transform .${M}s linear`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:P||{animation:`${N} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),W=i(`span`,{name:`MuiLinearProgress`,slot:`Bar2`,overridesResolver:(t,n)=>{let{ownerState:r}=t;return[n.bar,n.bar2,n[`barColor${e(r.color)}`],(r.variant===`indeterminate`||r.variant===`query`)&&n.bar2Indeterminate,r.variant===`buffer`&&n.bar2Buffer]}})(r(({theme:e})=>({width:`100%`,position:`absolute`,left:0,bottom:0,top:0,transition:`transform 0.2s linear`,transformOrigin:`left`,variants:[...Object.entries(e.palette).filter(t()).map(([t])=>({props:{color:t},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[t].main}})),{props:({ownerState:e})=>e.variant!==`buffer`&&e.color!==`inherit`,style:{backgroundColor:`var(--LinearProgressBar2-barColor, currentColor)`}},{props:({ownerState:e})=>e.variant!==`buffer`&&e.color===`inherit`,style:{backgroundColor:`currentColor`}},{props:{color:`inherit`},style:{opacity:.3}},...Object.entries(e.palette).filter(t()).map(([t])=>({props:{color:t,variant:`buffer`},style:{backgroundColor:B(e,t),transition:`transform .${M}s linear`}})),{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:I||{animation:`${F} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),G=A.forwardRef(function(e,t){let n=l({props:e,name:`MuiLinearProgress`}),{className:r,color:i=`primary`,value:a,valueBuffer:o,variant:s=`indeterminate`,...c}=n,u={...n,color:i,variant:s},d=z(u),f=v(),p={},m={bar1:{},bar2:{}};if((s===`determinate`||s===`buffer`)&&a!==void 0){p[`aria-valuenow`]=Math.round(a),p[`aria-valuemin`]=0,p[`aria-valuemax`]=100;let e=a-100;f&&(e=-e),m.bar1.transform=`translateX(${e}%)`}if(s===`buffer`&&o!==void 0){let e=(o||0)-100;f&&(e=-e),m.bar2.transform=`translateX(${e}%)`}return(0,j.jsxs)(V,{className:g(d.root,r),ownerState:u,role:`progressbar`,...p,ref:t,...c,children:[s===`buffer`?(0,j.jsx)(H,{className:d.dashed,ownerState:u}):null,(0,j.jsx)(U,{className:d.bar1,ownerState:u,style:m.bar1}),s===`determinate`?null:(0,j.jsx)(W,{className:d.bar2,ownerState:u,style:m.bar2})]})}),K=d((0,j.jsx)(`path`,{d:`M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8`}),`InfoOutlined`);function q({usage:e,loading:t}){return t||!e?(0,j.jsx)(m,{variant:`outlined`,children:(0,j.jsxs)(y,{children:[(0,j.jsx)(b,{variant:`text`,width:140}),(0,j.jsx)(b,{variant:`rectangular`,height:8,sx:{my:1.5}}),(0,j.jsx)(b,{variant:`rectangular`,height:8,sx:{my:1.5}})]})}):(0,j.jsx)(m,{variant:`outlined`,children:(0,j.jsxs)(y,{children:[(0,j.jsxs)(E,{direction:`row`,alignItems:`center`,justifyContent:`space-between`,mb:1.5,children:[(0,j.jsxs)(E,{direction:`row`,spacing:1,alignItems:`center`,children:[(0,j.jsx)(o,{variant:`subtitle2`,children:e.planDisplayName}),e.isCustomized&&(0,j.jsx)(w,{label:`Custom`,size:`small`,color:`secondary`})]}),(0,j.jsx)(S,{title:Y(e.updatedAt),children:(0,j.jsx)(o,{variant:`caption`,color:`text.secondary`,children:`Updated periodically`})})]}),(0,j.jsx)(J,{label:`Bills this month`,meter:e.bills}),(0,j.jsx)(J,{label:`Products`,meter:e.products}),(0,j.jsx)(x,{icon:(0,j.jsx)(K,{fontSize:`small`}),severity:`info`,variant:`outlined`,sx:{mt:2.5,py:.25,"& .MuiAlert-message":{py:.5}},children:(0,j.jsxs)(o,{variant:`caption`,children:[`These counts are not live — they’re refreshed periodically.`,` `,e.updatedAt>0?X(e.updatedAt):`First refresh pending.`]})})]})})}function J({label:e,meter:t}){let n=t.limit===0,r=t.atLimit?`error`:t.warning?`warning`:`primary`,i=n?0:Math.min(100,t.percentUsed);return(0,j.jsxs)(T,{mb:1.5,children:[(0,j.jsxs)(E,{direction:`row`,justifyContent:`space-between`,mb:.25,children:[(0,j.jsx)(o,{variant:`body2`,children:e}),(0,j.jsxs)(o,{variant:`body2`,color:`text.secondary`,children:[t.used.toLocaleString(),` / `,n?`Unlimited`:t.limit.toLocaleString()]})]}),!n&&(0,j.jsx)(G,{variant:`determinate`,value:i,color:r,sx:{height:8,borderRadius:1}})]})}function Y(e){return e?X(e):`Counts will appear after the first periodic refresh.`}function X(e){let t=e*1e3,n=Date.now()-t,r=Math.floor(n/36e5),i=Math.floor(r/24);return i>0?`Last refreshed ${i} day${i===1?``:`s`} ago.`:r>0?`Last refreshed ${r} hour${r===1?``:`s`} ago.`:`Last refreshed less than an hour ago.`}function Z(){let{usage:e,loading:t}=O();return(0,j.jsxs)(`div`,{className:D.pageWide,children:[(0,j.jsx)(C,{tabs:_}),(0,j.jsx)(`div`,{className:D.headerRow,children:(0,j.jsx)(o,{variant:`h5`,fontWeight:700,component:`h1`,children:`Plan Usage`})}),(0,j.jsx)(q,{usage:e,loading:t})]})}export{Z as default};