import{u as f,r as u,l as d,o as g,e as w,w as s,V as _,a as o,d as i,b8 as x,i as b,b as h,h as v}from"./index.1abab4fd.js";import{V as y}from"./VDivider.18abc35e.js";import{V as B}from"./VForm.177f6fbe.js";import{a as c}from"./VTextField.de84ebcb.js";import"./form.612ffd7c.js";const U=h("h1",{class:"text-center"},"\u767B\u5165",-1),k=v("\u767B\u5165"),T={__name:"LoginView",setup(N){const m=f(),r=u(!1),p=u(!1),a=d({account:"",password:""}),n=d({account:[e=>!!e||"\u5E33\u865F\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[e=>!!e||"\u5BC6\u78BC\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"]}),V=()=>{m.login(a)};return(e,t)=>(g(),w(_,{id:"login",justify:"center"},{default:s(()=>[o(i,{cols:"6"},{default:s(()=>[U]),_:1}),o(y),o(i,{cols:"6"},{default:s(()=>[o(B,{modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=l=>r.value=l),onSubmit:x(V,["prevent"])},{default:s(()=>[o(c,{type:"text",label:"\u5E33\u865F",modelValue:a.account,"onUpdate:modelValue":t[0]||(t[0]=l=>a.account=l),rules:n.account,counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),o(c,{type:"password",label:"\u5BC6\u78BC",modelValue:a.password,"onUpdate:modelValue":t[1]||(t[1]=l=>a.password=l),rules:n.password,counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),o(b,{class:"mx-auto",color:"black",type:"submit",loading:p.value},{default:s(()=>[k]),_:1},8,["loading"])]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1}))}};export{T as default};
