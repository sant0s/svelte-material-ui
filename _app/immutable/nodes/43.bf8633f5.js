import{S as ne,i as se,s as le,V as ue,k as J,l as Q,m as W,h as d,W as Se,b as I,X as ie,E as _e,v as ut,Q as ct,R as it,f as mt,Y as We,Z as Re,g as M,d as D,_ as qe,$ as be,a0 as Je,a3 as Ie,F as pe,o as Qe,a1 as Xe,a4 as gt,e as Ee,y as R,z as B,A as U,B as T,w as ae,a as V,c as H,L as Ye,M as Ze,N as ye,O as xe,D as j,a6 as we,n as z,J as me,q as P,r as O,p as $t,K as ge,u as x,T as ve,U as ke,C as dt}from"../chunks/index.036e2946.js";import{D as ce}from"../chunks/Demo.2ea65730.js";import{M as et,d as he}from"../chunks/dispatch.22ec8f60.js";import{w as _t}from"../chunks/index.63003bc5.js";import{c as Ce,u as tt,f as nt}from"../chunks/useActions.a6f71942.js";import{C as st}from"../chunks/ContextFragment.785f4229.js";import{R as pt}from"../chunks/IconButton.f64d5691.js";import{C as oe}from"../chunks/CommonLabel.4b60b808.js";import{B as de}from"../chunks/Button.1714d275.js";import{C as Ae}from"../chunks/Svg.532294de.js";import{t as lt,u as ot,v as rt,w as at,x as ht,y as St,z as bt,A as Et,B as Ct}from"../chunks/mdi.0b054ab4.js";import{W as vt}from"../chunks/Wrapper.99392088.js";/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const kt={SINGLE_SELECT:"mdc-segmented-button--single-select"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */class Be extends et{static get defaultAdapter(){return{hasClass:()=>!1,getSegments:()=>[],selectSegment:()=>{},unselectSegment:()=>{},notifySelectedChange:()=>{}}}constructor(e){super(Object.assign(Object.assign({},Be.defaultAdapter),e))}selectSegment(e){this.adapter.selectSegment(e)}unselectSegment(e){this.adapter.unselectSegment(e)}getSelectedSegments(){return this.adapter.getSegments().filter(e=>e.selected)}isSegmentSelected(e){return this.adapter.getSegments().some(n=>(n.index===e||n.segmentId===e)&&n.selected)}isSingleSelect(){return this.adapter.hasClass(kt.SINGLE_SELECT)}handleSelected(e){this.isSingleSelect()&&this.unselectPrevSelected(e.index),this.adapter.notifySelectedChange(e)}unselectPrevSelected(e){for(let n of this.getSelectedSegments())n.index!==e&&this.unselectSegment(n.index)}}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const Te={TRUE:"true",FALSE:"false"},Me={ARIA_CHECKED:"aria-checked",ARIA_PRESSED:"aria-pressed",DATA_SEGMENT_ID:"data-segment-id"},De={SELECTED:"mdc-segmented-button__segment--selected"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const At={bottom:0,height:0,left:0,right:0,top:0,width:0};class Ue extends et{static get defaultAdapter(){return{isSingleSelect:()=>!1,getAttr:()=>"",setAttr:()=>{},addClass:()=>{},removeClass:()=>{},hasClass:()=>!1,notifySelectedChange:()=>{},getRootBoundingClientRect:()=>At}}constructor(e){super(Object.assign(Object.assign({},Ue.defaultAdapter),e))}isSelected(){return this.adapter.hasClass(De.SELECTED)}setSelected(){this.adapter.addClass(De.SELECTED),this.setAriaAttr(Te.TRUE)}setUnselected(){this.adapter.removeClass(De.SELECTED),this.setAriaAttr(Te.FALSE)}getSegmentId(){var e;return(e=this.adapter.getAttr(Me.DATA_SEGMENT_ID))!==null&&e!==void 0?e:void 0}handleClick(){this.adapter.isSingleSelect()?this.setSelected():this.toggleSelection(),this.adapter.notifySelectedChange(this.isSelected())}getDimensions(){return this.adapter.getRootBoundingClientRect()}toggleSelection(){this.isSelected()?this.setUnselected():this.setSelected()}setAriaAttr(e){this.adapter.isSingleSelect()?this.adapter.setAttr(Me.ARIA_CHECKED,e):this.adapter.setAttr(Me.ARIA_PRESSED,e)}}function je(l,e,n){const t=l.slice();return t[28]=e[n],t[30]=n,t}const It=l=>({segment:l&4}),Le=l=>({segment:l[28]});function wt(l){let e;const n=l[17].default,t=Ye(n,l,l[19],Le);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),e=!0},p(s,o){t&&t.p&&(!e||o&524292)&&Ze(t,n,s,s[19],e?xe(n,s[19],o,It):ye(s[19]),Le)},i(s){e||(M(t,s),e=!0)},o(s){D(t,s),e=!1},d(s){t&&t.d(s)}}}function Mt(l){let e,n,t;return e=new st({props:{key:"SMUI:segmented-button:segment:initialSelected",value:l[7][l[30]],$$slots:{default:[wt]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment),n=V()},l(s){B(e.$$.fragment,s),n=H(s)},m(s,o){U(e,s,o),I(s,n,o),t=!0},p(s,o){const u={};o&4&&(u.value=s[7][s[30]]),o&524292&&(u.$$scope={dirty:o,ctx:s}),e.$set(u)},i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){T(e,s),s&&d(n)}}}function Pe(l,e){let n,t,s;return t=new st({props:{key:"SMUI:segmented-button:segment:index",value:e[30],$$slots:{default:[Mt]},$$scope:{ctx:e}}}),{key:l,first:null,c(){n=Ee(),R(t.$$.fragment),this.h()},l(o){n=Ee(),B(t.$$.fragment,o),this.h()},h(){this.first=n},m(o,u){I(o,n,u),U(t,o,u),s=!0},p(o,u){e=o;const _={};u&4&&(_.value=e[30]),u&524292&&(_.$$scope={dirty:u,ctx:e}),t.$set(_)},i(o){s||(M(t.$$.fragment,o),s=!0)},o(o){D(t.$$.fragment,o),s=!1},d(o){o&&d(n),T(t,o)}}}function Dt(l){let e,n=[],t=new Map,s,o,u,_,i,b,S=l[2];const r=c=>c[3](c[28]);for(let c=0;c<S.length;c+=1){let m=je(l,S,c),p=r(m);t.set(p,n[c]=Pe(p,m))}let E=[{class:s=Ce({[l[1]]:!0,"mdc-segmented-button":!0,"mdc-segmented-button--single-select":l[4]})},{role:o=l[4]?"radiogroup":"group"},l[12]],$={};for(let c=0;c<E.length;c+=1)$=ue($,E[c]);return{c(){e=J("div");for(let c=0;c<n.length;c+=1)n[c].c();this.h()},l(c){e=Q(c,"DIV",{class:!0,role:!0});var m=W(e);for(let p=0;p<n.length;p+=1)n[p].l(m);m.forEach(d),this.h()},h(){Se(e,$)},m(c,m){I(c,e,m);for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(e,null);l[18](e),_=!0,i||(b=[ie(u=tt.call(null,e,l[0])),ie(l[6].call(null,e)),_e(e,"SMUISegmentedButtonSegment:mount",l[9]),_e(e,"SMUISegmentedButtonSegment:unmount",l[10]),_e(e,"selected",l[11])],i=!0)},p(c,[m]){m&524428&&(S=c[2],ut(),n=ct(n,m,r,1,c,S,t,e,it,Pe,null,je),mt()),Se(e,$=We(E,[(!_||m&18&&s!==(s=Ce({[c[1]]:!0,"mdc-segmented-button":!0,"mdc-segmented-button--single-select":c[4]})))&&{class:s},(!_||m&16&&o!==(o=c[4]?"radiogroup":"group"))&&{role:o},m&4096&&c[12]])),u&&Re(u.update)&&m&1&&u.update.call(null,c[0])},i(c){if(!_){for(let m=0;m<S.length;m+=1)M(n[m]);_=!0}},o(c){for(let m=0;m<n.length;m+=1)D(n[m]);_=!1},d(c){c&&d(e);for(let m=0;m<n.length;m+=1)n[m].d();l[18](null),i=!1,qe(b)}}}function Oe(l,e){let n=new Set(l);for(let t of e)n.delete(t);return n}function Rt(l,e,n){const t=["use","class","segments","key","singleSelect","selected","getElement"];let s=be(e,t),o,{$$slots:u={},$$scope:_}=e;const i=nt(Je());let{use:b=[]}=e,{class:S=""}=e,{segments:r=[]}=e,{key:E=g=>g}=e,{singleSelect:$=!1}=e,{selected:c=$?void 0:[]}=e,m,p,F={},G=new WeakMap,h=r.map(g=>$&&c===g||!$&&c.indexOf(g)!==-1);Ie("SMUI:icon:context","segmented-button"),Ie("SMUI:label:context","segmented-button");const v=_t($);pe(l,v,g=>n(21,o=g)),Ie("SMUI:segmented-button:singleSelect",v);let a=$?c:new Set(c);Qe(()=>(n(15,p=new Be({hasClass:g=>y().classList.contains(g),getSegments:()=>r.map((g,N)=>({index:N,selected:$?c===g:c.indexOf(g)!==-1})),selectSegment:X,unselectSegment:Z,notifySelectedChange:g=>{g.selected?X(g.index):Z(g.index),he(y(),"change",g)}})),p.init(),()=>{p.destroy()}));function A(g){const N=g.detail;k(N.segmentId,N)}function L(g){const N=g.detail;w(N.segmentId)}function K(g){p&&p.handleSelected(g.detail)}function f(g){return g instanceof Object?G.get(g):F[g]}function k(g,N){g instanceof Object?G.set(g,N):F[g]=N}function w(g){g instanceof Object?G.delete(g):delete F[g]}function X(g){let N=r.indexOf(g);N===-1&&(N=g),$?c!==r[N]&&n(13,c=r[N]):c.indexOf(r[N])===-1&&(c.push(r[N]),n(13,c));const te=f(r[N]);te&&(te.selected=!0)}function Z(g){let N=r.indexOf(g);if(N===-1&&(N=g),$)c===r[N]&&n(13,c=null);else{const Y=c.indexOf(r[N]);Y!==-1&&(c.splice(Y,1),n(13,c))}const te=f(r[N]);te&&(te.selected=!1)}function y(){return m}function ee(g){ae[g?"unshift":"push"](()=>{m=g,n(5,m)})}return l.$$set=g=>{e=ue(ue({},e),Xe(g)),n(12,s=be(e,t)),"use"in g&&n(0,b=g.use),"class"in g&&n(1,S=g.class),"segments"in g&&n(2,r=g.segments),"key"in g&&n(3,E=g.key),"singleSelect"in g&&n(4,$=g.singleSelect),"selected"in g&&n(13,c=g.selected),"$$scope"in g&&n(19,_=g.$$scope)},l.$$.update=()=>{if(l.$$.dirty&16&&gt(v,o=$,o),l.$$.dirty&106512&&p&&$&&a!==c&&(a!=null&&p.unselectSegment(a),n(16,a=c),c!=null&&p.selectSegment(c)),l.$$.dirty&106516&&p&&!$){const g=new Set(c),N=Oe(a,g),te=Oe(g,a);if(N.size||te.size){n(16,a=g);for(let Y of N){const $e=r.indexOf(Y);$e!==-1&&p.unselectSegment($e)}for(let Y of te)p.selectSegment(r.indexOf(Y))}}},[b,S,r,E,$,m,i,h,v,A,L,K,s,c,y,p,a,u,ee,_]}class re extends ne{constructor(e){super(),se(this,e,Rt,Dt,le,{use:0,class:1,segments:2,key:3,singleSelect:4,selected:13,getElement:14})}get getElement(){return this.$$.ctx[14]}}function Fe(l){let e;return{c(){e=J("div"),this.h()},l(n){e=Q(n,"DIV",{class:!0}),W(e).forEach(d),this.h()},h(){z(e,"class","mdc-segmented-button__ripple")},m(n,t){I(n,e,t)},d(n){n&&d(e)}}}function Ne(l){let e;return{c(){e=J("div"),this.h()},l(n){e=Q(n,"DIV",{class:!0}),W(e).forEach(d),this.h()},h(){z(e,"class","mdc-segmented-button__segment__touch")},m(n,t){I(n,e,t)},d(n){n&&d(e)}}}function Bt(l){let e,n,t,s,o,u,_,i,b,S,r,E,$=l[4]&&Fe();const c=l[23].default,m=Ye(c,l,l[22],null);let p=l[5]&&Ne(),F=[{class:t=Ce({[l[2]]:!0,"mdc-segmented-button__segment":!0,"mdc-segmented-button__segment--touch":l[5],"mdc-segmented-button__segment--selected":l[0],...l[8]})},{style:s=Object.entries(l[9]).map(Ge).concat([l[3]]).join(" ")},{role:o=l[14]?"radio":void 0},{"aria-pressed":u=l[14]?void 0:l[0]?"true":"false"},{"aria-checked":_=l[14]?l[0]?"true":"false":void 0},l[10],l[19]],G={};for(let h=0;h<F.length;h+=1)G=ue(G,F[h]);return{c(){e=J("button"),$&&$.c(),n=Ee(),m&&m.c(),p&&p.c(),this.h()},l(h){e=Q(h,"BUTTON",{class:!0,style:!0,role:!0,"aria-pressed":!0,"aria-checked":!0});var v=W(e);$&&$.l(v),n=Ee(),m&&m.l(v),p&&p.l(v),v.forEach(d),this.h()},h(){Se(e,G)},m(h,v){I(h,e,v),$&&$.m(e,null),j(e,n),m&&m.m(e,null),p&&p.m(e,null),e.autofocus&&e.focus(),l[24](e),S=!0,r||(E=[ie(i=pt.call(null,e,{ripple:l[4],unbounded:!1,addClass:l[16],removeClass:l[17],addStyle:l[18]})),ie(l[11].call(null,e)),ie(b=tt.call(null,e,l[1])),_e(e,"click",l[25])],r=!0)},p(h,v){h[4]?$||($=Fe(),$.c(),$.m(e,n)):$&&($.d(1),$=null),m&&m.p&&(!S||v[0]&4194304)&&Ze(m,c,h,h[22],S?xe(c,h[22],v,null):ye(h[22]),null),h[5]?p||(p=Ne(),p.c(),p.m(e,null)):p&&(p.d(1),p=null),Se(e,G=We(F,[(!S||v[0]&293&&t!==(t=Ce({[h[2]]:!0,"mdc-segmented-button__segment":!0,"mdc-segmented-button__segment--touch":h[5],"mdc-segmented-button__segment--selected":h[0],...h[8]})))&&{class:t},(!S||v[0]&520&&s!==(s=Object.entries(h[9]).map(Ge).concat([h[3]]).join(" ")))&&{style:s},{role:o},(!S||v[0]&1&&u!==(u=h[14]?void 0:h[0]?"true":"false"))&&{"aria-pressed":u},(!S||v[0]&1&&_!==(_=h[14]?h[0]?"true":"false":void 0))&&{"aria-checked":_},v[0]&1024&&h[10],v[0]&524288&&h[19]])),i&&Re(i.update)&&v[0]&16&&i.update.call(null,{ripple:h[4],unbounded:!1,addClass:h[16],removeClass:h[17],addStyle:h[18]}),b&&Re(b.update)&&v[0]&2&&b.update.call(null,h[1])},i(h){S||(M(m,h),S=!0)},o(h){D(m,h),S=!1},d(h){h&&d(e),$&&$.d(),m&&m.d(h),p&&p.d(),l[24](null),r=!1,qe(E)}}}const Ge=([l,e])=>`${l}: ${e};`;function Ut(l,e,n){const t=["use","class","style","segment","ripple","touch","selected","getElement"];let s=be(e,t),o,u,_,{$$slots:i={},$$scope:b}=e;const S=nt(Je());let r=()=>{};function E(C){return C===r}let{use:$=[]}=e,{class:c=""}=e,{style:m=""}=e,{segment:p}=e,{ripple:F=!0}=e,{touch:G=!1}=e;const h=we("SMUI:segmented-button:segment:initialSelected");pe(l,h,C=>n(28,_=C));let{selected:v=r}=e,a=!E(v);E(v)&&(v=_);let A,L,K={},f={},k={};const w=we("SMUI:segmented-button:singleSelect");pe(l,w,C=>n(27,u=C));const X=we("SMUI:segmented-button:segment:index");if(pe(l,X,C=>n(26,o=C)),!p)throw new Error("The segment property is required! It should be passed down from the SegmentedButton to the Segment.");Qe(()=>{n(6,L=new Ue({isSingleSelect:()=>u,getAttr:g,setAttr:N,addClass:y,removeClass:ee,hasClass:Z,notifySelectedChange:q=>{n(0,v=q),he(Y(),"selected",{index:o,selected:v,segmentId:p})},getRootBoundingClientRect:()=>Y().getBoundingClientRect()}));const C={segmentId:p,get selected(){return v},set selected(q){v!==q&&n(0,v=q)}};return he(Y(),"SMUISegmentedButtonSegment:mount",C),L.init(),()=>{he(Y(),"SMUISegmentedButtonSegment:unmount",C),L.destroy()}});function Z(C){return C in K?K[C]:Y().classList.contains(C)}function y(C){K[C]||n(8,K[C]=!0,K)}function ee(C){(!(C in K)||K[C])&&n(8,K[C]=!1,K)}function g(C){var q;return C in k?(q=k[C])!==null&&q!==void 0?q:null:Y().getAttribute(C)}function N(C,q){k[C]!==q&&n(10,k[C]=q,k)}function te(C,q){f[C]!=q&&(q===""||q==null?(delete f[C],n(9,f)):n(9,f[C]=q,f))}function Y(){return A}function $e(C){ae[C?"unshift":"push"](()=>{A=C,n(7,A)})}const ft=C=>!C.defaultPrevented&&L&&!a&&L.handleClick();return l.$$set=C=>{e=ue(ue({},e),Xe(C)),n(19,s=be(e,t)),"use"in C&&n(1,$=C.use),"class"in C&&n(2,c=C.class),"style"in C&&n(3,m=C.style),"segment"in C&&n(20,p=C.segment),"ripple"in C&&n(4,F=C.ripple),"touch"in C&&n(5,G=C.touch),"selected"in C&&n(0,v=C.selected),"$$scope"in C&&n(22,b=C.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&65&&L&&L.isSelected()&&!v&&L.setUnselected(),l.$$.dirty[0]&65&&L&&!L.isSelected()&&v&&L.setSelected()},[v,$,c,m,F,G,L,A,K,f,k,S,h,a,w,X,y,ee,te,s,p,Y,b,i,$e,ft]}class fe extends ne{constructor(e){super(),se(this,e,Ut,Bt,le,{use:1,class:2,style:3,segment:20,ripple:4,touch:5,selected:0,getElement:21},null,[-1,-1])}get getElement(){return this.$$.ctx[21]}}function Tt(l){let e=l[7]+"",n;return{c(){n=P(e)},l(t){n=O(t,e)},m(t,s){I(t,n,s)},p(t,s){s&128&&e!==(e=t[7]+"")&&x(n,e)},d(t){t&&d(n)}}}function jt(l){let e,n;return e=new oe({props:{$$slots:{default:[Tt]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&384&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Lt(l){let e,n;return e=new fe({props:{segment:l[7],$$slots:{default:[jt]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&128&&(o.segment=t[7]),s&384&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Pt(l){let e;return{c(){e=P("Morning")},l(n){e=O(n,"Morning")},m(n,t){I(n,e,t)},d(n){n&&d(e)}}}function Ot(l){let e,n;return e=new oe({props:{$$slots:{default:[Pt]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&256&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Ft(l){let e;return{c(){e=P("Afternoon")},l(n){e=O(n,"Afternoon")},m(n,t){I(n,e,t)},d(n){n&&d(e)}}}function Nt(l){let e,n;return e=new oe({props:{$$slots:{default:[Ft]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&256&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Gt(l){let e;return{c(){e=P("Evening")},l(n){e=O(n,"Evening")},m(n,t){I(n,e,t)},d(n){n&&d(e)}}}function Kt(l){let e,n;return e=new oe({props:{$$slots:{default:[Gt]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&256&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Vt(l){let e;return{c(){e=P("Night")},l(n){e=O(n,"Night")},m(n,t){I(n,e,t)},d(n){n&&d(e)}}}function Ht(l){let e,n;return e=new oe({props:{$$slots:{default:[Vt]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&256&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function zt(l){let e,n,t,s,o,u,_,i,b,S,r,E,$,c,m,p,F,G;function h(a){l[2](a)}let v={segments:l[1],singleSelect:!0,$$slots:{default:[Lt,({segment:a})=>({7:a}),({segment:a})=>a?128:0]},$$scope:{ctx:l}};return l[0]!==void 0&&(v.selected=l[0]),e=new re({props:v}),ae.push(()=>me(e,"selected",h)),_=new de({props:{$$slots:{default:[Ot]},$$scope:{ctx:l}}}),_.$on("click",l[3]),b=new de({props:{$$slots:{default:[Nt]},$$scope:{ctx:l}}}),b.$on("click",l[4]),r=new de({props:{$$slots:{default:[Kt]},$$scope:{ctx:l}}}),r.$on("click",l[5]),$=new de({props:{$$slots:{default:[Ht]},$$scope:{ctx:l}}}),$.$on("click",l[6]),{c(){R(e.$$.fragment),t=V(),s=J("div"),o=P("Programmatically select:"),u=V(),R(_.$$.fragment),i=V(),R(b.$$.fragment),S=V(),R(r.$$.fragment),E=V(),R($.$$.fragment),c=V(),m=J("pre"),p=P("Selected: "),F=P(l[0]),this.h()},l(a){B(e.$$.fragment,a),t=H(a),s=Q(a,"DIV",{style:!0});var A=W(s);o=O(A,"Programmatically select:"),A.forEach(d),u=H(a),B(_.$$.fragment,a),i=H(a),B(b.$$.fragment,a),S=H(a),B(r.$$.fragment,a),E=H(a),B($.$$.fragment,a),c=H(a),m=Q(a,"PRE",{class:!0});var L=W(m);p=O(L,"Selected: "),F=O(L,l[0]),L.forEach(d),this.h()},h(){$t(s,"margin-top","1em"),z(m,"class","status")},m(a,A){U(e,a,A),I(a,t,A),I(a,s,A),j(s,o),I(a,u,A),U(_,a,A),I(a,i,A),U(b,a,A),I(a,S,A),U(r,a,A),I(a,E,A),U($,a,A),I(a,c,A),I(a,m,A),j(m,p),j(m,F),G=!0},p(a,[A]){const L={};A&384&&(L.$$scope={dirty:A,ctx:a}),!n&&A&1&&(n=!0,L.selected=a[0],ge(()=>n=!1)),e.$set(L);const K={};A&256&&(K.$$scope={dirty:A,ctx:a}),_.$set(K);const f={};A&256&&(f.$$scope={dirty:A,ctx:a}),b.$set(f);const k={};A&256&&(k.$$scope={dirty:A,ctx:a}),r.$set(k);const w={};A&256&&(w.$$scope={dirty:A,ctx:a}),$.$set(w),(!G||A&1)&&x(F,a[0])},i(a){G||(M(e.$$.fragment,a),M(_.$$.fragment,a),M(b.$$.fragment,a),M(r.$$.fragment,a),M($.$$.fragment,a),G=!0)},o(a){D(e.$$.fragment,a),D(_.$$.fragment,a),D(b.$$.fragment,a),D(r.$$.fragment,a),D($.$$.fragment,a),G=!1},d(a){T(e,a),a&&d(t),a&&d(s),a&&d(u),T(_,a),a&&d(i),T(b,a),a&&d(S),T(r,a),a&&d(E),T($,a),a&&d(c),a&&d(m)}}}function Wt(l,e,n){let t=["Morning","Afternoon","Evening","Night"],s="Morning";function o(S){s=S,n(0,s)}return[s,t,o,()=>n(0,s="Morning"),()=>n(0,s="Afternoon"),()=>n(0,s="Evening"),()=>n(0,s="Night")]}class qt extends ne{constructor(e){super(),se(this,e,Wt,zt,le,{})}}function Jt(l){let e=l[3]+"",n;return{c(){n=P(e)},l(t){n=O(t,e)},m(t,s){I(t,n,s)},p(t,s){s&8&&e!==(e=t[3]+"")&&x(n,e)},d(t){t&&d(n)}}}function Qt(l){let e,n;return e=new oe({props:{$$slots:{default:[Jt]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&24&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Xt(l){let e,n;return e=new fe({props:{segment:l[3],$$slots:{default:[Qt]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&8&&(o.segment=t[3]),s&24&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Yt(l){let e,n,t,s,o,u=l[0].join(", ")+"",_,i;function b(r){l[2](r)}let S={segments:l[1],$$slots:{default:[Xt,({segment:r})=>({3:r}),({segment:r})=>r?8:0]},$$scope:{ctx:l}};return l[0]!==void 0&&(S.selected=l[0]),e=new re({props:S}),ae.push(()=>me(e,"selected",b)),{c(){R(e.$$.fragment),t=V(),s=J("pre"),o=P("Selected: "),_=P(u),this.h()},l(r){B(e.$$.fragment,r),t=H(r),s=Q(r,"PRE",{class:!0});var E=W(s);o=O(E,"Selected: "),_=O(E,u),E.forEach(d),this.h()},h(){z(s,"class","status")},m(r,E){U(e,r,E),I(r,t,E),I(r,s,E),j(s,o),j(s,_),i=!0},p(r,[E]){const $={};E&24&&($.$$scope={dirty:E,ctx:r}),!n&&E&1&&(n=!0,$.selected=r[0],ge(()=>n=!1)),e.$set($),(!i||E&1)&&u!==(u=r[0].join(", ")+"")&&x(_,u)},i(r){i||(M(e.$$.fragment,r),i=!0)},o(r){D(e.$$.fragment,r),i=!1},d(r){T(e,r),r&&d(t),r&&d(s)}}}function Zt(l,e,n){let t=["Shoes","Pants","Shirts","Hats","Coats"],s=["Shoes","Shirts","Coats"];function o(u){s=u,n(0,s)}return[s,t,o]}class yt extends ne{constructor(e){super(),se(this,e,Zt,Yt,le,{})}}function xt(l){let e=l[2].name+"",n;return{c(){n=P(e)},l(t){n=O(t,e)},m(t,s){I(t,n,s)},p(t,s){s&4&&e!==(e=t[2].name+"")&&x(n,e)},d(t){t&&d(n)}}}function en(l){let e,n;return e=new oe({props:{$$slots:{default:[xt]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&12&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function tn(l){let e,n;function t(){return l[1](l[2])}return e=new fe({props:{segment:l[2],selected:l[2].selected,$$slots:{default:[en]},$$scope:{ctx:l}}}),e.$on("click",t),{c(){R(e.$$.fragment)},l(s){B(e.$$.fragment,s)},m(s,o){U(e,s,o),n=!0},p(s,o){l=s;const u={};o&4&&(u.segment=l[2]),o&4&&(u.selected=l[2].selected),o&12&&(u.$$scope={dirty:o,ctx:l}),e.$set(u)},i(s){n||(M(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){T(e,s)}}}function nn(l){let e,n,t,s,o=l[0].filter(Ke).map(Ve).join(", ")+"",u,_;return e=new re({props:{segments:l[0],key:sn,$$slots:{default:[tn,({segment:i})=>({2:i}),({segment:i})=>i?4:0]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment),n=V(),t=J("pre"),s=P("Selected: "),u=P(o),this.h()},l(i){B(e.$$.fragment,i),n=H(i),t=Q(i,"PRE",{class:!0});var b=W(t);s=O(b,"Selected: "),u=O(b,o),b.forEach(d),this.h()},h(){z(t,"class","status")},m(i,b){U(e,i,b),I(i,n,b),I(i,t,b),j(t,s),j(t,u),_=!0},p(i,[b]){const S={};b&1&&(S.segments=i[0]),b&13&&(S.$$scope={dirty:b,ctx:i}),e.$set(S),(!_||b&1)&&o!==(o=i[0].filter(Ke).map(Ve).join(", ")+"")&&x(u,o)},i(i){_||(M(e.$$.fragment,i),_=!0)},o(i){D(e.$$.fragment,i),_=!1},d(i){T(e,i),i&&d(n),i&&d(t)}}}const sn=l=>l.name,Ke=l=>l.selected,Ve=l=>l.name;function ln(l,e,n){let t=[{name:"Shoes",selected:!0},{name:"Pants",selected:!1},{name:"Shirts",selected:!0},{name:"Hats",selected:!1},{name:"Coats",selected:!0}];return[t,o=>{o.selected=!o.selected,n(0,t)}]}class on extends ne{constructor(e){super(),se(this,e,ln,nn,le,{})}}function rn(l){let e,n;return{c(){e=ve("path"),this.h()},l(t){e=ke(t,"path",{fill:!0,d:!0}),W(e).forEach(d),this.h()},h(){z(e,"fill","currentColor"),z(e,"d",n=l[8].icon)},m(t,s){I(t,e,s)},p(t,s){s&256&&n!==(n=t[8].icon)&&z(e,"d",n)},d(t){t&&d(e)}}}function an(l){let e,n;return e=new Ae({props:{tag:"svg",style:"width: 1em; height: auto;",viewBox:"0 0 24 24",$$slots:{default:[rn]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&768&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function fn(l){let e,n;return e=new fe({props:{segment:l[8],title:l[8].name,$$slots:{default:[an]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&256&&(o.segment=t[8]),s&256&&(o.title=t[8].name),s&768&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function un(l){let e,n;return{c(){e=ve("path"),this.h()},l(t){e=ke(t,"path",{fill:!0,d:!0}),W(e).forEach(d),this.h()},h(){z(e,"fill","currentColor"),z(e,"d",n=l[8].icon)},m(t,s){I(t,e,s)},p(t,s){s&256&&n!==(n=t[8].icon)&&z(e,"d",n)},d(t){t&&d(e)}}}function cn(l){let e,n;return e=new Ae({props:{tag:"svg",style:"width: 1em; height: auto;",viewBox:"0 0 24 24",$$slots:{default:[un]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&768&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function mn(l){let e,n;return e=new fe({props:{segment:l[8],title:l[8].name,$$slots:{default:[cn]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&256&&(o.segment=t[8]),s&256&&(o.title=t[8].name),s&768&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function gn(l){let e,n;return{c(){e=ve("path"),this.h()},l(t){e=ke(t,"path",{fill:!0,d:!0}),W(e).forEach(d),this.h()},h(){z(e,"fill","currentColor"),z(e,"d",n=l[8].icon)},m(t,s){I(t,e,s)},p(t,s){s&256&&n!==(n=t[8].icon)&&z(e,"d",n)},d(t){t&&d(e)}}}function $n(l){let e=l[8].name+"",n;return{c(){n=P(e)},l(t){n=O(t,e)},m(t,s){I(t,n,s)},p(t,s){s&256&&e!==(e=t[8].name+"")&&x(n,e)},d(t){t&&d(n)}}}function dn(l){let e,n,t,s;return e=new Ae({props:{tag:"svg",style:"width: 1em; height: auto;",viewBox:"0 0 24 24",$$slots:{default:[gn]},$$scope:{ctx:l}}}),t=new oe({props:{$$slots:{default:[$n]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment),n=V(),R(t.$$.fragment)},l(o){B(e.$$.fragment,o),n=H(o),B(t.$$.fragment,o)},m(o,u){U(e,o,u),I(o,n,u),U(t,o,u),s=!0},p(o,u){const _={};u&768&&(_.$$scope={dirty:u,ctx:o}),e.$set(_);const i={};u&768&&(i.$$scope={dirty:u,ctx:o}),t.$set(i)},i(o){s||(M(e.$$.fragment,o),M(t.$$.fragment,o),s=!0)},o(o){D(e.$$.fragment,o),D(t.$$.fragment,o),s=!1},d(o){T(e,o),o&&d(n),T(t,o)}}}function _n(l){let e,n;function t(){return l[7](l[8])}return e=new fe({props:{segment:l[8],$$slots:{default:[dn]},$$scope:{ctx:l}}}),e.$on("click$preventDefault",t),{c(){R(e.$$.fragment)},l(s){B(e.$$.fragment,s)},m(s,o){U(e,s,o),n=!0},p(s,o){l=s;const u={};o&256&&(u.segment=l[8]),o&768&&(u.$$scope={dirty:o,ctx:l}),e.$set(u)},i(s){n||(M(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){T(e,s)}}}function pn(l){let e,n,t,s,o,u,_,i,b,S,r,E=l[1].name+"",$,c,m=(l[2].length?l[2].map(He).join(" & "):"None")+"",p,F,G=l[0].map(ze).join(", ")+"",h,v;function a(f){l[5](f)}let A={segments:l[3],singleSelect:!0,key:hn,$$slots:{default:[fn,({segment:f})=>({8:f}),({segment:f})=>f?256:0]},$$scope:{ctx:l}};l[1]!==void 0&&(A.selected=l[1]),n=new re({props:A}),ae.push(()=>me(n,"selected",a));function L(f){l[6](f)}let K={segments:l[4],key:Sn,$$slots:{default:[mn,({segment:f})=>({8:f}),({segment:f})=>f?256:0]},$$scope:{ctx:l}};return l[2]!==void 0&&(K.selected=l[2]),o=new re({props:K}),ae.push(()=>me(o,"selected",L)),i=new re({props:{segments:l[0],$$slots:{default:[_n,({segment:f})=>({8:f}),({segment:f})=>f?256:0]},$$scope:{ctx:l}}}),{c(){e=J("div"),R(n.$$.fragment),s=V(),R(o.$$.fragment),_=V(),R(i.$$.fragment),b=V(),S=J("pre"),r=P("Aligned: "),$=P(E),c=P(", Format: "),p=P(m),F=P(", "),h=P(G),this.h()},l(f){e=Q(f,"DIV",{class:!0});var k=W(e);B(n.$$.fragment,k),s=H(k),B(o.$$.fragment,k),_=H(k),B(i.$$.fragment,k),k.forEach(d),b=H(f),S=Q(f,"PRE",{class:!0});var w=W(S);r=O(w,"Aligned: "),$=O(w,E),c=O(w,", Format: "),p=O(w,m),F=O(w,", "),h=O(w,G),w.forEach(d),this.h()},h(){z(e,"class","format-bar svelte-s6y09"),z(S,"class","status")},m(f,k){I(f,e,k),U(n,e,null),j(e,s),U(o,e,null),j(e,_),U(i,e,null),I(f,b,k),I(f,S,k),j(S,r),j(S,$),j(S,c),j(S,p),j(S,F),j(S,h),v=!0},p(f,[k]){const w={};k&768&&(w.$$scope={dirty:k,ctx:f}),!t&&k&2&&(t=!0,w.selected=f[1],ge(()=>t=!1)),n.$set(w);const X={};k&768&&(X.$$scope={dirty:k,ctx:f}),!u&&k&4&&(u=!0,X.selected=f[2],ge(()=>u=!1)),o.$set(X);const Z={};k&1&&(Z.segments=f[0]),k&769&&(Z.$$scope={dirty:k,ctx:f}),i.$set(Z),(!v||k&2)&&E!==(E=f[1].name+"")&&x($,E),(!v||k&4)&&m!==(m=(f[2].length?f[2].map(He).join(" & "):"None")+"")&&x(p,m),(!v||k&1)&&G!==(G=f[0].map(ze).join(", ")+"")&&x(h,G)},i(f){v||(M(n.$$.fragment,f),M(o.$$.fragment,f),M(i.$$.fragment,f),v=!0)},o(f){D(n.$$.fragment,f),D(o.$$.fragment,f),D(i.$$.fragment,f),v=!1},d(f){f&&d(e),T(n),T(o),T(i),f&&d(b),f&&d(S)}}}const hn=l=>l.name,Sn=l=>l.name,He=l=>l.name,ze=({name:l,count:e})=>`${l}s: ${e}`;function bn(l,e,n){const t=[{name:"Left",icon:lt},{name:"Center",icon:ot},{name:"Right",icon:rt},{name:"Justify",icon:at}],s=[{name:"Bold",icon:ht},{name:"Italic",icon:St},{name:"Underline",icon:bt}];let o=[{name:"Link",icon:Et,count:0},{name:"Image",icon:Ct,count:0}],u=t[0],_=[];function i(r){u=r,n(1,u)}function b(r){_=r,n(2,_)}return[o,u,_,t,s,i,b,r=>{r.count++,n(0,o)}]}class En extends ne{constructor(e){super(),se(this,e,bn,pn,le,{})}}function Cn(l){let e,n;return{c(){e=ve("path"),this.h()},l(t){e=ke(t,"path",{fill:!0,d:!0}),W(e).forEach(d),this.h()},h(){z(e,"fill","currentColor"),z(e,"d",n=l[3].icon)},m(t,s){I(t,e,s)},p(t,s){s&8&&n!==(n=t[3].icon)&&z(e,"d",n)},d(t){t&&d(e)}}}function vn(l){let e,n;return e=new Ae({props:{tag:"svg",style:"width: 1em; height: auto;",viewBox:"0 0 24 24",$$slots:{default:[Cn]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&24&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function kn(l){let e,n;return e=new fe({props:{segment:l[3],touch:!0,title:l[3].name,$$slots:{default:[vn]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&8&&(o.segment=t[3]),s&8&&(o.title=t[3].name),s&24&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function An(l){let e,n;return e=new vt({props:{$$slots:{default:[kn]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,s){const o={};s&24&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function In(l){let e,n,t,s,o,u=l[0].name+"",_,i;function b(r){l[2](r)}let S={segments:l[1],singleSelect:!0,key:wn,$$slots:{default:[An,({segment:r})=>({3:r}),({segment:r})=>r?8:0]},$$scope:{ctx:l}};return l[0]!==void 0&&(S.selected=l[0]),e=new re({props:S}),ae.push(()=>me(e,"selected",b)),{c(){R(e.$$.fragment),t=V(),s=J("pre"),o=P("Aligned: "),_=P(u),this.h()},l(r){B(e.$$.fragment,r),t=H(r),s=Q(r,"PRE",{class:!0});var E=W(s);o=O(E,"Aligned: "),_=O(E,u),E.forEach(d),this.h()},h(){z(s,"class","status")},m(r,E){U(e,r,E),I(r,t,E),I(r,s,E),j(s,o),j(s,_),i=!0},p(r,[E]){const $={};E&24&&($.$$scope={dirty:E,ctx:r}),!n&&E&1&&(n=!0,$.selected=r[0],ge(()=>n=!1)),e.$set($),(!i||E&1)&&u!==(u=r[0].name+"")&&x(_,u)},i(r){i||(M(e.$$.fragment,r),i=!0)},o(r){D(e.$$.fragment,r),i=!1},d(r){T(e,r),r&&d(t),r&&d(s)}}}const wn=l=>l.name;function Mn(l,e,n){const t=[{name:"Left",icon:lt},{name:"Center",icon:ot},{name:"Right",icon:rt},{name:"Justify",icon:at}];let s=t[0];function o(u){s=u,n(0,s)}return[s,t,o]}class Dn extends ne{constructor(e){super(),se(this,e,Mn,In,le,{})}}function Rn(l){let e;return{c(){e=P("Single Selection")},l(n){e=O(n,"Single Selection")},m(n,t){I(n,e,t)},d(n){n&&d(e)}}}function Bn(l){let e;return{c(){e=P("Group Selection")},l(n){e=O(n,"Group Selection")},m(n,t){I(n,e,t)},d(n){n&&d(e)}}}function Un(l){let e;return{c(){e=P("Manual Selection")},l(n){e=O(n,"Manual Selection")},m(n,t){I(n,e,t)},d(n){n&&d(e)}}}function Tn(l){let e;return{c(){e=P("Icons and Keyed Segments")},l(n){e=O(n,"Icons and Keyed Segments")},m(n,t){I(n,e,t)},d(n){n&&d(e)}}}function jn(l){let e;return{c(){e=P("Increased Touch Target")},l(n){e=O(n,"Increased Touch Target")},m(n,t){I(n,e,t)},d(n){n&&d(e)}}}function Ln(l){let e,n,t,s,o,u,_,i,b,S,r,E,$,c,m,p,F,G,h,v,a,A,L,K;return m=new ce({props:{component:qt,file:"segmented-button/_SingleSelection.svelte",$$slots:{default:[Rn]},$$scope:{ctx:l}}}),F=new ce({props:{component:yt,file:"segmented-button/_GroupSelection.svelte",$$slots:{default:[Bn]},$$scope:{ctx:l}}}),h=new ce({props:{component:on,file:"segmented-button/_ManualSelection.svelte",$$slots:{default:[Un]},$$scope:{ctx:l}}}),a=new ce({props:{component:En,file:"segmented-button/_IconsKeys.svelte",$$slots:{default:[Tn]},$$scope:{ctx:l}}}),L=new ce({props:{component:Dn,file:"segmented-button/_Touch.svelte",$$slots:{default:[jn]},$$scope:{ctx:l}}}),{c(){e=V(),n=J("section"),t=J("h2"),s=P("Segmented Button"),o=V(),u=J("h5"),_=P("Installation"),i=V(),b=J("pre"),S=P("npm i -D @smui/segmented-button"),r=V(),E=J("h5"),$=P("Demos"),c=V(),R(m.$$.fragment),p=V(),R(F.$$.fragment),G=V(),R(h.$$.fragment),v=V(),R(a.$$.fragment),A=V(),R(L.$$.fragment),this.h()},l(f){dt("svelte-1ofp8hq",document.head).forEach(d),e=H(f),n=Q(f,"SECTION",{});var w=W(n);t=Q(w,"H2",{});var X=W(t);s=O(X,"Segmented Button"),X.forEach(d),o=H(w),u=Q(w,"H5",{});var Z=W(u);_=O(Z,"Installation"),Z.forEach(d),i=H(w),b=Q(w,"PRE",{class:!0});var y=W(b);S=O(y,"npm i -D @smui/segmented-button"),y.forEach(d),r=H(w),E=Q(w,"H5",{});var ee=W(E);$=O(ee,"Demos"),ee.forEach(d),c=H(w),B(m.$$.fragment,w),p=H(w),B(F.$$.fragment,w),G=H(w),B(h.$$.fragment,w),v=H(w),B(a.$$.fragment,w),A=H(w),B(L.$$.fragment,w),w.forEach(d),this.h()},h(){document.title="Segmented Button - SMUI",z(b,"class","demo-spaced")},m(f,k){I(f,e,k),I(f,n,k),j(n,t),j(t,s),j(n,o),j(n,u),j(u,_),j(n,i),j(n,b),j(b,S),j(n,r),j(n,E),j(E,$),j(n,c),U(m,n,null),j(n,p),U(F,n,null),j(n,G),U(h,n,null),j(n,v),U(a,n,null),j(n,A),U(L,n,null),K=!0},p(f,[k]){const w={};k&1&&(w.$$scope={dirty:k,ctx:f}),m.$set(w);const X={};k&1&&(X.$$scope={dirty:k,ctx:f}),F.$set(X);const Z={};k&1&&(Z.$$scope={dirty:k,ctx:f}),h.$set(Z);const y={};k&1&&(y.$$scope={dirty:k,ctx:f}),a.$set(y);const ee={};k&1&&(ee.$$scope={dirty:k,ctx:f}),L.$set(ee)},i(f){K||(M(m.$$.fragment,f),M(F.$$.fragment,f),M(h.$$.fragment,f),M(a.$$.fragment,f),M(L.$$.fragment,f),K=!0)},o(f){D(m.$$.fragment,f),D(F.$$.fragment,f),D(h.$$.fragment,f),D(a.$$.fragment,f),D(L.$$.fragment,f),K=!1},d(f){f&&d(e),f&&d(n),T(m),T(F),T(h),T(a),T(L)}}}class Qn extends ne{constructor(e){super(),se(this,e,null,Ln,le,{})}}export{Qn as component};
