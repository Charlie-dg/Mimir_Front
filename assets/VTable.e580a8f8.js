import{x as d,L as r,y as b,B as h,an as v,N as m,G as u,a,aJ as f}from"./index.6cd5d207.js";const x=d({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],...r(),...b(),...h()},setup(t,s){let{slots:e}=s;const{themeClasses:i}=v(t),{densityClasses:n}=m(t);return u(()=>{var l,o;return a(t.tag,{class:["v-table",{"v-table--fixed-height":!!t.height,"v-table--fixed-header":t.fixedHeader,"v-table--fixed-footer":t.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom},i.value,n.value]},{default:()=>[(l=e.top)==null?void 0:l.call(e),e.default&&a("div",{class:"v-table__wrapper",style:{height:f(t.height)}},[a("table",null,[e.default()])]),(o=e.bottom)==null?void 0:o.call(e)]})}),{}}});export{x as V};