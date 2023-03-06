import{k as u,o as y,b as x,w as t,p as e,m as l,bl as m,q as a,bk as i,bf as k,bm as c,V as w,v as C,bn as I,bj as p,aC as f,aJ as _,r as R}from"./index.a16c734b.js";import{V as B,_ as L}from"./AuthProvider.756f2a70.js";import{u as V,m as M,a as P}from"./useGenerateImageVariant.315db4c6.js";import{b as g}from"./route-block.2f1a6263.js";import{V as U}from"./VForm.cb16231c.js";import{V as d,a as j}from"./VTextField.88414707.js";import{V as D}from"./VBtn.b9cfb2d8.js";import"./forwardRefs.c003b6b8.js";import"./index.7723310b.js";import"./easing.36b781ab.js";const N="/portfolio/assets/auth-v2-register-illustration-bordered-dark.c9ca0f5b.png",T="/portfolio/assets/auth-v2-register-illustration-bordered-light.bbf4b217.png",S="/portfolio/assets/auth-v2-register-illustration-dark.2626622e.png",A="/portfolio/assets/auth-v2-register-illustration-light.cd143341.png";const F={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},$={class:"d-flex align-center justify-center w-100 h-100"},q=l("h5",{class:"text-h5 font-weight-semibold mb-1"}," Adventure starts here \u{1F680} ",-1),E=l("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),G={class:"d-flex align-center mt-2 mb-4"},J=l("span",{class:"me-1"},"I agree to",-1),z=l("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),H=l("span",null,"Already have an account?",-1),K=l("span",{class:"mx-4"},"or",-1),O={__name:"register-v2",setup(Q){const o=u({username:"",email:"",password:"",privacyPolicies:!1}),b=V(A,S,T,N,!0),h=V(P,M),n=u(!1);return(W,s)=>{const v=R("RouterLink");return y(),x(p,{"no-gutters":"",class:"auth-wrapper"},{default:t(()=>[e(i,{md:"8",class:"d-none d-md-flex"},{default:t(()=>[l("div",F,[l("div",$,[e(m,{"max-width":"441",src:a(b),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(m,{class:"auth-footer-mask",src:a(h)},null,8,["src"])])]),_:1}),e(i,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:t(()=>[e(k,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:t(()=>[e(c,null,{default:t(()=>[e(a(w),{nodes:a(C).app.logo,class:"mb-6"},null,8,["nodes"]),q,E]),_:1}),e(c,null,{default:t(()=>[e(U,{onSubmit:s[5]||(s[5]=I(()=>{},["prevent"]))},{default:t(()=>[e(p,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(d,{modelValue:a(o).username,"onUpdate:modelValue":s[0]||(s[0]=r=>a(o).username=r),label:"Username"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(d,{modelValue:a(o).email,"onUpdate:modelValue":s[1]||(s[1]=r=>a(o).email=r),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(d,{modelValue:a(o).password,"onUpdate:modelValue":s[2]||(s[2]=r=>a(o).password=r),label:"Password",type:a(n)?"text":"password","append-inner-icon":a(n)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[3]||(s[3]=r=>n.value=!a(n))},null,8,["modelValue","type","append-inner-icon"]),l("div",G,[e(B,{id:"privacy-policy",modelValue:a(o).privacyPolicies,"onUpdate:modelValue":s[4]||(s[4]=r=>a(o).privacyPolicies=r),inline:""},null,8,["modelValue"]),e(j,{for:"privacy-policy",style:{opacity:"1"}},{default:t(()=>[J,z]),_:1})]),e(D,{block:"",type:"submit"},{default:t(()=>[f(" Sign up ")]),_:1})]),_:1}),e(i,{cols:"12",class:"text-center text-base"},{default:t(()=>[H,e(v,{class:"text-primary ms-2",to:{name:"pages-authentication-login-v2"}},{default:t(()=>[f(" Sign in instead ")]),_:1})]),_:1}),e(i,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(_),K,e(_)]),_:1}),e(i,{cols:"12",class:"text-center"},{default:t(()=>[e(L)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};typeof g=="function"&&g(O);export{O as default};