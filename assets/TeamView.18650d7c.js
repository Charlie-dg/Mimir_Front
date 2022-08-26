import{i as b,o as u,c as f,a as l,w as s,V as c,bg as V,S as _,g as n,ab as m,A as h,b as i,F as C,r as j,d as v,t as g,h as z,b9 as E,e as k,aa as p,f as A}from"./index.250fd50a.js";import{V as N}from"./VDialog.5f7210f9.js";import{V as q}from"./VTable.39f17847.js";import{b as F,V as T,a as U,d as I}from"./VCard.428f1a8c.js";import{a as L}from"./VTextField.660273e8.js";import{a as M,V as $}from"./VTextarea.b855deee.js";import{V as P}from"./VCheckbox.751d4af0.js";import{V as B}from"./VForm.45f18be5.js";import{V as R}from"./VAvatar.87710db4.js";import"./scopeId.e974f990.js";import"./form.376311bc.js";import"./VOverlay.30f78188.js";import"./createSimpleFunctional.e4f50c27.js";import"./VCheckboxBtn.94e17887.js";const G={id:"admin-designers"},H=i("h1",{class:"text-center my-2"},"\u5718\u968A\u7BA1\u7406",-1),J=p("mdi-plus"),K=i("thead",null,[i("tr",null,[i("th",{class:"text-center text-h6"},"\u7DE8\u865F"),i("th",{class:"text-center text-h6"},"\u982D\u50CF"),i("th",{class:"text-center text-h6"},"\u59D3\u540D"),i("th",{class:"text-center text-h6"},"\u767C\u4F48"),i("th",{class:"text-center text-h6"},"\u67E5\u770B"),i("th",{class:"text-center text-h6"},"\u7DE8\u8F2F"),i("th",{class:"text-center text-h6"},"\u522A\u9664")])],-1),O={class:"text-center"},Q={class:"text-center"},W={key:0,class:"text-center"},X={key:1,class:"text-center"},Y=p("mdi-eye"),Z=p("mdi-pencil-outline"),ee=p("mdi-delete"),te={key:1},le=i("td",{class:"text-center text-h6",colspan:"7"},"\u5C1A\u7121\u8A2D\u8A08\u5E2B",-1),se=[le],ae={class:"text-h5"},oe=p("\u78BA\u5B9A"),ie=p("\u53D6\u6D88"),re=p("mdi-close"),ne={class:"text-h5 font-weight-bold"},de=i("div",{class:"text-h6 font-weight-bold text-center"},"\u7C21\u4ECB:",-1),ue={class:"text-h6 font-weight-bold text-center my-2"},ce=i("div",{class:"text-h6 font-weight-bold text-center my-2"},"\u4F5C\u54C1\u96C6:",-1),Ae={__name:"TeamView",setup(fe){const r=b([]),e=b({_id:"",name:"",description:"",avatar:"",portfolio:[],publish:!1,idx:-1,dialog:!1,read:!1,valid:!1,submitting:!1}),x=b({required(o){return!!o||"\u5FC5\u586B"},size(o){var t,a,d;return!o||!o.length||((a=(t=o[0])==null?void 0:t.type)==null?void 0:a.includes("image"))&&((d=o[0])==null?void 0:d.size)<1024*1024||"\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26"}}),y=(o,t,a)=>{if(e._id=o,a){e.name=r[t].name,e.description=r[t].description,e.publish=r[t].publish,e.avatar=r[t].avatar;for(const d in r[t].portfolio)e.portfolio[d]=r[t].portfolio[d];e.read=!0}else t>-1?(e.name=r[t].name,e.description=r[t].description,e.publish=r[t].publish,e.avatar=[],e.portfolio=[]):(e.name="",e.description="",e.publish=!1,e.avatar=[],e.portfolio=[]),e.read=!1;e.idx=t,e.dialog=!0,e.valid=!1,e.submitting=!1},S=async()=>{if(!e.valid)return;e.submitting=!0;const o=new FormData;for(const t in e)if(!["_id","idx","dialog","valid","submitting"].includes(t))if(t==="avatar")o.append(t,e[t][0]);else if(t==="portfolio")for(const a in e[t])o.append(t,e[t][a]);else o.append(t,e[t]);try{if(e._id.length===0){const{data:t}=await V.post("/designers",o);r.push(t.result),_.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:t}=await V.patch("/designers/"+e._id,o);r[e.idx]=t.result,_.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(t){_.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}e.submitting=!1},D=async(o,t)=>{try{if(o.length!==0){const{data:a}=await V.delete("/designers/"+o);r.splice(t,1),_.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"})}}catch(a){_.fire({icon:"error",title:"\u5931\u6557",text:a.isAxiosError?a.response.data.message:a.message})}};return(async()=>{try{const{data:o}=await V.get("/designers/all");r.push(...o.result)}catch(o){console.log(o),_.fire({icon:"error",title:"\u5931\u6557",text:o.isAxiosError?o.response.data.message:o.message})}})(),(o,t)=>(u(),f("div",G,[l(c,{class:"justify-center"},{default:s(()=>[l(n,{cols:"9"},{default:s(()=>[H]),_:1}),l(n,{cols:"9"},{default:s(()=>[l(c,{class:"justify-end align-center",style:{height:"150px"}},{default:s(()=>[l(m,{icon:"",variant:"text",onClick:t[0]||(t[0]=a=>y("",-1))},{default:s(()=>[l(h,{color:"green lighten-2"},{default:s(()=>[J]),_:1})]),_:1})]),_:1})]),_:1}),l(n,{cols:"9"},{default:s(()=>[l(q,null,{default:s(()=>[K,i("tbody",null,[r.length>0?(u(!0),f(C,{key:0},j(r,(a,d)=>(u(),f("tr",{key:a._id},[i("td",O,g(d+1),1),i("td",null,[l(k,{src:a.avatar},null,8,["src"])]),i("td",Q,g(a.name),1),a.publish===!0?(u(),f("td",W,"\u5DF2\u767C\u4F48")):A("",!0),a.publish===!1?(u(),f("td",X,"\u672A\u767C\u4F48")):A("",!0),i("td",null,[l(c,{class:"justify-center align-center"},{default:s(()=>[l(m,{onClick:w=>y(a._id,d,!0),style:{width:"2rem",height:"2rem"},icon:"",variant:"text"},{default:s(()=>[l(h,{style:{"font-size":"large"},color:"purple lighten-2"},{default:s(()=>[Y]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),i("td",null,[l(c,{class:"justify-center"},{default:s(()=>[l(m,{onClick:w=>y(a._id,d,!1),style:{width:"2rem",height:"2rem"},icon:"",variant:"text"},{default:s(()=>[l(h,{style:{"font-size":"large"},color:"blue lighten-2"},{default:s(()=>[Z]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),i("td",null,[l(c,{class:"justify-center align-center"},{default:s(()=>[l(m,{onClick:w=>D(a._id,d),style:{width:"2rem",height:"2rem"},icon:"",variant:"text"},{default:s(()=>[l(h,{style:{"font-size":"large"},color:"red lighten-2"},{default:s(()=>[ee]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]))),128)):(u(),f("tr",te,se))])]),_:1})]),_:1})]),_:1}),l(N,{modelValue:e.dialog,"onUpdate:modelValue":t[9]||(t[9]=a=>e.dialog=a),persistent:""},{default:s(()=>[e.read?(u(),v(B,{key:1},{default:s(()=>[l(F,{style:{width:"600px"}},{default:s(()=>[l(n,{class:"d-flex justify-end"},{default:s(()=>[l(m,{icon:"",variant:"text",size:"x-small",onClick:t[8]||(t[8]=a=>e.dialog=!1)},{default:s(()=>[l(h,null,{default:s(()=>[re]),_:1})]),_:1})]),_:1}),l(n,{class:"d-flex justify-center"},{default:s(()=>[l(R,{size:"250px"},{default:s(()=>[l(k,{src:e.avatar},null,8,["src"])]),_:1})]),_:1}),l(T,{class:"text-center my-2"},{default:s(()=>[i("div",ne,g(e.name),1)]),_:1}),l(U,null,{default:s(()=>[l(z,null,{default:s(()=>[l(c,{class:"justify-center align-center"},{default:s(()=>[l(n,{cols:"10"},{default:s(()=>[de,i("div",ue,g(e.description),1)]),_:1})]),_:1}),l(c,{class:"justify-center align-center",style:{height:"50px"}},{default:s(()=>[ce]),_:1}),l(c,{class:"justify-center align-center",style:{height:"150px"}},{default:s(()=>[(u(!0),f(C,null,j(e.portfolio,a=>(u(),v(n,{cols:"2"},{default:s(()=>[l(k,{src:a},null,8,["src"])]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):(u(),v(B,{key:0,modelValue:e.valid,"onUpdate:modelValue":t[7]||(t[7]=a=>e.valid=a),onSubmit:E(S,["prevent"])},{default:s(()=>[l(F,null,{default:s(()=>[l(T,{class:"text-center my-4"},{default:s(()=>[i("div",ae,g(e._id.length>0?"\u7DE8\u8F2F\u8A2D\u8A08\u5E2B":"\u65B0\u589E\u8A2D\u8A08\u5E2B"),1)]),_:1}),l(U,null,{default:s(()=>[l(z,null,{default:s(()=>[l(c,{class:"justify-center"},{default:s(()=>[l(n,{cols:"9"},{default:s(()=>[l(L,{modelValue:e.name,"onUpdate:modelValue":t[1]||(t[1]=a=>e.name=a),label:"\u540D\u7A31",rules:[x.required]},null,8,["modelValue","rules"])]),_:1}),l(n,{cols:"9"},{default:s(()=>[l(M,{modelValue:e.description,"onUpdate:modelValue":t[2]||(t[2]=a=>e.description=a),label:"\u7C21\u4ECB",rules:[x.required]},null,8,["modelValue","rules"])]),_:1}),l(n,{cols:"9"},{default:s(()=>[l(P,{modelValue:e.publish,"onUpdate:modelValue":t[3]||(t[3]=a=>e.publish=a),label:"\u767C\u4F48"},null,8,["modelValue"])]),_:1}),l(n,{cols:"9"},{default:s(()=>[l($,{modelValue:e.avatar,"onUpdate:modelValue":t[4]||(t[4]=a=>e.avatar=a),"show-size":"",accept:"avatar/*",label:"\u982D\u50CF","prepend-icon":"mdi-camera",outlined:"",rules:[x.size]},null,8,["modelValue","rules"])]),_:1}),l(n,{cols:"9"},{default:s(()=>[l($,{multiple:"",modelValue:e.portfolio,"onUpdate:modelValue":t[5]||(t[5]=a=>e.portfolio=a),"show-size":"",accept:"portfolio/*",label:"\u4F5C\u54C1\u96C6","prepend-icon":"mdi-image-multiple",outlined:"",rules:[x.size]},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1}),l(I,null,{default:s(()=>[l(c,{class:"justify-center"},{default:s(()=>[l(m,{type:"submit",color:"primary",loading:e.submitting},{default:s(()=>[oe]),_:1},8,["loading"]),l(m,{color:"error",onClick:t[6]||(t[6]=a=>e.dialog=!1),disabled:e.submitting},{default:s(()=>[ie]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"]))]),_:1},8,["modelValue"])]))}};export{Ae as default};
