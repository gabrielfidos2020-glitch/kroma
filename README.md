# KROMA — site inicial

Página estática, responsiva e sem dependências de build. Os dados temporários estão sinalizados no próprio site.

## Rodar localmente

Na pasta do projeto, execute `node server.mjs` e abra `http://localhost:8000`. Não há dependências para instalar. Também funciona com a extensão Live Server do VS Code ou abrindo `index.html` diretamente no navegador.

## Onde editar

- `assets/brand/`: logos e animações aprovados. Os quadros da vinheta ficam em `assets/brand/animation-frames/`.
- `assets/images/site/`: imagens usadas pelo site, separadas em `home/`, `projetos/` e `catalogo/`.
- `assets/images/campanhas/`: imagens conceituais do storyboard antes/depois.
- `assets/images/arquivo/`: originais e formatos alternativos mantidos como referência; não são usados diretamente pelo site.
- `assets/images/site/home/kroma-hero-conceito.jpg`: imagem conceitual gerada para o destaque visual; não representa um trabalho já feito pela KROMA. Troque pelo retrato real da motinha quando disponível.
- `assets/images/site/home/kroma-hero-mobile.png` e `assets/images/site/home/kroma-identidade-mobile.png`: composições verticais dedicadas às seções inicial e “Eu tenho identidade” em telas de até 760 px. As versões desktop seguem nos caminhos existentes.
- `assets/images/site/home/personalizacao-conceito.jpg`: estudo visual ousado da seção Personalização. É conceitual, não um serviço realizado.
- `assets/images/site/catalogo/peca-adesivos-conceito.jpg`, `peca-retrovisores-conceito.jpg` e `peca-carenagem-conceito.jpg`: imagens conceituais dos cards de Peças; não confirmam estoque, preço ou compatibilidade.
- `assets/images/site/catalogo/kromas-showcase.png`: painel conceitual gerado para os cards de autopropelidos, e-bikes, triciclos e patinetes na nova vitrine. As imagens são estudos, não produtos ou projetos confirmados.
- `kromas.html`, `kromas.css` e `kromas.js`: nova vitrine KROMAS, filtros, cartões, consulta pelo WhatsApp e visualizador 3D conceitual com rotação e troca de cor. Edite nomes, descrições, categorias e imagens no array `products` em `kromas.js`.
- `assets/images/site/projetos/estudo-antes.jpg` e `estudo-depois.jpg`: par de imagens geradas para um estudo visual conceitual. A seção identifica que não são fotos de um serviço realizado. Substitua pelo antes/depois real ao publicar o primeiro projeto.
- A seção de depoimentos usa cartões em perspectiva com rolagem vertical. Os textos e nomes atuais são exemplos demonstrativos; substitua por depoimentos reais autorizados antes de usá-los como avaliações de clientes.
- `assets/illustrations/`: ilustrações temporárias do catálogo. Substitua pelas fotos reais das peças quando estiverem disponíveis. Atualize os caminhos no `app.js`.
- `contact-config.js`: número de WhatsApp compartilhado pelas duas páginas. Edite aqui o número com DDI e DDD, só com dígitos.
- `app.js`: URL do Instagram e catálogo atual de peças (nome, descrição, compatibilidade, imagem e mensagem). Preços e prazos não foram presumidos.
- `index.html`: textos, estrutura das seções e contatos/localidade exibidos.
- `styles.css`: cores, tipografia, layout e comportamento responsivo.
- A fonte Nighty licenciada não foi fornecida; por enquanto as páginas usam Righteous como alternativa retrô do Google Fonts. Os arquivos de logo aprovados mantêm o lettering oficial KROMA.

## Dados pendentes para lançar

- Perfil e URL oficial do Instagram.
- Fotos reais do antes, processo e depois da primeira motinha; fotos reais dos produtos.
- Peças efetivamente disponíveis, modelos compatíveis e confirmação do fornecedor.
- Preços e prazos atuais de cada peça, quando confirmados pelo fornecedor.
- Arquivo/licença da fonte Nighty, se quiser trocar a alternativa Righteous por ela.
- Endereço exato ou área/política de atendimento local, se quiser exibir no site.
- Revisar os textos e o escopo dos serviços após o primeiro projeto.

## Publicação

O site é estático e pode ser servido pelo GitHub Pages a partir da raiz da branch `main`. Depois que o Pages terminar de publicar, acesse `https://gabrielfidos2020-glitch.github.io/kroma/`.

## Materiais de apoio

Briefs e previews de produção ficam em `materiais/antes-de-depois/` e `materiais/previews/`. Backups, capturas e instruções de revisão ficam em `materiais/revisoes/`.

## Materiais de divulgação

O banco de vídeos para divulgação, incluindo o antes/depois silencioso, frames-chave e prompts no padrão BeeMídia, está em [banco de divulgação](banco-de-divulgacao/README.md).
