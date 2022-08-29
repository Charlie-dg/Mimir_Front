import{T as S,G as b,o as i,c as u,a as t,w as e,V as c,d,f as h,i as _,k as B,l as D,g as s,t as o,U as I,W as f,X as L,L as V,Y as k,h as w,Z as N,F as v,r as y,b as z,S as T,v as C,e as $}from"./index.bd4fd932.js";import{V as U}from"./VDialog.bfeb72b8.js";import{V as q,a as j}from"./VList.b42cc93c.js";import{V as A,a as F}from"./VCheckboxBtn.8db5c78e.js";import{V as G}from"./VSelect.659c46dc.js";import"./scopeId.151d1840.js";import"./easing.1a8f6470.js";import"./form.c4e01d6d.js";import"./VOverlay.2f2e3911.js";import"./VTextField.8a73386a.js";const E=f("\u52A0\u5165\u8CFC\u7269\u8ECA"),P={id:"productInfo",style:{width:"100%",height:"80%"}},R={class:"d-flex align-center",id:"title",style:{width:"100%",height:"25%"}},W={class:"d-flex align-center",id:"price",style:{width:"100%",height:"10%"}},X=s("h2",null,"$:",-1),Y={style:{color:"green"}},Z={class:"d-flex align-center",id:"description",style:{width:"100%",height:"55%"}},H={key:0},J=f("\u5546\u54C1\u4ECB\u7D39 :"),K={key:1},M={class:"d-flex align-center",id:"category",style:{width:"100%",height:"10%"}},O={class:"d-flex justify-start align-center",id:"productAction",style:{width:"100%",height:"20%"}},Q=f("\u52A0\u5165\u8CFC\u7269\u8ECA"),tt=f("mdi-close"),et={__name:"ProductCard",props:["product"],setup(l){const p=S(),{addCart:m}=p,n=b(!1);return(g,a)=>(i(),u(v,null,[t(w,{class:"product-card",elevation:"3"},{default:e(()=>[t(c,{class:"justify-center"},{default:e(()=>[t(d,null,{default:e(()=>[this.display===g.md?(i(),h(_,{key:0,class:"ma-2",src:l.product.image,width:"500px",height:"200px"},null,8,["src"])):this.display===g.lg?(i(),h(_,{key:1,class:"ma-2",src:l.product.image,width:"400px",height:"150px"},null,8,["src"])):this.display===g.xl?(i(),h(_,{key:2,class:"ma-2",src:l.product.image,width:"300px",height:"100px"},null,8,["src"])):B("",!0)]),_:1})]),_:1}),t(D,{class:"text-center"},{default:e(()=>[s("h4",{onClick:a[0]||(a[0]=r=>n.value=!0)},o(l.product.name),1)]),_:1}),t(I,{class:"text-center",style:{"font-size":"1rem"}},{default:e(()=>[f("$"+o(l.product.price),1)]),_:1}),t(L,{class:"justify-center"},{default:e(()=>[t(V,{color:"black","prepend-icon":"mdi-cart",onClick:a[1]||(a[1]=r=>k(m)({product:l.product._id,quantity:1}))},{default:e(()=>[E]),_:1})]),_:1})]),_:1}),t(U,{modelValue:n.value,"onUpdate:modelValue":a[4]||(a[4]=r=>n.value=r),persistent:""},{default:e(()=>[t(w,{class:"d-flex flex-row",width:"900px",height:"400px"},{default:e(()=>[t(d,{class:"d-flex justify-center align-center",cols:"5"},{default:e(()=>[t(_,{src:l.product.image},null,8,["src"])]),_:1}),t(d,{class:"d-flex flex-column",cols:"6"},{default:e(()=>[s("div",P,[s("div",R,[s("h1",null,o(l.product.name),1)]),s("div",W,[X,s("h2",Y,o(l.product.price),1)]),s("div",Z,[l.product.description.length>0&&l.product.description!=="undefined"?(i(),u("h4",H,[J,s("p",null,o(l.product.description),1)])):(i(),u("h4",K,"\u5C1A\u7121\u5546\u54C1\u4ECB\u7D39"))]),s("div",M,[s("h5",null,"\u7A2E\u985E : "+o(l.product.category),1)])]),s("div",O,[t(V,{color:"black",size:"x-large","prepend-icon":"mdi-cart",onClick:a[2]||(a[2]=r=>k(m)({product:l.product._id,quantity:1}))},{default:e(()=>[Q]),_:1})])]),_:1}),t(d,{class:"d-flex justify-end align-start",cols:"1"},{default:e(()=>[t(V,{icon:"",variant:"text",size:"x-small",onClick:a[3]||(a[3]=r=>n.value=!1)},{default:e(()=>[t(N,null,{default:e(()=>[tt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},st={id:"store"},lt=s("h1",{class:"text-center text-decoration-underline my-4"},"\u7DDA\u4E0A\u5546\u5E97",-1),at=s("h2",null,"\u7BE9\u9078\u65B9\u5F0F",-1),it=s("h3",null,"\u7A2E\u985E",-1),dt=s("h1",{class:"text-center"},"\u5C1A\u7121\u5546\u54C1",-1),_t={__name:"StoreView",setup(l){const p=y([]),m=y(["\u6700\u65B0","\u50F9\u683C (\u5F9E\u4F4E\u5230\u9AD8)","\u50F9\u683C (\u5F9E\u9AD8\u5230\u4F4E)"]),n=y(["\u6D17\u9AEE\u7CFB\u5217","\u8B77\u9AEE\u7CFB\u5217","\u9020\u578B\u68B3","\u9020\u578B\u593E","\u96FB\u6372\u68D2","\u5439\u98A8\u6A5F"]);return y([]),(async()=>{try{const{data:a}=await z.get("/products");p.push(...a.result)}catch{T.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(a,r)=>(i(),u("div",st,[t(c,{class:"justify-center align-center",style:{height:"150px"}},{default:e(()=>[lt]),_:1}),t(c,{style:{height:"100px"}}),t(c,{class:"justify-center"},{default:e(()=>[t(d,{cols:"2"},{default:e(()=>[t(c,{style:{height:"200px"}}),t(q,null,{default:e(()=>[t(j,{class:"justify-center"},{default:e(()=>[at]),_:1}),t(C),t(j,{class:"justify-center mt-2"},{default:e(()=>[it]),_:1}),t(A,null,{default:e(()=>[(i(!0),u(v,null,$(n,x=>(i(),h(F,{filter:"",outlined:"",label:""},{default:e(()=>[f(o(x),1)]),_:2},1024))),256))]),_:1}),t(C)]),_:1})]),_:1}),t(d,{cols:"6"},{default:e(()=>[t(c,{class:"justify-end align-center",style:{height:"200px"}},{default:e(()=>[t(d,{cols:"3"},{default:e(()=>[t(G,{items:m,label:"\u6392\u5E8F\u65B9\u5F0F"},null,8,["items"])]),_:1})]),_:1}),t(c,{class:"justify-start"},{default:e(()=>[p.length>0?(i(!0),u(v,{key:0},$(p,x=>(i(),h(d,{class:"align-stretch",cols:"12",md:"6",lg:"4",xl:"3"},{default:e(()=>[t(et,{product:x},null,8,["product"])]),_:2},1024))),256)):(i(),h(d,{key:1,cols:"9"},{default:e(()=>[dt]),_:1}))]),_:1})]),_:1})]),_:1})]))}};export{_t as default};
