import{I as b,s as l}from"./index.036e2946.js";const r=[];function h(e,o){return{subscribe:p(e,o).subscribe}}function p(e,o=b){let n;const i=new Set;function u(t){if(l(e,t)&&(e=t,n)){const c=!r.length;for(const s of i)s[1](),r.push(s,e);if(c){for(let s=0;s<r.length;s+=2)r[s][0](r[s+1]);r.length=0}}}function f(t){u(t(e))}function a(t,c=b){const s=[t,c];return i.add(s),i.size===1&&(n=o(u)||b),t(e),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:u,update:f,subscribe:a}}export{h as r,p as w};
