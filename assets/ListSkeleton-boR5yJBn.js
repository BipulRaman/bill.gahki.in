import{Bt as e,C as t,Ft as n,Pt as r,Vt as i,Wt as a,Y as o,Z as s,at as c,gt as l,ht as u,k as d,mt as f}from"./CardContent-C_NNHnnP.js";import{t as p}from"./Stack-CDrxbbQ0.js";import{o as m}from"./index-Dh9qC-PN.js";import{t as h}from"./shared.module-CIOL2Nn9.js";function g(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||``}function _(e){return parseFloat(e)}var v=e();function y({icon:e,title:n,description:r,actions:i}){return(0,v.jsxs)(`div`,{className:h.emptyState,role:`status`,children:[(0,v.jsx)(`div`,{className:h.emptyIcon,"aria-hidden":!0,children:e}),(0,v.jsx)(t,{variant:`subtitle1`,component:`h2`,fontWeight:600,sx:{mb:.5},children:n}),r&&(0,v.jsx)(t,{variant:`body2`,color:`text.secondary`,sx:{maxWidth:380,mx:`auto`},children:r}),i&&i.length>0&&(0,v.jsx)(p,{direction:`row`,spacing:1,justifyContent:`center`,sx:{mt:3},flexWrap:`wrap`,useFlexGap:!0,children:i.map((e,t)=>(0,v.jsx)(m,{variant:e.variant??(t===0?`contained`:`outlined`),startIcon:e.startIcon,onClick:e.onClick,disableElevation:!0,children:e.label},e.label))})]})}function b(e){return u(`MuiSkeleton`,e)}f(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`]);var x=a(i()),S=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:o}=e;return c({root:[`root`,n,r,i&&`withChildren`,i&&!a&&`fitContent`,i&&!o&&`heightAuto`]},b,t)},C=n`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,w=n`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,T=typeof C==`string`?null:r`
        animation: ${C} 2s ease-in-out 0.5s infinite;
      `,E=typeof w==`string`?null:r`
        &::after {
          animation: ${w} 2s linear 0.5s infinite;
        }
      `,D=s(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(d(({theme:e})=>{let t=g(e.shape.borderRadius)||`px`,n=_(e.shape.borderRadius);return{display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`,variants:[{props:{variant:`text`},style:{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${n}${t}/${Math.round(n/.6*10)/10}${t}`,"&:empty:before":{content:`"\\00a0"`}}},{props:{variant:`circular`},style:{borderRadius:`50%`}},{props:{variant:`rounded`},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:`hidden`}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:`fit-content`}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:`auto`}},{props:{animation:`pulse`},style:T||{animation:`${C} 2s ease-in-out 0.5s infinite`}},{props:{animation:`wave`},style:{position:`relative`,overflow:`hidden`,WebkitMaskImage:`-webkit-radial-gradient(white, black)`,"&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:`""`,position:`absolute`,transform:`translateX(-100%)`,bottom:0,left:0,right:0,top:0}}},{props:{animation:`wave`},style:E||{"&::after":{animation:`${w} 2s linear 0.5s infinite`}}}]}})),O=x.forwardRef(function(e,t){let n=o({props:e,name:`MuiSkeleton`}),{animation:r=`pulse`,className:i,component:a=`span`,height:s,style:c,variant:u=`text`,width:d,...f}=n,p={...n,animation:r,component:a,variant:u,hasChildren:!!f.children};return(0,v.jsx)(D,{as:a,ref:t,className:l(S(p).root,i),ownerState:p,...f,style:{width:d,height:s,...c}})});function k({rows:e=5,rowHeight:t=92}){return(0,v.jsx)(p,{spacing:1.5,"aria-busy":`true`,"aria-live":`polite`,children:Array.from({length:e}).map((e,n)=>(0,v.jsx)(O,{variant:`rounded`,height:t,animation:`wave`},n))})}export{y as n,k as t};