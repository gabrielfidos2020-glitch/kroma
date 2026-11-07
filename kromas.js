const products = [
  {id:"adesivagem-completa",name:"Adesivagem completa",category:"Personalização visual",price:230,base:"Toda a carenagem",art:"assets/images/site/combos/kroma-start-jet.png",description:"Personalização de toda a carenagem com vinil adesivo, alterando a cor e o visual da motinha."},
  {id:"adesivagem-parcial",name:"Adesivagem parcial",category:"Personalização visual",price:120,base:"Partes específicas da motinha",art:"assets/images/site/combos/kroma-start-jet.png",description:"Aplicação de adesivos em partes específicas da motinha, com cores e estilos personalizados."},
  {id:"led-decorativo",name:"LED decorativo",category:"Som e iluminação",price:160,base:"Conforme compatibilidade do veículo",art:"assets/images/site/combos/kroma-street-jet.png",description:"Instalação de iluminação LED decorativa, conforme compatibilidade do veículo."},
  {id:"som-bluetooth",name:"Som Bluetooth",category:"Som e iluminação",price:290,base:"Conforme compatibilidade do veículo",art:"assets/images/site/combos/kroma-pulse-jet.png",description:"Instalação de sistema de som amplificado com conexão Bluetooth."},
  {id:"retrovisores-esportivos",name:"Retrovisores esportivos",category:"Peças e acessórios",price:130,base:"Par de retrovisores compatíveis",art:"assets/images/site/combos/kroma-full-x12.png",description:"Substituição do par de retrovisores por modelos esportivos compatíveis."},
  {id:"manoplas-esportivas",name:"Manoplas esportivas",category:"Peças e acessórios",price:65,base:"Um par de manoplas",art:"assets/images/site/combos/kroma-full-x12.png",description:"Instalação de um par de manoplas personalizadas."},
  {id:"kroma-clean",name:"KROMA CLEAN",category:"Limpeza, proteção e segurança",price:80,base:"Limpeza externa + proteção do display",art:"assets/images/site/combos/kroma-start-jet.png",cleanIncluded:true,description:"Limpeza externa completa da motinha e aplicação de película protetora no display."}
];

const filters = document.querySelector(".k-filters");
const grid = document.querySelector("#k-grid");
const count = document.querySelector(".k-count");
const dialog = document.querySelector("#detail-dialog");
const money = value => `R$ ${Number(value).toLocaleString("pt-BR")}`;
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const siteHeader = document.querySelector(".k-site-header");

const closeMenu = () => {
  siteNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
};
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  menuToggle.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
  siteNav.classList.toggle("is-open", !open);
});
siteNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener("click", event => {
  if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});
const updateHeader = () => siteHeader.classList.toggle("is-scrolled", window.scrollY > 80);
updateHeader();
window.addEventListener("scroll", updateHeader, {passive:true});
document.querySelector(".contact-action").addEventListener("click", () => {
  window.KROMAWhatsApp.ask("Olá! Vim pelo botão Pedir orçamento do topo do site da KROMA e quero personalizar minha moto. Meu modelo é:");
});
document.querySelector(".k-custom").addEventListener("click", event => {
  event.preventDefault();
  window.KROMAWhatsApp.ask("Olá! Quero conversar sobre uma personalização KROMA. Meu modelo é:");
});

function renderFilters(active = "Todos") {
  const categories = [...new Set(products.map(product => product.category))];
  const getCount = category => category === "Todos" ? products.length : products.filter(product => product.category === category).length;
  filters.innerHTML = ["Todos", ...categories].map(category =>
    `<button class="k-filter" type="button" data-category="${category}" aria-pressed="${category === active}">${category}<span>${getCount(category)}</span></button>`
  ).join("");
  filters.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    renderFilters(button.dataset.category);
    renderCards(button.dataset.category);
  }));
}

function renderCards(category = "Todos") {
  const list = category === "Todos" ? products : products.filter(product => product.category === category);
  count.textContent = `${list.length} ${list.length === 1 ? "serviço" : "serviços"}`;
  grid.innerHTML = list.map(product =>
    `<article class="k-card"><div class="k-card-art"><img src="${product.art}" alt="Imagem conceitual de ${product.name}" loading="lazy"><span class="k-label">PRÉVIA VISUAL</span></div><div class="k-card-body"><span class="k-card-category">${product.category}</span><h3>${product.name}</h3><p class="k-card-sub">${product.description}</p><div class="k-card-price">${money(product.price)}</div><div class="k-card-actions"><button class="k-buy-card" type="button" data-buy="${product.id}"><svg class="wa-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.15a9.78 9.78 0 0 0-8.34 14.88l-1.3 4.82 4.94-1.3A9.8 9.8 0 1 0 12 2.15Zm0 17.05a7.42 7.42 0 0 1-3.78-1.03l-.27-.16-2.8.74.75-2.73-.18-.28A7.43 7.43 0 1 1 12 19.2Zm4.08-5.56c-.22-.11-1.31-.65-1.51-.73-.2-.07-.35-.11-.5.11-.15.22-.57.73-.7.88-.13.15-.26.17-.49.06-.22-.11-.94-.35-1.78-1.09-.66-.59-1.1-1.31-1.23-1.53-.13-.23-.01-.35.1-.46.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.42c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.55 2.37 3.75 3.32.52.23.93.37 1.25.47.53.17 1.01.15 1.39.09.42-.06 1.31-.54 1.5-1.05.19-.52.19-.96.13-1.05-.06-.09-.2-.15-.42-.26Z"/></svg> Consultar</button><button class="k-details" type="button" data-details="${product.id}">Detalhes</button></div></div></article>`
  ).join("");
  grid.querySelectorAll("[data-buy]").forEach(button => button.addEventListener("click", () => buyProduct(products.find(product => product.id === button.dataset.buy))));
  grid.querySelectorAll("[data-details]").forEach(button => button.addEventListener("click", () => openDetails(products.find(product => product.id === button.dataset.details))));
}

function buyProduct(product) {
  window.KROMAWhatsApp.ask(`Olá! Tenho interesse em ${product.name} por ${money(product.price)}. Minha motinha é: ____. Podem confirmar compatibilidade e instalação?`, {cleanIncluded:product.cleanIncluded});
}

document.querySelector(".k-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

function openDetails(product) {
  document.querySelector("#detail-category").textContent = product.category;
  const name = document.querySelector("#detail-name");
  name.setAttribute("aria-label", product.name);
  name.textContent = product.name;
  document.querySelector("#detail-base").textContent = product.base;
  document.querySelector("#detail-price").textContent = money(product.price);
  document.querySelector("#detail-copy").textContent = product.description;
  const image = document.querySelector("#gallery-image");
  const thumbs = document.querySelector("#gallery-thumbs");
  image.style.backgroundImage = `url("${product.art}")`;
  image.style.backgroundSize = "cover";
  image.style.backgroundPosition = "center";
  image.setAttribute("aria-label", `Imagem conceitual de ${product.name}`);
  document.querySelector("#gallery-caption").textContent = "Imagem conceitual";
  thumbs.hidden = true;
  document.querySelector("#service-note").textContent = "Preço comercial atual. Confirme compatibilidade e instalação com a KROMA antes de fechar.";
  document.querySelector("#detail-buy").onclick = event => {
    event.preventDefault();
    buyProduct(product);
  };
  dialog.showModal();
}

renderFilters();
renderCards();
