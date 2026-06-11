# Portafolio profesional - Cristhian Quiñonez

Portafolio personal construido con Astro, diseño responsive, selector de modo oscuro/claro y selector de idioma español/inglés.

## Qué incluye

- Hero profesional con enfoque en infraestructura, seguridad, datos y desarrollo.
- Sección de perfil, habilidades, proyectos, experiencia y contacto.
- Modo oscuro por defecto con fondo negro y acentos verdes.
- Modo claro actualizado con fondo azul claro, acentos azul/violeta/cian y tarjetas blancas translúcidas.
- Selector de tema con persistencia en `localStorage`.
- Selector de idioma ES/EN con persistencia en `localStorage`.
- Traducción de navegación, textos principales, proyectos, experiencia, contacto y footer.
- Diseño responsive para desktop, tablet y móvil.
- Metadata básica SEO y Open Graph.
- Build estático listo en la carpeta `dist/`.

## Comandos

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Archivos principales

- `src/pages/index.astro`: contenido principal del portafolio, traducciones y scripts de idioma/tema.
- `src/layouts/Layout.astro`: estructura base, metadata y estilos globales.
- `public/favicon.svg`: favicon personalizado con iniciales CQ.

## Pendientes recomendados

- Reemplazar `contacto@itproject.com.py` por el correo público definitivo.
- Reemplazar el enlace de GitHub `#` por el perfil real.
- Agregar una foto profesional si se desea mostrar imagen de perfil real.
- Agregar enlaces reales a demos o repositorios de proyectos cuando estén disponibles.

## Imagen de perfil

La imagen de perfil está en `public/profile-cristhian.jpg`. Para cambiarla, reemplazá ese archivo manteniendo el mismo nombre.
