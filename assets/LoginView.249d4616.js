import{T as g,G as u,r as d,o as _,f as w,w as o,V as c,a as t,d as i,v as x,bd as b,L as h,g as v,X as y}from"./index.47334d42.js";import{V as B}from"./VForm.b91d8aab.js";import{a as m}from"./VTextField.0b70c3b0.js";import"./form.4c0a7941.js";import"./easing.1a8f6470.js";const U=v("h1",{class:"text-center my-4"},"\u767B\u5165",-1),k=y("\u767B\u5165"),C={__name:"LoginView",setup(N){const p=g(),n=u(!1),V=u(!1),s=d({account:"",password:""}),r=d({account:[e=>!!e||"\u5E33\u865F\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[e=>!!e||"\u5BC6\u78BC\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"]}),f=()=>{p.login(s)};return(e,a)=>(_(),w(c,{class:"justify-center",id:"login"},{default:o(()=>[t(i,{cols:"6"},{default:o(()=>[U]),_:1}),t(x),t(i,{cols:"6"},{default:o(()=>[t(B,{modelValue:n.value,"onUpdate:modelValue":a[2]||(a[2]=l=>n.value=l),onSubmit:b(f,["prevent"])},{default:o(()=>[t(m,{type:"text",label:"\u5E33\u865F",modelValue:s.account,"onUpdate:modelValue":a[0]||(a[0]=l=>s.account=l),rules:r.account,counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),t(m,{type:"password",label:"\u5BC6\u78BC",modelValue:s.password,"onUpdate:modelValue":a[1]||(a[1]=l=>s.password=l),rules:r.password,counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),t(c,{class:"justify-center"},{default:o(()=>[t(h,{class:"mx-auto",color:"black",type:"submit",loading:V.value},{default:o(()=>[k]),_:1},8,["loading"])]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1}))}};export{C as default};
