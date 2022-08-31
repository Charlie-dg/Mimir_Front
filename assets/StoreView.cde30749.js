import{R as w,E as k,o,c as f,a as t,w as e,V as n,d as i,h as x,k as $,i as s,t as d,T as j,U as h,W as S,K as g,X as y,g as V,Y as b,F as C,r as m,b as B,S as z,e as D,f as v}from"./index.6cd5d207.js";import{V as I}from"./VDialog.135e359c.js";import{V as N}from"./VSelect.ce45e076.js";import"./scopeId.718a73ab.js";import"./easing.1a8f6470.js";import"./form.aeadc532.js";import"./VList.9760d0bb.js";import"./VChip.2ad42fc2.js";import"./VTextField.4e2325f3.js";const T=h("\u52A0\u5165\u8CFC\u7269\u8ECA"),U={id:"productInfo",style:{width:"100%",height:"80%"}},q={class:"d-flex align-center",id:"title",style:{width:"100%",height:"25%"}},A={class:"d-flex align-center",id:"price",style:{width:"100%",height:"10%"}},E=s("h2",null,"$:",-1),F={style:{color:"green"}},R={class:"d-flex align-center",id:"description",style:{width:"100%",height:"55%"}},K={key:0},L=h("\u5546\u54C1\u4ECB\u7D39 :"),P={key:1},W={class:"d-flex align-center",id:"category",style:{width:"100%",height:"10%"}},X={class:"d-flex justify-start align-center",id:"productAction",style:{width:"100%",height:"20%"}},Y=h("\u52A0\u5165\u8CFC\u7269\u8ECA"),G=h("mdi-close"),H={__name:"ProductCard",props:["product"],setup(l){const r=w(),{addCart:p}=r,u=k(!1);return(_,a)=>(o(),f(C,null,[t(V,{class:"product-card",elevation:"3"},{default:e(()=>[t(n,{class:"justify-center"},{default:e(()=>[t(i,null,{default:e(()=>[t(x,{class:"ma-2",src:l.product.image,width:"400px",height:"150px"},null,8,["src"])]),_:1})]),_:1}),t($,{class:"text-center"},{default:e(()=>[s("h4",{onClick:a[0]||(a[0]=c=>u.value=!0)},d(l.product.name),1)]),_:1}),t(j,{class:"text-center",style:{"font-size":"1rem"}},{default:e(()=>[h("$"+d(l.product.price),1)]),_:1}),t(S,{class:"justify-center"},{default:e(()=>[t(g,{color:"black","prepend-icon":"mdi-cart",onClick:a[1]||(a[1]=c=>y(p)({product:l.product._id,quantity:1}))},{default:e(()=>[T]),_:1})]),_:1})]),_:1}),t(I,{modelValue:u.value,"onUpdate:modelValue":a[4]||(a[4]=c=>u.value=c),persistent:""},{default:e(()=>[t(V,{class:"d-flex flex-row",width:"900px",height:"400px"},{default:e(()=>[t(i,{class:"d-flex justify-center align-center",cols:"5"},{default:e(()=>[t(x,{src:l.product.image},null,8,["src"])]),_:1}),t(i,{class:"d-flex flex-column",cols:"6"},{default:e(()=>[s("div",U,[s("div",q,[s("h1",null,d(l.product.name),1)]),s("div",A,[E,s("h2",F,d(l.product.price),1)]),s("div",R,[l.product.description.length>0&&l.product.description!=="undefined"?(o(),f("h4",K,[L,s("p",null,d(l.product.description),1)])):(o(),f("h4",P,"\u5C1A\u7121\u5546\u54C1\u4ECB\u7D39"))]),s("div",W,[s("h5",null,"\u7A2E\u985E : "+d(l.product.category),1)])]),s("div",X,[t(g,{color:"black",size:"x-large","prepend-icon":"mdi-cart",onClick:a[2]||(a[2]=c=>y(p)({product:l.product._id,quantity:1}))},{default:e(()=>[Y]),_:1})])]),_:1}),t(i,{class:"d-flex justify-end align-start",cols:"1"},{default:e(()=>[t(g,{icon:"",variant:"text",size:"x-small",onClick:a[3]||(a[3]=c=>u.value=!1)},{default:e(()=>[t(b,null,{default:e(()=>[G]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},J={id:"store"},M=s("h1",{class:"text-center text-decoration-underline my-4"},"\u7DDA\u4E0A\u5546\u5E97",-1),O=s("h1",{class:"text-center"},"\u5C1A\u7121\u5546\u54C1",-1),ot={__name:"StoreView",setup(l){w();const r=m([]),p=m(["\u6700\u65B0","\u50F9\u683C (\u5F9E\u4F4E\u5230\u9AD8)","\u50F9\u683C (\u5F9E\u9AD8\u5230\u4F4E)"]);return m(["\u6D17\u9AEE\u7CFB\u5217","\u8B77\u9AEE\u7CFB\u5217","\u9020\u578B\u68B3","\u9020\u578B\u593E","\u96FB\u6372\u68D2","\u5439\u98A8\u6A5F"]),k(!1),(async()=>{try{const{data:_}=await B.get("/products");r.push(..._.result)}catch{z.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(_,a)=>(o(),f("div",J,[t(n,{class:"justify-center align-center",style:{height:"150px"}},{default:e(()=>[M]),_:1}),t(n,{style:{height:"100px"}}),t(n,{class:"justify-center"},{default:e(()=>[t(i,{cols:"6"},{default:e(()=>[t(n,{class:"justify-end align-center",style:{height:"200px"}},{default:e(()=>[t(i,{cols:"3"},{default:e(()=>[t(N,{items:p,label:"\u6392\u5E8F\u65B9\u5F0F"},null,8,["items"])]),_:1})]),_:1}),t(n,{class:"justify-start"},{default:e(()=>[r.length>0?(o(!0),f(C,{key:0},D(r,c=>(o(),v(i,{class:"align-stretch",cols:"12",md:"6",lg:"4",xl:"3"},{default:e(()=>[t(H,{product:c},null,8,["product"])]),_:2},1024))),256)):(o(),v(i,{key:1,cols:"9"},{default:e(()=>[O]),_:1}))]),_:1})]),_:1})]),_:1})]))}};export{ot as default};
