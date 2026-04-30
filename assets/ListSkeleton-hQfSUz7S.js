import{At as e,Ft as t,It as n,K as r,W as i,dt as a,et as o,kt as s,lt as c,t as l,ut as u,v as d,w as f,zt as p}from"./Button-BBPsYdRa.js";import{t as m}from"./Stack-Dm-09z6r.js";import{t as h}from"./shared.module-DZKW8Ohj.js";function g(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||``}function _(e){return parseFloat(e)}var v=t();function y({icon:e,title:t,description:n,actions:r}){return(0,v.jsxs)(`div`,{className:h.emptyState,role:`status`,children:[(0,v.jsx)(`div`,{className:h.emptyIcon,"aria-hidden":!0,children:e}),(0,v.jsx)(d,{variant:`subtitle1`,fontWeight:600,sx:{mb:.5},children:t}),n&&(0,v.jsx)(d,{variant:`body2`,color:`text.secondary`,sx:{maxWidth:380,mx:`auto`},children:n}),r&&r.length>0&&(0,v.jsx)(m,{direction:`row`,spacing:1,justifyContent:`center`,sx:{mt:3},flexWrap:`wrap`,useFlexGap:!0,children:r.map((e,t)=>(0,v.jsx)(l,{variant:e.variant??(t===0?`contained`:`outlined`),startIcon:e.startIcon,onClick:e.onClick,disableElevation:!0,children:e.label},e.label))})]})}function b(e){return u(`MuiSkeleton`,e)}c(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`]);var x=p(n()),S=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:s}=e;return o({root:[`root`,n,r,i&&`withChildren`,i&&!a&&`fitContent`,i&&!s&&`heightAuto`]},b,t)},C=e`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,w=e`
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
`,T=typeof C==`string`?null:s`
        animation: ${C} 2s ease-in-out 0.5s infinite;
      `,E=typeof w==`string`?null:s`
        &::after {
          animation: ${w} 2s linear 0.5s infinite;
        }
      `,D=r(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(f(({theme:e})=>{let t=g(e.shape.borderRadius)||`px`,n=_(e.shape.borderRadius);return{display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`,variants:[{props:{variant:`text`},style:{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${n}${t}/${Math.round(n/.6*10)/10}${t}`,"&:empty:before":{content:`"\\00a0"`}}},{props:{variant:`circular`},style:{borderRadius:`50%`}},{props:{variant:`rounded`},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:`hidden`}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:`fit-content`}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:`auto`}},{props:{animation:`pulse`},style:T||{animation:`${C} 2s ease-in-out 0.5s infinite`}},{props:{animation:`wave`},style:{position:`relative`,overflow:`hidden`,WebkitMaskImage:`-webkit-radial-gradient(white, black)`,"&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:`""`,position:`absolute`,transform:`translateX(-100%)`,bottom:0,left:0,right:0,top:0}}},{props:{animation:`wave`},style:E||{"&::after":{animation:`${w} 2s linear 0.5s infinite`}}}]}})),O=x.forwardRef(function(e,t){let n=i({props:e,name:`MuiSkeleton`}),{animation:r=`pulse`,className:o,component:s=`span`,height:c,style:l,variant:u=`text`,width:d,...f}=n,p={...n,animation:r,component:s,variant:u,hasChildren:!!f.children};return(0,v.jsx)(D,{as:s,ref:t,className:a(S(p).root,o),ownerState:p,...f,style:{width:d,height:c,...l}})});function k({rows:e=5,rowHeight:t=92}){return(0,v.jsx)(m,{spacing:1.5,"aria-busy":`true`,"aria-live":`polite`,children:Array.from({length:e}).map((e,n)=>(0,v.jsx)(O,{variant:`rounded`,height:t,animation:`wave`},n))})}export{y as n,k as t};