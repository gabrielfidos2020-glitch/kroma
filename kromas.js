const products = [
  {id:"adesivagem-completa",name:"Adesivagem completa",category:"Personalização visual",price:230,base:"Toda a carenagem",art:"JET/desktop/JET-ADESIVAGEM-COMPLETA.jpg",mobileArt:"JET/mobile/JET-ADESIVAGEM-COMPLETA.jpg",cardArt:"assets/images/site/service-cards/JET-adesivagem-completa.png",x12Art:"X12/desktop/X12-ADESIVAGEM-COMPLETA-SERVICO-INDIVIDUAL.jpg",x12MobileArt:"X12/mobile/X12-ADESIVAGEM-COMPLETA-SERVICO-INDIVIDUAL.jpg",description:"Personalização de toda a carenagem com vinil adesivo, alterando a cor e o visual da motinha."},
  {id:"adesivagem-parcial",name:"Adesivagem parcial",category:"Personalização visual",price:120,base:"Partes específicas da motinha",art:"JET/desktop/JET-ADESIVAGEM-PARCIAL-R$150.jpg",mobileArt:"JET/mobile/JET-ADESIVAGEM-PARCIAL-R$150.jpg",cardArt:"assets/images/site/service-cards/JET-adesivagem-parcial.png",x12Art:"X12/desktop/X12-ADESIVAGEM-PARCIAL.jpg",x12MobileArt:"X12/mobile/X12-ADESIVAGEM-PARCIAL.jpg",description:"Aplicação de adesivos em partes específicas da motinha, com cores e estilos personalizados."},
  {id:"led-decorativo",name:"LED decorativo",category:"Som e iluminação",price:160,base:"Conforme compatibilidade do veículo",art:"JET/desktop/JET-ILUMINACAO-LED.jpg",mobileArt:"JET/mobile/JET-ILUMINACAO-LED.jpg",cardArt:"assets/images/site/service-cards/JET-led-decorativo.png",x12Art:"X12/desktop/X12-ILUMINACAO-LED-SERVICO-INDIVIDUAL.jpg",x12MobileArt:"X12/mobile/X12-ILUMINACAO-LED-SERVICO-INDIVIDUAL.jpg",description:"Instalação de iluminação LED decorativa, conforme compatibilidade do veículo."},
  {id:"som-bluetooth",name:"Som Bluetooth",category:"Som e iluminação",price:290,base:"Conforme compatibilidade do veículo",art:"JET/desktop/JET-SOM-BLUETOOTH-SERVICO-INDIVIDUAL.jpg",mobileArt:"JET/mobile/JET-SOM-BLUETOOTH-SERVICO-INDIVIDUAL.jpg",cardArt:"assets/images/site/service-cards/JET-som-bluetooth.png",x12Art:"X12/desktop/X12-SOM-BLUETOOTH-SERVICO-INDIVIDUAL.jpg",x12MobileArt:"X12/mobile/X12-SOM-BLUETOOTH-SERVICO-INDIVIDUAL.jpg",description:"Instalação de sistema de som amplificado com conexão Bluetooth."},
  {id:"retrovisores-esportivos",name:"Retrovisores esportivos",category:"Peças e acessórios",price:130,base:"Par de retrovisores compatíveis",art:"JET/desktop/JET-RETROVISORES-ESPORTIVOS-SERVICO-INDIVIDUAL.jpg",mobileArt:"JET/mobile/JET-RETROVISORES-ESPORTIVOS-SERVICO-INDIVIDUAL.jpg",cardArt:"assets/images/site/service-cards/JET-retrovisores-esportivos.png",x12Art:"X12/desktop/X12-RETROVISORES-ESPORTIVOS-SERVICO-INDIVIDUAL.jpg",x12MobileArt:"X12/mobile/X12-RETROVISORES-ESPORTIVOS-SERVICO-INDIVIDUAL.jpg",description:"Substituição do par de retrovisores por modelos esportivos compatíveis."},
  {id:"manoplas-esportivas",name:"Manoplas esportivas",category:"Peças e acessórios",price:65,base:"Um par de manoplas",art:"JET/desktop/JET-MANOPLAS-PERSONALIZADAS-SERVICO-INDIVIDUAL.jpg",mobileArt:"JET/mobile/JET-MANOPLAS-PERSONALIZADAS-SERVICO-INDIVIDUAL.jpg",cardArt:"assets/images/site/service-cards/JET-manoplas-esportivas.png",x12Art:"X12/desktop/X12-MANOPLAS-PERSONALIZADAS-SERVICO-INDIVIDUAL.jpg",x12MobileArt:"X12/mobile/X12-MANOPLAS-PERSONALIZADAS-SERVICO-INDIVIDUAL.jpg",description:"Instalação de um par de manoplas personalizadas."},
  {id:"kroma-clean",name:"KROMA CLEAN",category:"Limpeza, proteção e segurança",price:80,base:"Limpeza externa + proteção do display",art:"JET/desktop/JET-00-ORIGINAL.jpg",mobileArt:"JET/mobile/JET-00-ORIGINAL.jpg",cardArt:"assets/images/site/service-cards/JET-kroma-clean.png",x12Art:"X12/desktop/X12-KROMA-CLEAN.jpg",x12MobileArt:"X12/mobile/X12-KROMA-CLEAN.jpg",cleanIncluded:true,description:"Limpeza externa completa da motinha e aplicação de película protetora no display."},
  {id:"bau-personalizado",name:"Baú personalizado",category:"Peças e acessórios",price:180,base:"Baú com acabamento visual personalizado",art:"JET/desktop/JET-BAU-PERSONALIZADO-SERVICO-INDIVIDUAL.jpg",mobileArt:"JET/mobile/JET-BAU-PERSONALIZADO-SERVICO-INDIVIDUAL.jpg",cardArt:"assets/images/site/service-cards/JET-bau-personalizado.png",description:"Baú com acabamento personalizado para combinar com o estilo da sua motinha."},
  {id:"capa-banco",name:"Capa de banco",category:"Peças e acessórios",price:150,base:"Capa para banco compatível",art:"JET/desktop/JET-CAPA-BANCO-SERVICO-INDIVIDUAL.jpg",mobileArt:"JET/mobile/JET-CAPA-BANCO-SERVICO-INDIVIDUAL.jpg",cardArt:"assets/images/site/service-cards/JET-capa-banco.png",x12Art:"X12/desktop/X12-CAPA-DE-BANCO-SERVICO-INDIVIDUAL.jpg",x12MobileArt:"X12/mobile/X12-CAPA-DE-BANCO-SERVICO-INDIVIDUAL.jpg",description:"Capa de banco para proteger o assento e renovar o acabamento da motinha."}
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
    `<article class="k-card"><div class="k-card-art"><picture><img src="${product.cardArt||product.art}" alt="Imagem conceitual de ${product.name}" loading="lazy"></picture><button class="k-card-image-button" type="button" data-details="${product.id}" aria-label="Ver detalhes de ${product.name}"><span class="k-card-title">${product.name}</span></button><button class="k-card-whatsapp" type="button" data-buy="${product.id}" aria-label="Comprar ${product.name} pelo WhatsApp"><svg class="wa-svg" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.4A12.2 12.2 0 0 0 5.5 21.8L4 27.5l5.9-1.5A12.2 12.2 0 1 0 16 3.4Z"/><path d="M11.2 9.7c-.4 0-.9.2-1.2.6-.4.4-1.1 1.1-1.1 2.6s1.1 3.1 1.3 3.3c.2.2 2.2 3.6 5.5 4.9 2.7 1.1 3.3.9 3.9.8.6-.1 1.9-.8 2.1-1.5.3-.8.3-1.4.2-1.6-.1-.2-.4-.3-.7-.5l-2.2-1c-.3-.1-.5-.2-.8.2l-1.1 1.2c-.2.2-.4.2-.7.1-.3-.1-1.4-.5-2.6-1.5-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.5c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.6-.7-.6h-.6Z"/></svg> Comprar</button></div></article>`
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
  document.querySelector(".service-model-choice")?.remove();
  const art = product.art;
  const mobileArt = product.mobileArt;
  image.innerHTML = `${mobileArt?`<source media="(max-width:760px)" srcset="${mobileArt}">`:""}<img src="${art}" alt="Imagem conceitual de ${product.name}">`;
  image.style.backgroundImage = "none";
  image.style.backgroundSize = "contain";
  image.style.backgroundPosition = "center";
  image.setAttribute("aria-label", `Imagem conceitual de ${product.name}`);
  document.querySelector("#gallery-caption").textContent = "Imagem conceitual";
  thumbs.hidden = true;
  const oldChoice = document.querySelector(".service-model-choice");
  oldChoice?.remove();
  if (product.x12Art || product.id === "adesivagem-completa" || product.id === "adesivagem-parcial") {
    const choice = document.createElement("fieldset");
    choice.className = "combo-model-choice service-model-choice";
    choice.innerHTML = '<legend>Modelo para visualizar</legend><label><input type="radio" name="service-model" value="jet" checked><span>JET</span></label><label><input type="radio" name="service-model" value="x12"><span>X12</span></label>';
    choice.addEventListener("change", () => {
      const isX12 = choice.querySelector("[name='service-model']:checked").value === "x12";
      const selectedArt = isX12 ? product.x12Art : product.art;
      image.querySelector("img").src = selectedArt;
      image.querySelector("img").alt = `Imagem conceitual de ${product.name} para ${isX12 ? "X12" : "JET"}`;
      const mobileSource = image.querySelector("source");
      if (mobileSource) mobileSource.srcset = isX12 ? product.x12MobileArt : product.mobileArt;
    });
    document.querySelector("#detail-category").after(choice);
  }
  document.querySelector("#service-note").textContent = "Preço comercial atual. Confirme compatibilidade e instalação com a KROMA antes de fechar.";
  document.querySelector("#detail-buy").onclick = event => {
    event.preventDefault();
    buyProduct(product);
  };
  dialog.showModal();
}

renderFilters();
renderCards();
