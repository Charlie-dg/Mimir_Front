import{o as s,f as d,w as t,a as e,V as a,j as m,i as h,d as c,g as l,t as _,k as p,l as w,m as V,c as o,e as f,n as v,p as C,F as g,q as j,h as k,r as b,b as S,S as B}from"./index.e4f4be16.js";const $={class:"text-h5 font-weight-bold"},T=l("div",{class:"text-h6 font-weight-bold text-center"},"\u7C21\u4ECB:",-1),z={class:"text-h6 font-weight-bold text-center my-2"},D=l("div",{class:"text-h6 font-weight-bold text-center my-2"},"\u4F5C\u54C1\u96C6:",-1),F={class:"portfolio",style:{width:"80%",height:"50%"}},G={__name:"DesignerCard",props:["designer"],setup(r){return(n,x)=>(s(),d(k,{class:"designer-card",elevation:"10"},{default:t(()=>[e(a,{style:{height:"50px"}}),e(c,{class:"d-flex justify-center"},{default:t(()=>[e(m,{size:"300px"},{default:t(()=>[e(h,{src:r.designer.avatar},null,8,["src"])]),_:1})]),_:1}),e(p,{class:"text-center my-2"},{default:t(()=>[l("div",$,_(r.designer.name),1)]),_:1}),e(j,null,{default:t(()=>[e(w,null,{default:t(()=>[e(a,{class:"justify-center align-center"},{default:t(()=>[e(c,{cols:"10"},{default:t(()=>[T,l("div",z,_(r.designer.description),1)]),_:1})]),_:1}),e(a,{class:"justify-center align-center",style:{height:"100px"}},{default:t(()=>[D]),_:1}),e(a,{class:"justify-center align-center"},{default:t(()=>[l("div",F,[e(V,{class:"pa-4","show-arrows":!0},{default:t(()=>[(s(!0),o(g,null,f(r.designer.portfolio,(i,u)=>(s(),d(v,{key:u+1},{default:t(()=>[e(h,{src:i,class:C(n.m-4),style:{width:"300px",height:"300px"}},null,8,["src","class"])]),_:2},1024))),128))]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}))}},I={id:"team"},N=l("h1",{class:"text-center text-decoration-underline my-4"},"\u8A2D\u8A08\u5718\u968A",-1),q=l("h1",{class:"text-center"},"\u5C1A\u7121\u8A2D\u8A08\u5E2B",-1),E={__name:"TeamView",setup(r){const n=b([]);return(async()=>{try{const{data:i}=await S.get("/designers");n.push(...i.result)}catch{B.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(i,u)=>(s(),o("div",I,[e(a,{class:"justify-center align-center",style:{height:"150px"}},{default:t(()=>[N]),_:1}),e(a,{style:{height:"100px"}}),e(a,{class:"justify-center"},{default:t(()=>[e(c,{cols:"9"},{default:t(()=>[n.length>0?(s(!0),o(g,{key:0},f(n,y=>(s(),d(c,{class:"align-stretch",cols:"12"},{default:t(()=>[e(G,{designer:y},null,8,["designer"])]),_:2},1024))),256)):(s(),d(c,{key:1,cols:"9"},{default:t(()=>[q]),_:1}))]),_:1})]),_:1})]))}};export{E as default};
