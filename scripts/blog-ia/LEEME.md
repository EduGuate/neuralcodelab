# Blog IA automático

Publica en neuralcodelab.com/blog sin revisión humana: 8:00 y 16:00 (Guatemala), máximo 2 posts al día.
Corre en Asgard con un timer de systemd del usuario. No usa n8n.

## Qué hace

1. Lee feeds de IA de las últimas 48 h.
2. Elige hasta 3 temas con Claude (`claude -p`, Sonnet, sin herramientas). Si nada vale la pena, no publica.
3. Baja al menos 2 fuentes de medios distintos.
4. Redacta, pasa controles fijos (`validar`) y un verificador contra las fuentes (`auditar`). Si falla, corrige una vez; si sigue mal, prueba el siguiente tema. Si ninguno pasa, no publica y avisa.
5. Genera la imagen con Cloudflare Workers AI usando el login de wrangler. Si falla, publica sin imagen.
6. Hace commit y push a `main`; Cloudflare despliega solo. Confirma que el post esté en vivo y avisa por Telegram.

## Guardrails contra datos falsos o viejos

Ante la duda no publica. Las reglas viven en código, no solo en el prompt:

- **Fuentes actuales:** toda fuente debe tener fecha conocida y máximo 14 días, y al menos una menos de 72 h. Bing se consulta ordenado por lo más nuevo.
- **Fuentes confiables:** al menos 2 medios distintos, y uno en `CONFIABLES`.
- **Cifras:** todo número de 2 dígitos o más debe estar en las fuentes (`cifras_sin_fuente`).
- **Enlaces:** solo a fuentes descargadas.
- **Verificador:** Opus saca cada afirmación con una cita literal, y el script comprueba que esa cita exista en esa fuente (`cita_real`). Lo sin respaldo o desactualizado rechaza el artículo.
- **Hecho central:** confirmado por 2 medios con cita real.
- **Texto limpio:** sin frases del proceso interno (`META`).

Esto reduce mucho el riesgo, pero no lo elimina: si las fuentes se equivocan, el post también.

## Instalación

- Clon propio: `~/.local/share/blog-ia/neuralcodelab`. La corrida real lo resetea a `origin/main`: no trabajes ahí.
- Unidades: copiar `blog-ia.service` y `blog-ia.timer` a `~/.config/systemd/user/`, y `systemctl --user enable --now blog-ia.timer`.
- Historial de URLs usadas: `~/.local/state/blog-ia/historial.json`.

## Operación

- Probar sin publicar: `python3 -B scripts/blog-ia/publicar.py --prueba /tmp/blog-ia-prueba`
- Pausar: `systemctl --user disable --now blog-ia.timer`
- Correr ya: `systemctl --user start blog-ia.service`
- Ver logs: `journalctl --user -u blog-ia -n 60`
- Quitar un post: borrar su JSON de `content/blog/` y hacer push.

Si cambias `CATEGORIAS` o `TECNOLOGIAS` en `src/lib/blog.ts`, cambia también la copia en `publicar.py`.
