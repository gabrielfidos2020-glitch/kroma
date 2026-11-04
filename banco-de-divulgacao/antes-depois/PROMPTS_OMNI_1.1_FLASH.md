# KROMA — prompts do antes/depois

Pacote preenchido a partir do vídeo enviado, seguindo a estrutura BeeMídia de anexos, prioridade das fontes, trava do produto, timeline, movimento e negativos.

## Modelo alvo

**Vídeo:** Omni 1.1 Flash (modelo atualmente configurado no Banco Bee). **Duração:** 9 s. **Tela:** vertical 9:16. Os prompts de imagem são usados na etapa de cenas do Flow; o modelo de vídeo anima apenas cenas aprovadas. Para outro modelo de vídeo, use a mesma ficha e substitua o nome do modelo somente depois de validar os campos e limites da ferramenta.

## Anexos e rótulos

- **IMG P1:** foto real do veículo antes da personalização. Fonte absoluta para geometria, peças e estado original.
- **IMG P2:** foto real do mesmo veículo depois da personalização, aprovada pelo cliente. Fonte absoluta para o acabamento final.
- **IMG P3 (opcional):** macro real de pintura/grafismo; material suplementar para fidelidade do acabamento.
- **IMG C1:** não aplicável, salvo se uma pessoa aparecer.
- **IMG 1 / START FRAME:** cena gerada de antes, com base em P1. A composição deve combinar com o frame `frames_importantes/01_antes-plano-geral.jpg`.
- **IMG 2:** preto puro, criado na edição; não gerar com IA.
- **IMG 3:** cena gerada do resultado final, baseada em P2 e no enquadramento de `frames_importantes/06_depois-plano-geral.jpg`.
- **IMG 4:** cena gerada do detalhe real, baseada em P2/P3 e na composição de `frames_importantes/07_detalhe-carenagem.jpg`.
- **VIDEO M1:** `kroma-antes-depois-motion-silent.mp4`; referência silenciosa apenas para ritmo, cadência, trajetória de câmera e cortes.
- **VIDEO L1 (pós-produção):** `../../assets/brand/KROMA-pulso-de-cor-transparente.webm`; camada oficial transparente, não anexar ao gerador de vídeo.

**Prioridade:** P1/P2/P3 definem o veículo e acabamento; imagens de cena definem quadro, ambiente e luz; M1 define apenas movimento; instruções escritas completam lacunas. O M1 não autoriza copiar aparência, áudio ou logotipo embutido.

## Prompts de imagem de cena

### IMG 1 — antes (quadro inicial)

```text
[IMAGE MODEL] — still image — vertical 9:16 — photorealistic.

ATTACHMENTS (read these first)
- IMG P1: the real vehicle before customization; absolute source for its identity, geometry, body panels, wheels, tires, lights, mirrors, seat and all parts.
- IMG R1: frames_importantes/01_antes-plano-geral.jpg; use only for composition, camera angle, crop and placement.

PRIORITY
Vehicle identity and appearance: IMG P1. Composition: IMG R1. Written instructions only fill details absent from the attachments.

PRODUCT LOCK
Show exactly the vehicle in IMG P1. Preserve its model, proportions, parts, surface state and all visible details. Do not apply the new wrap or invent parts.

SCENE
Opening frame of a premium KROMA customization film. Full scooter in a front three-quarter view, centered in a restrained dark plum studio, subtle floor reflection, controlled product lighting, realistic materials and natural perspective. Keep the scooter stationary. Match the framing and visual balance of IMG R1. Clean vertical smartphone composition.

TEXT ON THIS SCENE
NONE — no text, captions, logos, graphic overlays or watermarks.

NEGATIVES
Do not copy any logo, text, watermark or unrelated visual detail from IMG R1. No product changes, extra parts, wheel motion, rider, particles or invented graphics.
```

### IMG 3 — depois (revelação)

```text
[IMAGE MODEL] — still image — vertical 9:16 — photorealistic.

ATTACHMENTS (read these first)
- IMG P2: the real, client-approved customized vehicle; absolute source for final color, wrap, graphic placement, materials and every vehicle part.
- IMG R1: frames_importantes/06_depois-plano-geral.jpg; use only for composition, camera angle, crop and action state.
- IMG S1: the approved IMG 1 from this same video; use for studio continuity, lighting, camera height and image style.

PRIORITY
Vehicle and customization: IMG P2. Continuity: IMG S1. Specific composition: IMG R1. Written instructions fill only what the attachments do not show.

PRODUCT LOCK
Use exactly the same vehicle shown in IMG P2. Preserve its geometry, parts, color, wrap and approved graphics. Do not add, remove, recolor, reshape or relabel any part. The approved finish in P2 is the only difference from the before scene.

SCENE
Reveal frame after the beat. The customized vehicle is stationary in the same front three-quarter studio setup as IMG S1, framed to match IMG R1. Make the real approved finish legible while keeping the entire vehicle visible. Premium controlled product lighting, realistic surfaces and natural perspective.

TEXT ON THIS SCENE
NONE — no text, captions, logos, graphic overlays or watermarks.

NEGATIVES
Do not reproduce any text, logo, watermark or interface visible in IMG R1. No morphing, extra graphics, particles, changed parts or invented finish details.
```

### IMG 4 — detalhe real do acabamento

```text
[IMAGE MODEL] — still image — vertical 9:16 — photorealistic.

ATTACHMENTS (read these first)
- IMG P2: the real, client-approved customized vehicle; absolute source for the exact vehicle and final finish.
- IMG P3 (if available): real macro photo of the approved paint/wrap texture; use only for the surface material and finish.
- IMG R1: frames_importantes/07_detalhe-carenagem.jpg; use only for close-up composition, angle and crop.
- IMG S1: the approved IMG 1; preserve the same studio, lighting direction and visual style.

PRIORITY
Vehicle identity and finish: IMG P2, then IMG P3 for surface detail only. Continuity: IMG S1. Crop and composition: IMG R1.

PRODUCT LOCK
Show only the actual approved vehicle and finish. Preserve the real lamp, fairing, wheel and graphic placement. Do not invent or alter any product detail or texture.

SCENE
A close, low front three-quarter detail of the customized vehicle, with the real headlight, fairing, approved graphic and front wheel arranged as in IMG R1. Controlled soft highlights reveal the real surface finish. Keep realistic materials, sharp product detail and a restrained dark plum studio background.

TEXT ON THIS SCENE
NONE — no text, captions, logos, graphic overlays or watermarks.

NEGATIVES
Do not reproduce text or watermarks from IMG R1. No extra logos, decorative graphics, particles, changed headlight, altered wheel or invented texture.
```

## Prompt de vídeo — Omni 1.1 Flash

```text
Omni 1.1 Flash — 9 seconds — vertical 9:16. Premium smartphone product film, controlled handheld camera, direct rhythmic cuts.

ATTACHMENTS (read these first)
PRODUCT IMAGES
- IMG P1: actual vehicle before customization; absolute source for original identity and geometry.
- IMG P2: the same actual vehicle after the client-approved customization; absolute source for final appearance.
- IMG P3 (optional): real close-up of the approved finish, surface detail only.

SCENE IMAGES
- IMG 1: approved before scene, START FRAME. Begin exactly with this composition.
- IMG 2: pure black frame created in post; hold this frame from 2.0 to 2.2 seconds and keep the screen black through the brand-signature segment.
- IMG 3: approved after scene, used from 5.0 to 7.3 seconds.
- IMG 4: approved real finish close-up, used from 7.3 to 9.0 seconds.

MOTION VIDEO
- VIDEO M1: kroma-antes-depois-motion-silent.mp4. Silent movement reference only. Follow its timing, camera path, speed and direct cut rhythm. Do not copy its audio, embedded logo, product appearance, generated graphics or other visual content.

PRIORITY WHEN SOURCES CONFLICT
Vehicle appearance: IMG P1/P2/P3. Scene composition and lighting: IMG 1–4. Movement and rhythm: VIDEO M1. Written instructions fill only what these sources do not show.

PRODUCT LOCK
Use the exact same real vehicle from IMG P1 and IMG P2. Preserve its model, geometry, wheels, tires, lights, mirrors, seat and all parts. The only allowed appearance change is the client-approved customization shown in IMG P2/P3. Never morph, replace, add, remove, recolor or reshape vehicle parts.

TIMELINE
0.0–2.0 s: start exactly at IMG 1. Show the original vehicle stationary in a front three-quarter view. Slow 3–5% push-in with subtle natural handheld drift.
2.0–2.2 s: hard cut to IMG 2, pure black, held still.
2.2–5.0 s: maintain a pure black background. Leave a clean centered area for the official KROMA logo animation to be composited in post. Do not generate or redraw the logo.
5.0–7.3 s: hard cut on the beat to IMG 3. Reveal the same stationary vehicle with its approved final finish. Short, firm 5–7% push-in; keep the before/after camera angle consistent.
7.3–9.0 s: hard cut to IMG 4. Smooth, low lateral slide across the approved headlight, fairing graphic and front wheel. End on a stable detail frame.

Sequence: original vehicle → hard cut to black → black hold for official logo composite → beat-synced reveal of approved customization → close-up of the real finish.

MOTION
Use VIDEO M1 only for camera path, timing, speed and cut rhythm. Keep the vehicle still; do not orbit around it. No generated sound, speech or music. The reference copy is silent.

TEXT AND GRAPHICS
Do not reproduce any text, captions, logos, overlays or watermark from VIDEO M1 or its original frames. Add no generated text or logo. Composite the supplied official transparent KROMA logo animation in post-production over black from 2.2 to 5.0 seconds; use the asset unchanged.

VISUAL REFERENCE
Restrained dark plum studio, subtle floor reflection, controlled product lighting, natural perspective and realistic materials. Keep studio and light direction consistent before and after.

NEGATIVES
No audio. No speech. No generated logo. No product changes or invented finish. No riding, moving wheels, morphing, transitions other than the specified hard cuts, particles or unrelated props.
```

## Áudio e finalização

A cópia M1 está silenciosa. Faça a montagem final com faixa licenciada e alinhe o beat forte à revelação aos 5,0 s. Componha o `VIDEO L1` original sobre o preto; não envie essa logo ao gerador. Use efeitos sonoros somente na edição, com arquivos oficiais aprovados.

## Pré-requisito de fidelidade

O vídeo enviado é um estudo conceitual, não uma foto confirmada de veículo de cliente. Antes de usar estes prompts em produção real, preencha P1/P2 (e P3 se houver) com as fotos reais aprovadas em `../catalogo/`. Substitua os frames conceituais como guias de composição se eles conflitarem com o veículo real. Não prometa ao cliente um resultado que ainda não foi executado.
