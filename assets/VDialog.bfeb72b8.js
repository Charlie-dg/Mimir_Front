import{a4 as y,ac as E,aB as h,N as x,al as S,G as D,aD as B,ah as v,H as P,a as T,K as w,aE as A}from"./index.bd4fd932.js";import{V as R,u as k}from"./scopeId.151d1840.js";import{f as F}from"./form.c4e01d6d.js";import{a as I}from"./VOverlay.2f2e3911.js";const q=y()({name:"VDialog",inheritAttrs:!1,props:{fullscreen:Boolean,origin:{type:String,default:"center center"},retainFocus:{type:Boolean,default:!0},scrollable:Boolean,modelValue:Boolean,...E({width:"auto"}),...h({transition:{component:R}})},emits:{"update:modelValue":t=>!0},setup(t,f){let{attrs:m,slots:i}=f;const o=x(t,"modelValue"),{dimensionStyles:g}=S(t),{scopeId:p}=k(),e=D();function u(a){var l,n;const c=a.relatedTarget,s=a.target;if(c!==s&&(l=e.value)!=null&&l.contentEl&&(n=e.value)!=null&&n.globalTop&&![document,e.value.contentEl].includes(s)&&!e.value.contentEl.contains(s)){const r=[...e.value.contentEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(b=>!b.hasAttribute("disabled"));if(!r.length)return;const d=r[0],V=r[r.length-1];c===d?V.focus():d.focus()}}return B&&v(()=>o.value&&t.retainFocus,a=>{a?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)},{immediate:!0}),v(o,async a=>{if(await A(),a){var l;(l=e.value.contentEl)==null||l.focus({preventScroll:!0})}else{var n;(n=e.value.activatorEl)==null||n.focus({preventScroll:!0})}}),P(()=>T(I,w({modelValue:o.value,"onUpdate:modelValue":a=>o.value=a,class:["v-dialog",{"v-dialog--fullscreen":t.fullscreen,"v-dialog--scrollable":t.scrollable}],style:g.value,transition:t.transition,ref:e,"aria-role":"dialog","aria-modal":"true",activatorProps:{"aria-haspopup":"dialog","aria-expanded":String(o.value)},"z-index":2400},p,m),{default:i.default,activator:i.activator})),F({},e)}});export{q as V};
