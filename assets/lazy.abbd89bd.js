import{X as r,k as n,a1 as u,B as f}from"./index.50f00503.js";const c=r({eager:Boolean},"lazy");function m(e,o){const a=n(!1),s=u(()=>a.value||e.eager||o.value);f(o,()=>a.value=!0);function t(){e.eager||(a.value=!1)}return{isBooted:a,hasContent:s,onAfterLeave:t}}export{c as m,m as u};
