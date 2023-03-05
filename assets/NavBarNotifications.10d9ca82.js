import{m as se,u as ne,a as oe,b as ie,V as q}from"./VBtn.bd877e26.js";import{E as B,a6 as re,K as A,L as z,M as H,N as J,S as de,U as _,W as D,p as a,aj as ce,ak as S,G as ue,H as ve,I as me,J as K,ap as fe,ab as ge,P as be,aq as pe,O as he,Q as ye,R as U,ac as Ce,a4 as _e,av as ke,aw as T,ax as Ve,ay as xe,az as x,C as g,aF as W,aI as L,an as Se,a$ as Be,aK as Ae,b8 as Ie,ad as Ne,b9 as Pe,at as $e,aG as Te,b5 as Le,aE as w,o as f,b as R,w as i,aC as M,x as N,aA as O,aJ as Y,c as P,F as j,a as we,q as Re,m as ze}from"./index.50f00503.js";import{V as De}from"./VMenu.d41a765d.js";import{V as Ge,a as $}from"./VList.54803097.js";import{a as Ee}from"./index.7d8e130e.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.5fb6e98f.js";import"./easing.36b781ab.js";import"./lazy.abbd89bd.js";const Q=Symbol.for("vuetify:v-chip-group");B({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:re},...se({selectedClass:"v-chip--selected"}),...A(),...z(),...H({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:s}=o;const{themeClasses:r}=J(e),{isSelected:t,select:n,next:b,prev:p,selected:h}=ne(e,Q);return de({VChip:{color:_(e,"color"),filter:_(e,"filter"),variant:_(e,"variant")}}),D(()=>{var m;return a(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},r.value]},{default:()=>[(m=s.default)==null?void 0:m.call(s,{isSelected:t,select:n,next:b,prev:p,selected:h.value})]})}),{}}});const Fe=B({name:"VChip",directives:{Ripple:ce},props:{activeClass:String,appendAvatar:String,appendIcon:S,closable:Boolean,closeIcon:{type:S,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,pill:Boolean,prependAvatar:String,prependIcon:S,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},...ue(),...ve(),...me(),...oe(),...K(),...fe(),...ge(),...A({tag:"span"}),...z(),...H({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0},setup(e,o){let{attrs:s,emit:r,slots:t}=o;const{borderClasses:n}=be(e),{colorClasses:b,colorStyles:p,variantClasses:h}=pe(e),{densityClasses:m}=he(e),{elevationClasses:d}=ye(e),{roundedClasses:y}=U(e),{sizeClasses:c}=Ce(e),{themeClasses:u}=J(e),v=_e(e,"modelValue"),l=ie(e,Q,!1),C=ke(e,s);function I(k){v.value=!1,r("click:close",k)}return()=>{var k;const Z=C.isLink.value?"a":e.tag,ee=!!(t.append||e.appendIcon||e.appendAvatar),ae=!!(t.close||e.closable),G=!!(t.filter||e.filter)&&l,te=!!(t.prepend||e.prependIcon||e.prependAvatar),E=!l||l.isSelected.value,V=!e.disabled&&(!!l||C.isClickable.value||e.link),le=e.link?e.link:l==null?void 0:l.toggle;return v.value&&T(a(Z,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":V,"v-chip--filter":G,"v-chip--pill":e.pill},u.value,n.value,E?b.value:void 0,m.value,d.value,y.value,c.value,h.value,l==null?void 0:l.selectedClass.value],style:[E?p.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:C.href.value,onClick:V&&le},{default:()=>{var F;return[xe(V,"v-chip"),G&&a(x,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[a(Ee,null,{default:()=>[T(a("div",{class:"v-chip__filter"},[t.filter?t.filter():a(g,null,null)]),[[W,l.isSelected.value]])]})]}),te&&a(x,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[t.prepend?a("div",{class:"v-chip__prepend"},[t.prepend()]):e.prependAvatar?a(L,{start:!0},null):e.prependIcon?a(g,{start:!0},null):void 0]}),(F=(k=t.default)==null?void 0:k.call(t,{isSelected:l==null?void 0:l.isSelected.value,selectedClass:l==null?void 0:l.selectedClass.value,select:l==null?void 0:l.select,toggle:l==null?void 0:l.toggle,value:l==null?void 0:l.value.value,disabled:e.disabled}))!=null?F:e.text,ee&&a(x,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[t.append?a("div",{class:"v-chip__append"},[t.append()]):e.appendAvatar?a(L,{end:!0},null):e.appendIcon?a(g,{end:!0},null):void 0]}),ae&&a(x,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[a("div",{class:"v-chip__close",onClick:I},[t.close?t.close():a(g,null,null)])]})]}}),[[Ve("ripple"),V&&e.ripple,null]])}}}),qe=B({name:"VListItemAction",props:{start:Boolean,end:Boolean,...A()},setup(e,o){let{slots:s}=o;return D(()=>a(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end}]},s)),{}}});const X=B({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:S,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...Se({location:"top end"}),...K(),...A(),...z(),...Be({transition:"scale-rotate-transition"})},setup(e,o){const{backgroundColorClasses:s,backgroundColorStyles:r}=Ae(_(e,"color")),{roundedClasses:t}=U(e),{t:n}=Ie(),{textColorClasses:b,textColorStyles:p}=Ne(_(e,"textColor")),{themeClasses:h}=Pe(),{locationStyles:m}=$e(e,!0,d=>{var c,u;return(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(d)?+((c=e.offsetY)!=null?c:0):["left","right"].includes(d)?+((u=e.offsetX)!=null?u:0):0)});return D(()=>{var d,y,c,u;const v=Number(e.content),l=!e.max||isNaN(v)?e.content:v<=e.max?v:`${e.max}+`,[C,I]=Te(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,w({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline}]},I),{default:()=>[a("div",{class:"v-badge__wrapper"},[(d=(y=o.slots).default)==null?void 0:d.call(y),a(Le,{transition:e.transition},{default:()=>[T(a("span",w({class:["v-badge__badge",h.value,s.value,t.value,b.value],style:[r.value,p.value,e.inline?{}:m.value],"aria-atomic":"true","aria-label":n(e.label,v),"aria-live":"polite",role:"status"},C),[e.dot?void 0:o.slots.badge?(c=(u=o.slots).badge)==null?void 0:c.call(u):e.icon?a(g,{icon:e.icon},null):l]),[[W,e.modelValue]])]})])]})}),{}}}),Me=e=>e?e.split(" ").map(s=>s.charAt(0).toUpperCase()).join(""):"";const Oe={key:0},Ye={class:"whitespace-no-wrap text-medium-emphasis"},je={__name:"Notifications",props:{notifications:{type:Array,required:!0},badgeProps:{type:null,required:!1,default:void 0},location:{type:null,required:!1,default:"bottom end"}},emits:["click:readAllNotifications"],setup(e,{emit:o}){const s=e;return(r,t)=>(f(),R(X,w({"model-value":!!s.badgeProps},s.badgeProps),{default:i(()=>[a(q,{icon:"",variant:"text",color:"default",size:"small"},{default:i(()=>[a(X,{"model-value":!!s.notifications.length,color:"error",content:"4"},{default:i(()=>[a(g,{icon:"tabler-bell",size:"24"})]),_:1},8,["model-value"]),a(De,{activator:"parent",width:"380px",location:s.location,offset:"14px"},{default:i(()=>[a(Ge,{class:"py-0"},{default:i(()=>[a($,{title:"Notifications",class:"notification-section",height:"48px"},{append:i(()=>[s.notifications.length?(f(),R(Fe,{key:0,color:"primary",size:"small"},{default:i(()=>[M(N(s.notifications.length)+" New ",1)]),_:1})):O("",!0)]),_:1}),a(Y),(f(!0),P(j,null,we(s.notifications,n=>(f(),P(j,{key:n.title},[a($,{title:n.title,subtitle:n.subtitle,link:"",lines:"one","min-height":"66px"},{prepend:i(()=>[a(qe,{start:""},{default:i(()=>[a(L,{color:n.color||"primary",image:n.img||void 0,icon:n.icon||void 0,size:"40",variant:"tonal"},{default:i(()=>[n.text?(f(),P("span",Oe,N(Re(Me)(n.text)),1)):O("",!0)]),_:2},1032,["color","image","icon"])]),_:2},1024)]),append:i(()=>[ze("small",Ye,N(n.time),1)]),_:2},1032,["title","subtitle"]),a(Y)],64))),128)),a($,{class:"notification-section"},{default:i(()=>[a(q,{block:"",onClick:t[0]||(t[0]=n=>r.$emit("click:readAllNotifications"))},{default:i(()=>[M(" READ ALL NOTIFICATIONS ")]),_:1})]),_:1})]),_:1})]),_:1},8,["location"])]),_:1})]),_:1},16,["model-value"]))}},Xe="/portfolio/assets/avatar-3.47317f35.png",He="/portfolio/assets/avatar-4.b0163f21.png",Je="/portfolio/assets/avatar-5.d340221a.png",Ke="/portfolio/assets/paypal.01b645d1.svg",na={__name:"NavBarNotifications",setup(e){const o=[{img:He,title:"Congratulation Flora! \u{1F389}",subtitle:"Won the monthly best seller badge",time:"Today"},{text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday"},{img:Je,title:"New message received \u{1F44B}\u{1F3FB}",subtitle:"You have 10 unread messages",time:"11 Aug"},{img:Ke,title:"Paypal",subtitle:"Received Payment",time:"25 May",color:"error"},{img:Xe,title:"Received Order \u{1F4E6}",subtitle:"New order received from john",time:"19 Mar"}];return(s,r)=>(f(),R(je,{notifications:o}))}};export{na as default};
