(() => {
  const dialog = document.querySelector("#clean-upsell-dialog");
  if (!dialog) return;

  const title = dialog.querySelector("#clean-upsell-title");
  const copy = dialog.querySelector("#clean-upsell-copy");
  const addButton = dialog.querySelector("#clean-upsell-confirm");
  const skipButton = dialog.querySelector("#clean-upsell-skip");
  const status = dialog.querySelector("#clean-upsell-status");
  let pendingMessage = "";
  let cleanAlreadySelected = false;

  const close = () => dialog.close();
  const openWhatsApp = (addClean) => {
    const phone = window.KROMA_CONFIG?.whatsapp?.replace(/\D/g, "") || "";
    if (!phone) {
      status.textContent = "O WhatsApp da KROMA ainda não está configurado.";
      status.hidden = false;
      return;
    }
    const message = addClean
      ? `${pendingMessage}\n\nQuero adicionar KROMA CLEAN ao pedido (+ R$ 80).`
      : pendingMessage;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    close();
  };

  window.KROMAWhatsApp = {
    ask(message, options = {}) {
      pendingMessage = message;
      cleanAlreadySelected = options.cleanIncluded === true;
      status.hidden = true;
      dialog.classList.toggle("is-clean-selected", cleanAlreadySelected);
      title.textContent = cleanAlreadySelected ? "KROMA CLEAN selecionado" : "Quer adicionar KROMA CLEAN?";
      copy.textContent = cleanAlreadySelected
        ? "Esse serviço ou combo já inclui o KROMA CLEAN. Confira a escolha e continue para falar com a KROMA."
        : "Complete seu pedido com limpeza externa e película protetora no display por + R$ 80.";
      addButton.textContent = cleanAlreadySelected ? "Seguir para o WhatsApp" : "Adicionar KROMA CLEAN · + R$ 80";
      skipButton.textContent = cleanAlreadySelected ? "Voltar" : "Continuar sem CLEAN";
      dialog.showModal();
      addButton.focus();
    }
  };

  addButton.addEventListener("click", () => openWhatsApp(!cleanAlreadySelected));
  skipButton.addEventListener("click", () => cleanAlreadySelected ? close() : openWhatsApp(false));
  dialog.querySelector(".clean-upsell-close").addEventListener("click", close);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });
})();
