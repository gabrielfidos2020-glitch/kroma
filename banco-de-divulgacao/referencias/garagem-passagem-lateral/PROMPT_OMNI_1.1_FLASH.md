# Prompt de produção — garagem passagem lateral

## Referência observada

Garagem coberta: moto estacionada em plano geral, aproximação frontal e passagem curta por detalhes da carenagem, retornando ao plano mais aberto.

## Configuração

- Modelo de vídeo: Omni 1.1 Flash (modelo configurado no Banco Bee).
- Duração-alvo: 10 s; vertical 9:16.
- Movimento: `M1_motion_silent.mp4` (sem áudio).
- Frames de composição: `frames_importantes/frame-01...frame-05`.
- Produto: anexar **IMG P1**, foto real aprovada do veículo/modelo a anunciar. Se houver pessoa, anexar **IMG C1** canônica.

## Prompt de cenas (usar uma vez para cada cena)

```text
[IMAGE MODEL] — still image — vertical 9:16 — photorealistic.

ATTACHMENTS (read these first)
- IMG P1: the real product being sold; absolute reference for exact vehicle identity, model, color, bodywork, materials, proportions, lights, wheels, tires and visible details.
- IMG S1: approved first scene of this video, required from scene 2 onward for environment, lighting, camera distance and visual continuity.
- IMG R1: the matching frame from this reference package; use only for composition, angle, crop, pose and action state. Do not copy its vehicle, branding, text, watermark or background details unless explicitly described below.
- IMG C1 (only if a person appears): approved canonical character identity and body type.

PRIORITY
Product appearance: IMG P1. Character identity: IMG C1. Continuity: IMG S1. Moment-specific composition and action: IMG R1.

PRODUCT LOCK
Use exactly the vehicle shown in IMG P1. Preserve its model, color, proportions, bodywork, lights, wheels, tires, finish and every visible part. Never alter, add, remove or replace product details.

SCENE
Create still [SCENE NUMBER] for a premium vertical vehicle showcase. Ambiente de garagem coberta clara com pilares e linhas de estacionamento; moto imóvel; começar em plano geral baixo, aproximar-se pelo 3/4 frontal, deslizar por farol e carenagem e voltar ao plano aberto. Match the corresponding IMG R1 frame for composition only. Keep the exact P1 vehicle stationary and fully consistent with the other scenes. Natural perspective, realistic materials, clean product lighting.

TEXT ON THIS SCENE
NONE — no text, captions, logos, graphic overlays or watermarks.

NEGATIVES
Do not copy the reference vehicle, people, brand, text, captions, interface, logos or watermark. No invented specifications, parts, graphics or product changes.
```

Troque o `IMG R1` pelo frame específico da cena e substitua `[SCENE NUMBER]`. Para cenas posteriores, anexe também a primeira cena aprovada como `IMG S1`.

## Prompt de vídeo — Omni 1.1 Flash

```text
Omni 1.1 Flash — 10 seconds — vertical 9:16. Premium photorealistic smartphone vehicle showcase, controlled camera movement and clean direct cuts.

ATTACHMENTS
- IMG P1: actual product reference; absolute source for the vehicle's identity and appearance.
- IMG 1: approved opening scene, START FRAME. Begin exactly with this composition.
- IMG 2, IMG 3, IMG 4, IMG 5: approved scene images used in the timeline below.
- VIDEO M1: M1_motion_silent.mp4; silent movement reference for camera path, speed, rhythm and cuts only. Do not copy its product, person, colors, logos, text, watermark, setting or audio.

PRIORITY
Product appearance: IMG P1. Scene composition, lighting and environment: IMG 1–5. Movement and rhythm: VIDEO M1. Written directions fill only what attachments do not show.

PRODUCT LOCK
Show exactly the same real product from IMG P1 in every shot. Preserve its model, color, proportions, materials, lights, wheels and all parts. No replacement or transformation.

TIMELINE
0–2 s: IMG 1; establish the product and begin the showcase.
2–4 s: IMG 2; Ambiente de garagem coberta clara com pilares e linhas de estacionamento; moto imóvel; começar em plano geral baixo, aproximar-se pelo 3/4 frontal, deslizar por farol e carenagem e voltar ao plano aberto.
4–6 s: IMG 3; continue the motion in the same direction and keep the product unchanged.
6–8 s: IMG 4; reveal another approved product angle with a direct cut.
8–10 s: IMG 5; finish on a stable, clear product frame.
Sequence: plano geral da moto estacionada → aproximação 3/4 frontal → slide curto pelos detalhes dianteiros → retorno ao plano geral.

MOTION
Follow VIDEO M1 only for the observed movement pattern: Ambiente de garagem coberta clara com pilares e linhas de estacionamento; moto imóvel; começar em plano geral baixo, aproximar-se pelo 3/4 frontal, deslizar por farol e carenagem e voltar ao plano aberto. Use smooth, physically plausible camera motion. Keep the vehicle stationary unless an approved scene explicitly shows otherwise. Silent reference; generate no speech, music or sound.

TEXT AND GRAPHICS
No text, captions, subtitles, logos, graphic overlays or watermarks. Do not reproduce any such element from VIDEO M1 or its frames.

VISUAL REFERENCE
Ambiente de garagem coberta clara com pilares e linhas de estacionamento; moto imóvel; começar em plano geral baixo, aproximar-se pelo 3/4 frontal, deslizar por farol e carenagem e voltar ao plano aberto.

NEGATIVES
No product changes, invented details, unrelated products, copied branding, text, overlays, watermarks, sound or speech.
```

## Nota de produção

As cinco fontes são referências visuais de motocicletas diferentes. Elas controlam apenas o estilo de enquadramento e movimento. Antes da geração, anexe fotos reais do veículo/modelo promovido em P1; não use a moto da referência como substituta do produto.
