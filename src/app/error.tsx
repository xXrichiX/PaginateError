"use client";

import ErrorScreen from "@/components/errors/ErrorScreen";
import { getErrorCopy } from "@/components/errors/errorCatalog";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const copy = getErrorCopy(500);

  return (
    <ErrorScreen
      code={500}
      title={copy.title}
      description={copy.description}
      primaryAction={{ label: "Reintentar", href: "#" }}
      secondaryAction={{ label: "Ir al inicio", href: "/" }}
      onPrimaryClick={reset}
    />
  );
}
