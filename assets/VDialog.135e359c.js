import{Z as y,a7 as E,_ as h,M as x,a8 as S,E as D,a9 as B,a2 as v,G as P,a as T,J as w,aa as A}from"./index.6cd5d207.js";import{V as R,u as k,b as F}from"./scopeId.718a73ab.js";import{f as I}from"./form.aeadc532.js";const N=y()({name:"VDialog",inheritAttrs:!1,props:{fullscreen:Boolean,origin:{type:String,default:"center center"},retainFocus:{type:Boolean,default:!0},scrollable:Boolean,modelValue:Boolean,...E({width:"auto"}),...h({transition:{component:R}})},emits:{"update:modelValue":t=>!0},setup(t,f){let{attrs:m,slots:i}=f;const l=x(t,"modelValue"),{dimensionStyles:g}=S(t),{scopeId:p}=k(),e=D();function u(a){var o,n;const c=a.relatedTarget,s=a.target;if(c!==s&&(o=e.value)!=null&&o.contentEl&&(n=e.value)!=null&&n.globalTop&&![document,e.value.contentEl].includes(s)&&!e.value.contentEl.contains(s)){const r=[...e.value.contentEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(b=>!b.hasAttribute("disabled"));if(!r.length)return;const d=r[0],V=r[r.length-1];c===d?V.focus():d.focus()}}return B&&v(()=>l.value&&t.retainFocus,a=>{a?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)},{immediate:!0}),v(l,async a=>{if(await A(),a){var o;(o=e.value.contentEl)==null||o.focus({preventScroll:!0})}else{var n;(n=e.value.activatorEl)==null||n.focus({preventScroll:!0})}}),P(()=>T(F,w({modelValue:l.value,"onUpdate:modelValue":a=>l.value=a,class:["v-dialog",{"v-dialog--fullscreen":t.fullscreen,"v-dialog--scrollable":t.scrollable}],style:g.value,transition:t.transition,ref:e,"aria-role":"dialog","aria-modal":"true",activatorProps:{"aria-haspopup":"dialog","aria-expanded":String(l.value)},"z-index":2400},p,m),{default:i.default,activator:i.activator})),I({},e)}});export{N as V};
