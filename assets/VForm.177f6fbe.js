import{m as v,c as p,f as b}from"./form.612ffd7c.js";import{B as h,r as V,G as F,a as R}from"./index.1abab4fd.js";const P=h({name:"VForm",props:{...v()},emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,i){let{slots:s,emit:m}=i;const r=p(o),n=V();function u(t){t.preventDefault(),r.reset()}function f(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),m("submit",a),a.defaultPrevented||e.then(d=>{let{valid:c}=d;if(c){var l;(l=n.value)==null||l.submit()}}),a.preventDefault()}return F(()=>{var t;return R("form",{ref:n,class:"v-form",novalidate:!0,onReset:u,onSubmit:f},[(t=s.default)==null?void 0:t.call(s,r)])}),b(r,n)}});export{P as V};
