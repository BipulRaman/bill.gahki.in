import{An as e,Ct as t,Ft as n,It as r,Mn as i,Pt as a,U as o,dn as s,en as c,ht as l,i as u,pt as d,tn as f}from"./Portal-cj0Gog5Y.js";import{n as p,t as m}from"./Stack-BTokQuc6.js";import{t as h}from"./shared.module-3RmC_ARh.js";function g(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||``}function _(e){return parseFloat(e)}function v(e){return n(`MuiSkeleton`,e)}a(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`]);var y=i(e()),b=s(),x=e=>{let{classes:n,variant:r,animation:i,hasChildren:a,width:o,height:s}=e;return t({root:[`root`,r,i,a&&`withChildren`,a&&!o&&`fitContent`,a&&!s&&`heightAuto`]},v,n)},S=f`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,C=f`
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
`,w=typeof S==`string`?null:c`
        animation: ${S} 2s ease-in-out 0.5s infinite;
      `,T=typeof C==`string`?null:c`
        &::after {
          animation: ${C} 2s linear 0.5s infinite;
        }
      `,E=l(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(o(({theme:e})=>{let t=g(e.shape.borderRadius)||`px`,n=_(e.shape.borderRadius);return{display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`,variants:[{props:{variant:`text`},style:{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${n}${t}/${Math.round(n/.6*10)/10}${t}`,"&:empty:before":{content:`"\\00a0"`}}},{props:{variant:`circular`},style:{borderRadius:`50%`}},{props:{variant:`rounded`},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:`hidden`}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:`fit-content`}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:`auto`}},{props:{animation:`pulse`},style:w||{animation:`${S} 2s ease-in-out 0.5s infinite`}},{props:{animation:`wave`},style:{position:`relative`,overflow:`hidden`,WebkitMaskImage:`-webkit-radial-gradient(white, black)`,"&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:`""`,position:`absolute`,transform:`translateX(-100%)`,bottom:0,left:0,right:0,top:0}}},{props:{animation:`wave`},style:T||{"&::after":{animation:`${C} 2s linear 0.5s infinite`}}}]}})),D=y.forwardRef(function(e,t){let n=d({props:e,name:`MuiSkeleton`}),{animation:i=`pulse`,className:a,component:o=`span`,height:s,style:c,variant:l=`text`,width:u,...f}=n,p={...n,animation:i,component:o,variant:l,hasChildren:!!f.children};return(0,b.jsx)(E,{as:o,ref:t,className:r(x(p).root,a),ownerState:p,...f,style:{width:u,height:s,...c}})});function O({icon:e,title:t,description:n,actions:r}){return(0,b.jsxs)(`div`,{className:h.emptyState,role:`status`,children:[(0,b.jsx)(`div`,{className:h.emptyIcon,"aria-hidden":!0,children:e}),(0,b.jsx)(u,{variant:`subtitle1`,component:`h2`,fontWeight:600,sx:{mb:.5},children:t}),n&&(0,b.jsx)(u,{variant:`body2`,color:`text.secondary`,sx:{maxWidth:380,mx:`auto`},children:n}),r&&r.length>0&&(0,b.jsx)(m,{direction:`row`,spacing:1,justifyContent:`center`,sx:{mt:3},flexWrap:`wrap`,useFlexGap:!0,children:r.map((e,t)=>(0,b.jsx)(p,{variant:e.variant??(t===0?`contained`:`outlined`),startIcon:e.startIcon,onClick:e.onClick,disableElevation:!0,children:e.label},e.label))})]})}function k({rows:e=5,rowHeight:t=92}){return(0,b.jsx)(m,{spacing:1.5,"aria-busy":`true`,"aria-live":`polite`,children:Array.from({length:e}).map((e,n)=>(0,b.jsx)(D,{variant:`rounded`,height:t,animation:`wave`},n))})}export{O as n,k as t};