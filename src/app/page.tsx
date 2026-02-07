import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-ink mb-2">
          Proyecto Páginas de Error
        </h1>
        <p className="text-ink-muted text-sm mb-8">
          Pantallas de error 4xx y 5xx con mensajes claros e ilustraciones.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/ruta-inexistente-404"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            Ver página 404 (no encontrada)
          </Link>
          <Link
            href="/probar-500"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-inkMuted/30 bg-paper/60 px-4 text-sm font-semibold text-ink transition hover:bg-paper/80"
          >
            Provocar error 500 (para probar error.tsx)
          </Link>
        </div>
      </main>
    </div>
  );
}
