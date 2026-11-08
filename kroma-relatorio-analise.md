# Relatório completo: repositório KROMA

Preparado para Marco Fidos. A revisão adversarial teve dois revisores por eixo. Critério de veredicto:
- **confirmado**: os dois revisores confirmaram.
- **parcial**: pelo menos um revisor pediu correção. A correção está aplicada no texto.
- **confirmado por um revisor**: um confirmou e o outro declarou não conseguir verificar. Isso está sinalizado onde ocorre.

---

## 1) Sumário executivo

O método de geração (anexos rotulados, ordem de prioridade, trava de produto, texto "NONE", negativos) é sólido. O que trava o uso real é um conjunto de problemas concretos:
- Vídeos de terceiros estão versionados no repo.
- Não há material real do produto.
- Há inconsistências nos pacotes de prompt.
- O site tem conteúdo ilustrativo apresentado com aparência de real.

Top 5 ações, priorizadas:

1. **Conter a exposição de direitos autorais (D4).** Tornar o repo privado, ou tirar de lá a pasta banco-de-divulgacao/referencias, e conferir se há forks ou clones. Só depois reescrever o histórico (filter-repo), porque isso é destrutivo e não desfaz cópias já feitas. A severidade alta pressupõe repo público, o que não foi verificado.
2. **Rodar um piloto manual com fotos reais P1/P2 e decidir go/no-go (A09, B8, B9).** Nenhum prompt foi executado com produto real. Isso vem antes de qualquer automação ou expansão (A/B, CTA, variações).
3. **Corrigir os pacotes de prompt (A01, A03, A02, A04).** Principais correções:
   - Trocar o R1 do plano geral, que hoje é um close.
   - Dar a cada IMG sua própria descrição.
   - Alinhar timeline e durações com os cortes reais do M1.
4. **Corrigir o conteúdo do site com risco de enganar o consumidor (C-01, C-02, C-03, C-13).** São quatro pontos:
   - Preços apresentados como "comerciais atuais", contradizendo o README.
   - Rótulo de imagem gerada por IA com 9px.
   - Depoimentos fictícios.
   - Ausência de prazo, garantia e identificação do fornecedor.
5. **Reduzir peso e ruído publicado (C-04, C-05, C-06, D1).** Converter os PNGs para WebP/AVIF. Tirar as páginas de teste da raiz publicada. Adicionar as metatags básicas de SEO e compartilhamento.

---

## 2) Capítulos por eixo

### Eixo A: Qualidade dos prompts e do método

Resumo: o método é sólido, mas os pacotes têm falhas que impedem o uso real. Durações foram lidas dos manifest.json, não medidas (ffprobe ausente). Nada foi gerado.

**A01. R1 "depois-plano-geral" (06) é close frontal; contradiz IMG 3** (severidade alta, confirmado)
- Evidência:
  - Os frames 06, 07 e 08 são closes quase idênticos do farol/carenagem. O plano geral do depois é 04/05.
  - PROMPTS_OMNI_1.1_FLASH.md:17 usa o 06 como R1 de IMG 3, e :68 pede "entire vehicle visible".
  - Os frames 05 e 08 não são usados.
- Recomendação:
  - Usar 05_revelacao-depois.jpg como R1 de IMG 3 e 07 como R1 de IMG 4.
  - Renomear o 06 para "depois-close" ou descartá-lo.
- Omissão incorporada (revisor 2): S1 pede "same front three-quarter studio setup" enquanto o R1 06 é close, então há conflito também entre S1 e R1.

**A02. M1 mostra outro veículo no depois; corte real não bate com a timeline** (alta, parcial)
- Evidência:
  - O antes (01/02) é scooter cinza e o depois (04/05) é scooter esportivo verde.
  - O frame 04 ("fim-pulso-logo", 4,8 s) já mostra o depois. O 06 (6,8 s) já é close, antes do corte previsto aos 7,3 s.
- Correção da revisão: o pacote já diz que o material é conceitual e que M1 serve só para ritmo. A lacuna é não dizer explicitamente que M1 não vale para forma do veículo. O corte real aos 7,3 s não foi verificado por um dos revisores.
- Recomendação:
  - Declarar que M1 é só tempo.
  - Remarcar os cortes reais.
  - Corrigir o rótulo do frame 04.
- Omissões incorporadas:
  - O beat/SFX aos 5,0 s fica deslocado, pois a revelação no M1 ocorre antes de 4,8 s.
  - Os R1 de IMG 1 e IMG 3 vêm de veículos distintos, o que enfraquece "R1 só para composição".

**A03. Descrição do estilo colada em cada slot de plano nos 5 pacotes de referência** (alta, confirmado)
- Evidência:
  - Em garagem PROMPT:63 o IMG 2 recebe a descrição da sequência inteira. A frase se repete em :33, :70 e :76.
  - Os slots IMG 3-5 (:64-66) são genéricos.
  - Os 5 prompts (84 linhas cada) diferem só em poucos trechos.
- Atenuante: a linha :42 manda trocar o R1 por cena.
- Recomendação:
  - Descrever cada IMG com enquadramento, ângulo, distância e luz próprios.
  - Separar "cena" de "movimento".

**A04. Durações incoerentes** (media após correção, parcial)
- Evidência:
  - Manifests: cortes-noturnos 8,99 s; estrada 13,54 s; garagem 13,63 s; noturno-close 17,13 s; por-do-sol 14,7 s.
  - O prompt é de 10 s com 2 s por imagem. Há frames-chave em 12,7, 15,6 e 13,4 s, além da janela.
- Correção da revisão:
  - M1 ser mais longo que o clipe-alvo não é incoerência em si, pois é só referência de ritmo.
  - No antes/depois, 9,0 s de timeline contra 9,34 s de M1 é coerente.
  - A severidade cai de alta para média.
- Recomendação: tabela tempo, frame e IMG; cortar o M1 para a janela de 10 s.
- Omissão incorporada: os frames-chave são amostras em tempos arbitrários, não cortes reais. Hoje o mapeamento frame para slot de 2 s é arbitrário.

**A05. "cortes-noturnos" contradiz o próprio README e inclui pessoa** (media, confirmado por um revisor; o outro não verificou)
- Evidência:
  - O README diz que a referência muda de veículo e local e que só a cadência deve ser aproveitada.
  - O prompt exige "mesma moto, local coerentes".
  - Os frames 01-03 mostram piloto, e o 05 é outro local.
- Recomendação: definir se o pacote trata de cadência ou de local único, e excluir o frame 05. Se houver pessoa, exigir C1.

**A06. Instruções de câmera incompatíveis** (media, parcial)
- Correção da revisão: política de órbita diferente entre pacotes distintos não é erro por si.
- Ponto sólido: "órbita" (estrada :33) e "rack focus" (pôr do sol :33) aparecem em prompt de imagem estática. O frame 01 do pôr do sol é só céu e o 03 é quase preto.
- Recomendação: mover efeitos de câmera para o prompt de vídeo e usar o frame 04 como R1 no pôr do sol.

**A07. Preto e espaço da logo dentro do vídeo gerado** (media, parcial)
- Fatos confirmados: o preto fica de 2,0 a 5,0 s dentro do clipe, e a logo é composta depois.
- Correção da revisão:
  - Os riscos de ruído, crossfade ou morph são hipóteses não testadas.
  - O prompt já proíbe transições não especificadas (:149).
  - Dividir em 2 ou 3 clipes perde a continuidade de câmera do M1 e multiplica custo e deriva de produto.
- Omissão incorporada (contradição interna): o texto diz que IMG 2 (preto) é criado na edição e não deve ser gerado por IA, mas o prompt de vídeo o lista como anexo. O hold é de 2,0 a 2,2 s no texto, enquanto a timeline mantém preto até 5,0 s.

**A08. Brief e pacote divergem** (media, parcial)
- Confirmado:
  - O brief define M1 como link do TikTok, enquanto o pacote usa a cópia do WhatsApp.
  - O brief tem P1 conceitual e prioridade sem P2.
  - catalogo/produtos tem só README.
- Correção: a afirmação de que os prompts falam só em licenciar faixa está errada. PROMPTS:154 manda usar SFX apenas com arquivos oficiais aprovados. O que falta é apontar o arquivo (KROMA-pulso-sfx-transformacao.wav, citado só no brief:59).
- Recomendação: eleger uma fonte única e documentar a proveniência do M1.

**A09. Execução real impossível sem P1/P2/P3** (alta, confirmado)
- Evidência: catálogo e texturas têm só README, e os prompts declaram o material como conceitual.
- Ressalva da revisão: é lacuna já assumida pelo repo, não defeito de prompt.
- Recomendação: checklist de entrada (ângulos, resolução, luz, nomes) e critério de aceite por cena.

**A10. Referências de movimento são de motos esportivas** (media, confirmado por um revisor)
- Evidência: estrada tem cavalete visível, por-do-sol tem moto trail com para-brisa, e os negativos não citam cavalete, para-brisa ou posição de pilotagem.
- Recomendação: acrescentar esses itens aos NEGATIVES e fazer uma geração-piloto por pacote.

**A11. Sem gancho, safe zones, legenda, CTA, resolução/fps e variações** (media após correção, confirmado)
- Evidência: não há ocorrência desses termos nos prompts. O brief:55 só proíbe legendas e interface do TikTok.
- Ressalva da revisão: parte disso é pós-produção, fora do escopo declarado do prompt. Os valores de safe zone são ordem de grandeza a validar.
- Recomendação: bloco de finalização com gancho, CTA, resolução e fps de saída, e variações. A expansão só vem depois do piloto.

**A12. Prompts replicados sem template** (baixa, parcial)
- Evidência: 5 arquivos de 84 linhas com rótulos variados (IMG 1/START FRAME, R1, S1) e C1 ausente do prompt de vídeo.
- Recomendação: um template com variáveis e um glossário único de rótulos. Isto é prioridade baixa.

**A13. "Estúdio ameixa restrito" contra conceitos saturados com reflexo verde** (baixa, confirmado por um revisor)
- Evidência: os PNGs conceituais têm fundo roxo saturado e reflexo verde-limão já no antes, o que antecipa a cor do depois.
- Recomendação: paleta numérica e remoção do reflexo verde do antes.

**A14. Deriva de produto em IMG 4 gerada por IA** (media, parcial)
- Correção da revisão: o risco é inferência, e o prompt já tem PRODUCT LOCK e P3 opcional como macro real.
- Recomendação: usar crop de foto real quando possível e comparar P2 com a cena gerada.

**A15.** Tratado no eixo D (D4/D5). Aqui só vale a recomendação de trocar "preservar originais" por manifesto de proveniência.

Omissão geral incorporada: nenhum comportamento ou limite do Omni 1.1 Flash foi verificado. Os achados A07, A14 e parte de A04/A06 dependem disso. Antes de propor A/B, 6/9/15 s ou CTA, é preciso validar limites e fazer uma geração-piloto.

---

### Eixo B: Automação do fluxo

Resumo: o fluxo é 100% manual no Flow. Não há script, schema ou CLI.

**B1. Fluxo manual mapeado** (info, confirmado)
- Etapas: fotos reais, prompts de imagem, preto na edição, aprovação humana, prompt de vídeo, pós (overlay do webm, trilha, SFX) e exportação.
- A etapa de exportação não tem especificação (container, codec, fps, bitrate, safe zones) em nenhum arquivo lido.
- Limite: a ausência vale para o que foi lido, e os valores devem ser confirmados na plataforma.

**B2. Determinístico contra humano** (info, parcial)
- Correções:
  - Cerca de 7 linhas diferem por pacote (14 marcas de diff), não ~28.
  - As linhas do pré-requisito de fidelidade são 156-158.
  - Os tempos de corte são alvo, não garantia de saída do gerador. Os cortes na pós dependem do clipe real.
- Gates humanos: fotos reais P1/P2/P3, aprovação de cada cena, escolha da trilha, alinhamento do beat e aprovação final do cliente.

**B3. Sem API documentada do Omni 1.1 Flash no repo** (media, confirmado)
- Evidência: grep por api/endpoint/sdk/veo retornou zero. server.mjs é um servidor estático.
- Recomendação: provider=manual por padrão, com a API como premissa não verificada.

**B4. Prompts são template com variáveis de cena** (media, parcial)
- Correções:
  - O texto de cena aparece 4 vezes (33, 63, 70, 76), mais Sequence na 67.
  - O noturno usa IMG 1-5 e o antes/depois usa IMG 1-4, então o template precisa de número de slots variável.
  - Jinja2 com golden-file é sobre-engenharia para 6 documentos. string.Template ou um script de cerca de 50 linhas basta.

**B5. Defeitos de consistência** (media, parcial)
- Confirmados:
  - Texto em português dentro de prompt em inglês.
  - Slots de 2 s contra manifests de 13,63 s e 17,13 s.
  - O README cita materiais/antes-de-depois/, mas a pasta real é antes-depois. materiais/revisoes só existe no .gitignore.
  - O brief usa o conceitual como P1, enquanto o PROMPTS usa fotos reais, o que dá duas fontes de verdade.
- Correção: [SCENE NUMBER] é placeholder intencional, com instrução na linha 42. É fragilidade de processo manual, não defeito.

**B6. Arquitetura mínima proposta** (info, parcial)
- Correções:
  - A proposta (9 comandos, schema extenso) é desproporcional ao estado atual.
  - PyYAML e Jinja2 não são stdlib, o que contradiz o resumo original ("stdlib").
  - Reduzir o escopo inicial a um script único de render de prompts, com JSON ou string.Template.
  - O alfa do webm não foi medido (ffmpeg ausente nesta máquina).

**B7. Python monta, LLM só o que sobra** (info, confirmado)
- Blocos fixos e tempos são determinísticos. O LLM fica restrito ao texto livre da cena, sempre revisado por humano, e sem QA por visão na v1.

**B8. Riscos da automação** (media, parcial)
- Confirmados: fidelidade nunca testada com produto real, ffmpeg ausente, direitos de áudio e limites do gerador desconhecidos.
- Correção: o M1 usado é M1_motion_silent.mp4 dentro de cada pasta, e os snaptik ficam ao lado como fonte. Que os M1 derivam deles é provável, mas não confirmado.
- Recomendação: gate de piloto antes do CLI, flag audio.license_ok e log de proveniência.

**B9. Ordem de implementação** (parcial)
- Correção: pôr um ponto go/no-go após a Fase 0 e limitar o investimento à Fase 1 (validação e templates) até o piloto passar. As Fases 2 a 4 constroem antes de haver resultado validado, e a Fase 5 (API) é especulativa.

Omissões incorporadas:
- **Assets de pós já prontos.** Existem KROMA-pulso-de-cor-vertical-com-sfx.mp4, o "para-anexar" e o wav. O brief:59 diz que o MP4 com SFX já traz o efeito sincronizado. Isso reduz a necessidade de compor webm com alfa via ffmpeg.
- **Custo de adoção.** Faltam ffmpeg e uma estratégia de ambiente reprodutível. O python3 do PATH é um venv de outro projeto.
- **Operador.** O operador pode não ser técnico. Uma página HTML estática que preenche o template no navegador, como o resto do repo, não foi considerada e pode ser melhor que um CLI com 9 comandos.
- **Schema e frames.** O schema precisa de timeline por pacote. O prompt referencia frames por nome, e o manifest tem 8 frames por tempo, então é preciso um ref_frame explícito.
- **ffmpeg.** A ausência de ffmpeg vale só para esta máquina, não é propriedade do repo.

---

### Eixo C: Auditoria do site

Resumo: não há vulnerabilidade grave explorável. O risco principal é de conteúdo e conformidade. Em seguida vêm desempenho e SEO. Nada foi renderizado nem executado, e o contraste não foi medido. A severidade "alta" de C-01 a C-03 é opinião jurídica não confirmada. Não se verificou se os preços são reais nem se o site está publicado no Pages.

**C-01. Preços "comerciais atuais" contra o README** (alta, confirmado)
- Evidência:
  - kromas.js:2-8 e app.js:6-9 trazem preços (combos de 230 a 799).
  - kromas.html:42 diz "preços comerciais atuais" e kromas.js:97 repete.
  - O README diz "Preços e prazos não foram presumidos" e lista preços como pendentes.
- Ressalva da revisão: a frase do README pode estar desatualizada, não prova que os preços são falsos.
- Recomendação: confirmar com o dono. Se forem reais, atualizar o README. Se não, usar "a partir de" ou "sob consulta".

**C-02. Imagens de IA ilustrando serviços não realizados** (alta, parcial; a revisão sugere severidade menor)
- Evidência:
  - 3 a 4 imagens de combos são reutilizadas em 7 produtos (por exemplo kroma-full-x12.png para retrovisores e manoplas).
  - Existem rótulos ("ESTUDO VISUAL", "PRÉVIA VISUAL", "Base · conceito"), mas .k-label usa 9px.
  - A seção Projetos tem só a marca como título e mostra "Antes/Depois" em formato de portfólio.
- Correção: os avisos são numerosos e as legendas dizem "conceito".
- Recomendação: rótulo maior e mais contrastado, e imagens distintas por produto. Rebatizar Projetos como "Conceitos".

**C-03. Depoimentos fictícios** (alta, parcial)
- Evidência: app.js:23-30 cria 6 personas com o rótulo "EXEMPLO ILUSTRATIVO".
- Correção: o argumento de acessibilidade é refutado. O contêiner tem aria-label "Exemplos fictícios..." (index.html:67) e só a trilha duplicada é aria-hidden. O site já se rotula como fictício.
- Recomendação: não publicar em produção até haver depoimentos reais e autorizados.

**C-04. Peso das imagens** (media, parcial)
- Correção:
  - São 16 PNGs de 1,77 a 2,30 MB no total, não 18. Há 18 arquivos acima de 500 KB, e alguns ficam fora do site (campanhas, arquivo/originais).
  - assets/images tem 33 MB (confere).
  - kroma-simbolo.png (539 KB) é usado como favicon e logo.
  - O hero não tem width/height (index.html:38).
- Recomendação: WebP/AVIF com srcset, símbolo menor, favicon de 32 px e width/height nas imagens. A redução de 80% é estimativa.

**C-05. Páginas de teste soltas na raiz** (media, confirmado)
- Evidência:
  - Há 8 HTMLs extras na raiz, e os 9 HTMLs têm 0 ocorrências de noindex.
  - Não há robots.txt nem sitemap.
  - Os temas de teste usam o botão "Comprar" (kromas-estilo-01.js:33).
  - kromas-estilo-01.js e -02.js diferem em cerca de 2 linhas.
- Ressalva: mover para _lab/ exige reescrever caminhos relativos (assets/brand/estilo-01-butter e -02-burgundy, js e css da raiz). Não foi verificado que o Pages publica a raiz.
- Omissão incorporada: a colagem de análise embute iframe do perfil pessoal gabrielfidos2020-glitch.github.io/kroma/#pecas, o que expõe a conta e depende de terceiro.

**C-06. SEO e compartilhamento ausentes** (media, confirmado)
- Evidência: sem og:*, twitter:*, canonical, JSON-LD, robots ou sitemap. O Instagram tem href="#" (index.html:74).
- Observação: para um negócio local que fala por WhatsApp, a prioridade média pode ser alta demais.

**C-07. WhatsApp fixo sem validação de formato** (baixa, confirmado por um revisor)
- Evidência: sanitização só com replace(/\D/g,''), mas com encodeURIComponent e noopener,noreferrer.
- Recomendação: validar o formato e confirmar a titularidade do número.
- Omissão incorporada: número e cidade (contact-config.js:2, index.html:38) podem ser dado pessoal de pessoa física. Não foi verificado.

**C-08. innerHTML com constantes** (baixa, confirmado)
- Os dados vêm de constantes do código, sem entrada do usuário. Não é explorável hoje, mas é um padrão frágil se os dados passarem a vir de CMS.

**C-09. server.mjs** (baixa, parcial)
- Correções:
  - Travessia retorna 403, não 404.
  - .webm está na tabela MIME (server.mjs:15).
  - Faltam .ttf, .webp, .mp4 e .json (caem em octet-stream).
  - O servimento de .git/ não foi testado.
- Contexto: escuta só em 127.0.0.1, é preview local, e o hosting real é o Pages.

**C-10. Links externos e Instagram morto** (baixa, parcial)
- Confirmado só o href="#" do Instagram. O restante não foi reverificado.
- Recomendação: ocultar o link do Instagram até haver perfil, e usar button em "Meu personalizado".

**C-11. Acessibilidade** (media, parcial)
- Confirmados:
  - Hero com role=img e alt vazio.
  - Mesma imagem em 3 lugares com alts distintos (index.html:38, 53, 72).
- Correção: o item de retorno de foco ao fechar diálogos está enfraquecido, porque <dialog> modal nativo normalmente restaura o foco.
- Não verificados: contraste, marquee e botão de pausa. O :focus-visible aparece em kromas.css, em verde, e o #8b627f pode ser de brand-theme.css.
- Recomendação: rodar axe ou Lighthouse e medir contraste.

**C-12. Fontes do Google e CSS grande** (baixa, parcial)
- Evidência:
  - Há 5 famílias carregadas do Google Fonts.
  - Bowlby One SC também existe local (@font-face em kromas.css:2 e styles.css:682) e é carregada por nome, então a carga duplicada é plausível.
  - styles.css tem 79 KB e brand-theme.css tem 28 KB.
- Omissão incorporada: o carregamento por CDN envia o IP do visitante ao Google (LGPD).

**C-13. Informação pré-contratual** (media, parcial)
- Confirmados:
  - O rodapé traz só a cidade, sem CNPJ ou endereço.
  - index.html:34 promete "peças sob encomenda", mas o HTML não tem seção ou âncora Peças.
- Atenuante: o combo mostra o total e o upsell de R$ 80 aparece no diálogo. Se CNPJ ou prazo são obrigatórios depende do porte do negócio, o que não foi verificado.
- Omissão incorporada (media): não há política de privacidade nem aviso de LGPD (grep sem resultado em index.html e kromas.html).

**C-14. README desatualizado** (baixa, parcial)
- Confirmado: o README cita "catálogo atual de peças" no app.js, que só tem combos, e "preços não presumidos" contradiz o código.
- Correção: kromas.css tem regras .k-viewer canvas e badge, então o visualizador 3D pode existir em outra versão. "Não tem 3D" não foi totalmente verificado.

**C-15.** Limitações: leitura estática, grep em styles.css e nada renderizado.

---

### Eixo D: Peso do repo e direitos autorais

Resumo: o peso é moderado e vem de acúmulo, não de arquivo gigante. O risco que pesa mais é o de direitos. Nada disto é aconselhamento jurídico.

**D1. Peso do repositório** (media, confirmado)
- Medição: 118 MB no disco, .git com 55 MB (pack de 54,98 MiB) e 174 arquivos rastreados. Nenhum blob passa de 5 MB.
- Distribuição: assets/images tem 33 MB, banco-de-divulgacao 26 MB e assets/brand 2,8 MB.
- Recomendação: WebP/AVIF com alvo de 150 a 300 KB, em estimativa não medida.

**D2. Duplicatas e assets não referenciados** (baixa, parcial)
- Confirmadas 3 duplicatas idênticas: 07-pulso-99%.png, 08-roxo-final.png e 09-roxo-final.png.
- O número de ~16 MB não referenciados e os 31 caminhos não foram reproduzidos pelos revisores. Tratar como estimativa.
- Antes de apagar, checar as variantes plum-milk e as páginas de teste.

**D3. Clone não é raso** (info, confirmado)
- O repo tem 10 commits, autor único e não é raso. A premissa de "clone raso" do enunciado não se confirmou, então as medições do histórico cobrem os 10 commits.

**D4. Vídeos de terceiros do TikTok** (alta, confirmado com ressalva)
- Evidência:
  - Há 5 arquivos snaptik_*.mp4 em banco-de-divulgacao/referencias, adicionados no commit c365a6d.
  - Há também 5 derivados M1_motion_silent.mp4 (~9,6 MB) e frames extraídos.
  - O brief:18 cita um link vt.tiktok.com como referência "somente de ritmo". O link aparece também em :69.
- Ressalvas:
  - A severidade alta pressupõe repo público, o que não foi verificado.
  - Os termos de uso do TikTok e do snaptik não foram lidos.
- Ordem recomendada:
  1. Tornar privado ou remover referencias/. Isso é imediato e reversível.
  2. Verificar se há forks ou clones.
  3. Tirar do repo os snaptik, os M1 e os frames, mantendo manifest.json com URL, autor e data.
  4. Só então reescrever o histórico.
- O problema não fica resolvido: filter-repo e force-push não apagam forks, clones nem o cache do GitHub.
- Levar a um advogado:
  - Se cortes sem áudio e frames contam como obra derivada.
  - Se há risco de semelhança ao gerar vídeo novo com M1.

**D5, D7 e omissão de mídia versionada.** Ver capítulo 3 para D5. Para o conjunto de mídia, há 16 arquivos mp4/wav versionados, todos adicionados em c365a6d e nenhum removido. É preciso uma lista do que sai do repo e do que é conteúdo próprio da KROMA.

**D6. Sem LICENSE** (media, parcial)
- Sem LICENSE, o padrão legal é "todos os direitos reservados". A licença OFL da Bowlby One SC está presente.
- Pendência fechada pelos revisores: a fonte Nighty não está embarcada. Aparece só em texto do README, e nenhum CSS ou HTML a carrega.
- Recomendação: declarar a intenção (proprietária ou aberta, com licença separada para as artes da marca).

**D7. Origem do SFX e do vídeo do cliente** (media, parcial)
- Recomendação: documentar a origem do .wav, marcando-a como "não documentada" sem afirmar que é irregular. Registrar de quem veio o "WhatsApp Video 2026-11-04" e se há autorização de publicação.
- A descrição do conteúdo do vídeo é inferência visual.
- Antes de usar fotos reais do cliente, fazer termo de autorização de uso de imagem e do veículo.

**D8. Plano de redução e reescrita** (media, parcial)
- Confirmado: nenhum arquivo foi removido do histórico, e os 14 mp4 conferem.
- Plano:
  1. Backup privado.
  2. filter-repo em clone espelho.
  3. force-push.
  4. Mídia fora do repo.
  5. Recompressão.
  6. Ampliar o .gitignore, que hoje cobre só materiais/revisoes/.
- Correção: LFS é mal ajustado para site estático no Pages, que não serve arquivos LFS. Preferir tirar as mídias do repo.
- Riscos: mudam os hashes, quebram forks, clones e PRs, e exigem reclone. Com 10 commits e um autor, o custo é baixo.

**D9. Segredos e dados pessoais** (baixa, parcial)
- Correções:
  - O WhatsApp 5512982368405 aparece em 139ac83 (introdução provável, mais antiga) e em 0e3a723, não só em 0e3a723.
  - "Nenhum segredo" vale só para texto. Binários e EXIF não foram varridos.
- O e-mail pessoal do autor está nos metadados dos commits.
- Recomendação: usar noreply do GitHub, rodar gitleaks ou trufflehog e inspecionar EXIF das fotos reais (geolocalização) antes de subir.

**D10. Inconsistências de documentação** (baixa, confirmado por um revisor)
- O README cita materiais/antes-de-depois/ e a pasta real é antes-depois. materiais/revisoes não está no repo.

---

## 3) Achados descartados e por que

**Não verificáveis (os dois revisores)**
- **D5.** Direito de imagem, marcas e pessoas nas referências. Nenhum revisor reabriu os contact sheets. A análise cobriu só 3 dos 5 ou 6 pacotes. Não há base para afirmar nada sobre os pacotes não vistos (cortes-noturnos, estrada, pôr do sol). A recomendação cautelar (anonimizar ou remover, revisar frame a frame, consultar advogado) permanece como precaução, não como achado.

**Parcialmente refutados (partes descartadas dentro de achados mantidos)**
- A08: a afirmação de que os prompts só falam em licenciar a faixa. PROMPTS:154 já manda usar SFX oficial aprovado.
- B8: o risco de que o pipeline re-encode os snaptik como M1. O M1 usado é M1_motion_silent.mp4 de cada pasta, e a derivação a partir dos snaptik não foi confirmada.
- B4/B2: "~28 linhas diferentes" e "3 repetições". O correto é ~7 linhas e 4 repetições.
- B5: [SCENE NUMBER] como defeito. É placeholder intencional.
- C-03: o argumento de que leitores de tela ignorariam o aviso. O contêiner tem aria-label com o aviso.
- C-09: "404" para travessia (é 403) e ".webm fora da tabela MIME" (está na tabela).
- C-11 (d): retorno de foco do dialog, enfraquecido porque o <dialog> modal restaura o foco.
- C-04: contagem de 18 PNGs. São 16 PNGs de 1,77 a 2,30 MB, e vários ficam fora do site.
- D9: introdução do número só em 0e3a723.
- A04: a incoerência "M1 longo" como defeito, pois M1 é só referência de ritmo.
- A07, A14: riscos de comportamento do modelo, tratados como hipóteses.
- C-02 e C-01: severidade "alta" reduzida. É opinião jurídica não verificada.

**Sem consenso de verificação (um revisor confirmou, o outro não verificou)**
- A05, A10, A13, C-07, D10. Foram mantidos com sinalização no texto.

---

## 4) Premissas não verificadas e limites

- **Clone.** A premissa de "clone raso" não se aplica: o clone tem 10 commits e `is-shallow` é falso. Mesmo assim, só há análise de leitura, e nenhum código do repo foi executado.
- **Ferramentas de mídia.** ffmpeg, ffprobe, mediainfo e exiftool não existem na máquina de análise. Duração, resolução, codec, fps e alfa do webm vêm dos manifest.json e READMEs, não de medição. Os vídeos foram avaliados só por frames e contatos, não assistidos.
- **Modelo e plataforma.**
  - Limites do Omni 1.1 Flash (duração, número de anexos, START FRAME, vídeo de referência) e existência de API pública não foram verificados.
  - Especificação de exportação e safe zones do TikTok não consta no repo e não foi pesquisada. Os valores sugeridos são ordem de grandeza.
- **Direitos e privacidade.**
  - Termos de uso do TikTok e do snaptik não foram lidos.
  - Não se verificou se o repo é público, se o Pages está ativo, nem se há forks.
  - Não se verificou a licença das trilhas e do SFX, nem a titularidade do número de WhatsApp.
  - Não houve varredura de binários ou EXIF.
- **Site.**
  - Nada foi renderizado: CLS, LCP, contraste e responsividade são inferidos do código.
  - styles.css foi examinado por grep, não lido por inteiro.
  - Não se confirmou se os preços são reais.
  - O grep de assets não usados usa caminhos literais e pode ter perdido caminhos montados em JS.
- **Estimativas** de ganho com WebP/AVIF e H.264 são palpites.
- **Aviso jurídico.** Nada neste relatório é aconselhamento jurídico. Os pontos de CDC, LGPD e direitos autorais precisam de avaliação de advogado.

---

## 5) Plano de ação sequenciado, com dependências

**Fase 0: contenção (imediata, sem dependências)**
1. Tornar o repo privado ou remover banco-de-divulgacao/referencias (D4).
2. Checar forks, clones e visibilidade real (omissão do eixo D).
3. Decidir com o dono se os preços são reais (C-01) e confirmar a titularidade do número (C-07, D9).

**Fase 1: ordem de risco legal e de conteúdo (depende da Fase 0 em D4)**
4. Substituir os arquivos de terceiros por manifest.json de proveniência (URL, autor, data) e registrar a origem do M1, do .wav e do "WhatsApp Video" (A08, A15, D7).
5. Reescrever o histórico com filter-repo, após backup e depois da tarefa 2 (D8).
6. Corrigir o site: depoimentos (remover ou não publicar), rótulo de IA maior, seção Projetos, preços e identificação do fornecedor, e o aviso de privacidade (C-01, C-02, C-03, C-13).
7. Declarar a política de licença do repo (D6).

**Fase 2: piloto e decisão go/no-go (depende da obtenção de P1/P2)**
8. Obter fotos reais P1/P2/P3 e produzir o checklist de entrada (A09).
9. Corrigir os pacotes de prompt (A01, A03, A02, A04, A05, A06, A10). Isso pode ser feito em paralelo com a tarefa 8, mas só a geração-piloto exige a tarefa 8.
10. Validar os limites do Omni 1.1 Flash e fazer uma geração-piloto por pacote.
11. Decisão go/no-go (B9). Só se for go, avançar para as fases seguintes.

**Fase 3: automação mínima (depende de go na tarefa 11)**
12. Script único de render de prompts com string.Template ou JSON, com slots variáveis e ref_frame explícito (B4, B6, B9). Avaliar também a alternativa de página HTML estática.
13. Aproveitar os assets de pós prontos (mp4 com SFX) antes de automatizar o compose via ffmpeg (omissão do eixo B).
14. Só depois, e condicionalmente: extract-frames, strip-audio, compose e export. A API só entra com documentação oficial.

**Fase 4: peso, SEO e higiene (independente das fases 2 e 3; a tarefa 18 depende da 5)**
15. Converter os PNGs do site para WebP/AVIF, com width/height (C-04, D1).
16. Mover as páginas de teste para fora da raiz publicada, reescrevendo os caminhos, ou adicionar noindex e robots.txt. Remover o iframe do perfil pessoal (C-05).
17. Adicionar og/canonical/JSON-LD e sitemap, e tratar o Instagram morto (C-06, C-10).
18. Mover mídia não usada para fora do repo, sem LFS, após conferir caminhos no navegador (D2, D8). Ampliar o .gitignore.
19. Acessibilidade e fontes: rodar axe/Lighthouse, medir contraste, e self-host das fontes (C-11, C-12).
20. Atualizar o README (C-14, D10, B5).

Dependências principais:
- A tarefa 5 (reescrever histórico) depende de 1, 2 e 4.
- A tarefa 11 (go/no-go) depende de 8, 9 e 10.
- A fase 3 depende de go em 11.
- A tarefa 18 depende de 5.