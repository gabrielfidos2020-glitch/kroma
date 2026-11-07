(() => {
  const config = window.KROMA_CONFIG || {};
  const modal = document.querySelector("#combo-modal");
  const cards = [...document.querySelectorAll(".combo-card")];
  const waUrl = (message) => {
    const phone = String(config.whatsapp || "").replace(/\D/g, "");
    return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : "";
  };

  const detailTitle = document.querySelector("#detail-title");
  const detailImage = document.querySelector("#detail-image");
  const detailText = document.querySelector("#detail-text");
  const detailAction = document.querySelector("#detail-action");
  const setWhatsApp = (anchor, message) => {
    const url = waUrl(message);
    anchor.href = url || "#contato-indisponivel";
    anchor.dataset.message = message;
    anchor.setAttribute("aria-disabled", String(!url));
    anchor.title = url ? "Abrir uma conversa com a KROMA" : "Configure o WhatsApp em contact-config.js";
    if (!anchor.dataset.whatsappGuard) {
      anchor.dataset.whatsappGuard = "true";
      anchor.addEventListener("click", (event) => {
        if (!waUrl(anchor.dataset.message || "")) {
          event.preventDefault();
          const status = document.querySelector("#whatsapp-status");
          status.textContent = "WhatsApp ainda não configurado. Preencha contact-config.js.";
          status.hidden = false;
        }
      });
    }
  };

  cards.forEach((card) => {
    card.querySelectorAll(".details-button").forEach((button) => button.addEventListener("click", () => {
        const name = card.dataset.name;
        detailTitle.textContent = name;
        detailImage.src = card.dataset.image;
        detailImage.alt = `Estudo visual ilustrativo do combo ${name}`;
        detailText.textContent = card.dataset.description;
        modal.dataset.combo = name;
        modal.showModal();
        setWhatsApp(detailAction, `Olá! Quero consultar o combo ${name}. Ainda preciso confirmar meu modelo de moto, disponibilidade, composição, preço e prazo.`);
        modal.querySelector("input[name='addon']:checked")?.focus({ preventScroll:true });
      }));
  });

  modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => { if (event.target === modal) modal.close(); });
  modal.querySelectorAll("input[name='addon']").forEach((input) => input.addEventListener("change", () => {
    const name = modal.dataset.combo || "um combo";
    const addon = modal.querySelector("input[name='addon']:checked")?.value || "sem adicional";
    setWhatsApp(detailAction, `Olá! Quero consultar o combo ${name} com opção ${addon}. Confirmem disponibilidade, composição, preço e prazo, por favor.`);
  }));

  document.querySelectorAll("[data-whatsapp-message]").forEach((anchor) => {
    setWhatsApp(anchor, anchor.dataset.whatsappMessage);
    anchor.addEventListener("click", (event) => {
      if (!waUrl(anchor.dataset.message || "")) {
        event.preventDefault();
        const status = document.querySelector("#whatsapp-status");
        status.textContent = "WhatsApp ainda não configurado. Preencha contact-config.js.";
        status.hidden = false;
      }
    });
  });

  const menuButton = document.querySelector("#menu-toggle");
  const nav = document.querySelector("#main-nav");
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.dataset.open = String(open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.dataset.open = "false";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
  }));

  const selected = document.querySelector("#selected-services");
  const quoteServices = document.querySelector("#quote-services");
  const updateSelection = () => {
    const names = [...document.querySelectorAll(".service-item input:checked")].map((input) => input.value);
    selected.textContent = names.length ? `${names.length} ${names.length === 1 ? "serviço selecionado" : "serviços selecionados"} · valor sob orçamento` : "Selecione serviços para incluir na consulta.";
    const message = names.length
      ? `Olá! Quero montar uma personalização com: ${names.join(", ")}. Meu modelo é: ____. Podem confirmar escopo, preço e prazo?`
      : "Olá! Quero ajuda para montar uma personalização para minha moto. Meu modelo é: ____.";
    setWhatsApp(quoteServices, message);
  };
  document.querySelectorAll(".service-item input").forEach((input) => input.addEventListener("change", updateSelection));
  updateSelection();

})();
