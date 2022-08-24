import{B as D,ac as G,G as k,a as l,ar as K,I as V,O as E,H as I,R as M,W as Q,N as X,P as L,Q as Y,as as Z,at as j,au as J,T as ee,U as ae,C as te,X as le,$ as ne,a0 as se,a1 as ie,a2 as oe,a3 as R,a4 as de,av as re,aw as ue,ax as ce,a5 as ve,Y as me,x as $,K as fe,a6 as ge,f as pe,ay as be,a7 as ye,D as Ve,ap as ke,v as he,r as Ie,az as Ce,Z as T,a9 as Ae,aA as Se}from"./index.1abab4fd.js";import{c as C}from"./createSimpleFunctional.c0a6c7b6.js";import{V as B}from"./VAvatar.39d795f4.js";import{V as _e,u as xe}from"./scopeId.ec03e723.js";import{f as Pe}from"./form.612ffd7c.js";import{a as $e}from"./VOverlay.6f1acc69.js";const Te=D({name:"VCardActions",setup(e,u){let{slots:t}=u;return G({VBtn:{variant:"text"}}),k(()=>{var a;return l("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Be=C("v-card-subtitle"),De=C("v-card-title"),Ee=K({name:"VCardItem",props:{appendAvatar:String,appendIcon:V,prependAvatar:String,prependIcon:V,subtitle:String,title:String,...E()},setup(e,u){let{slots:t}=u;return k(()=>{var a,i,m,f,n,c,s,o,d;const g=!!(e.prependAvatar||e.prependIcon||t.prepend),v=!!(e.appendAvatar||e.appendIcon||t.append),r=!!(e.title||t.title),p=!!(e.subtitle||t.subtitle);return l("div",{class:"v-card-item"},[g&&l(I,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[l("div",{class:"v-card-item__prepend"},[(a=(i=t.prepend)==null?void 0:i.call(t))!=null?a:l(B,null,null)])]}),l("div",{class:"v-card-item__content"},[r&&l(De,{key:"title"},{default:()=>[(m=(f=t.title)==null?void 0:f.call(t))!=null?m:e.title]}),p&&l(Be,{key:"subtitle"},{default:()=>[(n=(c=t.subtitle)==null?void 0:c.call(t))!=null?n:e.subtitle]}),(s=t.default)==null?void 0:s.call(t)]),v&&l(I,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[l("div",{class:"v-card-item__append"},[(o=(d=t.append)==null?void 0:d.call(t))!=null?o:l(B,null,null)])]})])}),{}}}),Le=C("v-card-text"),He=D({name:"VCard",directives:{Ripple:M},props:{appendAvatar:String,appendIcon:V,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:V,ripple:Boolean,subtitle:String,text:String,title:String,...Q(),...X(),...E(),...L(),...Y(),...Z(),...j(),...J(),...ee(),...ae(),...te(),...le({variant:"elevated"})},setup(e,u){let{attrs:t,slots:a}=u;const{themeClasses:i}=ne(e),{borderClasses:m}=se(e),{colorClasses:f,colorStyles:n,variantClasses:c}=ie(e),{densityClasses:s}=oe(e),{dimensionStyles:o}=R(e),{elevationClasses:d}=de(e),{loaderClasses:g}=re(e),{locationStyles:v}=ue(e),{positionClasses:r}=ce(e),{roundedClasses:p}=ve(e),b=me(e,t),h=$(()=>e.link!==!1&&b.isLink.value),y=$(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return k(()=>{var A,S,_,x,P;const w=h.value?"a":e.tag,F=!!(a.title||e.title),O=!!(a.subtitle||e.subtitle),N=F||O,z=!!(a.append||e.appendAvatar||e.appendIcon),H=!!(a.prepend||e.prependAvatar||e.prependIcon),U=!!(a.image||e.image),W=N||H||z,q=!!(a.text||e.text);return fe(l(w,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":y.value},i.value,m.value,f.value,s.value,d.value,g.value,r.value,p.value,c.value],style:[n.value,o.value,v.value],href:b.href.value,onClick:y.value&&b.navigate},{default:()=>[U&&l(I,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[l("div",{class:"v-card__image"},[(A=(S=a.image)==null?void 0:S.call(a))!=null?A:l(pe,null,null)])]}),l(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),W&&l(Ee,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&l(Le,{key:"text"},{default:()=>[(_=(x=a.text)==null?void 0:x.call(a))!=null?_:e.text]}),(P=a.default)==null?void 0:P.call(a),a.actions&&l(Te,null,{default:a.actions}),ye(y.value,"v-card")]}),[[ge("ripple"),y.value]])}),{}}});const Ue=Ve()({name:"VDialog",inheritAttrs:!1,props:{fullscreen:Boolean,origin:{type:String,default:"center center"},retainFocus:{type:Boolean,default:!0},scrollable:Boolean,modelValue:Boolean,...L({width:"auto"}),...ke({transition:{component:_e}})},emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:t,slots:a}=u;const i=he(e,"modelValue"),{dimensionStyles:m}=R(e),{scopeId:f}=xe(),n=Ie();function c(s){var o,d;const g=s.relatedTarget,v=s.target;if(g!==v&&(o=n.value)!=null&&o.contentEl&&(d=n.value)!=null&&d.globalTop&&![document,n.value.contentEl].includes(v)&&!n.value.contentEl.contains(v)){const r=[...n.value.contentEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(h=>!h.hasAttribute("disabled"));if(!r.length)return;const p=r[0],b=r[r.length-1];g===p?b.focus():p.focus()}}return Ce&&T(()=>i.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",c):document.removeEventListener("focusin",c)},{immediate:!0}),T(i,async s=>{if(await Se(),s){var o;(o=n.value.contentEl)==null||o.focus({preventScroll:!0})}else{var d;(d=n.value.activatorEl)==null||d.focus({preventScroll:!0})}}),k(()=>l($e,Ae({modelValue:i.value,"onUpdate:modelValue":s=>i.value=s,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable}],style:m.value,transition:e.transition,ref:n,"aria-role":"dialog","aria-modal":"true",activatorProps:{"aria-haspopup":"dialog","aria-expanded":String(i.value)},"z-index":2400},f,t),{default:a.default,activator:a.activator})),Pe({},n)}});export{De as V,Be as a,Te as b,He as c,Ue as d,Le as e};
