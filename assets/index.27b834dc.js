import{d as x,c as U,C as i,D as m,G as s,aI as e,aH as n,aK as D,aJ as R,b4 as E,aE as W,aN as r,b5 as j,f as z,r as A,u as C,aM as f,aW as G,b6 as H,b7 as J,b8 as K,b9 as Q,ba as T,aX as X,bb as O,bc as Y,bd as Z,be as ee}from"./arco.a5a5eeda.js";import{F as oe}from"./index.bbb770e2.js";import{v as V,_ as k,u as se,I as ae,a as ne}from"./index.6fbe019e.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               */import{f as te,g as re}from"./vue.bbd9d311.js";import{u as le}from"./loading.32afe0d0.js";import"./chart.afd45e2e.js";const S="/assets/login-banner.426fb77f.png",ce={class:"banner"},ie={class:"banner-inner"},de={class:"carousel-title"},_e={class:"carousel-sub-title"},ue=["src"],me=x({__name:"banner",setup(c){const{t}=V.exports.useI18n(),g=U(()=>[{slogan:t("login.banner.slogan1"),subSlogan:t("login.banner.subSlogan1"),image:S},{slogan:t("login.banner.slogan2"),subSlogan:t("login.banner.subSlogan2"),image:S},{slogan:t("login.banner.slogan3"),subSlogan:t("login.banner.subSlogan3"),image:S}]);return(b,v)=>{const p=j,h=E;return i(),m("div",ce,[s("div",ie,[e(h,{class:"carousel","animation-name":"fade"},{default:n(()=>[(i(!0),m(D,null,R(g.value,a=>(i(),W(p,{key:a.slogan},{default:n(()=>[(i(),m("div",{key:a.slogan,class:"carousel-item"},[s("div",de,r(a.slogan),1),s("div",_e,r(a.subSlogan),1),s("img",{class:"carousel-image",src:a.image},null,8,ue)]))]),_:2},1024))),128))]),_:1})])])}}});const ge=k(me,[["__scopeId","data-v-2ce84fe6"]]),pe={class:"login-form-wrapper"},fe={class:"login-form-title"},be={class:"login-form-sub-title"},ve={class:"login-form-error-msg"},he={class:"login-form-password-actions"},we=x({__name:"login-form",setup(c){const t=te(),{t:g}=V.exports.useI18n(),b=z(""),{loading:v,setLoading:p}=le(),h=se(),a=re("login-config",{rememberPassword:!0,username:"admin",password:"admin"}),d=A({username:a.value.username,password:a.value.password}),F=async({errors:o,values:l})=>{if(!v.value&&!o){p(!0);try{await h.login(l);const{redirect:_,...w}=t.currentRoute.value.query;t.push({name:_||"Workplace",query:{...w}}),G.success(g("login.form.login.success"));const{rememberPassword:u}=a.value,{username:$,password:y}=l;a.value.username=u?$:"",a.value.password=u?y:""}catch(_){b.value=_.message}finally{p(!1)}}},L=o=>{a.value.rememberPassword=o};return(o,l)=>{const _=ae,w=H,u=J,$=ne,y=K,B=Q,N=T,P=X,M=O,q=Y;return i(),m("div",pe,[s("div",fe,r(o.$t("login.form.title")),1),s("div",be,r(o.$t("login.form.title")),1),s("div",ve,r(b.value),1),e(q,{ref:"loginForm",model:d,class:"login-form",layout:"vertical",onSubmit:F},{default:n(()=>[e(u,{field:"username",rules:[{required:!0,message:o.$t("login.form.userName.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[e(w,{modelValue:d.username,"onUpdate:modelValue":l[0]||(l[0]=I=>d.username=I),placeholder:o.$t("login.form.userName.placeholder")},{prefix:n(()=>[e(_)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(u,{field:"password",rules:[{required:!0,message:o.$t("login.form.password.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[e(y,{modelValue:d.password,"onUpdate:modelValue":l[1]||(l[1]=I=>d.password=I),placeholder:o.$t("login.form.password.placeholder"),"allow-clear":""},{prefix:n(()=>[e($)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(M,{size:16,direction:"vertical"},{default:n(()=>[s("div",he,[e(B,{checked:"rememberPassword","model-value":C(a).rememberPassword,onChange:L},{default:n(()=>[f(r(o.$t("login.form.rememberPassword")),1)]),_:1},8,["model-value","onChange"]),e(N,null,{default:n(()=>[f(r(o.$t("login.form.forgetPassword")),1)]),_:1})]),e(P,{type:"primary","html-type":"submit",long:"",loading:C(v)},{default:n(()=>[f(r(o.$t("login.form.login")),1)]),_:1},8,["loading"]),e(P,{type:"text",long:"",class:"login-form-register-btn"},{default:n(()=>[f(r(o.$t("login.form.register")),1)]),_:1})]),_:1})]),_:1},8,["model"])])}}});const $e=k(we,[["__scopeId","data-v-0c627d4f"]]),ye=c=>(Z("data-v-7183afbd"),c=c(),ee(),c),Ie={class:"container"},Se=ye(()=>s("div",{class:"logo"},[s("img",{alt:"logo",src:"//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"}),s("div",{class:"logo-text"},"Arco Design Pro")],-1)),xe={class:"content"},ke={class:"content-inner"},Pe={class:"footer"},Ce=x({__name:"index",setup(c){return(t,g)=>(i(),m("div",Ie,[Se,e(ge),s("div",xe,[s("div",ke,[e($e)]),s("div",Pe,[e(oe)])])]))}});const Ee=k(Ce,[["__scopeId","data-v-7183afbd"]]);export{Ee as default};
