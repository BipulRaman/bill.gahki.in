import{Ht as e,It as t,Kt as n,Lt as r,O as i,Q as a,S as o,Ut as s,X as c,_t as l,gt as u,ot as d,vt as f}from"./Card-vz-5kdmW.js";import{n as p,u as m}from"./index-ByQDwlZ0.js";import{t as h}from"./shared.module-BiEixs-K.js";function g(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||``}function _(e){return parseFloat(e)}function v(e){return l(`MuiSkeleton`,e)}u(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`]);var y=n(s()),b=e(),x=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:o}=e;return d({root:[`root`,n,r,i&&`withChildren`,i&&!a&&`fitContent`,i&&!o&&`heightAuto`]},v,t)},S=r`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,C=r`
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
`,w=typeof S==`string`?null:t`
        animation: ${S} 2s ease-in-out 0.5s infinite;
      `,T=typeof C==`string`?null:t`
        &::after {
          animation: ${C} 2s linear 0.5s infinite;
        }
      `,E=a(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(i(({theme:e})=>{let t=g(e.shape.borderRadius)||`px`,n=_(e.shape.borderRadius);return{display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`,variants:[{props:{variant:`text`},style:{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${n}${t}/${Math.round(n/.6*10)/10}${t}`,"&:empty:before":{content:`"\\00a0"`}}},{props:{variant:`circular`},style:{borderRadius:`50%`}},{props:{variant:`rounded`},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:`hidden`}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:`fit-content`}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:`auto`}},{props:{animation:`pulse`},style:w||{animation:`${S} 2s ease-in-out 0.5s infinite`}},{props:{animation:`wave`},style:{position:`relative`,overflow:`hidden`,WebkitMaskImage:`-webkit-radial-gradient(white, black)`,"&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:`""`,position:`absolute`,transform:`translateX(-100%)`,bottom:0,left:0,right:0,top:0}}},{props:{animation:`wave`},style:T||{"&::after":{animation:`${C} 2s linear 0.5s infinite`}}}]}})),D=y.forwardRef(function(e,t){let n=c({props:e,name:`MuiSkeleton`}),{animation:r=`pulse`,className:i,component:a=`span`,height:o,style:s,variant:l=`text`,width:u,...d}=n,p={...n,animation:r,component:a,variant:l,hasChildren:!!d.children};return(0,b.jsx)(E,{as:a,ref:t,className:f(x(p).root,i),ownerState:p,...d,style:{width:u,height:o,...s}})});function O({icon:e,title:t,description:n,actions:r}){return(0,b.jsxs)(`div`,{className:h.emptyState,role:`status`,children:[(0,b.jsx)(`div`,{className:h.emptyIcon,"aria-hidden":!0,children:e}),(0,b.jsx)(o,{variant:`subtitle1`,component:`h2`,fontWeight:600,sx:{mb:.5},children:t}),n&&(0,b.jsx)(o,{variant:`body2`,color:`text.secondary`,sx:{maxWidth:380,mx:`auto`},children:n}),r&&r.length>0&&(0,b.jsx)(p,{direction:`row`,spacing:1,justifyContent:`center`,sx:{mt:3},flexWrap:`wrap`,useFlexGap:!0,children:r.map((e,t)=>(0,b.jsx)(m,{variant:e.variant??(t===0?`contained`:`outlined`),startIcon:e.startIcon,onClick:e.onClick,disableElevation:!0,children:e.label},e.label))})]})}function k({rows:e=5,rowHeight:t=92}){return(0,b.jsx)(p,{spacing:1.5,"aria-busy":`true`,"aria-live":`polite`,children:Array.from({length:e}).map((e,n)=>(0,b.jsx)(D,{variant:`rounded`,height:t,animation:`wave`},n))})}export{O as n,k as t};