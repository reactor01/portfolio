import{k as u,o as h,c as g,m as o,p as e,q as a,bl as c,w as t,bg as v,V as w,v as m,bh as y,aC as d,x as f,bm as _,bn as k,bj as C,bk as r,aJ as b,bf as B,r as N}from"./index.108806e8.js";import{a as R,b as T}from"./auth-v1-top-shape.37562e7c.js";import{V as j,_ as P}from"./AuthProvider.3c710cf0.js";import{b as V}from"./route-block.2f1a6263.js";import{V as S}from"./VForm.794c18af.js";import{V as x}from"./VTextField.8176f861.js";import{V as F}from"./VBtn.46296ee0.js";import"./forwardRefs.c003b6b8.js";import"./index.e4c3c006.js";import"./easing.36b781ab.js";const I={class:"auth-wrapper d-flex align-center justify-center pa-4"},L={class:"position-relative my-sm-16"},U={class:"d-flex"},D={class:"text-h5 font-weight-semibold mb-1"},E=o("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),$={class:"d-flex align-center justify-space-between flex-wrap mt-2 mb-4"},q=o("span",null,"New on our platform?",-1),J=o("span",{class:"mx-4"},"or",-1),M={__name:"login-v1",setup(W){const l=u({email:"",password:"",remember:!1}),i=u(!1);return(z,s)=>{const p=N("RouterLink");return h(),g("div",I,[o("div",L,[e(c,{src:a(R),class:"auth-v1-top-shape d-none d-sm-block"},null,8,["src"]),e(c,{src:a(T),class:"auth-v1-bottom-shape d-none d-sm-block"},null,8,["src"]),e(B,{class:"auth-card pa-4","max-width":"448"},{default:t(()=>[e(v,{class:"justify-center"},{prepend:t(()=>[o("div",U,[e(a(w),{nodes:a(m).app.logo},null,8,["nodes"])])]),default:t(()=>[e(y,{class:"font-weight-bold text-h5 py-1"},{default:t(()=>[d(f(a(m).app.title),1)]),_:1})]),_:1}),e(_,{class:"pt-1"},{default:t(()=>[o("h5",D," Welcome to "+f(a(m).app.title)+"! \u{1F44B}\u{1F3FB} ",1),E]),_:1}),e(_,null,{default:t(()=>[e(S,{onSubmit:s[4]||(s[4]=k(()=>{},["prevent"]))},{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(x,{modelValue:a(l).email,"onUpdate:modelValue":s[0]||(s[0]=n=>a(l).email=n),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(x,{modelValue:a(l).password,"onUpdate:modelValue":s[1]||(s[1]=n=>a(l).password=n),label:"Password",type:a(i)?"text":"password","append-inner-icon":a(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[2]||(s[2]=n=>i.value=!a(i))},null,8,["modelValue","type","append-inner-icon"]),o("div",$,[e(j,{modelValue:a(l).remember,"onUpdate:modelValue":s[3]||(s[3]=n=>a(l).remember=n),label:"Remember me"},null,8,["modelValue"]),e(p,{class:"text-primary ms-2 mb-1",to:{name:"pages-authentication-forgot-password-v1"}},{default:t(()=>[d(" Forgot Password? ")]),_:1})]),e(F,{block:"",type:"submit"},{default:t(()=>[d(" Login ")]),_:1})]),_:1}),e(r,{cols:"12",class:"text-center text-base"},{default:t(()=>[q,e(p,{class:"text-primary ms-2",to:{name:"pages-authentication-register-v1"}},{default:t(()=>[d(" Create an account ")]),_:1})]),_:1}),e(r,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(b),J,e(b)]),_:1}),e(r,{cols:"12",class:"text-center"},{default:t(()=>[e(P)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}};typeof V=="function"&&V(M);export{M as default};
