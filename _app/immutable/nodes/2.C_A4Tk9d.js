import{a as ae,t as se}from"../chunks/disclose-version.CyiPo8dd.js";import{O as vt,q as dt,x as P,B as Me,z as _t,L as ht,Z as Je,H as pt,A as Oe,C as Te,y as fe,a1 as ve,D as Qe,v as je,F as mt,G as xt,N as Be,a2 as Le,a3 as Fe,a4 as Ne,a5 as gt,m as wt,a6 as Ve,a7 as yt,Y as bt,a8 as kt,w as Ct,a9 as ze,S as Et,V as Mt,M as Tt,aa as At,R as It,ab as We,ac as $t,ad as Lt,ae as Nt,af as Dt,ag as et,p as Ht,h as Ye,t as ce,i as St,o as D,g as s,ah as B,ai as qt,s as M,j as y,k as x}from"../chunks/runtime.DfxQuGhp.js";import{d as Rt,h as Ot,e as Ge,s as J}from"../chunks/render.BiG3TvBa.js";import{o as Bt,i as Ft}from"../chunks/index-client.DM510a2f.js";import{i as Vt}from"../chunks/lifecycle.BKhaeJsB.js";let Ae=null;function Wt(t,e){return e}function Yt(t,e,a,r){for(var n=[],u=e.length,d=0;d<u;d++)yt(e[d].e,n,!0);var m=u>0&&n.length===0&&a!==null;if(m){var b=a.parentNode;bt(b),b.append(a),r.clear(),Q(t,e[0].prev,e[u-1].next)}kt(n,()=>{for(var w=0;w<u;w++){var v=e[w];m||(r.delete(v.k),Q(t,v.prev,v.next)),Ct(v.e,!m)}})}function Ie(t,e,a,r,n,u=null){var d=t,m={flags:e,items:new Map,first:null},b=(e&ze)!==0;if(b){var w=t;d=P?Me(Et(w)):w.appendChild(vt())}P&&_t();var v=null,T=!1;dt(()=>{var o=a(),f=ht(o)?o:o==null?[]:Je(o),i=f.length;if(T&&i===0)return;T=i===0;let k=!1;if(P){var C=d.data===pt;C!==(i===0)&&(d=Oe(),Me(d),Te(!1),k=!0)}if(P){for(var N=null,S,E=0;E<i;E++){if(fe.nodeType===8&&fe.data===Mt){d=fe,k=!0,Te(!1);break}var c=f[E],h=r(c,E);S=tt(fe,m,N,null,c,h,E,n,e),m.items.set(h,S),N=S}i>0&&Me(Oe())}if(!P){var j=Tt;Gt(f,m,d,n,e,(j.f&ve)!==0,r)}u!==null&&(i===0?v?Qe(v):v=je(()=>u(d)):v!==null&&mt(v,()=>{v=null})),k&&Te(!0),a()}),P&&(d=fe)}function Gt(t,e,a,r,n,u,d){var K,F,V,W;var m=(n&At)!==0,b=(n&(Le|Ne))!==0,w=t.length,v=e.items,T=e.first,o=T,f,i=null,k,C=[],N=[],S,E,c,h;if(m)for(h=0;h<w;h+=1)S=t[h],E=d(S,h),c=v.get(E),c!==void 0&&((K=c.a)==null||K.measure(),(k??(k=new Set)).add(c));for(h=0;h<w;h+=1){if(S=t[h],E=d(S,h),c=v.get(E),c===void 0){var j=o?o.e.nodes_start:a;i=tt(j,e,i,i===null?e.first:i.next,S,E,h,r,n),v.set(E,i),C=[],N=[],o=i.next;continue}if(b&&Pt(c,S,h,n),c.e.f&ve&&(Qe(c.e),m&&((F=c.a)==null||F.unfix(),(k??(k=new Set)).delete(c))),c!==o){if(f!==void 0&&f.has(c)){if(C.length<N.length){var G=N[0],q;i=G.prev;var z=C[0],$=C[C.length-1];for(q=0;q<C.length;q+=1)Pe(C[q],G,a);for(q=0;q<N.length;q+=1)f.delete(N[q]);Q(e,z.prev,$.next),Q(e,i,z),Q(e,$,G),o=G,i=$,h-=1,C=[],N=[]}else f.delete(c),Pe(c,o,a),Q(e,c.prev,c.next),Q(e,c,i===null?e.first:i.next),Q(e,i,c),i=c;continue}for(C=[],N=[];o!==null&&o.k!==E;)(u||!(o.e.f&ve))&&(f??(f=new Set)).add(o),N.push(o),o=o.next;if(o===null)continue;c=o}C.push(c),i=c,o=c.next}if(o!==null||f!==void 0){for(var L=f===void 0?[]:Je(f);o!==null;)(u||!(o.e.f&ve))&&L.push(o),o=o.next;var X=L.length;if(X>0){var ie=n&ze&&w===0?a:null;if(m){for(h=0;h<X;h+=1)(V=L[h].a)==null||V.measure();for(h=0;h<X;h+=1)(W=L[h].a)==null||W.fix()}Yt(e,L,ie,v)}}m&&xt(()=>{var Z;if(k!==void 0)for(c of k)(Z=c.a)==null||Z.apply()}),Be.first=e.first&&e.first.e,Be.last=i&&i.e}function Pt(t,e,a,r){r&Le&&Fe(t.v,e),r&Ne?Fe(t.i,a):t.i=a}function tt(t,e,a,r,n,u,d,m,b){var w=Ae;try{var v=(b&Le)!==0,T=(b&gt)===0,o=v?T?wt(n):Ve(n):n,f=b&Ne?Ve(d):d,i={i:f,v:o,k:u,a:null,e:null,prev:a,next:r};return Ae=i,i.e=je(()=>m(t,o,f),P),i.e.prev=a&&a.e,i.e.next=r&&r.e,a===null?e.first=i:(a.next=i,a.e.next=i.e),r!==null&&(r.prev=i,r.e.prev=i.e),i}finally{Ae=w}}function Pe(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,n=e?e.e.nodes_start:a,u=t.e.nodes_start;u!==r;){var d=It(u);n.before(u),u=d}}function Q(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}let Ue=!1;function at(){Ue||(Ue=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const a of t.target.elements)(e=a.__on_r)==null||e.call(a)})},{capture:!0}))}function ee(t){if(P){var e=!1,a=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;ne(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var n=t.checked;ne(t,"checked",null),t.checked=n}}};t.__on_r=a,$t(a),at()}}function ne(t,e,a,r){var n=t.__attributes??(t.__attributes={});P&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Nt]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Ut(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var Xe=new Map;function Ut(t){var e=Xe.get(t.nodeName);if(e)return e;Xe.set(t.nodeName,e=[]);for(var a,r=We(t),n=Element.prototype;n!==r;){a=Lt(r);for(var u in a)a[u].set&&e.push(u);r=We(r)}return e}function rt(t,e,a,r=a){t.addEventListener(e,a);const n=t.__on_r;n?t.__on_r=()=>{n(),r()}:t.__on_r=r,at()}function re(t,e,a=e){var r=Dt();rt(t,"input",()=>{var n=Ke(t)?Ze(t.value):t.value;a(n),r&&n!==(n=e())&&(t.value=n??"")}),et(()=>{var n=e();if(P&&t.defaultValue!==t.value){a(t.value);return}Ke(t)&&n===Ze(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function Xt(t,e,a=e){rt(t,"change",()=>{var r=t.checked;a(r)}),e()==null&&a(!1),et(()=>{var r=e();t.checked=!!r})}function Ke(t){var e=t.type;return e==="number"||e==="range"}function Ze(t){return t===""?null:+t}async function Kt(t,e=5,a=.1,r=60,n="hex",u=!1,d=0,m=6,b=0){const w=performance.now();return new Promise((v,T)=>{const o=new Image;o.crossOrigin="anonymous",o.src=t,o.onload=()=>{const f=document.createElement("canvas"),i=f.getContext("2d");if(!i)return T(new Error("Unable to obtain canvas context"));f.width=o.width*a,f.height=o.height*a,i.drawImage(o,0,0,f.width,f.height),b>0&&(i.filter=`blur(${b}px)`,i.drawImage(f,0,0,f.width,f.height));try{const k=i.getImageData(0,0,f.width,f.height),C=new Map;let N=!0;const S=30,E=f.width/m,c=f.height/m;for(let $=0;$<m;$++)for(let L=0;L<m;L++){if(d>0&&(L+$)%(d+1)===0)continue;const X=Math.floor(L*E+E/2),K=(Math.floor($*c+c/2)*f.width+X)*4,F=k.data[K],V=k.data[K+1],W=k.data[K+2];if(Zt(F,V,W))continue;N=!1;const Z=Jt(F,V,W),le=Qt(F,V,W),te=jt(F,V,W);te<r||u&&le<60||(C.has(Z)?C.get(Z).count++:C.set(Z,{count:1,brightness:le,saturation:te}))}if(N)return T(new Error("Image is fully grayscale"));const h=Array.from(C.entries()).sort(($,L)=>L[1].brightness-$[1].brightness||L[1].count-$[1].count),G=zt(h,e,n).filter($=>/^#[0-9A-F]{6}$/i.test($)),z=performance.now()-w;v({colors:G,time:Math.floor(z)})}catch{T(new Error("Canvas was tainted by cross-origin data"))}},o.onerror=()=>{T(new Error("Image loading failed"))}})}function Zt(t,e,a){return t===0&&e===0&&a===0||t>200&&e>200&&a>200||Math.abs(t-e)<=10&&Math.abs(t-a)<=10&&Math.abs(e-a)<=10}function Jt(t,e,a){return`#${((1<<24)+(t<<16)+(e<<8)+a).toString(16).slice(1).toUpperCase()}`}function Qt(t,e,a){return .299*t+.587*e+.114*a}function jt(t,e,a){const r=Math.max(t,e,a),n=Math.min(t,e,a);return r===0?0:(r-n)/r*100}function zt(t,e,a){const r=[],u=new Set;for(const[d]of t){if(r.length>=e)break;if(u.has(d))continue;const[m,b,w]=$e(d);let v=!0;for(const T of r){const[o,f,i]=$e(T);if(Math.sqrt(Math.pow(m-o,2)+Math.pow(b-f,2)+Math.pow(w-i,2))<100){v=!1;break}}v&&(r.push(ea(d,a)),u.add(d))}return r}function $e(t){const e=parseInt(t.slice(1),16),a=e>>16&255,r=e>>8&255,n=e&255;return[a,r,n]}function ea(t,e){if(e==="hex")return t;if(e==="rgb"){const[a,r,n]=$e(t);return`rgb(${a}, ${r}, ${n})`}return t}function ta(t,e,a,r){D(e,(s(e)+1)%a.length),r(a[s(e)])}var aa=se('<link rel="preload" as="image">'),ra=se('<!> <link rel="preload" as="image" href="./images/example7_">',1),na=se('<div class="light svelte-1vaia76"></div>'),sa=se('<div class="absolute text-white text-xs" style="top: -20px; left: 50%; transform: translateX(-50%);"> </div>'),ia=se('<div class="h-full flex-1 transition-all" role="button" tabindex="0"><!></div>'),la=(t,e,a,r,n,u)=>e(a[s(r)],s(n),s(u)),oa=(t,e,a,r,n,u)=>e(a[s(r)],s(n),s(u)),fa=(t,e,a,r,n,u)=>e(a[s(r)],s(n),s(u)),ca=(t,e,a,r)=>e(a[s(r)]),ua=se('<div></div> <main class="flex flex-col items-center justify-center w-full h-full"><div class="h-screen flex flex-col items-center justify-center page backdrop-blur-3xl svelte-1vaia76" style="	width: 40rem;"><content class="w-full h-full flex flex-col items-center justify-center"><div class="h-8 flex flex-row w-full relative"></div> <div class="w-full bg-no-repeat bg-center bg-contain"></div> <p class="text-white"> </p></content> <controls class="w-full h-auto flex flex-col items-center justify-center"><div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1vaia76" min="1" max="20"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1vaia76" step="0.01" min="0.01" max="1"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1vaia76" min="0" max="100"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1vaia76" min="0" max="10"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1vaia76" min="1" max="100"></div> <div class="w-full flex flex-col items-start"><p class="text-white"> </p> <input type="range" class="w-full svelte-1vaia76" min="0" max="10" step="0.1"></div> <div class="w-full flex flex-col items-start"><p class="text-white">Skip Dark Colors:</p> <input type="checkbox" class="w-full"></div> <button class="text-lg cursor-pointer bg-gray-900 text-white border-none hover:bg-gray-700 w-full h-full">Apply</button></controls> <footer class="w-full h-16 flex flex-col items-center justify-center"><button class="text-lg cursor-pointer bg-gray-900 text-white border-none hover:bg-gray-700 w-full h-full">Next image</button></footer></div></main>',1);function ma(t,e){Ht(e,!1);let a=["./images/example1","./images/example2","./images/example3","./images/example4","./images/example5","./images/example6","./images/example7","./images/example8","./images/example9","./images/example10"],r=B([]),n=B(0),u=B([]),d=B(0),m="",b=B(null),w=B(5),v=B(.1),T=B(60),o=B(!1),f=B(0),i=B(6),k=B(0);function C(l,_){return{id:l,x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,dx:(Math.random()-.5)*.5,dy:(Math.random()-.5)*.5,color:_}}function N(l,_){D(r,Array.from({length:l},(H,U)=>C(U,_[U%_.length])))}function S(){D(r,s(r).map(l=>(l.x+=l.dx,l.y+=l.dy,(l.x<0||l.x>window.innerWidth)&&(l.dx*=-1),(l.y<0||l.y>window.innerHeight)&&(l.dy*=-1),l)))}function E(){S(),requestAnimationFrame(E)}function c(l,_,H,U){l==="./images/example7"&&(l="./images/example7_");const Y=new Image;Y.crossOrigin="anonymous",Y.src=l,Y.onload=()=>{const p=document.createElement("canvas"),A=p.getContext("2d");if(!A){console.error("Unable to obtain canvas context for debug drawing");return}if(p.width=Y.width*H,p.height=Y.height*H,A.drawImage(Y,0,0,p.width,p.height),U>0)A.filter=`blur(${U}px)`,A.drawImage(p,0,0,p.width,p.height);else{const R=p.width/_,O=p.height/_;A.strokeStyle="red",A.lineWidth=1;const ue=(I,g,oe,ut)=>{A.beginPath(),A.moveTo(I,g),A.lineTo(oe,ut),A.stroke()};for(let I=0;I<=_;(I+=1)-1){for(let g=0;g<=_;(g+=1)-1)s(f)>0&&(g+I)%(s(f)+1)===0?A.strokeStyle="yellow":A.strokeStyle="blue",ue(g*R,I*O,(g+1)*R,I*O),ue(g*R,I*O,g*R,(I+1)*O),ue((g+1)*R,I*O,(g+1)*R,(I+1)*O),ue(g*R,(I+1)*O,(g+1)*R,(I+1)*O);A.fillStyle="white";for(let g=0;g<_;(g+=1)-1)for(let oe=0;oe<_;(oe+=1)-1)A.fillRect(oe*R+R/2,g*O+O/2,1,1)}A.fillStyle="white";for(let I=0;I<_;(I+=1)-1)for(let g=0;g<_;(g+=1)-1)s(f)>0&&(g+I)%(s(f)+1)!==0&&A.fillRect(g*R,I*O,R,O)}const Re=document.getElementById("debugCanvas");Re&&document.body.removeChild(Re),p.id="debugCanvas",p.style.position="fixed",p.style.left="0",p.style.top="0",document.body.appendChild(p),p.classList.add("pointer-events-none"),(p.width>document.body.clientWidth/2||p.height>document.body.clientHeight/2)&&(p.style.opacity="0.4")},Y.onerror=()=>{console.error("Image loading failed for debug drawing")}}async function h(l){try{const _=await Kt(l,s(w),s(v),s(T),"hex",s(o),s(f),s(i),s(k));D(u,_.colors),D(d,_.time),m="",N(20,s(u)),c(l,s(i),s(v),s(k))}catch(_){_ instanceof Error?m="Failed to get vibrant colors: "+_.message:m="Failed to get vibrant colors: Unknown error",D(u,[]),D(r,[])}}Bt(()=>{h(a[s(n)]),E()}),Vt();var j=ua();Ot(l=>{var _=ra(),H=Ye(_);Ie(H,1,()=>a,Wt,(U,Y)=>{var p=aa();ce(()=>ne(p,"href",s(Y))),ae(U,p)}),qt(2),ae(l,_)});var G=Ye(j);Ie(G,5,()=>s(r),l=>l.id,(l,_)=>{var H=na();ce(()=>ne(H,"style",`left: ${s(_).x??""}px; top: ${s(_).y??""}px; box-shadow: 0px 0px 350px 225px ${s(_).color??""};`)),ae(l,H)}),x(G);var q=M(G,2),z=y(q),$=y(z),L=y($);Ie(L,5,()=>s(u),l=>l,(l,_)=>{var H=ia(),U=y(H);Ft(U,()=>s(b)===s(_),Y=>{var p=sa(),A=y(p,!0);x(p),ce(()=>J(A,s(_))),ae(Y,p)}),x(H),ce(()=>ne(H,"style",`background-color: ${s(_)??""};`)),Ge("mouseenter",H,()=>D(b,s(_))),Ge("mouseleave",H,()=>D(b,null)),ae(l,H)}),x(L);var X=M(L,2),ie=M(X,2),K=y(ie);x(ie),x($);var F=M($,2),V=y(F),W=y(V),Z=y(W);x(W);var le=M(W,2);ee(le),x(V);var te=M(V,2),de=y(te),nt=y(de);x(de);var _e=M(de,2);ee(_e),_e.__input=[la,c,a,n,i,v],x(te);var he=M(te,2),pe=y(he),st=y(pe);x(pe);var De=M(pe,2);ee(De),x(he);var me=M(he,2),xe=y(me),it=y(xe);x(xe);var ge=M(xe,2);ee(ge),ge.__input=[oa,c,a,n,i,v],x(me);var we=M(me,2),ye=y(we),lt=y(ye);x(ye);var be=M(ye,2);ee(be),be.__input=[fa,c,a,n,i,v],x(we);var ke=M(we,2),Ce=y(ke),ot=y(Ce);x(Ce);var He=M(Ce,2);ee(He),x(ke);var Ee=M(ke,2),Se=M(y(Ee),2);ee(Se),x(Ee);var ft=M(Ee,2);ft.__click=[ca,h,a,n],x(F);var qe=M(F,2),ct=y(qe);ct.__click=[ta,n,a,h],x(qe),x(z),x(q),ce(()=>{ne(X,"style",`background-image: url(${a[s(n)]??""}); height: 40rem;`),J(K,`Time taken: ${s(d)??""}ms`),J(Z,`Max Colors: ${s(w)??""}`),J(nt,`Sample Scale: ${s(v)??""}`),J(st,`Saturation Level: ${s(T)??""}`),J(it,`Skip every N tile: ${s(f)??""}`),J(lt,`Grid Size: ${s(i)??""}`),J(ot,`Blur: ${s(k)??""}`)}),re(le,()=>s(w),l=>D(w,l)),re(_e,()=>s(v),l=>D(v,l)),re(De,()=>s(T),l=>D(T,l)),re(ge,()=>s(f),l=>D(f,l)),re(be,()=>s(i),l=>D(i,l)),re(He,()=>s(k),l=>D(k,l)),Xt(Se,()=>s(o),l=>D(o,l)),ae(t,j),St()}Rt(["input","click"]);export{ma as component};
