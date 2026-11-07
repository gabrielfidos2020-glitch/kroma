const PHONE = window.KROMA_CONFIG?.whatsapp || "";
const products = [
  {id:"adesivagem-parcial",name:"Adesivagem parcial",category:"Visual",base:"Conforme o modelo da moto",art:"assets/images/site/catalogo/kromas-showcase-plum-milk.png",crop:"q1",description:"Grafismos e adesivos para personalizar partes da moto. O desenho e a aplicação são definidos conforme o modelo e a ideia do cliente."},
  {id:"adesivagem-completa",name:"Adesivagem completa",category:"Visual",base:"Avaliação do veículo",art:"assets/images/site/catalogo/kromas-showcase-plum-milk.png",crop:"q2",description:"Uma proposta de personalização visual mais ampla. A KROMA avalia as superfícies, o estado da carenagem e o escopo antes do orçamento."},
  {id:"acabamento-carenagem",name:"Acabamento de carenagem",category:"Visual",base:"Conforme o modelo da moto",art:"assets/images/site/catalogo/kromas-showcase-plum-milk.png",crop:"q4",description:"Opções de acabamento para a carenagem, definidas depois de confirmar o modelo e as condições das peças."},
  {id:"clean",name:"CLEAN",category:"Limpeza e proteção",base:"A confirmar com a KROMA",art:"assets/images/site/catalogo/kromas-showcase-plum-milk.png",crop:"q3",description:"Consulte a KROMA sobre o escopo do serviço CLEAN e sua aplicação para a sua moto."},
  {id:"clean-pro",name:"CLEAN PRO",category:"Limpeza e proteção",base:"A confirmar com a KROMA",art:"assets/images/site/catalogo/kromas-showcase-plum-milk.png",crop:"q1",description:"Consulte a KROMA sobre o escopo do serviço CLEAN PRO e sua aplicação para a sua moto."},
  {id:"retrovisores",name:"Retrovisores",category:"Peças e acessórios",base:"Compatibilidade sob consulta",art:"assets/images/site/catalogo/kromas-showcase-plum-milk.png",crop:"q2",description:"Peças e acessórios sob encomenda. Envie o modelo e fotos para confirmar compatibilidade, preço e prazo."},
  {id:"pecas-encomenda",name:"Peças sob encomenda",category:"Peças e acessórios",base:"Compatibilidade sob consulta",art:"assets/images/site/catalogo/kromas-showcase-plum-milk.png",crop:"q4",description:"Consulte peças e acessórios para sua moto. Compatibilidade, valor e prazo são confirmados antes de fechar o pedido."}
];
const counts = Object.fromEntries(["Todos",...new Set(products.map(p=>p.category))].map(cat=>[cat,cat==="Todos"?products.length:products.filter(p=>p.category===cat).length]));
const filters = document.querySelector(".k-filters"), grid = document.querySelector("#k-grid"), count = document.querySelector(".k-count"), dialog = document.querySelector("#detail-dialog");
const waUrl = (message)=>PHONE?`https://wa.me/${PHONE.replace(/\D/g,"")}?text=${encodeURIComponent(message)}`:"";
const missing = "O WhatsApp da KROMA ainda não está configurado. O contato será adicionado em breve.";
const menuToggle=document.querySelector(".menu-toggle"),siteNav=document.querySelector("#site-nav"),siteHeader=document.querySelector(".k-site-header");
const closeMenu=()=>{siteNav.classList.remove("is-open");menuToggle.setAttribute("aria-expanded","false");menuToggle.setAttribute("aria-label","Abrir menu");};
menuToggle.addEventListener("click",()=>{const open=menuToggle.getAttribute("aria-expanded")==="true";menuToggle.setAttribute("aria-expanded",String(!open));menuToggle.setAttribute("aria-label",open?"Abrir menu":"Fechar menu");siteNav.classList.toggle("is-open",!open);});
siteNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&menuToggle.getAttribute("aria-expanded")==="true"){closeMenu();menuToggle.focus();}});
document.addEventListener("click",event=>{if(!siteNav.contains(event.target)&&!menuToggle.contains(event.target))closeMenu();});
const updateHeader=()=>siteHeader.classList.toggle("is-scrolled",window.scrollY>80);updateHeader();window.addEventListener("scroll",updateHeader,{passive:true});
document.querySelector(".contact-action").addEventListener("click",()=>{const url=waUrl("Olá! Vim pelo botão Pedir orçamento do topo do site da KROMA e quero personalizar minha moto. Meu modelo é:");if(url)window.open(url,"_blank","noopener,noreferrer");else alert(missing);});
document.querySelector(".k-custom").addEventListener("click",event=>{event.preventDefault();const url=waUrl("Olá! Quero conversar sobre uma personalização KROMA. Meu modelo é:");if(url)window.open(url,"_blank","noopener,noreferrer");else alert(missing);});
function renderFilters(active="Todos"){
 filters.innerHTML=["Todos",...new Set(products.map(p=>p.category))].map(cat=>`<button class="k-filter" type="button" data-category="${cat}" aria-pressed="${cat===active}">${cat}<span>${counts[cat]}</span></button>`).join("");
 filters.querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>{renderFilters(button.dataset.category);renderCards(button.dataset.category);}));
}
function renderCards(category="Todos"){
 const list=category==="Todos"?products:products.filter(product=>product.category===category);
 count.textContent=`${list.length} ${list.length===1?"serviço":"serviços"}`;
 grid.innerHTML=list.map(product=>`<article class="k-card"><div class="k-card-art"><img class="${product.crop||""}" src="${product.art}" alt="Imagem ilustrativa para ${product.name}" loading="lazy"><span class="k-label">PRÉVIA VISUAL</span></div><div class="k-card-body"><span class="k-card-category">${product.category}</span><h3>${product.name}</h3><p class="k-card-sub">${product.description}</p><div class="k-card-actions"><button class="k-buy-card" type="button" data-buy="${product.id}"><svg class="wa-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.15a9.78 9.78 0 0 0-8.34 14.88l-1.3 4.82 4.94-1.3A9.8 9.8 0 1 0 12 2.15Zm0 17.05a7.42 7.42 0 0 1-3.78-1.03l-.27-.16-2.8.74.75-2.73-.18-.28A7.43 7.43 0 1 1 12 19.2Zm4.08-5.56c-.22-.11-1.31-.65-1.51-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.17-.49.06-.22-.11-.94-.35-1.78-1.09-.66-.59-1.1-1.31-1.23-1.53-.13-.23-.01-.35.1-.46.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.42c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.55 2.37 3.75 3.32.52.23.93.37 1.25.47.53.17 1.01.15 1.39.09.42-.06 1.31-.54 1.5-1.05.19-.52.19-.96.13-1.05-.06-.09-.2-.15-.42-.26Z"/></svg> Consultar</button><button class="k-details" type="button" data-details="${product.id}">Detalhes</button></div></div></article>`).join("");
 grid.querySelectorAll("[data-buy]").forEach(button=>button.addEventListener("click",()=>buyProduct(products.find(p=>p.id===button.dataset.buy))));
 grid.querySelectorAll("[data-details]").forEach(button=>button.addEventListener("click",()=>openDetails(products.find(p=>p.id===button.dataset.details))));
}
function buyProduct(product){const url=waUrl(`Olá! Tenho interesse no serviço ${product.name} (${product.category}). Meu modelo é: ____. Quero confirmar aplicação, escopo, preço e prazo.`);if(url)window.open(url,"_blank","noopener,noreferrer");else alert(missing);}
document.querySelector(".k-close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
function renderAngleGallery(product){
 const image=document.querySelector('#gallery-image'),thumbs=document.querySelector('#gallery-thumbs'),caption=document.querySelector('#gallery-caption');
 const views=product.gallery?['Frente 3/4','Lateral','Traseira 3/4','Detalhe']:['Imagem ilustrativa'];
 image.style.backgroundImage=`url("${product.gallery||product.art}")`;
 image.style.backgroundSize=product.gallery||product.crop?'200% 200%':'cover';
 image.style.backgroundPosition=product.gallery||product.crop?`${product.crop?.includes('q2')||product.crop?.includes('q4')?100:0}% ${product.crop?.includes('q3')||product.crop?.includes('q4')?100:0}%`:'center';
 image.dataset.sheet=String(Boolean(product.gallery));image.dataset.crop=product.crop||'';image.dataset.angle='0';
 image.setAttribute('aria-label',`${product.name}: ${views[0]}.`);caption.textContent=views[0];
 thumbs.innerHTML=views.map((view,index)=>`<button class="k-gallery-thumb${index===0?' is-active':''}" type="button" aria-label="Mostrar ângulo: ${view}" aria-pressed="${index===0}" data-angle="${index}" style="--gallery-image:url('${product.gallery||product.art}');--angle-x:${index%2?100:0}%;--angle-y:${index>1?100:0}%"><span aria-hidden="true"></span></button>`).join('');
 thumbs.hidden=views.length===1;
 thumbs.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
  const angle=Number(button.dataset.angle);image.dataset.angle=String(angle);image.style.backgroundPosition=product.gallery?`${angle%2?100:0}% ${angle>1?100:0}%`:'center';
  image.setAttribute('aria-label',`${product.name}: ${views[angle]}.`);caption.textContent=views[angle];
  thumbs.querySelectorAll('button').forEach(item=>{const active=item===button;item.classList.toggle('is-active',active);item.setAttribute('aria-pressed',String(active));});
 }));
}
function openDetails(product){
 document.querySelector('#detail-category').textContent=product.category;const name=document.querySelector('#detail-name');name.setAttribute('aria-label',product.name);name.textContent=product.name;document.querySelector('#detail-base').textContent=product.base;document.querySelector('#detail-copy').textContent=product.description;
 renderAngleGallery(product);
 const note=document.querySelector('#service-note');note.textContent=`Imagem ilustrativa. Confirme o escopo, a aplicação, o preço e o prazo do serviço ${product.name} pelo WhatsApp.`;
 const buy=document.querySelector('#detail-buy');buy.onclick=event=>{event.preventDefault();buyProduct(product);};
 dialog.showModal();
}
renderFilters();renderCards();
