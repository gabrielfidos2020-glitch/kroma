const PHONE = window.KROMA_CONFIG?.whatsapp || "";
const colors = [
  {name:"Verde KROMA",hex:"#40e45f"},{name:"Roxo elétrico",hex:"#8b48e8"},{name:"Rosa neon",hex:"#ff4eaa"},{name:"Laranja",hex:"#ff853e"},{name:"Prata",hex:"#c5c8d0"}
];
const products = [
  {id:"volt",name:"KROMA Volt",category:"Autopropelidos",base:"Autopropelido",art:"assets/images/site/catalogo/kromas-showcase.png",crop:"q1",gallery:"assets/images/site/catalogo/kroma-angles-autopropelido.jpg",description:"Visual esportivo com carenagem colorida e grafismos de alto contraste."},
  {id:"neo",name:"KROMA Neo",category:"Ciclomotores",base:"Ciclomotor",art:"assets/images/site/projetos/estudo-depois.jpg",gallery:"assets/images/site/catalogo/kroma-angles-scooter.jpg",description:"Uma leitura retrô com acabamento de carenagem e detalhes marcantes."},
  {id:"pulse",name:"KROMA Pulse",category:"E-bikes",base:"E-bike",art:"assets/images/site/catalogo/kromas-showcase.png",crop:"q2",gallery:"assets/images/site/catalogo/kroma-angles-ebike.jpg",description:"Grafismos geométricos para uma composição leve e urbana."},
  {id:"trio",name:"KROMA Trio",category:"Triciclos",base:"Triciclo",art:"assets/images/site/catalogo/kromas-showcase.png",crop:"q3",gallery:"assets/images/site/catalogo/kroma-angles-triciclo.jpg",description:"Uma proposta de cor e identidade pensada para três rodas."},
  {id:"swift",name:"KROMA Swift",category:"Patinetes",base:"Patinete elétrico",art:"assets/images/site/catalogo/kromas-showcase.png",crop:"q4",gallery:"assets/images/site/catalogo/kroma-angles-patinete.jpg",description:"Acabamento limpo com uma assinatura visual vibrante."},
  {id:"kit",name:"KROMA Detail",category:"Acessórios",base:"Acessório sob consulta",art:"assets/images/site/catalogo/peca-carenagem-conceito.jpg",description:"Detalhes de cor, adesivagem e acabamento definidos para o seu veículo."}
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
 count.textContent=`${list.length} ${list.length===1?"conceito":"conceitos"}`;
 grid.innerHTML=list.map(product=>`<article class="k-card"><div class="k-card-art"><img class="${product.crop||""}" src="${product.art}" alt="Estudo visual conceitual de ${product.name}" loading="lazy"><span class="k-label">ESTUDO VISUAL</span></div><div class="k-card-body"><span class="k-card-category">${product.category}</span><h3 aria-label="${product.name}"><img class="k-card-wordmark" src="assets/brand/estilo-02-burgundy/kroma-wordmark.png" alt="KROMA"> ${product.name.replace("KROMA ","")}</h3><p class="k-card-sub">${product.description}</p><div class="k-card-actions"><button class="k-buy-card" type="button" data-buy="${product.id}"><svg class="wa-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.15a9.78 9.78 0 0 0-8.34 14.88l-1.3 4.82 4.94-1.3A9.8 9.8 0 1 0 12 2.15Zm0 17.05a7.42 7.42 0 0 1-3.78-1.03l-.27-.16-2.8.74.75-2.73-.18-.28A7.43 7.43 0 1 1 12 19.2Zm4.08-5.56c-.22-.11-1.31-.65-1.51-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.17-.49.06-.22-.11-.94-.35-1.78-1.09-.66-.59-1.1-1.31-1.23-1.53-.13-.23-.01-.35.1-.46.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.42c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.55 2.37 3.75 3.32.52.23.93.37 1.25.47.53.17 1.01.15 1.39.09.42-.06 1.31-.54 1.5-1.05.19-.52.19-.96.13-1.05-.06-.09-.2-.15-.42-.26Z"/></svg> Comprar</button><button class="k-details" type="button" data-details="${product.id}">+ Detalhes</button></div></div></article>`).join("");
 grid.querySelectorAll("[data-buy]").forEach(button=>button.addEventListener("click",()=>buyProduct(products.find(p=>p.id===button.dataset.buy),colors[0].name)));
 grid.querySelectorAll("[data-details]").forEach(button=>button.addEventListener("click",()=>openDetails(products.find(p=>p.id===button.dataset.details))));
}
function buyProduct(product,color){const url=waUrl(`Olá! Tenho interesse na personalização ${product.name} (${product.category}), na cor ${color}. Gostaria de confirmar compatibilidade, escopo, preço e prazo para o meu modelo:`);if(url)window.open(url,"_blank","noopener,noreferrer");else alert(missing);}
document.querySelector(".k-close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close();});
function renderAngleGallery(product){
 const image=document.querySelector('#gallery-image'),thumbs=document.querySelector('#gallery-thumbs'),caption=document.querySelector('#gallery-caption');
 const views=product.gallery?['Frente 3/4','Lateral','Traseira 3/4','Detalhe']:['Vista conceitual'];
 image.style.backgroundImage=`url("${product.gallery||product.art}")`;
 image.style.backgroundSize=product.gallery?'200% 200%':'cover';
 image.style.backgroundPosition=product.gallery?'0% 0%':'center';
 image.dataset.sheet=String(Boolean(product.gallery));image.dataset.crop=product.crop||'';image.dataset.angle='0';
 image.setAttribute('aria-label',`${product.name}: ${views[0]}. Imagem conceitual.`);caption.textContent=views[0];
 thumbs.innerHTML=views.map((view,index)=>`<button class="k-gallery-thumb${index===0?' is-active':''}" type="button" aria-label="Mostrar ângulo: ${view}" aria-pressed="${index===0}" data-angle="${index}" style="--gallery-image:url('${product.gallery||product.art}');--angle-x:${index%2?100:0}%;--angle-y:${index>1?100:0}%"><span aria-hidden="true"></span></button>`).join('');
 thumbs.hidden=views.length===1;
 thumbs.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
  const angle=Number(button.dataset.angle);image.dataset.angle=String(angle);image.style.backgroundPosition=product.gallery?`${angle%2?100:0}% ${angle>1?100:0}%`:'center';
  image.setAttribute('aria-label',`${product.name}: ${views[angle]}. Imagem conceitual.`);caption.textContent=views[angle];
  thumbs.querySelectorAll('button').forEach(item=>{const active=item===button;item.classList.toggle('is-active',active);item.setAttribute('aria-pressed',String(active));});
 }));
}
function openDetails(product){
 document.querySelector('#detail-category').textContent=product.category;const name=document.querySelector('#detail-name');name.setAttribute('aria-label',product.name);name.innerHTML=`<img class="k-detail-wordmark" src="assets/brand/estilo-02-burgundy/kroma-wordmark.png" alt="KROMA"> ${product.name.replace('KROMA ','')}`;document.querySelector('#detail-base').textContent=product.base;
 renderAngleGallery(product);
 const swatches=document.querySelector('.k-colors');swatches.innerHTML=colors.map((color,i)=>`<button class="k-color" type="button" style="--swatch:${color.hex}" title="${color.name}" aria-label="${color.name}" aria-pressed="${i===0}"><span class="k-color-mark" aria-hidden="true"></span></button>`).join('');
 const gallery=document.querySelector('.k-viewer');gallery.style.setProperty('--selected-color',colors[0].hex);
 let selected=colors[0].name;swatches.querySelectorAll('button').forEach((button,i)=>button.addEventListener('click',()=>{swatches.querySelectorAll('button').forEach(item=>item.setAttribute('aria-pressed','false'));button.setAttribute('aria-pressed','true');selected=colors[i].name;gallery.style.setProperty('--selected-color',colors[i].hex);}));
 const buy=document.querySelector('#detail-buy');buy.onclick=event=>{event.preventDefault();buyProduct(product,selected);};buy.innerHTML=`<svg class="wa-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.15a9.78 9.78 0 0 0-8.34 14.88l-1.3 4.82 4.94-1.3A9.8 9.8 0 1 0 12 2.15Zm0 17.05a7.42 7.42 0 0 1-3.78-1.03l-.27-.16-2.8.74.75-2.73-.18-.28A7.43 7.43 0 1 1 12 19.2Zm4.08-5.56c-.22-.11-1.31-.65-1.51-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.17-.49.06-.22-.11-.94-.35-1.78-1.09-.66-.59-1.1-1.31-1.23-1.53-.13-.23-.01-.35.1-.46.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.42c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.55 2.37 3.75 3.32.52.23.93.37 1.25.47.53.17 1.01.15 1.39.09.42-.06 1.31-.54 1.5-1.05.19-.52.19-.96.13-1.05-.06-.09-.2-.15-.42-.26Z"/></svg>Consultar pelo WhatsApp <span>↗</span>`;
 dialog.showModal();
}
renderFilters();renderCards();
