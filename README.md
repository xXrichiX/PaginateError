# Páginas de Error 4xx y 5xx

Proyecto con pantallas de error propias en lugar de las genéricas del navegador. Incluye 404 (página no encontrada) y 500 (error del servidor), con mensajes en español y botones para volver o reintentar.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). Desde la portada se puede probar la 404 y la 500.

## Estructura

- `src/app/not-found.tsx` — página 404
- `src/app/error.tsx` — página 500
- `src/components/errors/` — componente de pantalla de error e ilustraciones SVG
