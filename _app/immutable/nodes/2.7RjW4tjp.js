import{a as ne,t as oe}from"../chunks/disclose-version.S7SXxHOS.js";import{Z as at,q as rt,x as S,B as we,z as nt,L as st,X as Oe,H as lt,A as Ae,C as ye,y as ee,a0 as le,D as We,v as Ye,F as ot,N as Ie,a1 as it,a2 as ct,a3 as ft,m as ut,a4 as Ne,a5 as vt,a6 as dt,W as ht,a7 as _t,w as pt,P as xt,T as gt,M as mt,R as wt,a8 as yt,a9 as bt,aa as $e,ab as kt,ac as Ct,ad as Fe,p as Mt,h as Et,t as se,i as Tt,o as C,g as l,ae as H,s as b,j as y,k as m}from"../chunks/runtime.XYFuaPiZ.js";import{d as At,e as Le,s as G}from"../chunks/render.C1S5fNpJ.js";import{o as It,i as Nt}from"../chunks/index-client.C-tXikqD.js";import{i as $t}from"../chunks/lifecycle.CPE3irPv.js";let be=null;function Lt(t,e,a,r){for(var n=[],f=e.length,v=0;v<f;v++)dt(e[v].e,n,!0);var p=f>0&&n.length===0&&a!==null;if(p){var g=a.parentNode;ht(g),g.append(a),r.clear(),X(t,e[0].prev,e[f-1].next)}_t(n,()=>{for(var x=0;x<f;x++){var s=e[x];p||(r.delete(s.k),X(t,s.prev,s.next)),pt(s.e,!p)}})}function De(t,e,a,r,n,f=null){var v=t,p={flags:e,items:new Map,first:null};{var g=t;v=S?we(xt(g)):g.appendChild(at())}S&&nt();var x=null,s=!1;rt(()=>{var d=a(),i=st(d)?d:d==null?[]:Oe(d),u=i.length;if(s&&u===0)return;s=u===0;let c=!1;if(S){var M=v.data===lt;M!==(u===0)&&(v=Ae(),we(v),ye(!1),c=!0)}if(S){for(var A=null,h,w=0;w<u;w++){if(ee.nodeType===8&&ee.data===gt){v=ee,c=!0,ye(!1);break}var R=i[w],I=r(R,w);h=Ve(ee,p,A,null,R,I,w,n,e),p.items.set(I,h),A=h}u>0&&we(Ae())}if(!S){var k=mt;Dt(i,p,v,n,e,(k.f&le)!==0,r)}f!==null&&(u===0?x?We(x):x=Ye(()=>f(v)):x!==null&&ot(x,()=>{x=null})),c&&ye(!0),a()}),S&&(v=ee)}function Dt(t,e,a,r,n,f,v){var p=t.length,g=e.items,x=e.first,s=x,d,i=null,u=[],c=[],M,A,h,w;for(w=0;w<p;w+=1){if(M=t[w],A=v(M,w),h=g.get(A),h===void 0){var R=s?s.e.nodes_start:a;i=Ve(R,e,i,i===null?e.first:i.next,M,A,w,r,n),g.set(A,i),u=[],c=[],s=i.next;continue}if(Rt(h,M,w),h.e.f&le&&We(h.e),h!==s){if(d!==void 0&&d.has(h)){if(u.length<c.length){var I=c[0],k;i=I.prev;var q=u[0],P=u[u.length-1];for(k=0;k<u.length;k+=1)Re(u[k],I,a);for(k=0;k<c.length;k+=1)d.delete(c[k]);X(e,q.prev,P.next),X(e,i,q),X(e,P,I),s=I,i=P,w-=1,u=[],c=[]}else d.delete(h),Re(h,s,a),X(e,h.prev,h.next),X(e,h,i===null?e.first:i.next),X(e,i,h),i=h;continue}for(u=[],c=[];s!==null&&s.k!==A;)(f||!(s.e.f&le))&&(d??(d=new Set)).add(s),c.push(s),s=s.next;if(s===null)continue;h=s}u.push(h),i=h,s=h.next}if(s!==null||d!==void 0){for(var B=d===void 0?[]:Oe(d);s!==null;)(f||!(s.e.f&le))&&B.push(s),s=s.next;var N=B.length;if(N>0){var $=p===0?a:null;Lt(e,B,$,g)}}Ie.first=e.first&&e.first.e,Ie.last=i&&i.e}function Rt(t,e,a,r){it(t.v,e),t.i=a}function Ve(t,e,a,r,n,f,v,p,g){var x=be;try{var s=(g&ct)!==0,d=(g&ft)===0,i=s?d?ut(n):Ne(n):n,u=g&vt?Ne(v):v,c={i:u,v:i,k:f,a:null,e:null,prev:a,next:r};return be=c,c.e=Ye(()=>p(t,i,u),S),c.e.prev=a&&a.e,c.e.next=r&&r.e,a===null?e.first=c:(a.next=c,a.e.next=c.e),r!==null&&(r.prev=c,r.e.prev=c.e),c}finally{be=x}}function Re(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,n=e?e.e.nodes_start:a,f=t.e.nodes_start;f!==r;){var v=wt(f);n.before(f),f=v}}function X(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}let He=!1;function Xe(){He||(He=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const a of t.target.elements)(e=a.__on_r)==null||e.call(a)})},{capture:!0}))}function J(t){if(S){var e=!1,a=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;ae(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var n=t.checked;ae(t,"checked",null),t.checked=n}}};t.__on_r=a,yt(a),Xe()}}function ae(t,e,a,r){var n=t.__attributes??(t.__attributes={});S&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[bt]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Ht(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var Se=new Map;function Ht(t){var e=Se.get(t.nodeName);if(e)return e;Se.set(t.nodeName,e=[]);for(var a,r=$e(t),n=Element.prototype;n!==r;){a=kt(r);for(var f in a)a[f].set&&e.push(f);r=$e(r)}return e}function Pe(t,e,a,r=a){t.addEventListener(e,a);const n=t.__on_r;n?t.__on_r=()=>{n(),r()}:t.__on_r=r,Xe()}function te(t,e,a=e){var r=Ct();Pe(t,"input",()=>{var n=qe(t)?Be(t.value):t.value;a(n),r&&n!==(n=e())&&(t.value=n??"")}),Fe(()=>{var n=e();if(S&&t.defaultValue!==t.value){a(t.value);return}qe(t)&&n===Be(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function St(t,e,a=e){Pe(t,"change",()=>{var r=t.checked;a(r)}),e()==null&&a(!1),Fe(()=>{var r=e();t.checked=!!r})}function qe(t){var e=t.type;return e==="number"||e==="range"}function Be(t){return t===""?null:+t}async function qt(t,e=5,a=.1,r=60,n="hex",f=!1,v=0,p=6){const g=performance.now();return new Promise((x,s)=>{const d=new Image;d.crossOrigin="anonymous",d.src=t,d.onload=()=>{const i=document.createElement("canvas"),u=i.getContext("2d");if(!u)return s(new Error("Unable to obtain canvas context"));i.width=d.width*a,i.height=d.height*a,u.drawImage(d,0,0,i.width,i.height);try{const c=u.getImageData(0,0,i.width,i.height),M=new Map;let A=!0,h=0;const w=30,R=i.width/p,I=i.height/p;for(let N=0;N<p;N++)for(let $=0;$<p;$++){if(v>0&&($+N)%(v+1)===0)continue;const re=Math.floor(($+.5)*R),Q=(Math.floor((N+.5)*I)*i.width+re)*4,O=c.data[Q],W=c.data[Q+1],Y=c.data[Q+2];if(Bt(O,W,Y))continue;A=!1;const j=Ot(O,W,Y),K=Wt(O,W,Y),Z=Yt(O,W,Y);Z<r||f&&K<60||(K<w&&h++,M.has(j)?M.get(j).count++:M.set(j,{count:1,brightness:K,saturation:Z}))}if(A)return s(new Error("Image is fully grayscale"));h>100&&(v+=1);const k=Array.from(M.entries()).sort((N,$)=>$[1].brightness-N[1].brightness||$[1].count-N[1].count),q=Ft(k,e,n),B=performance.now()-g;x({colors:q,time:B})}catch{s(new Error("Canvas was tainted by cross-origin data"))}},d.onerror=()=>{s(new Error("Image loading failed"))}})}function Bt(t,e,a){return t===0&&e===0&&a===0||t>200&&e>200&&a>200||Math.abs(t-e)<=10&&Math.abs(t-a)<=10&&Math.abs(e-a)<=10}function Ot(t,e,a){return`#${((1<<24)+(t<<16)+(e<<8)+a).toString(16).slice(1).toUpperCase()}`}function Wt(t,e,a){return .299*t+.587*e+.114*a}function Yt(t,e,a){const r=Math.max(t,e,a),n=Math.min(t,e,a);return r===0?0:(r-n)/r*100}function Ft(t,e,a){const r=[],f=new Set;for(const[v]of t){if(r.length>=e)break;if(f.has(v))continue;const[p,g,x]=ke(v);let s=!0;for(const d of r){const[i,u,c]=ke(d);if(Math.sqrt(Math.pow(p-i,2)+Math.pow(g-u,2)+Math.pow(x-c,2))<100){s=!1;break}}s&&(r.push(Vt(v,a)),f.add(v))}return r}function ke(t){const e=parseInt(t.slice(1),16),a=e>>16&255,r=e>>8&255,n=e&255;return[a,r,n]}function Vt(t,e){if(e==="hex")return t;if(e==="rgb"){const[a,r,n]=ke(t);return`rgb(${a}, ${r}, ${n})`}return t}function Xt(t,e,a,r){C(e,(l(e)+1)%a.length),r(a[l(e)])}var Pt=oe('<div class="light svelte-1sbwrpy"></div>'),Ut=oe('<div class="absolute text-white text-xs" style="top: -20px; left: 50%; transform: translateX(-50%);"> </div>'),Gt=oe('<div class="h-full flex-1 transition-all" role="button" tabindex="0"><!></div>'),Kt=(t,e,a,r,n,f)=>e(a[l(r)],l(n),l(f)),Zt=(t,e,a,r,n,f)=>e(a[l(r)],l(n),l(f)),Jt=(t,e,a,r,n,f)=>e(a[l(r)],l(n),l(f)),Qt=(t,e,a,r)=>e(a[l(r)]),jt=oe('<div></div> <main class="flex flex-col items-center justify-center w-full h-full"><div class="h-screen flex flex-col items-center justify-center page backdrop-blur-3xl svelte-1sbwrpy" style="	width: 40rem;"><header class="w-full h-16 flex flex-col items-center justify-center"><h1 class="text-3xl font-bold text-white">get-vibrant-colors</h1></header> <content class="w-full h-full flex flex-col items-center justify-center"><div class="h-8 flex flex-row w-full relative"></div> <div class="w-full bg-no-repeat bg-center bg-contain"></div> <p class="text-white"> </p></content> <controls class="w-full h-auto flex flex-col items-center justify-center"><div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1sbwrpy" min="1" max="20"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1sbwrpy" step="0.01" min="0.01" max="1"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1sbwrpy" min="0" max="100"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1sbwrpy" min="0" max="10"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1sbwrpy" min="1" max="100"></div> <div class="w-full flex flex-col items-start"><p class="text-white">Skip Dark Colors:</p> <input type="checkbox" class="w-full"></div> <button class="text-lg cursor-pointer bg-gray-900 text-white border-none hover:bg-gray-700 w-full h-full">Apply</button></controls> <footer class="w-full h-16 flex flex-col items-center justify-center"><button class="text-lg cursor-pointer bg-gray-900 text-white border-none hover:bg-gray-700 w-full h-full">Next image</button></footer></div></main>',1);function na(t,e){Mt(e,!1);let a=["./images/example1","./images/example2","./images/example3","./images/example4","./images/example5","./images/example6","./images/example7","./images/example8","./images/example9","./images/example10"],r=H([]),n=H(0),f=H([]),v=H(0),p="",g=H(null),x=H(5),s=H(.1),d=H(60),i=H(!1),u=H(0),c=H(6);function M(o,_){return{id:o,x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,dx:(Math.random()-.5)*.5,dy:(Math.random()-.5)*.5,color:_}}function A(o,_){C(r,Array.from({length:o},(L,D)=>M(D,_[D%_.length])))}function h(){C(r,l(r).map(o=>(o.x+=o.dx,o.y+=o.dy,(o.x<0||o.x>window.innerWidth)&&(o.dx*=-1),(o.y<0||o.y>window.innerHeight)&&(o.dy*=-1),o)))}function w(){h(),requestAnimationFrame(w)}function R(o,_,L){o==="./images/example7"&&(o="./images/example7_");const D=new Image;D.crossOrigin="anonymous",D.src=o,D.onload=()=>{const E=document.createElement("canvas"),T=E.getContext("2d");if(!T){console.error("Unable to obtain canvas context for debug drawing");return}E.width=D.width*L,E.height=D.height*L,T.drawImage(D,0,0,E.width,E.height);const U=E.width/_,z=E.height/_;T.strokeStyle="red",T.lineWidth=1;const je=(F,V,ze)=>{T.strokeStyle=ze,T.strokeRect(F*U,V*z,U,z);const et=Math.floor((F+.5)*U),tt=Math.floor((V+.5)*z);T.fillStyle="white",T.fillRect(et,tt,1,1)};for(let F=0;F<_;(F+=1)-1)for(let V=0;V<_;(V+=1)-1)l(u)>0&&(V+F)%(l(u)+1)===0?(T.fillStyle="red",T.fillRect(V*U,F*z,U,z)):je(V,F,"blue");const Te=document.getElementById("debugCanvas");Te&&document.body.removeChild(Te),E.id="debugCanvas",E.style.position="fixed",E.style.left="0",E.style.top="0",document.body.appendChild(E)},D.onerror=()=>{console.error("Image loading failed for debug drawing")}}async function I(o){try{const _=await qt(o,l(x),l(s),l(d),"hex",l(i),l(u),l(c));C(f,_.colors),C(v,_.time),p="",A(20,l(f)),R(o,l(c),l(s))}catch(_){_ instanceof Error?p="Failed to get vibrant colors: "+_.message:p="Failed to get vibrant colors: Unknown error",C(f,[]),C(r,[])}}It(()=>{I(a[l(n)]),w()}),$t();var k=jt(),q=Et(k);De(q,5,()=>l(r),o=>o.id,(o,_)=>{var L=Pt();se(()=>ae(L,"style",`left: ${l(_).x??""}px; top: ${l(_).y??""}px; box-shadow: 0px 0px 350px 225px ${l(_).color??""};`)),ne(o,L)}),m(q);var P=b(q,2),B=y(P),N=b(y(B),2),$=y(N);De($,5,()=>l(f),o=>o,(o,_)=>{var L=Gt(),D=y(L);Nt(D,()=>l(g)===l(_),E=>{var T=Ut(),U=y(T,!0);m(T),se(()=>G(U,l(_))),ne(E,T)}),m(L),se(()=>ae(L,"style",`background-color: ${l(_)??""};`)),Le("mouseenter",L,()=>C(g,l(_))),Le("mouseleave",L,()=>C(g,null)),ne(o,L)}),m($);var re=b($,2),ie=b(re,2),Q=y(ie);m(ie),m(N);var O=b(N,2),W=y(O),Y=y(W),j=y(Y);m(Y);var K=b(Y,2);J(K),m(W);var Z=b(W,2),ce=y(Z),Ue=y(ce);m(ce);var fe=b(ce,2);J(fe),fe.__input=[Kt,R,a,n,c,s],m(Z);var ue=b(Z,2),ve=y(ue),Ge=y(ve);m(ve);var Ce=b(ve,2);J(Ce),m(ue);var de=b(ue,2),he=y(de),Ke=y(he);m(he);var _e=b(he,2);J(_e),_e.__input=[Zt,R,a,n,c,s],m(de);var pe=b(de,2),xe=y(pe),Ze=y(xe);m(xe);var ge=b(xe,2);J(ge),ge.__input=[Jt,R,a,n,c,s],m(pe);var me=b(pe,2),Me=b(y(me),2);J(Me),m(me);var Je=b(me,2);Je.__click=[Qt,I,a,n],m(O);var Ee=b(O,2),Qe=y(Ee);Qe.__click=[Xt,n,a,I],m(Ee),m(B),m(P),se(()=>{ae(re,"style",`background-image: url(${a[l(n)]??""}); height: 40rem;`),G(Q,`Time taken: ${l(v)??""}ms`),G(j,`Max Colors: ${l(x)??""}`),G(Ue,`Sample Scale: ${l(s)??""}`),G(Ge,`Saturation Level: ${l(d)??""}`),G(Ke,`Skip every N tile: ${l(u)??""}`),G(Ze,`Grid Size: ${l(c)??""}`)}),te(K,()=>l(x),o=>C(x,o)),te(fe,()=>l(s),o=>C(s,o)),te(Ce,()=>l(d),o=>C(d,o)),te(_e,()=>l(u),o=>C(u,o)),te(ge,()=>l(c),o=>C(c,o)),St(Me,()=>l(i),o=>C(i,o)),ne(t,k),Tt()}At(["input","click"]);export{na as component};
