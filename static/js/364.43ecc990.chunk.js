"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[364],{85147:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(35475),c=a(83910),n=a(97929),o=a(70579);function r(e){let{category:t}=e;return(0,o.jsx)("div",{className:"category-main",children:(0,o.jsx)(s.k2,{to:"/categories/".concat(t),style:{textDecoration:"none"},children:(0,o.jsxs)("div",{className:"category-container",children:[(0,o.jsx)(c.g,{icon:n.G06}),(0,o.jsx)("span",{style:{marginLeft:"5px"},children:t})]})})})}},64101:(e,t,a)=>{a.d(t,{A:()=>d});var s=a(65043),c=a(2207),n=a(48857),o=a(37709),r=a(34),i=(a(21582),a(70579));const l=new c.Dz((0,n.x)({langPrefix:"hljs language-",highlight(e,t,a){const s=o.A.getLanguage(t)?t:"plaintext";return o.A.highlight(e,{language:s}).value}}));function d(e){let{markdown:t,limit:a=100,showLimitContent:c,darkMode:n}=e;const[o,r]=(0,s.useState)("");return(0,s.useEffect)((()=>{let e=t.replace(/^-{3}[\s\S]*?-{3}/,"");if(c&&""!==t){let t=e.replace(/<[^>]*>/g,"");t.length>a&&(t=t.substring(0,a)+"..."),r(t)}else{let t=l.parse(e);r(t)}}),[t,a,c]),(0,i.jsx)("div",{className:c?"":"".concat(n?"markdown-body-dark":"markdown-body"),children:c?(0,i.jsx)("div",{children:o}):(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:o}})})}l.use((0,r.A)())},77371:(e,t,a)=>{a.d(t,{A:()=>x});var s=a(79722),c=a(65043),n=a(35475),o=a(68329),r=a(64101),i=a(7650),l=a(94075),d=a(85147),h=a(9971),g=a(4413),m=a(70579);function x(e){let{config:t,limit:a,showLimitContent:x,showFooter:u=!0}=e;const[j]=(0,c.useState)(t),[v,p]=(0,c.useState)(""),[f,k]=(0,c.useState)(""),[N,w]=(0,c.useState)([]),[A,y]=(0,c.useState)([]),[b,S]=(0,c.useState)(!0),C=(0,h.G)((e=>e.darkMode));(0,c.useEffect)((()=>{const{title:e,path:t}=j;let a=g.t$?"".concat("").concat(t,"?timestamp=").concat(Date.now()):"".concat("").concat(t);s.A.get(a).then((t=>{p(e),k(t.data),S(!1)})).catch((e=>{console.log("PostCard:\u6587\u7ae0\u83b7\u53d6\u5931\u8d25: ".concat(t),e)})),j&&j.tags&&w([...j.tags]),j&&j.categories&&y([...j.categories])}),[]);return(0,m.jsx)("div",{className:"hv-center",children:(0,m.jsx)(o.A,{scale:!0,darkMode:C,children:b?(0,m.jsx)(i.A,{active:!0}):(0,m.jsxs)("div",{className:"post-card-main",children:[(0,m.jsxs)(n.k2,{to:"/post/detail/".concat(j.id),style:{textDecoration:"none"},children:[(0,m.jsx)("div",{className:C?"post-card-title-dark":"post-card-title",children:v}),(0,m.jsx)("hr",{className:C?"hr-dashed-dark":"hr-dashed"}),(0,m.jsx)("div",{className:C?"post-card-content-dark":"post-card-content",children:(0,m.jsx)(r.A,{darkMode:C,limit:a,markdown:f,showLimitContent:x})}),(0,m.jsx)("hr",{className:C?"hr-double-dark":"hr-double"})]}),u&&(0,m.jsxs)("div",{className:C?"post-card-footer-dark":"post-card-footer",children:[(0,m.jsx)("div",{className:"post-card-tags-block",children:(()=>{if(N)return N.map(((e,t)=>(0,m.jsx)("div",{className:"post-card-tag-container",children:(0,m.jsx)(l.A,{tag:e})},t)))})()}),(0,m.jsx)("div",{className:"post-card-categories-block",children:(()=>{if(A)return A.map(((e,t)=>(0,m.jsx)("div",{className:"post-card-category-container",children:(0,m.jsx)(d.A,{category:e})},t)))})()})]})]})})})}},94075:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(65043),c=a(35475),n=a(70579);function o(e){let{tag:t,reload:a=!1}=e;const[o,r]=(0,s.useState)(0);(0,s.useEffect)((()=>{let e=Math.floor(3*Math.random());r(e)}),[]);return(0,n.jsx)("div",{className:"tag-main",children:(0,n.jsx)(c.k2,{onClick:()=>{a&&window.location.reload()},to:"/tags/".concat(t),style:{textDecoration:"none"},children:(0,n.jsx)("div",{className:(i=o,"tag-bg-color-"+i),children:t})})});var i}},21308:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var s=a(73216),c=a(82452),n=a(4256),o=a(77371),r=a(9971),i=a(70579);function l(){const{category:e}=(0,s.g)(),t=(0,r.G)((e=>e.categoriesList))[e],a=(0,r.j)();return(0,i.jsxs)("div",{className:"page-main",children:[(0,i.jsx)("div",{className:"page-main-title",children:(0,i.jsx)(c.A,{title:e})}),(0,i.jsx)("div",{className:"page-main-content",children:(()=>{if(t&&t.length>0)return t.map((e=>(0,i.jsx)("div",{style:{width:"100%",marginBottom:"3vh"},onClick:()=>(e=>{a((0,n.NI)(e))})(e),children:(0,i.jsx)(o.A,{config:e,limit:250,showLimitContent:!0},e.id)},e.id)))})()})]})}}}]);
//# sourceMappingURL=364.43ecc990.chunk.js.map