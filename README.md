# KROMA — site inicial

Página estática, responsiva e sem dependências de build. Os dados temporários estão sinalizados no próprio site.

## Rodar localmente

Na pasta do projeto, execute `node server.mjs` e abra `http://localhost:8000`. Não há dependências para instalar. Também funciona com a extensão Live Server do VS Code ou abrindo `index.html` diretamente no navegador.

## Onde editar

- `assets/brand/`: logos aprovados. `kroma-simbolo.png` é o símbolo isolado; `kroma-logo-vertical.png` é o logo vertical do painel 02.
- `assets/images/kroma-hero-conceito.jpg`: imagem conceitual gerada para o destaque visual; não representa um trabalho já feito pela KROMA. Troque pelo retrato real da motinha quando disponível.
- `assets/images/kroma-hero-mobile.png` e `assets/images/kroma-identidade-mobile.png`: composições verticais dedicadas às seções inicial e “Eu tenho identidade” em telas de até 760 px. As versões desktop seguem nos caminhos existentes.
- `assets/images/personalizacao-conceito.jpg`: estudo visual ousado da seção Personalização. É conceitual, não um serviço realizado.
- `assets/images/peca-adesivos-conceito.jpg`, `peca-retrovisores-conceito.jpg` e `peca-carenagem-conceito.jpg`: imagens conceituais dos cards de Peças; não confirmam estoque, preço ou compatibilidade.
- `assets/images/estudo-antes.jpg` e `estudo-depois.jpg`: par de imagens geradas para um estudo visual conceitual. A seção identifica que não são fotos de um serviço realizado. Substitua pelo antes/depois real ao publicar o primeiro projeto.
- A seção de depoimentos usa cartões em perspectiva com rolagem vertical. Os textos e nomes atuais são exemplos demonstrativos; substitua por depoimentos reais autorizados antes de usá-los como avaliações de clientes.
- `assets/illustrations/`: ilustrações temporárias do catálogo. Substitua pelas fotos reais das peças quando estiverem disponíveis. Atualize os caminhos no `app.js`.
- `app.js`: objeto `CONFIG` no início do arquivo. Edite o número de WhatsApp em um único lugar, URL do Instagram e itens do catálogo (nome, descrição, compatibilidade, imagem e mensagem). Preços e prazos não foram presumidos.
- `index.html`: textos, estrutura das seções e contatos/localidade exibidos.
- `styles.css`: cores, tipografia, layout e comportamento responsivo.

## Dados pendentes para lançar

- Número oficial de WhatsApp com DDI e DDD; perfil e URL do Instagram.
- Fotos reais do antes, processo e depois da primeira motinha; fotos reais dos produtos.
- Peças efetivamente disponíveis, modelos compatíveis e confirmação do fornecedor.
- Preços e prazos atuais de cada peça, quando confirmados pelo fornecedor.
- Endereço exato ou área/política de atendimento local, se quiser exibir no site.
- Revisar os textos e o escopo dos serviços após o primeiro projeto.

## Publicação

O site é estático e pode ser servido pelo GitHub Pages a partir da raiz da branch `main`. Depois que o Pages terminar de publicar, acesse `https://gabrielfidos2020-glitch.github.io/kroma/`.
