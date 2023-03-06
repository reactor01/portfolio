import{k as u,o as k,b as v,w as t,p as e,m as l,bl as c,q as a,bk as o,bf as y,bm as p,V as C,v as f,x as L,bn as I,bj as _,aC as m,aJ as V,r as B}from"./index.108806e8.js";import{a as D,b as N,c as R,d as T}from"./auth-v2-login-illustration-light.a2530d13.js";import{u as b,m as j,a as M}from"./useGenerateImageVariant.bd9e3446.js";import{V as P,_ as F}from"./AuthProvider.3c710cf0.js";import{b as g}from"./route-block.2f1a6263.js";import{V as U}from"./VForm.794c18af.js";import{V as h}from"./VTextField.8176f861.js";import{V as S}from"./VBtn.46296ee0.js";import"./forwardRefs.c003b6b8.js";import"./index.e4c3c006.js";import"./easing.36b781ab.js";const $={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},q={class:"d-flex align-center justify-center w-100 h-100"},E={class:"text-h5 font-weight-semibold mb-1"},G=l("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),J={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},W=l("span",null,"New on our platform?",-1),z=l("span",{class:"mx-4"},"or",-1),A={__name:"login-v2",setup(H){const n=u({email:"",password:"",remember:!1}),i=u(!1),x=b(T,R,N,D,!0),w=b(M,j);return(K,s)=>{const d=B("RouterLink");return k(),v(_,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(o,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[l("div",$,[l("div",q,[e(c,{"max-width":"505",src:a(x),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(c,{class:"auth-footer-mask",src:a(w)},null,8,["src"])])]),_:1}),e(o,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(y,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(p,null,{default:t(()=>[e(a(C),{nodes:a(f).app.logo,class:"mb-6"},null,8,["nodes"]),l("h5",E," Welcome to "+L(a(f).app.title)+"! \u{1F44B}\u{1F3FB} ",1),G]),_:1}),e(p,null,{default:t(()=>[e(U,{onSubmit:s[4]||(s[4]=I(()=>{},["prevent"]))},{default:t(()=>[e(_,null,{default:t(()=>[e(o,{cols:"12"},{default:t(()=>[e(h,{modelValue:a(n).email,"onUpdate:modelValue":s[0]||(s[0]=r=>a(n).email=r),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:t(()=>[e(h,{modelValue:a(n).password,"onUpdate:modelValue":s[1]||(s[1]=r=>a(n).password=r),label:"Password",type:a(i)?"text":"password","append-inner-icon":a(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[2]||(s[2]=r=>i.value=!a(i))},null,8,["modelValue","type","append-inner-icon"]),l("div",J,[e(P,{modelValue:a(n).remember,"onUpdate:modelValue":s[3]||(s[3]=r=>a(n).remember=r),label:"Remember me"},null,8,["modelValue"]),e(d,{class:"text-primary ms-2 mb-1",to:{name:"pages-authentication-forgot-password-v2"}},{default:t(()=>[m(" Forgot Password? ")]),_:1})]),e(S,{block:"",type:"submit"},{default:t(()=>[m(" Login ")]),_:1})]),_:1}),e(o,{cols:"12",class:"text-center text-base"},{default:t(()=>[W,e(d,{class:"text-primary ms-2",to:{name:"pages-authentication-register-v2"}},{default:t(()=>[m(" Create an account ")]),_:1})]),_:1}),e(o,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(V),z,e(V)]),_:1}),e(o,{cols:"12",class:"text-center"},{default:t(()=>[e(F)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof g=="function"&&g(A);export{A as default};
