import{B as re,I as _e,an as be,aq as Ce,v as ue,x as p,r as y,G as ce,am as de,a as t,a9 as T,F as $,bh as ne,aA as ae,aH as we,bi as ke,Z as M,y as Se,K as se,a6 as Fe,bj as ze,ad as Be,aY as Ie,l as Z,o as N,c as U,w as o,V as D,bg as J,S as H,d as S,i as L,k as le,b as c,n as $e,b8 as Pe,t as Q,bf as Re,h as K,f as Ae,g as oe}from"./index.40bb4b12.js";import{d as Ne,c as Ue,V as De,e as He,b as Te}from"./VDialog.78c40775.js";import{V as je}from"./VTable.3ce0ab2d.js";import{V as Ee}from"./VForm.2f55231d.js";import{m as fe,b as me,f as ve,c as ge,d as he,e as xe,g as Ve,a as ie}from"./VTextField.cc7b6089.js";import{V as Ge}from"./VCheckbox.91bb4c97.js";import{b as qe,a as Me}from"./VSelect.262f20f5.js";import{f as pe}from"./form.6badbbb2.js";import"./createSimpleFunctional.13b4d55b.js";import"./VAvatar.622ce817.js";import"./scopeId.39525470.js";import"./VOverlay.622310e2.js";import"./VList.166583ff.js";import"./VDivider.9834bf31.js";const Le=re({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,hint:String,persistentHint:Boolean,placeholder:String,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...fe(),prependIcon:{type:_e,default:"$file"},modelValue:{type:Array,default:()=>[],validator:e=>be(e).every(F=>F!=null&&typeof F=="object")},...me({clearable:!0})},emits:{"click:clear":e=>!0,"click:control":e=>!0,"update:modelValue":e=>!0},setup(e,F){let{attrs:f,emit:a,slots:u}=F;const{t:m}=Ce(),g=ue(e,"modelValue"),P=p(()=>typeof e.showSize!="boolean"?e.showSize:void 0),j=p(()=>{var r;return((r=g.value)!=null?r:[]).reduce((d,v)=>{let{size:i=0}=v;return d+i},0)}),s=p(()=>ne(j.value,P.value)),l=p(()=>{var r;return((r=g.value)!=null?r:[]).map(d=>{const{name:v="",size:i=0}=d;return e.showSize?`${v} (${ne(i,P.value)})`:v})}),n=p(()=>{var r,d;const v=(r=(d=g.value)==null?void 0:d.length)!=null?r:0;return e.showSize?m(e.counterSizeString,v,s.value):m(e.counterString,v)}),h=y(),_=y(),z=y(!1),x=y(),E=p(()=>e.messages.length?e.messages:e.persistentHint?e.hint:"");function G(){if(x.value!==document.activeElement){var r;(r=x.value)==null||r.focus()}z.value||(z.value=!0)}function O(r){var d;(d=x.value)==null||d.click(),a("click:control",r)}function W(r){r.stopPropagation(),G(),ae(()=>{g.value=[],x!=null&&x.value&&(x.value.value=""),a("click:clear",r)})}return ce(()=>{const r=!!(u.counter||e.counter),d=!!(r||u.details),[v,i]=de(f),[{modelValue:b,...V}]=ve(e),[C]=ge(e);return t(Ve,T({ref:h,modelValue:g.value,"onUpdate:modelValue":w=>g.value=w,class:"v-file-input"},v,V,{"onClick:prepend":O,messages:E.value}),{...u,default:w=>{let{isDisabled:B,isDirty:R,isReadonly:I,isValid:A}=w;return t(he,T({ref:_,"prepend-icon":e.prependIcon,"onClick:control":O,"onClick:clear":W},C,{active:R.value||z.value,dirty:R.value,focused:z.value,error:A.value===!1}),{...u,default:Y=>{let{props:{class:X,...ee}}=Y;return t($,null,[t("input",T({ref:x,type:"file",readonly:I.value,disabled:B.value,multiple:e.multiple,name:e.name,onClick:k=>{k.stopPropagation(),G()},onChange:k=>{var q;if(!k.target)return;const te=k.target;g.value=[...(q=te.files)!=null?q:[]]},onFocus:G,onBlur:()=>z.value=!1},ee,i),null),g.value.length>0&&t("div",{class:X},[u.selection?u.selection({fileNames:l.value,totalBytes:j.value,totalBytesReadable:s.value}):e.chips?l.value.map(k=>t(qe,{key:k,size:"small",color:e.color},{default:()=>[k]})):l.value.join(", ")])])}})},details:d?w=>{var B;return t($,null,[(B=u.details)==null?void 0:B.call(u,w),r&&t($,null,[t("span",null,null),t(xe,{active:!!g.value.length,value:n.value},u.counter)])])}:void 0})}),pe({},h,_,x)}});const Ke=re({name:"VTextarea",directives:{Intersect:we},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...fe(),...me()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"update:modelValue":e=>!0},setup(e,F){let{attrs:f,emit:a,slots:u}=F;const m=ue(e,"modelValue"),g=p(()=>typeof e.counterValue=="function"?e.counterValue(m.value):(m.value||"").toString().length),P=p(()=>{if(f.maxlength)return f.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(i,b){var V,C;!e.autofocus||!i||(V=b[0].target)==null||(C=V.focus)==null||C.call(V)}const s=y(),l=y(),n=y(!1),h=y(""),_=y(),z=p(()=>n.value||e.persistentPlaceholder),x=p(()=>e.messages.length?e.messages:z.value||e.persistentHint?e.hint:"");function E(){if(_.value!==document.activeElement){var i;(i=_.value)==null||i.focus()}n.value||(n.value=!0)}function G(i){E(),a("click:control",i)}function O(i){i.stopPropagation(),E(),ae(()=>{m.value="",a("click:clear",i)})}function W(i){m.value=i.target.value}const r=y();function d(){!e.autoGrow||ae(()=>{if(!r.value||!l.value)return;const i=getComputedStyle(r.value),b=getComputedStyle(l.value.$el),V=parseFloat(i.getPropertyValue("--v-field-padding-top"))+parseFloat(i.getPropertyValue("--v-input-padding-top"))+parseFloat(i.getPropertyValue("--v-field-padding-bottom")),C=r.value.scrollHeight,w=parseFloat(i.lineHeight),B=Math.max(parseFloat(e.rows)*w+V,parseFloat(b.getPropertyValue("--v-input-control-height"))),R=parseFloat(e.maxRows)*w+V||1/0;h.value=Be(Ie(C!=null?C:0,B,R))})}ke(d),M(m,d),M(()=>e.rows,d),M(()=>e.maxRows,d),M(()=>e.density,d);let v;return M(r,i=>{if(i)v=new ResizeObserver(d),v.observe(r.value);else{var b;(b=v)==null||b.disconnect()}}),Se(()=>{var i;(i=v)==null||i.disconnect()}),ce(()=>{const i=!!(u.counter||e.counter||e.counterValue),b=!!(i||u.details),[V,C]=de(f),[{modelValue:w,...B}]=ve(e),[R]=ge(e);return t(Ve,T({ref:s,modelValue:m.value,"onUpdate:modelValue":I=>m.value=I,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow}]},V,B,{messages:x.value}),{...u,default:I=>{let{isDisabled:A,isDirty:Y,isReadonly:X,isValid:ee}=I;return t(he,T({ref:l,style:{"--v-textarea-control-height":h.value},"onClick:control":G,"onClick:clear":O,role:"textbox"},R,{active:z.value||Y.value,dirty:Y.value||e.dirty,focused:n.value,error:ee.value===!1}),{...u,default:k=>{let{props:{class:q,...te}}=k;return t($,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),se(t("textarea",T({ref:_,class:q,value:m.value,onInput:W,autofocus:e.autofocus,readonly:X.value,disabled:A.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:E,onBlur:()=>n.value=!1},te,C),null),[[Fe("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&se(t("textarea",{class:[q,"v-textarea__sizer"],"onUpdate:modelValue":ye=>m.value=ye,ref:r,readonly:!0,"aria-hidden":"true"},null),[[ze,m.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:b?I=>{var A;return t($,null,[(A=u.details)==null?void 0:A.call(u,I),i&&t($,null,[t("span",null,null),t(xe,{active:e.persistentCounter||n.value,value:g.value,max:P.value},u.counter)])])}:void 0})}),pe({},s,l,_)}}),Oe={id:"admin-products"},Ye=c("h1",{class:"text-center my-2"},"\u5546\u54C1\u7BA1\u7406",-1),Ze=K("mdi-plus"),Je=c("thead",null,[c("tr",null,[c("th",{class:"text-center text-h6"},"\u7DE8\u865F"),c("th",{class:"text-center text-h6"},"\u5716\u7247"),c("th",{class:"text-center text-h6"},"\u540D\u7A31"),c("th",{class:"text-center text-h6"},"\u7A2E\u985E"),c("th",{class:"text-center text-h6"},"\u4E0A\u67B6"),c("th",{class:"text-center text-h6"},"\u7DE8\u8F2F"),c("th",{class:"text-center text-h6"},"\u522A\u9664")])],-1),Qe={class:"text-center"},We={class:"text-center"},Xe={class:"text-center"},et={key:0,class:"text-center"},tt={key:1,class:"text-center"},lt=K("mdi-pencil-outline"),at=K("mdi-delete"),nt={key:1},st=c("td",{class:"text-center text-h6",colspan:"7"},"\u5C1A\u7121\u5546\u54C1",-1),ot=[st],it={class:"text-h5"},rt=K("\u78BA\u5B9A"),ut=K("\u53D6\u6D88"),wt={__name:"ProductsView",setup(e){const F=Z(["\u6D17\u9AEE\u7CFB\u5217","\u8B77\u9AEE\u7CFB\u5217","\u9020\u578B\u68B3","\u9020\u578B\u593E","\u96FB\u6372\u68D2","\u5439\u98A8\u6A5F"]),f=Z([]),a=Z({_id:"",name:"",price:0,sell:!1,category:"",image:"",description:"",idx:-1,dialog:!1,valid:!1,submitting:!1}),u=Z({required(s){return!!s||"\u5FC5\u586B"},price(s){return s>-1||"\u5FC5\u9808\u5927\u65BC\u7B49\u65BC 0"},size(s){var l,n,h;return!s||!s.length||((n=(l=s[0])==null?void 0:l.type)==null?void 0:n.includes("image"))&&((h=s[0])==null?void 0:h.size)<1024*1024||"\u6A94\u6848\u683C\u5F0F\u4E0D\u7B26"}}),m=(s,l)=>{a._id=s,l>-1?(a.name=f[l].name,a.price=f[l].price,a.sell=f[l].sell,a.category=f[l].category,a.description=f[l].description):(a.name="",a.price=0,a.sell=!1,a.category="",a.description=""),a.image=[],a.idx=l,a.dialog=!0,a.valid=!1,a.submitting=!1},g=async()=>{if(!a.valid)return;a.submitting=!0;const s=new FormData;for(const l in a)["_id","idx","dialog","valid","submitting"].includes(l)||(l==="image"?s.append(l,a[l][0]):s.append(l,a[l]));try{if(a._id.length===0){const{data:l}=await J.post("/products",s);f.push(l.result),H.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:l}=await J.patch("/products/"+a._id,s);console.log(s.name),f[a.idx]=l.result,H.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}a.dialog=!1}catch(l){H.fire({icon:"error",title:"\u5931\u6557",text:l.isAxiosError?l.response.data.message:l.message})}a.submitting=!1},P=async(s,l)=>{try{if(s.length!==0){const{data:n}=await J.delete("/products/"+s);f.splice(l,1),H.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"})}}catch(n){H.fire({icon:"error",title:"\u5931\u6557",text:n.isAxiosError?n.response.data.message:n.message})}};return(async()=>{try{const{data:s}=await J.get("/products/all");f.push(...s.result)}catch(s){console.log(s),H.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError?s.response.data.message:s.message})}})(),(s,l)=>(N(),U("div",Oe,[t(D,{class:"justify-center"},{default:o(()=>[t(S,{cols:"9"},{default:o(()=>[Ye]),_:1}),t(S,{cols:"9"},{default:o(()=>[t(D,{class:"justify-end align-center",style:{height:"150px"}},{default:o(()=>[t(L,{icon:"",variant:"text",onClick:l[0]||(l[0]=n=>m("",-1))},{default:o(()=>[t(le,{color:"green lighten-2"},{default:o(()=>[Ze]),_:1})]),_:1})]),_:1})]),_:1}),t(S,{cols:"9"},{default:o(()=>[t(je,null,{default:o(()=>[Je,c("tbody",null,[f.length>0?(N(!0),U($,{key:0},$e(f,(n,h)=>(N(),U("tr",{key:n._id},[c("td",Qe,Q(h+1),1),c("td",null,[t(Ae,{src:n.image},null,8,["src"])]),c("td",We,Q(n.name),1),c("td",Xe,Q(n.category),1),n.sell===!0?(N(),U("td",et,"\u5DF2\u4E0A\u67B6")):oe("",!0),n.sell===!1?(N(),U("td",tt,"\u672A\u4E0A\u67B6")):oe("",!0),c("td",null,[t(D,{class:"justify-center"},{default:o(()=>[t(L,{onClick:_=>m(n._id,h),style:{width:"2rem",height:"2rem"},icon:"",variant:"text"},{default:o(()=>[t(le,{style:{"font-size":"large"},color:"blue lighten-2"},{default:o(()=>[lt]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),c("td",null,[t(D,{class:"justify-center align-center"},{default:o(()=>[t(L,{onClick:_=>P(n._id,h),style:{width:"2rem",height:"2rem"},icon:"",variant:"text"},{default:o(()=>[t(le,{style:{"font-size":"large"},color:"red lighten-2"},{default:o(()=>[at]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]))),128)):(N(),U("tr",nt,ot))])]),_:1})]),_:1})]),_:1}),t(Ne,{modelValue:a.dialog,"onUpdate:modelValue":l[9]||(l[9]=n=>a.dialog=n),persistent:""},{default:o(()=>[t(Ee,{modelValue:a.valid,"onUpdate:modelValue":l[8]||(l[8]=n=>a.valid=n),onSubmit:Pe(g,["prevent"])},{default:o(()=>[t(Ue,null,{default:o(()=>[t(De,{class:"text-center my-4"},{default:o(()=>[c("div",it,Q(a._id.length>0?"\u7DE8\u8F2F\u5546\u54C1":"\u65B0\u589E\u5546\u54C1"),1)]),_:1}),t(He,null,{default:o(()=>[t(Re,null,{default:o(()=>[t(D,{class:"justify-center"},{default:o(()=>[t(S,{cols:"9"},{default:o(()=>[t(ie,{modelValue:a.name,"onUpdate:modelValue":l[1]||(l[1]=n=>a.name=n),label:"\u540D\u7A31",rules:[u.required]},null,8,["modelValue","rules"])]),_:1}),t(S,{cols:"9"},{default:o(()=>[t(ie,{type:"number",min:"0",modelValue:a.price,"onUpdate:modelValue":l[2]||(l[2]=n=>a.price=n),label:"\u50F9\u683C",rules:[u.required,u.price]},null,8,["modelValue","rules"])]),_:1}),t(S,{cols:"9"},{default:o(()=>[t(Ge,{modelValue:a.sell,"onUpdate:modelValue":l[3]||(l[3]=n=>a.sell=n),label:"\u4E0A\u67B6"},null,8,["modelValue"])]),_:1}),t(S,{cols:"9"},{default:o(()=>[t(Me,{items:F,modelValue:a.category,"onUpdate:modelValue":l[4]||(l[4]=n=>a.category=n),label:"\u5206\u985E",rules:[u.required]},null,8,["items","modelValue","rules"])]),_:1}),t(S,{cols:"9"},{default:o(()=>[t(Le,{modelValue:a.image,"onUpdate:modelValue":l[5]||(l[5]=n=>a.image=n),"show-size":"",accept:"image/*",label:"\u5546\u54C1\u5716\u7247","prepend-icon":"",outlined:"",rules:[u.size]},null,8,["modelValue","rules"])]),_:1}),t(S,{cols:"9"},{default:o(()=>[t(Ke,{modelValue:a.description,"onUpdate:modelValue":l[6]||(l[6]=n=>a.description=n),label:"\u5546\u54C1\u4ECB\u7D39"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(Te,null,{default:o(()=>[t(D,{class:"justify-center"},{default:o(()=>[t(L,{type:"submit",color:"primary",loading:a.submitting},{default:o(()=>[rt]),_:1},8,["loading"]),t(L,{color:"error",onClick:l[7]||(l[7]=n=>a.dialog=!1),disabled:a.submitting},{default:o(()=>[ut]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1},8,["modelValue"])]))}};export{wt as default};