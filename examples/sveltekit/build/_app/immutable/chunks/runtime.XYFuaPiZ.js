var Rn=Array.isArray,Sn=Array.from,Dn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,gn=Object.prototype,xn=Array.prototype,$t=Object.getPrototypeOf;const On=()=>{};function Nn(t){return t()}function vt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,pt=4,L=8,rt=16,E=32,Z=64,S=128,U=256,p=512,I=1024,Y=2048,O=4096,j=8192,Zt=16384,ht=32768,Cn=65536,zt=1<<18,dt=1<<19,it=Symbol("$state"),bn=Symbol("");function Et(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function yt(t){return!Wt(t,this.v)}function Xt(t){throw new Error("effect_in_teardown")}function Jt(){throw new Error("effect_in_unowned_derived")}function Qt(t){throw new Error("effect_orphan")}function tn(){throw new Error("effect_update_depth_exceeded")}function qn(){throw new Error("hydration_failed")}function Pn(t){throw new Error("props_invalid_value")}function Fn(){throw new Error("state_descriptors_fixed")}function Mn(){throw new Error("state_prototype_fixed")}function nn(){throw new Error("state_unsafe_local_read")}function rn(){throw new Error("state_unsafe_mutation")}function et(t){return{f:0,v:t,reactions:null,equals:Et,version:0}}function Ln(t){return wt(et(t))}function en(t,n=!1){var e;const r=et(t);return n||(r.equals=yt),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Yn(t,n=!1){return wt(en(t,n))}function wt(t){return o!==null&&o.f&T&&(d===null?yn([t]):d.push(t)),t}function jn(t,n){return o!==null&&at()&&o.f&(T|rt)&&(d===null||!d.includes(t))&&rn(),sn(t,n)}function sn(t,n){return t.equals(n)||(t.v=n,t.version=jt(),Tt(t,I),at()&&u!==null&&u.f&p&&!(u.f&E)&&(_!==null&&_.includes(t)?(y(u,I),W(u)):k===null?wn([t]):k.push(t))),n}function Tt(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&I||!e&&a===u||(y(a,n),i&(p|S)&&(i&T?Tt(a,Y):W(a)))}}const Hn=1,Bn=2,Un=16,Vn=1,Gn=2,Kn=4,$n=8,Zn=16,zn=1,Wn=2,ln="[",an="[!",un="]",mt={},Xn=Symbol();function At(t){console.warn("hydration_mismatch")}let N=!1;function Jn(t){N=t}let m;function P(t){if(t===null)throw At(),mt;return m=t}function Qn(){return P(C(m))}function tr(t){if(N){if(C(m)!==null)throw At(),mt;m=t}}function nr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===an)&&(t+=1)}var e=C(n);n.remove(),n=e}}var ft,kt,It;function rr(){if(ft===void 0){ft=window;var t=Element.prototype,n=Node.prototype;kt=ot(n,"firstChild").get,It=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return kt.call(t)}function C(t){return It.call(t)}function er(t,n){if(!N)return J(t);var r=J(m);if(r===null)r=m.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),P(e),e}return P(r),r}function sr(t,n){if(!N){var r=J(t);return r instanceof Comment&&r.data===""?C(r):r}return m}function lr(t,n=1,r=!1){let e=N?m:t;for(;n--;)e=C(e);if(!N)return e;var s=e.nodeType;if(r&&s!==3){var l=X();return e==null||e.before(l),P(l),l}return P(e),e}function ar(t){t.textContent=""}function on(t){var n=T|I;u===null?n|=S:u.f|=dt;const r={children:null,ctx:f,deps:null,equals:Et,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&T){var e=o;(e.children??(e.children=[])).push(r)}return r}function ur(t){const n=on(t);return n.equals=yt,n}function Rt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?st(e):q(e)}}}function St(t){var n,r=u;$(t.parent);try{Rt(t),n=Ht(t)}finally{$(r)}return n}function Dt(t){var n=St(t),r=(D||t.f&S)&&t.deps!==null?Y:p;y(t,r),t.equals(n)||(t.v=n,t.version=jt())}function st(t){Rt(t),M(t,0),y(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function gt(t){u===null&&o===null&&Qt(),o!==null&&o.f&S&&Jt(),lt&&Xt()}function fn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&Z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=g;try{_t(!0),z(a),a.f|=Zt}catch(c){throw q(a),c}finally{_t(i)}}else n!==null&&W(a);var w=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&dt)===0;if(!w&&!s&&e&&(l!==null&&fn(a,l),o!==null&&o.f&T)){var A=o;(A.children??(A.children=[])).push(a)}return a}function or(t){const n=b(L,null,!1);return y(n,p),n.teardown=t,n}function ir(t){gt();var n=u!==null&&(u.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=xt(t);return e}}function fr(t){return gt(),_n(t)}function _r(t){const n=b(Z,t,!0);return()=>{q(n)}}function xt(t){return b(pt,t,!1)}function _n(t){return b(L,t,!0)}function cr(t){return cn(t)}function cn(t,n=0){return b(L|rt|n,t,!0)}function vr(t,n=!0){return b(L|E,t,!0,n)}function Ot(t){var n=t.teardown;if(n!==null){const r=lt,e=o;ct(!0),K(null);try{n.call(null)}finally{ct(r),K(e)}}}function Nt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)st(n[r])}}function Ct(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;q(r,n),r=e}}function vn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||q(n),n=r}}function q(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:C(e);e.remove(),e=l}r=!0}Ct(t,n&&!r),Nt(t),M(t,0),y(t,j);var a=t.transitions;if(a!==null)for(const w of a)w.stop();Ot(t);var i=t.parent;i!==null&&i.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function pr(t,n){var r=[];qt(t,r,!0),pn(r,()=>{q(t),n&&n()})}function pn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function qt(t,n,r){if(!(t.f&O)){if(t.f^=O,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&ht)!==0||(e.f&E)!==0;qt(e,n,l?r:!1),e=s}}}function hr(t){Pt(t,!0)}function Pt(t,n){if(t.f&O){H(t)&&z(t),t.f^=O;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ht)!==0||(r.f&E)!==0;Pt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const hn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,Q=[],tt=[];function Ft(){V=!1;const t=Q.slice();Q=[],vt(t)}function Mt(){G=!1;const t=tt.slice();tt=[],vt(t)}function dr(t){V||(V=!0,queueMicrotask(Ft)),Q.push(t)}function Er(t){G||(G=!0,hn(Mt)),tt.push(t)}function dn(){V&&Ft(),G&&Mt()}const Lt=0,En=1;let B=Lt,F=!1,g=!1,lt=!1;function _t(t){g=t}function ct(t){lt=t}let R=[],x=0;let o=null;function K(t){o=t}let u=null;function $(t){u=t}let d=null;function yn(t){d=t}let _=null,h=0,k=null;function wn(t){k=t}let Yt=0,D=!1,f=null;function jt(){return++Yt}function at(){return f!==null&&f.l===null}function H(t){var a,i;var n=t.f;if(n&I)return!0;if(n&Y){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&Dt(l),e&&u!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||y(t,p)}return!1}function Tn(t,n,r){throw t}function Ht(t){var ut;var n=_,r=h,e=k,s=o,l=D,a=d,i=f,w=t.f;_=null,h=0,k=null,o=w&(E|Z)?null:t,D=!g&&(w&S)!==0,d=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(M(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((ut=c[v]).reactions??(ut.reactions=[])).push(t)}else c!==null&&h<c.length&&(M(t,h),c.length=h);return A}finally{_=n,h=r,k=e,o=s,D=l,d=a,f=i}}function mn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(y(n,Y),n.f&(S|U)||(n.f^=U),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)mn(t,r[e])}function z(t){var n=t.f;if(!(n&j)){y(t,p);var r=u;u=t;try{n&rt?vn(t):Ct(t),Nt(t),Ot(t);var e=Ht(t);t.teardown=typeof e=="function"?e:null,t.version=Yt}catch(s){Tn(s)}finally{u=r}}}function Bt(){x>1e3&&(x=0,tn()),x++}function Ut(t){var n=t.length;if(n!==0){Bt();var r=g;g=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Vt(s,l),An(l)}}finally{g=r}}}function An(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|O))&&H(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}}function kn(){if(F=!1,x>1001)return;const t=R;R=[],Ut(t),F||(x=0)}function W(t){B===Lt&&(F||(F=!0,queueMicrotask(kn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|E)){if(!(r&p))return;n.f^=p}}R.push(n)}function Vt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&E)!==0,a=l&&(s&p)!==0;if(!a&&!(s&O))if(s&L){l?r.f^=p:H(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&pt&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Vt(i,n)}function Gt(t){var n=B,r=R;try{Bt();const s=[];B=En,R=s,F=!1,Ut(r);var e=t==null?void 0:t();return dn(),(R.length>0||s.length>0)&&Gt(),x=0,e}finally{B=n,R=r}}async function yr(){await Promise.resolve(),Gt()}function wr(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=St(t);return st(t),e}if(o!==null){d!==null&&d.includes(t)&&nn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),k!==null&&u!==null&&u.f&p&&!(u.f&E)&&k.includes(t)&&(y(u,I),W(u))}else if(r&&t.deps===null){var l=t,a=l.parent;a!==null&&!((i=a.deriveds)!=null&&i.includes(l))&&(a.deriveds??(a.deriveds=[])).push(l)}return r&&(l=t,H(l)&&Dt(l)),t.v}function Tr(t){const n=o;try{return o=null,t()}finally{o=n}}const In=~(I|Y|p);function y(t,n){t.f=t.f&In|n}function mr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:et(!1)})}function Ar(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];$(l.effect),K(l.reaction),xt(l.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(it in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&it in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{Wn as $,nr as A,P as B,Jn as C,hr as D,ht as E,pr as F,dr as G,an as H,Dn as I,K as J,$ as K,Rn as L,o as M,u as N,rr as O,J as P,ln as Q,C as R,mt as S,un as T,At as U,qn as V,ar as W,Sn as X,_r as Y,X as Z,zn as _,ir as a,O as a0,sn as a1,Hn as a2,Un as a3,et as a4,Bn as a5,qt as a6,pn as a7,Er as a8,bn as a9,Ln as aA,Wt as aB,$t as aa,Kt as ab,at as ac,_n as ad,Yn as ae,it as af,gn as ag,xn as ah,Fn as ai,Xn as aj,ot as ak,Mn as al,xt as am,Pn as an,Cn as ao,Kn as ap,yt as aq,E as ar,Z as as,Vn as at,Gn as au,$n as av,ur as aw,Zn as ax,Gt as ay,yr as az,Tr as b,f as c,Nn as d,kr as e,on as f,wr as g,sr as h,Ar as i,er as j,tr as k,or as l,en as m,On as n,jn as o,mr as p,cn as q,vt as r,lr as s,cr as t,fr as u,vr as v,q as w,N as x,m as y,Qn as z};
