import{a8 as f,a9 as u,i as d,o as g,d as w,w as s,V as _,a,g as i,b9 as x,ab as b,b as h,aa as v}from"./index.250fd50a.js";import{V as y}from"./VDivider.1e0f23d4.js";import{V as B}from"./VForm.45f18be5.js";import{a as c}from"./VTextField.660273e8.js";import"./form.376311bc.js";const U=h("h1",{class:"text-center"},"\u767B\u5165",-1),k=v("\u767B\u5165"),T={__name:"LoginView",setup(N){const m=f(),n=u(!1),p=u(!1),t=d({account:"",password:""}),r=d({account:[e=>!!e||"\u5E33\u865F\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[e=>!!e||"\u5BC6\u78BC\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"]}),V=()=>{m.login(t)};return(e,o)=>(g(),w(_,{id:"login",justify:"center"},{default:s(()=>[a(i,{cols:"6"},{default:s(()=>[U]),_:1}),a(y),a(i,{cols:"6"},{default:s(()=>[a(B,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=l=>n.value=l),onSubmit:x(V,["prevent"])},{default:s(()=>[a(c,{type:"text",label:"\u5E33\u865F",modelValue:t.account,"onUpdate:modelValue":o[0]||(o[0]=l=>t.account=l),rules:r.account,counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),a(c,{type:"password",label:"\u5BC6\u78BC",modelValue:t.password,"onUpdate:modelValue":o[1]||(o[1]=l=>t.password=l),rules:r.password,counter:"20",maxlength:"20"},null,8,["modelValue","rules"]),a(b,{class:"mx-auto",color:"black",type:"submit",loading:p.value},{default:s(()=>[k]),_:1},8,["loading"])]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1}))}};export{T as default};
