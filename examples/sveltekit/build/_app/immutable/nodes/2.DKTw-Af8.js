import{a as ne,t as le}from"../chunks/disclose-version.S7SXxHOS.js";import{Z as et,q as tt,x as R,B as we,z as at,L as rt,X as Oe,H as nt,A as Ie,C as ye,y as ee,a0 as oe,D as Pe,v as We,F as st,N as Ae,a1 as ot,a2 as lt,a3 as it,m as ct,a4 as Ne,a5 as ft,a6 as ut,W as vt,a7 as dt,w as ht,P as _t,T as pt,M as xt,R as gt,a8 as mt,a9 as wt,aa as $e,ab as yt,ac as bt,ad as Ye,p as kt,h as Ct,t as se,i as Mt,o as M,g as o,ae as H,s as b,j as y,k as m}from"../chunks/runtime.XYFuaPiZ.js";import{d as Et,e as Le,s as X}from"../chunks/render.C1S5fNpJ.js";import{o as Tt,i as It}from"../chunks/index-client.C-tXikqD.js";import{i as At}from"../chunks/lifecycle.CPE3irPv.js";let be=null;function Nt(t,e,a,r){for(var n=[],f=e.length,v=0;v<f;v++)ut(e[v].e,n,!0);var p=f>0&&n.length===0&&a!==null;if(p){var g=a.parentNode;vt(g),g.append(a),r.clear(),Y(t,e[0].prev,e[f-1].next)}dt(n,()=>{for(var x=0;x<f;x++){var s=e[x];p||(r.delete(s.k),Y(t,s.prev,s.next)),ht(s.e,!p)}})}function De(t,e,a,r,n,f=null){var v=t,p={flags:e,items:new Map,first:null};{var g=t;v=R?we(_t(g)):g.appendChild(et())}R&&at();var x=null,s=!1;tt(()=>{var d=a(),i=rt(d)?d:d==null?[]:Oe(d),u=i.length;if(s&&u===0)return;s=u===0;let c=!1;if(R){var E=v.data===nt;E!==(u===0)&&(v=Ie(),we(v),ye(!1),c=!0)}if(R){for(var I=null,h,w=0;w<u;w++){if(ee.nodeType===8&&ee.data===pt){v=ee,c=!0,ye(!1);break}var S=i[w],A=r(S,w);h=Fe(ee,p,I,null,S,A,w,n,e),p.items.set(A,h),I=h}u>0&&we(Ie())}if(!R){var C=xt;$t(i,p,v,n,e,(C.f&oe)!==0,r)}f!==null&&(u===0?x?Pe(x):x=We(()=>f(v)):x!==null&&st(x,()=>{x=null})),c&&ye(!0),a()}),R&&(v=ee)}function $t(t,e,a,r,n,f,v){var p=t.length,g=e.items,x=e.first,s=x,d,i=null,u=[],c=[],E,I,h,w;for(w=0;w<p;w+=1){if(E=t[w],I=v(E,w),h=g.get(I),h===void 0){var S=s?s.e.nodes_start:a;i=Fe(S,e,i,i===null?e.first:i.next,E,I,w,r,n),g.set(I,i),u=[],c=[],s=i.next;continue}if(Lt(h,E,w),h.e.f&oe&&Pe(h.e),h!==s){if(d!==void 0&&d.has(h)){if(u.length<c.length){var A=c[0],C;i=A.prev;var q=u[0],F=u[u.length-1];for(C=0;C<u.length;C+=1)Se(u[C],A,a);for(C=0;C<c.length;C+=1)d.delete(c[C]);Y(e,q.prev,F.next),Y(e,i,q),Y(e,F,A),s=A,i=F,w-=1,u=[],c=[]}else d.delete(h),Se(h,s,a),Y(e,h.prev,h.next),Y(e,h,i===null?e.first:i.next),Y(e,i,h),i=h;continue}for(u=[],c=[];s!==null&&s.k!==I;)(f||!(s.e.f&oe))&&(d??(d=new Set)).add(s),c.push(s),s=s.next;if(s===null)continue;h=s}u.push(h),i=h,s=h.next}if(s!==null||d!==void 0){for(var B=d===void 0?[]:Oe(d);s!==null;)(f||!(s.e.f&oe))&&B.push(s),s=s.next;var N=B.length;if(N>0){var $=p===0?a:null;Nt(e,B,$,g)}}Ae.first=e.first&&e.first.e,Ae.last=i&&i.e}function Lt(t,e,a,r){ot(t.v,e),t.i=a}function Fe(t,e,a,r,n,f,v,p,g){var x=be;try{var s=(g&lt)!==0,d=(g&it)===0,i=s?d?ct(n):Ne(n):n,u=g&ft?Ne(v):v,c={i:u,v:i,k:f,a:null,e:null,prev:a,next:r};return be=c,c.e=We(()=>p(t,i,u),R),c.e.prev=a&&a.e,c.e.next=r&&r.e,a===null?e.first=c:(a.next=c,a.e.next=c.e),r!==null&&(r.prev=c,r.e.prev=c.e),c}finally{be=x}}function Se(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,n=e?e.e.nodes_start:a,f=t.e.nodes_start;f!==r;){var v=gt(f);n.before(f),f=v}}function Y(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}let He=!1;function Ve(){He||(He=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const a of t.target.elements)(e=a.__on_r)==null||e.call(a)})},{capture:!0}))}function J(t){if(R){var e=!1,a=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;ae(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var n=t.checked;ae(t,"checked",null),t.checked=n}}};t.__on_r=a,mt(a),Ve()}}function ae(t,e,a,r){var n=t.__attributes??(t.__attributes={});R&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[wt]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Dt(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var Re=new Map;function Dt(t){var e=Re.get(t.nodeName);if(e)return e;Re.set(t.nodeName,e=[]);for(var a,r=$e(t),n=Element.prototype;n!==r;){a=yt(r);for(var f in a)a[f].set&&e.push(f);r=$e(r)}return e}function Xe(t,e,a,r=a){t.addEventListener(e,a);const n=t.__on_r;n?t.__on_r=()=>{n(),r()}:t.__on_r=r,Ve()}function te(t,e,a=e){var r=bt();Xe(t,"input",()=>{var n=qe(t)?Be(t.value):t.value;a(n),r&&n!==(n=e())&&(t.value=n??"")}),Ye(()=>{var n=e();if(R&&t.defaultValue!==t.value){a(t.value);return}qe(t)&&n===Be(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function St(t,e,a=e){Xe(t,"change",()=>{var r=t.checked;a(r)}),e()==null&&a(!1),Ye(()=>{var r=e();t.checked=!!r})}function qe(t){var e=t.type;return e==="number"||e==="range"}function Be(t){return t===""?null:+t}async function Ht(t,e=5,a=.1,r=60,n="hex",f=!1,v=0,p=6){const g=performance.now();return new Promise((x,s)=>{const d=new Image;d.crossOrigin="anonymous",d.src=t,d.onload=()=>{const i=document.createElement("canvas"),u=i.getContext("2d");if(!u)return s(new Error("Unable to obtain canvas context"));i.width=d.width*a,i.height=d.height*a,u.drawImage(d,0,0,i.width,i.height);try{const c=u.getImageData(0,0,i.width,i.height),E=new Map;let I=!0,h=0;const w=30,S=Math.floor(i.width/p),A=Math.floor(i.height/p);for(let N=0;N<p;N++)for(let $=0;$<p;$++){if(v>0&&($+N)%(v+1)===0)continue;const re=Math.floor(($+.5)*S),Q=(Math.floor((N+.5)*A)*i.width+re)*4,O=c.data[Q],P=c.data[Q+1],W=c.data[Q+2];if(Rt(O,P,W))continue;I=!1;const j=qt(O,P,W),U=Bt(O,P,W),G=Ot(O,P,W);G<r||f&&U<60||(U<w&&h++,E.has(j)?E.get(j).count++:E.set(j,{count:1,brightness:U,saturation:G}))}if(I)return s(new Error("Image is fully grayscale"));h>100&&(v+=1);const C=Array.from(E.entries()).sort((N,$)=>$[1].brightness-N[1].brightness||$[1].count-N[1].count),q=Pt(C,e,n),B=performance.now()-g;x({colors:q,time:B})}catch{s(new Error("Canvas was tainted by cross-origin data"))}},d.onerror=()=>{s(new Error("Image loading failed"))}})}function Rt(t,e,a){return t===0&&e===0&&a===0||t>200&&e>200&&a>200||Math.abs(t-e)<=10&&Math.abs(t-a)<=10&&Math.abs(e-a)<=10}function qt(t,e,a){return`#${((1<<24)+(t<<16)+(e<<8)+a).toString(16).slice(1).toUpperCase()}`}function Bt(t,e,a){return .299*t+.587*e+.114*a}function Ot(t,e,a){const r=Math.max(t,e,a),n=Math.min(t,e,a);return r===0?0:(r-n)/r*100}function Pt(t,e,a){const r=[],f=new Set;for(const[v]of t){if(r.length>=e)break;if(f.has(v))continue;const[p,g,x]=ke(v);let s=!0;for(const d of r){const[i,u,c]=ke(d);if(Math.sqrt(Math.pow(p-i,2)+Math.pow(g-u,2)+Math.pow(x-c,2))<100){s=!1;break}}s&&(r.push(Wt(v,a)),f.add(v))}return r}function ke(t){const e=parseInt(t.slice(1),16),a=e>>16&255,r=e>>8&255,n=e&255;return[a,r,n]}function Wt(t,e){if(e==="hex")return t;if(e==="rgb"){const[a,r,n]=ke(t);return`rgb(${a}, ${r}, ${n})`}return t}function Yt(t,e,a,r){M(e,(o(e)+1)%a.length),r(a[o(e)])}var Ft=le('<div class="light svelte-1sbwrpy"></div>'),Vt=le('<div class="absolute text-white text-xs" style="top: -20px; left: 50%; transform: translateX(-50%);"> </div>'),Xt=le('<div class="h-full flex-1 transition-all" role="button" tabindex="0"><!></div>'),Ut=(t,e,a,r,n,f)=>e(a[o(r)],o(n),o(f)),Gt=(t,e,a,r,n,f)=>e(a[o(r)],o(n),o(f)),Kt=(t,e,a,r,n,f)=>e(a[o(r)],o(n),o(f)),Zt=(t,e,a,r)=>e(a[o(r)]),Jt=le('<div></div> <main class="flex flex-col items-center justify-center w-full h-full"><div class="h-screen flex flex-col items-center justify-center page backdrop-blur-3xl svelte-1sbwrpy" style="	width: 40rem;"><header class="w-full h-16 flex flex-col items-center justify-center"><h1 class="text-3xl font-bold text-white">get-vibrant-colors</h1></header> <content class="w-full h-full flex flex-col items-center justify-center"><div class="h-8 flex flex-row w-full relative"></div> <div class="w-full bg-no-repeat bg-center bg-contain"></div> <p class="text-white"> </p></content> <controls class="w-full h-auto flex flex-col items-center justify-center"><div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1sbwrpy" min="1" max="20"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1sbwrpy" step="0.01" min="0.01" max="1"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1sbwrpy" min="0" max="100"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1sbwrpy" min="0" max="10"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1sbwrpy" min="1" max="20"></div> <div class="w-full flex flex-col items-start"><p class="text-white">Skip Dark Colors:</p> <input type="checkbox" class="w-full"></div> <button class="text-lg cursor-pointer bg-gray-900 text-white border-none hover:bg-gray-700 w-full h-full">Apply</button></controls> <footer class="w-full h-16 flex flex-col items-center justify-center"><button class="text-lg cursor-pointer bg-gray-900 text-white border-none hover:bg-gray-700 w-full h-full">Next image</button></footer></div></main>',1);function aa(t,e){kt(e,!1);let a=["./images/example1","./images/example2","./images/example3","./images/example4","./images/example5","./images/example6","./images/example7","./images/example8","./images/example9","./images/example10"],r=H([]),n=H(0),f=H([]),v=H(0),p="",g=H(null),x=H(5),s=H(.1),d=H(60),i=H(!1),u=H(0),c=H(6);function E(l,_){return{id:l,x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,dx:(Math.random()-.5)*.5,dy:(Math.random()-.5)*.5,color:_}}function I(l,_){M(r,Array.from({length:l},(L,D)=>E(D,_[D%_.length])))}function h(){M(r,o(r).map(l=>(l.x+=l.dx,l.y+=l.dy,(l.x<0||l.x>window.innerWidth)&&(l.dx*=-1),(l.y<0||l.y>window.innerHeight)&&(l.dy*=-1),l)))}function w(){h(),requestAnimationFrame(w)}function S(l,_,L){l==="./images/example7"&&(l="./images/example7_");const D=new Image;D.crossOrigin="anonymous",D.src=l,D.onload=()=>{const T=document.createElement("canvas"),k=T.getContext("2d");if(!k){console.error("Unable to obtain canvas context for debug drawing");return}T.width=D.width*L,T.height=D.height*L,k.drawImage(D,0,0,T.width,T.height);const V=Math.floor(T.width/_),z=Math.floor(T.height/_);k.strokeStyle="red",k.lineWidth=1;for(let K=0;K<_;(K+=1)-1)for(let Z=0;Z<_;(Z+=1)-1){const je=Math.floor((Z+.5)*V),ze=Math.floor((K+.5)*z);o(u)>0&&(Z+K)%(o(u)+1)===0?(k.strokeStyle="red",k.fillStyle="red",k.fillRect(Z*V,K*z,V,z)):k.strokeStyle="blue",k.strokeRect(Z*V,K*z,V,z),k.beginPath(),k.arc(je,ze,2,0,2*Math.PI),k.fillStyle="blue",k.fill()}const Te=document.getElementById("debugCanvas");Te&&document.body.removeChild(Te),T.id="debugCanvas",T.style.position="fixed",T.style.left="0",T.style.top="0",document.body.appendChild(T)},D.onerror=()=>{console.error("Image loading failed for debug drawing")}}async function A(l){try{const _=await Ht(l,o(x),o(s),o(d),"hex",o(i),o(u),o(c));M(f,_.colors),M(v,_.time),p="",I(20,o(f)),S(l,o(c),o(s))}catch(_){_ instanceof Error?p="Failed to get vibrant colors: "+_.message:p="Failed to get vibrant colors: Unknown error",M(f,[]),M(r,[])}}Tt(()=>{A(a[o(n)]),w()}),At();var C=Jt(),q=Ct(C);De(q,5,()=>o(r),l=>l.id,(l,_)=>{var L=Ft();se(()=>ae(L,"style",`left: ${o(_).x??""}px; top: ${o(_).y??""}px; box-shadow: 0px 0px 350px 225px ${o(_).color??""};`)),ne(l,L)}),m(q);var F=b(q,2),B=y(F),N=b(y(B),2),$=y(N);De($,5,()=>o(f),l=>l,(l,_)=>{var L=Xt(),D=y(L);It(D,()=>o(g)===o(_),T=>{var k=Vt(),V=y(k,!0);m(k),se(()=>X(V,o(_))),ne(T,k)}),m(L),se(()=>ae(L,"style",`background-color: ${o(_)??""};`)),Le("mouseenter",L,()=>M(g,o(_))),Le("mouseleave",L,()=>M(g,null)),ne(l,L)}),m($);var re=b($,2),ie=b(re,2),Q=y(ie);m(ie),m(N);var O=b(N,2),P=y(O),W=y(P),j=y(W);m(W);var U=b(W,2);J(U),m(P);var G=b(P,2),ce=y(G),Ue=y(ce);m(ce);var fe=b(ce,2);J(fe),fe.__input=[Ut,S,a,n,c,s],m(G);var ue=b(G,2),ve=y(ue),Ge=y(ve);m(ve);var Ce=b(ve,2);J(Ce),m(ue);var de=b(ue,2),he=y(de),Ke=y(he);m(he);var _e=b(he,2);J(_e),_e.__input=[Gt,S,a,n,c,s],m(de);var pe=b(de,2),xe=y(pe),Ze=y(xe);m(xe);var ge=b(xe,2);J(ge),ge.__input=[Kt,S,a,n,c,s],m(pe);var me=b(pe,2),Me=b(y(me),2);J(Me),m(me);var Je=b(me,2);Je.__click=[Zt,A,a,n],m(O);var Ee=b(O,2),Qe=y(Ee);Qe.__click=[Yt,n,a,A],m(Ee),m(B),m(F),se(()=>{ae(re,"style",`background-image: url(${a[o(n)]??""}); height: 40rem;`),X(Q,`Time taken: ${o(v)??""}ms`),X(j,`Max Colors: ${o(x)??""}`),X(Ue,`Sample Scale: ${o(s)??""}`),X(Ge,`Saturation Level: ${o(d)??""}`),X(Ke,`Skip every N tile: ${o(u)??""}`),X(Ze,`Tile Size: ${o(c)??""}`)}),te(U,()=>o(x),l=>M(x,l)),te(fe,()=>o(s),l=>M(s,l)),te(Ce,()=>o(d),l=>M(d,l)),te(_e,()=>o(u),l=>M(u,l)),te(ge,()=>o(c),l=>M(c,l)),St(Me,()=>o(i),l=>M(i,l)),ne(t,C),Mt()}Et(["input","click"]);export{aa as component};
