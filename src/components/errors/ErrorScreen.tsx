"use client";

import Link from "next/link";
import Illustration404 from "./Illustration404";
import Illustration500 from "./Illustration500";

type Props = {
  code: number;
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  onPrimaryClick?: () => void;
};

export default function ErrorScreen({
  code,
  title,
  description,
  primaryAction,
  secondaryAction,
  onPrimaryClick,
}: Props) {
  const is4xx = code >= 400 && code < 500;
  const Illustration = is4xx ? Illustration404 : Illustration500;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-background">
      <section className="w-full max-w-md flex flex-col items-center text-center">
        <div className="mb-8">
          <Illustration />
        </div>

        <p className="text-sm font-medium tracking-wide text-inkMuted">
          Error {code}
        </p>

        <h1 className="mt-2 text-2xl font-semibold text-ink">
          {title}
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-inkMuted max-w-sm">
          {description}
        </p>

        <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
          {onPrimaryClick ? (
            <button
              type="button"
              onClick={onPrimaryClick}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              {primaryAction.label}
            </button>
          ) : primaryAction.href.startsWith("javascript:") ? (
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              {primaryAction.label}
            </button>
          ) : (
            <Link
              href={primaryAction.href}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              {primaryAction.label}
            </Link>
          )}

          {secondaryAction && (
            secondaryAction.href.startsWith("javascript:") ? (
              <button
                type="button"
                onClick={() => window.history.back()}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-inkMuted/30 bg-paper/60 px-4 text-sm font-semibold text-ink transition hover:bg-paper/80"
              >
                {secondaryAction.label}
              </button>
            ) : (
              <Link
                href={secondaryAction.href}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-inkMuted/30 bg-paper/60 px-4 text-sm font-semibold text-ink transition hover:bg-paper/80"
              >
                {secondaryAction.label}
              </Link>
            )
          )}
        </div>

        <p className="mt-10 text-xs text-inkMuted/70">
          Error 4xx / 5xx
        </p>
      </section>
    </main>
  );
}
