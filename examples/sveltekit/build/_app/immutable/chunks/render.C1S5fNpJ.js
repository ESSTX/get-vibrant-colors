import{l as Y,G as B,I as C,J as b,K as E,L as H,M as I,N as O,O as m,P,Q as q,R as $,S,C as w,B as D,z as j,y,T as z,U as G,V as J,W as K,X as Q,Y as U,Z as X,v as Z,p as F,x as L,i as x,c as rr}from"./runtime.XYFuaPiZ.js";import{b as tr}from"./disclose-version.S7SXxHOS.js";const V=new Set,N=new Set;function er(r,t,a,o){function s(e){if(o.capture||p.call(t,e),!e.cancelBubble){var f=I,d=O;b(null),E(null);try{return a.call(this,e)}finally{b(f),E(d)}}}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?B(()=>{t.addEventListener(r,s,o)}):t.addEventListener(r,s,o),s}function fr(r,t,a,o,s){var e={capture:o,passive:s},f=er(r,t,a,e);(t===document.body||t===window||t===document)&&Y(()=>{t.removeEventListener(r,f,e)})}function ur(r){for(var t=0;t<r.length;t++)V.add(r[t]);for(var a of N)a(r)}function p(r){var A;var t=this,a=t.ownerDocument,o=r.type,s=((A=r.composedPath)==null?void 0:A.call(r))||[],e=s[0]||r.target,f=0,d=r.__root;if(d){var c=s.indexOf(d);if(c!==-1&&(t===document||t===window)){r.__root=t;return}var _=s.indexOf(t);if(_===-1)return;c<=_&&(f=c)}if(e=s[f]||r.target,e!==t){C(r,"currentTarget",{configurable:!0,get(){return e||a}});var T=I,u=O;b(null),E(null);try{for(var n,i=[];e!==null;){var l=e.assignedSlot||e.parentNode||e.host||null;try{var h=e["__"+o];if(h!==void 0&&!e.disabled)if(H(h)){var[M,...W]=h;M.apply(e,[r,...W])}else h.call(e,r)}catch(g){n?i.push(g):n=g}if(r.cancelBubble||l===t||l===null)break;e=l}if(n){for(let g of i)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=t,delete r.currentTarget,b(T),E(u)}}}const ar=["touchstart","touchmove"];function nr(r){return ar.includes(r)}function lr(r,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a==null?"":a+"")}function sr(r,t){return k(r,t)}function dr(r,t){m(),t.intro=t.intro??!1;const a=t.target,o=L,s=y;try{for(var e=P(a);e&&(e.nodeType!==8||e.data!==q);)e=$(e);if(!e)throw S;w(!0),D(e),j();const f=k(r,{...t,anchor:e});if(y===null||y.nodeType!==8||y.data!==z)throw G(),S;return w(!1),f}catch(f){if(f===S)return t.recover===!1&&J(),m(),K(a),w(!1),sr(r,t);throw f}finally{w(o),D(s)}}const v=new Map;function k(r,{target:t,anchor:a,props:o={},events:s,context:e,intro:f=!0}){m();var d=new Set,c=u=>{for(var n=0;n<u.length;n++){var i=u[n];if(!d.has(i)){d.add(i);var l=nr(i);t.addEventListener(i,p,{passive:l});var h=v.get(i);h===void 0?(document.addEventListener(i,p,{passive:l}),v.set(i,1)):v.set(i,h+1)}}};c(Q(V)),N.add(c);var _=void 0,T=U(()=>{var u=a??t.appendChild(X());return Z(()=>{if(e){F({});var n=rr;n.c=e}s&&(o.$$events=s),L&&tr(u,null),_=r(u,o)||{},L&&(O.nodes_end=y),e&&x()}),()=>{var l;for(var n of d){t.removeEventListener(n,p);var i=v.get(n);--i===0?(document.removeEventListener(n,p),v.delete(n)):v.set(n,i)}N.delete(c),R.delete(_),u!==a&&((l=u.parentNode)==null||l.removeChild(u))}});return R.set(_,T),_}let R=new WeakMap;function cr(r){const t=R.get(r);t&&t()}export{ur as d,fr as e,dr as h,sr as m,lr as s,cr as u};
