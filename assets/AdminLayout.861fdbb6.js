import{u as _,b9 as f,ba as V,o as s,c as v,a as e,w as t,bb as b,bc as h,bd as k,F as g,be as x,j as a,e as B,i as C,g as w,bf as A,h as c}from"./index.40bb4b12.js";import{V as l,a as o}from"./VList.166583ff.js";import{V as L}from"./VDivider.9834bf31.js";import"./createSimpleFunctional.13b4d55b.js";import"./VAvatar.622ce817.js";const N=c("Mimir \u5F8C\u53F0\u7BA1\u7406\u7CFB\u7D71"),y=c("\u767B\u51FA"),S={__name:"AdminLayout",setup(T){const n=_(),{logout:d}=n,{isLogin:r,isAdmin:i,avatar:p,account:m}=f(n);return(D,F)=>{const u=V("router-view");return s(),v(g,null,[e(b,{color:"black"},{append:t(()=>[]),default:t(()=>[e(x,null,{default:t(()=>[N]),_:1}),a(r)&&!a(i)||a(r)&&a(i)?(s(),B(C,{key:0,onClick:a(d),variant:"plain"},{default:t(()=>[y]),_:1},8,["onClick"])):w("",!0)]),_:1}),e(h,{"expand-on-hover":"",rail:"",permanent:""},{default:t(()=>[e(l,null,{default:t(()=>[e(o,{"prepend-avatar":a(p),title:a(m)},null,8,["prepend-avatar","title"])]),_:1}),e(L),e(l,null,{default:t(()=>[e(o,{to:"/admin/users",title:"\u6703\u54E1\u7BA1\u7406","prepend-icon":"mdi-account-multiple"}),e(o,{to:"/admin/orders",title:"\u8A02\u55AE\u7BA1\u7406","prepend-icon":"mdi-format-list-checkbox"}),e(o,{to:"/admin/products",title:"\u5546\u54C1\u7BA1\u7406","prepend-icon":"mdi-shopping"}),e(o,{to:"/admin/services",title:"\u670D\u52D9\u7BA1\u7406","prepend-icon":"mdi-hair-dryer"}),e(o,{to:"/",title:"\u56DE\u524D\u53F0","prepend-icon":"mdi-home"})]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(A,null,{default:t(()=>[e(u)]),_:1})]),_:1})],64)}}};export{S as default};
