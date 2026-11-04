const PHONE = window.KROMA_CONFIG?.whatsapp || "";
const colors = [
  {name:"Verde KROMA",hex:"#40e45f"},{name:"Roxo elétrico",hex:"#8b48e8"},{name:"Rosa neon",hex:"#ff4eaa"},{name:"Laranja",hex:"#ff853e"},{name:"Prata",hex:"#c5c8d0"}
];
const products = [
  {id:"volt",name:"KROMA Volt",category:"Autopropelidos",base:"Autopropelido",art:"assets/images/kromas-showcase.png",crop:"q1",kind:"scooter",description:"Visual esportivo com carenagem colorida e grafismos de alto contraste."},
  {id:"neo",name:"KROMA Neo",category:"Ciclomotores",base:"Ciclomotor",art:"assets/images/estudo-depois.jpg",kind:"moped",description:"Uma leitura retrô com acabamento de carenagem e detalhes marcantes."},
  {id:"pulse",name:"KROMA Pulse",category:"E-bikes",base:"E-bike",art:"assets/images/kromas-showcase.png",crop:"q2",kind:"bike",description:"Grafismos geométricos para uma composição leve e urbana."},
  {id:"trio",name:"KROMA Trio",category:"Triciclos",base:"Triciclo",art:"assets/images/kromas-showcase.png",crop:"q3",kind:"trike",description:"Uma proposta de cor e identidade pensada para três rodas."},
  {id:"swift",name:"KROMA Swift",category:"Patinetes",base:"Patinete elétrico",art:"assets/images/kromas-showcase.png",crop:"q4",kind:"scooter",description:"Acabamento limpo com uma assinatura visual vibrante."},
  {id:"kit",name:"KROMA Detail",category:"Acessórios",base:"Acessório sob consulta",art:"assets/images/peca-carenagem-conceito.jpg",kind:"accessory",description:"Detalhes de cor, adesivagem e acabamento definidos para o seu veículo."}
];
const counts = Object.fromEntries(["Todos",...new Set(products.map(p=>p.category))].map(cat=>[cat,cat==="Todos"?products.length:products.filter(p=>p.category===cat).length]));
const filters = document.querySelector(".k-filters"), grid = document.querySelector("#k-grid"), count = document.querySelector(".k-count"), dialog = document.querySelector("#detail-dialog");
const waUrl = (message)=>PHONE?`https://wa.me/${PHONE.replace(/\D/g,"")}?text=${encodeURIComponent(message)}`:"";
const missing = "O WhatsApp da KROMA ainda não está configurado. O contato será adicionado em breve.";
document.querySelector(".k-custom").addEventListener("click",event=>{event.preventDefault();const url=waUrl("Olá! Quero conversar sobre uma personalização KROMA. Meu modelo é:");if(url)window.open(url,"_blank","noopener,noreferrer");else alert(missing);});
function renderFilters(active="Todos"){
 filters.innerHTML=["Todos",...new Set(products.map(p=>p.category))].map(cat=>`<button class="k-filter" type="button" data-category="${cat}" aria-pressed="${cat===active}">${cat}<span>${counts[cat]}</span></button>`).join("");
 filters.querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>{renderFilters(button.dataset.category);renderCards(button.dataset.category);}));
}
function renderCards(category="Todos"){
 const list=category==="Todos"?products:products.filter(product=>product.category===category);
 count.textContent=`${list.length} ${list.length===1?"conceito":"conceitos"}`;
 grid.innerHTML=list.map(product=>`<article class="k-card"><div class="k-card-art"><img class="${product.crop||""}" src="${product.art}" alt="Estudo visual conceitual de ${product.name}" loading="lazy"><span class="k-label">ESTUDO VISUAL</span></div><div class="k-card-body"><span class="k-card-category">${product.category}</span><h3 aria-label="${product.name}"><img class="k-card-wordmark" src="assets/brand/kroma-wordmark.png" alt="KROMA"> ${product.name.replace("KROMA ","")}</h3><p class="k-card-sub">${product.description}</p><div class="k-card-actions"><button class="k-buy-card" type="button" data-buy="${product.id}"><svg class="wa-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.15a9.78 9.78 0 0 0-8.34 14.88l-1.3 4.82 4.94-1.3A9.8 9.8 0 1 0 12 2.15Zm0 17.05a7.42 7.42 0 0 1-3.78-1.03l-.27-.16-2.8.74.75-2.73-.18-.28A7.43 7.43 0 1 1 12 19.2Zm4.08-5.56c-.22-.11-1.31-.65-1.51-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.17-.49.06-.22-.11-.94-.35-1.78-1.09-.66-.59-1.1-1.31-1.23-1.53-.13-.23-.01-.35.1-.46.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.42c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.55 2.37 3.75 3.32.52.23.93.37 1.25.47.53.17 1.01.15 1.39.09.42-.06 1.31-.54 1.5-1.05.19-.52.19-.96.13-1.05-.06-.09-.2-.15-.42-.26Z"/></svg> Comprar</button><button class="k-details" type="button" data-details="${product.id}">+ Detalhes</button></div></div></article>`).join("");
 grid.querySelectorAll("[data-buy]").forEach(button=>button.addEventListener("click",()=>buyProduct(products.find(p=>p.id===button.dataset.buy),colors[0].name)));
 grid.querySelectorAll("[data-details]").forEach(button=>button.addEventListener("click",()=>openDetails(products.find(p=>p.id===button.dataset.details))));
}
function buyProduct(product,color){const url=waUrl(`Olá! Tenho interesse na personalização ${product.name} (${product.category}), na cor ${color}. Gostaria de confirmar compatibilidade, escopo, preço e prazo para o meu modelo:`);if(url)window.open(url,"_blank","noopener,noreferrer");else alert(missing);}
document.querySelector(".k-close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
dialog.addEventListener("close",()=>{sceneControl?.dispose();renderer?.dispose();renderer=null;scene=null;sceneControl=null;});
let renderer=null,scene=null,camera=null,sceneControl=null,vehicleBody=null,vehicleParts=[],vehiclePaint=null,frameId=0;
const canvas=document.querySelector("#vehicle-canvas"), viewer=canvas.parentElement;
function openDetails(product){
 document.querySelector("#detail-category").textContent=`${product.category}`;const name=document.querySelector("#detail-name");name.setAttribute("aria-label",product.name);name.innerHTML=`<img class="k-detail-wordmark" src="assets/brand/kroma-wordmark.png" alt="KROMA"> ${product.name.replace("KROMA ","")}`;document.querySelector("#detail-base").textContent=product.base;
 const swatches=document.querySelector(".k-colors");swatches.innerHTML=colors.map((color,i)=>`<button class="k-color" type="button" style="--swatch:${color.hex}" title="${color.name}" aria-label="${color.name}" aria-pressed="${i===0}"><img src="assets/brand/kroma-simbolo.png" alt=""></button>`).join("");
 let selected=colors[0].name;swatches.querySelectorAll("button").forEach((button,i)=>button.addEventListener("click",()=>{swatches.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed","false"));button.setAttribute("aria-pressed","true");selected=colors[i].name;setVehicleColor(colors[i].hex);}));
 const buy=document.querySelector("#detail-buy");buy.onclick=event=>{event.preventDefault();buyProduct(product,selected);};buy.innerHTML=`<svg class="wa-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.15a9.78 9.78 0 0 0-8.34 14.88l-1.3 4.82 4.94-1.3A9.8 9.8 0 1 0 12 2.15Zm0 17.05a7.42 7.42 0 0 1-3.78-1.03l-.27-.16-2.8.74.75-2.73-.18-.28A7.43 7.43 0 1 1 12 19.2Zm4.08-5.56c-.22-.11-1.31-.65-1.51-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.17-.49.06-.22-.11-.94-.35-1.78-1.09-.66-.59-1.1-1.31-1.23-1.53-.13-.23-.01-.35.1-.46.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.42c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.55 2.37 3.75 3.32.52.23.93.37 1.25.47.53.17 1.01.15 1.39.09.42-.06 1.31-.54 1.5-1.05.19-.52.19-.96.13-1.05-.06-.09-.2-.15-.42-.26Z"/></svg>Consultar pelo WhatsApp <span>↗</span>`;dialog.showModal();buildViewer(product.kind,colors[0].hex);
}
async function buildViewer(kind,color){
 let THREE,OrbitControls;
 try{const modules=await Promise.all([import("three"),import("three/addons/controls/OrbitControls.js")]);THREE=modules[0];OrbitControls=modules[1].OrbitControls;}
 catch(error){viewer.classList.add("is-ready");viewer.dataset.error="true";document.querySelector(".k-viewer-loading").textContent="Não foi possível carregar o modelo 3D. Confira a conexão e tente novamente.";return;}
 if(renderer){cancelAnimationFrame(frameId);sceneControl?.dispose();renderer.dispose();renderer=null;}
 viewer.classList.remove("is-ready");scene=new THREE.Scene();scene.background=new THREE.Color("#26232a");camera=new THREE.PerspectiveCamera(35,1,.1,100);camera.position.set(4.2,2.4,5.4);
 renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 scene.add(new THREE.HemisphereLight(0xe9e1f1,0x23152c,2.15));const key=new THREE.DirectionalLight(0xffffff,3.1);key.position.set(3,6,4);key.castShadow=true;scene.add(key);const rim=new THREE.DirectionalLight(0x80ee91,1.2);rim.position.set(-4,3,-4);scene.add(rim);
 const floor=new THREE.Mesh(new THREE.CircleGeometry(5,64),new THREE.MeshStandardMaterial({color:0x343039,roughness:.8}));floor.rotation.x=-Math.PI/2;floor.position.y=-.025;floor.receiveShadow=true;scene.add(floor);
 const mat=(c,rough=.35,metal=.3)=>new THREE.MeshStandardMaterial({color:c,roughness:rough,metalness:metal});const rubber=mat(0x16151a,.85,.05),metal=mat(0x999aa4,.3,.8),dark=mat(0x28252b,.38,.55),paint=mat(color,.24,.48);vehiclePaint=paint;vehicleParts=[];
 const cylinderBetween=(a,b,r,material)=>{const va=new THREE.Vector3(...a),vb=new THREE.Vector3(...b),delta=new THREE.Vector3().subVectors(vb,va);const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,delta.length(),12),material);mesh.position.copy(va).add(vb).multiplyScalar(.5);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());mesh.castShadow=true;scene.add(mesh);return mesh;};
 const wheel=(x,z,r=.42)=>{const tire=new THREE.Mesh(new THREE.TorusGeometry(r,.105,14,36),rubber);tire.rotation.y=Math.PI/2;tire.position.set(x,r,z);tire.castShadow=true;scene.add(tire);const hub=new THREE.Mesh(new THREE.CylinderGeometry(r*.45,r*.45,.19,24),metal);hub.rotation.x=Math.PI/2;hub.position.set(x,r,z);hub.castShadow=true;scene.add(hub);const inner=new THREE.Mesh(new THREE.CylinderGeometry(r*.24,r*.24,.2,20),dark);inner.rotation.x=Math.PI/2;inner.position.set(x,r,z);scene.add(inner);};
 const x1=-1.15,x2=1.1,wr=.4;wheel(x1,0,wr);wheel(x2,0,wr);if(kind==="trike")wheel(.95,.48,.32);
 if(kind==="bike"){
   cylinderBetween([x1,wr,0],[0,wr+0.15,0],.045,paint);cylinderBetween([0,wr+0.15,0],[x2,wr,0],.045,paint);cylinderBetween([x1,wr,0],[.05,1.2,0],.05,metal);cylinderBetween([.05,1.2,0],[0,wr+.15,0],.045,metal);cylinderBetween([0,wr+.15,0],[.05,1.2,0],.045,paint);cylinderBetween([.05,1.2,0],[x2,wr,0],.045,paint);cylinderBetween([.05,1.2,0],[.16,1.62,0],.04,dark);cylinderBetween([-.25,1.62,0],[.56,1.62,0],.045,dark);cylinderBetween([-.27,1.16,0],[.33,1.16,0],.07,dark);
 }else if(kind==="scooter"){
   const deck=new THREE.Mesh(new THREE.BoxGeometry(1.25,.14,.27),paint);deck.position.set(-.05,.58,0);deck.castShadow=true;scene.add(deck);cylinderBetween([.8,.59,0],[.55,1.55,0],.075,paint);cylinderBetween([.2,1.58,-.38],[.2,1.58,.38],.06,dark);cylinderBetween([x1,wr,0],[.8,.59,0],.045,metal);
 }else{
   const chassis=new THREE.Mesh(new THREE.BoxGeometry(1.35,.52,.43),paint);chassis.position.set(-.02,.94,0);chassis.castShadow=true;scene.add(chassis);vehicleBody=chassis;vehicleParts.push(chassis);cylinderBetween([.85,1,0],[.86,1.55,0],.06,metal);cylinderBetween([.42,1.58,-.38],[.42,1.58,.38],.06,dark);cylinderBetween([x1,wr,0],[-.3,.84,0],.06,dark);cylinderBetween([-.3,.84,0],[.8,.84,0],.06,dark);const seat=new THREE.Mesh(new THREE.BoxGeometry(.65,.13,.48),dark);seat.position.set(-.36,1.5,0);seat.castShadow=true;scene.add(seat);const cover=new THREE.Mesh(new THREE.BoxGeometry(.56,.3,.4),paint);cover.position.set(.25,1.02,0);cover.castShadow=true;scene.add(cover);vehicleParts.push(cover);
   if(kind==="trike"){const rear=new THREE.Mesh(new THREE.BoxGeometry(.76,.16,.72),paint);rear.position.set(-.92,.75,0);rear.castShadow=true;scene.add(rear);vehicleParts.push(rear);}
 }
 if(kind==="accessory"){const panel=new THREE.Mesh(new THREE.BoxGeometry(1.05,.68,.14),paint);panel.position.set(0,1.05,0);panel.rotation.z=-.12;panel.castShadow=true;scene.add(panel);vehicleParts.push(panel);const line=new THREE.Mesh(new THREE.BoxGeometry(.85,.055,.155),mat(0x251333,.3,.2));line.position.set(0,1.1,.08);line.rotation.z=-.12;scene.add(line);}
 sceneControl=new OrbitControls(camera,canvas);sceneControl.enableDamping=true;sceneControl.dampingFactor=.08;sceneControl.minDistance=3;sceneControl.maxDistance=8;sceneControl.maxPolarAngle=Math.PI*.49;sceneControl.target.set(0,.8,0);sceneControl.update();setVehicleColor(color);
 const resize=()=>{const rect=viewer.getBoundingClientRect();if(!rect.width||!renderer)return;renderer.setSize(rect.width,rect.height,false);camera.aspect=rect.width/rect.height;camera.updateProjectionMatrix();};new ResizeObserver(resize).observe(viewer);resize();viewer.classList.add("is-ready");const animate=()=>{frameId=requestAnimationFrame(animate);sceneControl?.update();renderer?.render(scene,camera);};animate();
}
function setVehicleColor(color){if(!scene)return;vehiclePaint?.color.set(color);vehicleParts.forEach(part=>part.material.color.set(color));}
renderFilters();renderCards();
