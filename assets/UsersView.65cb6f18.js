import{r as c,o as p,c as h,a as l,w as o,V as u,bf as y,S as m,d as r,g as n,F,e as S,bd as $,h as z,L as f,Z as b,l as E,s as T,m as B,X as D,W as _,t as d}from"./index.344cfd6b.js";import{V as N}from"./VDialog.328990ff.js";import{V as Z}from"./VTable.0c2efe10.js";import{V as L}from"./VForm.935ddf6a.js";import{V as g}from"./VTextField.cce90b65.js";import{V as v}from"./VSelect.e4327a53.js";import{v as I}from"./index.d9275255.js";import"./scopeId.5c0b09cb.js";import"./easing.1a8f6470.js";import"./form.ede56f38.js";import"./VOverlay.8355cc3e.js";import"./VList.938da004.js";import"./VChip.106b3940.js";const M={id:"admin-orders"},R=n("h1",{class:"text-center my-2"},"\u6703\u54E1\u7BA1\u7406",-1),W=n("thead",null,[n("tr",null,[n("th",{class:"text-center text-h6"},"\u7DE8\u865F"),n("th",{class:"text-center text-h6"},"\u5E33\u865F"),n("th",{class:"text-center text-h6"},"\u89D2\u8272"),n("th",{class:"text-center text-h6"},"\u59D3\u540D"),n("th",{class:"text-center text-h6"},"\u6027\u5225"),n("th",{class:"text-center text-h6"},"\u4FE1\u7BB1"),n("th",{class:"text-center text-h6"},"\u624B\u6A5F"),n("th",{class:"text-center text-h6"},"\u7DE8\u8F2F"),n("th",{class:"text-center text-h6"},"\u522A\u9664")])],-1),X={class:"text-center"},q={class:"text-center"},G={class:"text-center"},H={class:"text-center"},J={class:"text-center"},K={class:"text-center"},O={class:"text-center"},P=_("mdi-pencil-outline"),Q=_("mdi-delete"),Y={key:1},ee=n("td",{class:"text-center",colspan:"3"},"\u6C92\u6709\u6703\u54E1",-1),te=[ee],le=_("mdi-close"),se=n("div",{class:"text-h5 font-weight-bold"},"\u7DE8\u8F2F\u6703\u54E1\u8CC7\u6599",-1),ae=_("\u78BA\u5B9A"),oe=_("\u53D6\u6D88"),be={__name:"UsersView",setup(ne){const i=c([]),w=c(["\u7BA1\u7406\u54E1","\u6703\u54E1"]),C=c(["\u7537","\u5973"]),t=c({_id:"",account:"",role:"",name:"",gender:"",email:"",phone:"",address:"",idx:-1,dialog:!1,valid:!1,submitting:!1}),x=c({account:[s=>!!s||"\u5E33\u865F\u5FC5\u586B",s=>s.length>=4&&s.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",s=>/^[a-zA-Z0-9]+$/.test(s)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[s=>!!s||"\u5BC6\u78BC\u5FC5\u586B",s=>s.length>=4&&s.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",s=>/^[a-zA-Z0-9]+$/.test(s)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],email:[s=>!!s||"\u4FE1\u7BB1\u5FC5\u586B",s=>I.exports.isEmail(s)||"\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4"],name:[s=>s.length<=10||"\u540D\u5B57\u5FC5\u9808 10 \u500B\u5B57\u4EE5\u4E0B"],gender:[s=>!!s||"\u6027\u5225\u5FC5\u586B"]}),k=(s,e)=>{t._id=s,e>-1&&(t.account=i[e].account,t.role=i[e].role,t.name=i[e].name,t.gender=i[e].gender,t.email=i[e].email,t.phone=i[e].phone,t.address=i[e].address),t.idx=e,t.dialog=!0,t.valid=!1,t.submitting=!1},U=async()=>{if(!t.valid)return;t.submitting=!0;const s=new FormData;for(const e in t)["_id","idx","dialog","valid","submitting"].includes(e)||s.append(e,t[e]);try{if(t._id.length!==0){const{data:e}=await y.patch("/users/"+t._id,s);i[t.idx]=e.result,m.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}t.dialog=!1}catch(e){m.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}t.submitting=!1},j=async(s,e)=>{try{if(s.length!==0){const{data:a}=await y.delete("/users/"+s);i.splice(e,1),m.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"})}}catch(a){m.fire({icon:"error",title:"\u5931\u6557",text:a.isAxiosError?a.response.data.message:a.message})}};return(async()=>{try{const{data:s}=await y.get("/users/all");i.push(...s.result)}catch(s){console.log(s),m.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError?s.response.data.message:s.message})}})(),(s,e)=>(p(),h("div",M,[l(u,{class:"justify-center"},{default:o(()=>[l(r,{cols:"9"},{default:o(()=>[R]),_:1}),l(r,{cols:"9"},{default:o(()=>[l(u,{class:"justify-end align-center",style:{height:"150px"}})]),_:1}),l(r,{cols:"9"},{default:o(()=>[l(Z,null,{default:o(()=>[W,n("tbody",null,[i.length>0?(p(!0),h(F,{key:0},S(i,(a,V)=>(p(),h("tr",{key:a._id},[n("td",X,d(V+1),1),n("td",q,d(a.account),1),n("td",G,d(a.role),1),n("td",H,d(a.name),1),n("td",J,d(a.gender),1),n("td",K,d(a.email),1),n("td",O,d(a.phone),1),n("td",null,[l(u,{class:"justify-center align-center"},{default:o(()=>[l(f,{onClick:A=>k(a._id,V),style:{width:"2rem",height:"2rem"},icon:"",variant:"text"},{default:o(()=>[l(b,{style:{"font-size":"large"},color:"blue lighten-2"},{default:o(()=>[P]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),n("td",null,[l(u,{class:"justify-center align-center"},{default:o(()=>[l(f,{onClick:A=>j(a._id,V),style:{width:"2rem",height:"2rem"},icon:"",variant:"text"},{default:o(()=>[l(b,{style:{"font-size":"large"},color:"red lighten-2"},{default:o(()=>[Q]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]))),128)):(p(),h("tr",Y,te))])]),_:1})]),_:1})]),_:1}),l(N,{modelValue:t.dialog,"onUpdate:modelValue":e[10]||(e[10]=a=>t.dialog=a),persistent:""},{default:o(()=>[l(L,{class:"overflow-auto",modelValue:t.valid,"onUpdate:modelValue":e[9]||(e[9]=a=>t.valid=a),onSubmit:$(U,["prevent"])},{default:o(()=>[l(z,null,{default:o(()=>[l(r,{class:"d-flex justify-end"},{default:o(()=>[l(f,{icon:"",variant:"text",size:"x-small",onClick:e[0]||(e[0]=a=>t.dialog=!1)},{default:o(()=>[l(b,null,{default:o(()=>[le]),_:1})]),_:1})]),_:1}),l(E,{class:"text-center my-2"},{default:o(()=>[se]),_:1}),l(T,null,{default:o(()=>[l(B,null,{default:o(()=>[l(u,{class:"justify-center"},{default:o(()=>[l(r,{cols:"10"},{default:o(()=>[l(g,{type:"text",label:"\u5E33\u865F",modelValue:t.account,"onUpdate:modelValue":e[1]||(e[1]=a=>t.account=a),rules:x.account,counter:"20",maxlength:"20"},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"10"},{default:o(()=>[l(v,{type:"text",label:"\u89D2\u8272",items:w,modelValue:t.role,"onUpdate:modelValue":e[2]||(e[2]=a=>t.role=a)},null,8,["items","modelValue"])]),_:1}),l(r,{cols:"10"},{default:o(()=>[l(g,{type:"text",label:"\u59D3\u540D",modelValue:t.name,"onUpdate:modelValue":e[3]||(e[3]=a=>t.name=a),counter:"10",maxlength:"10"},null,8,["modelValue"])]),_:1}),l(r,{cols:"10"},{default:o(()=>[l(v,{type:"text",label:"\u6027\u5225",items:C,modelValue:t.gender,"onUpdate:modelValue":e[4]||(e[4]=a=>t.gender=a),rules:x.gender},null,8,["items","modelValue","rules"])]),_:1}),l(r,{cols:"10"},{default:o(()=>[l(g,{type:"email",label:"\u4FE1\u7BB1",modelValue:t.email,"onUpdate:modelValue":e[5]||(e[5]=a=>t.email=a),rules:x.email,counter:"20",maxlength:"20"},null,8,["modelValue","rules"])]),_:1}),l(r,{cols:"10"},{default:o(()=>[l(g,{type:"text",label:"\u624B\u6A5F",modelValue:t.phone,"onUpdate:modelValue":e[6]||(e[6]=a=>t.phone=a),counter:"10",maxlength:"10"},null,8,["modelValue"])]),_:1}),l(r,{cols:"10"},{default:o(()=>[l(g,{type:"text",label:"\u5730\u5740",modelValue:t.address,"onUpdate:modelValue":e[7]||(e[7]=a=>t.address=a),counter:"50",maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),l(D,null,{default:o(()=>[l(u,{class:"justify-center"},{default:o(()=>[l(f,{type:"submit",color:"primary",loading:t.submitting},{default:o(()=>[ae]),_:1},8,["loading"]),l(f,{color:"error",onClick:e[8]||(e[8]=a=>t.dialog=!1),disabled:t.submitting},{default:o(()=>[oe]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1},8,["modelValue"])]))}};export{be as default};
