import{q as T,B as F,z as y,a as l,C as G,I as g,m as B,D as I,R as J,E as K,G as M,H as Q,J as U,K as W,L as X,M as Y,k as Z,N as j,n as ee,O as ae,P as te,Q as le,T as ne,v as se,U as ie,W as de,X as oe,Y as ce,Z as ue,x as re,$ as ve,a0 as $,a1 as me,a2 as fe,e as ge,a3 as ke,a4 as be}from"./index.250fd50a.js";import{c as V}from"./createSimpleFunctional.e4f50c27.js";import{V as x}from"./VAvatar.87710db4.js";const pe=T({name:"VCardActions",setup(e,n){let{slots:t}=n;return F({VBtn:{variant:"text"}}),y(()=>{var a;return l("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ce=V("v-card-subtitle"),Ie=V("v-card-title"),ye=G({name:"VCardItem",props:{appendAvatar:String,appendIcon:g,prependAvatar:String,prependIcon:g,subtitle:String,title:String,...B()},setup(e,n){let{slots:t}=n;return y(()=>{var a,s,i,d,o,c,u,r,v;const k=!!(e.prependAvatar||e.prependIcon||t.prepend),b=!!(e.appendAvatar||e.appendIcon||t.append),p=!!(e.title||t.title),C=!!(e.subtitle||t.subtitle);return l("div",{class:"v-card-item"},[k&&l(I,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[l("div",{class:"v-card-item__prepend"},[(a=(s=t.prepend)==null?void 0:s.call(t))!=null?a:l(x,null,null)])]}),l("div",{class:"v-card-item__content"},[p&&l(Ie,{key:"title"},{default:()=>[(i=(d=t.title)==null?void 0:d.call(t))!=null?i:e.title]}),C&&l(Ce,{key:"subtitle"},{default:()=>[(o=(c=t.subtitle)==null?void 0:c.call(t))!=null?o:e.subtitle]}),(u=t.default)==null?void 0:u.call(t)]),b&&l(I,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[l("div",{class:"v-card-item__append"},[(r=(v=t.append)==null?void 0:v.call(t))!=null?r:l(x,null,null)])]})])}),{}}}),Ve=V("v-card-text"),Pe=T({name:"VCard",directives:{Ripple:J},props:{appendAvatar:String,appendIcon:g,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:g,ripple:Boolean,subtitle:String,text:String,title:String,...K(),...M(),...B(),...Q(),...U(),...W(),...X(),...Y(),...Z(),...j(),...ee(),...ae({variant:"elevated"})},setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:s}=te(e),{borderClasses:i}=le(e),{colorClasses:d,colorStyles:o,variantClasses:c}=ne(e),{densityClasses:u}=se(e),{dimensionStyles:r}=ie(e),{elevationClasses:v}=de(e),{loaderClasses:k}=oe(e),{locationStyles:b}=ce(e),{positionClasses:p}=ue(e),{roundedClasses:C}=re(e),m=ve(e,t),D=$(()=>e.link!==!1&&m.isLink.value),f=$(()=>!e.disabled&&e.link!==!1&&(e.link||m.isClickable.value));return y(()=>{var _,h,A,P,S;const L=D.value?"a":e.tag,R=!!(a.title||e.title),E=!!(a.subtitle||e.subtitle),H=R||E,N=!!(a.append||e.appendAvatar||e.appendIcon),O=!!(a.prepend||e.prependAvatar||e.prependIcon),q=!!(a.image||e.image),w=H||O||N,z=!!(a.text||e.text);return me(l(L,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":f.value},s.value,i.value,d.value,u.value,v.value,k.value,p.value,C.value,c.value],style:[o.value,r.value,b.value],href:m.href.value,onClick:f.value&&m.navigate},{default:()=>[q&&l(I,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[l("div",{class:"v-card__image"},[(_=(h=a.image)==null?void 0:h.call(a))!=null?_:l(ge,null,null)])]}),l(ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),w&&l(ye,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),z&&l(Ve,{key:"text"},{default:()=>[(A=(P=a.text)==null?void 0:P.call(a))!=null?A:e.text]}),(S=a.default)==null?void 0:S.call(a),a.actions&&l(pe,null,{default:a.actions}),be(f.value,"v-card")]}),[[fe("ripple"),f.value]])}),{}}});export{Ie as V,Ve as a,Pe as b,Ce as c,pe as d};
