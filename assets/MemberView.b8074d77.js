import{r as f,T as k,be as U,o as n,c as h,a as e,w as t,V as r,bf as C,S as F,d as a,F as p,e as x,u as I,x as V,g as o,t as c,Y as d,f as v}from"./index.29086af8.js";import{V as N,a as R}from"./VTabs.43423644.js";import"./easing.1a8f6470.js";const W={id:"member"},q=o("h1",{class:"text-center text-decoration-underline my-4"},"\u6703\u54E1\u5C08\u5340",-1),A={class:"text-h5 font-weight-bold"},D={class:"text-h5"},E={class:"text-h5"},L={class:"text-h5"},M={class:"text-h5"},P={class:"text-h5"},Y={class:"text-h5"},z={class:"text-h5"},Q={__name:"MemberView",setup(G){const b=f(["\u6703\u54E1\u8CC7\u6599","\u8A02\u55AE\u8CC7\u6599"]),u=f({tab:""}),y=k(),{account:g,name:w,gender:j,phone:B,email:S,address:T}=U(y),_=f([]);return(async()=>{try{const{data:i}=await C.get("/orders");_.push(...i.result.map(l=>(l.totalPrice=l.products.reduce((s,m)=>s+m.product.price*m.quantity,0),l))),console.log(_)}catch(i){console.log(i),F.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(i,l)=>(n(),h("div",W,[e(r,{class:"justify-center align-center",style:{height:"150px"}},{default:t(()=>[q]),_:1}),e(r,{style:{height:"100px"}}),e(r,{class:"justify-center"},{default:t(()=>[e(a,{cols:"2"},{default:t(()=>[e(r,null,{default:t(()=>[e(N,{modelValue:u.tab,"onUpdate:modelValue":l[0]||(l[0]=s=>u.tab=s),direction:"vertical",color:"primary"},{default:t(()=>[(n(!0),h(p,null,x(b,s=>(n(),v(R,{value:s},{default:t(()=>[o("div",A,c(s),1)]),_:2},1032,["value"]))),256))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(a,{cols:"6"},{default:t(()=>[e(I,{modelValue:u.tab,"onUpdate:modelValue":l[1]||(l[1]=s=>u.tab=s)},{default:t(()=>[e(V,{value:"\u6703\u54E1\u8CC7\u6599"},{default:t(()=>[e(r,{class:"justify-center"},{default:t(()=>[e(a,{cols:"10"},{default:t(()=>[o("div",D,"\u5E33\u865F : "+c(d(g)),1)]),_:1}),e(a,{cols:"10"},{default:t(()=>[o("div",E,"\u59D3\u540D : "+c(d(w)),1)]),_:1}),e(a,{cols:"10"},{default:t(()=>[o("div",L,"\u6027\u5225 : "+c(d(j)),1)]),_:1}),e(a,{cols:"10"},{default:t(()=>[o("div",M,"\u624B\u6A5F : "+c(d(B)),1)]),_:1}),e(a,{cols:"10"},{default:t(()=>[o("div",P,"\u4FE1\u7BB1 : "+c(d(S)),1)]),_:1}),e(a,{cols:"10"},{default:t(()=>[o("div",Y,"\u5730\u5740 : "+c(d(T)),1)]),_:1})]),_:1})]),_:1}),e(V,{value:"\u8A02\u55AE\u8CC7\u6599"},{default:t(()=>[(n(!0),h(p,null,x(_,s=>(n(),v(r,{class:"justify-center"},{default:t(()=>[e(a,{cols:"10"},{default:t(()=>[o("div",z,"\u7522\u54C1 : "+c(s.products[0].product.name),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]))}};export{Q as default};