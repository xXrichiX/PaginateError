import ErrorScreen from "@/components/errors/ErrorScreen";
import { getErrorCopy } from "@/components/errors/errorCatalog";

export default function NotFound() {
  const copy = getErrorCopy(404);

  return (
    <ErrorScreen
      code={404}
      title={copy.title}
      description={copy.description}
      primaryAction={copy.primaryAction}
      secondaryAction={copy.secondaryAction}
    />
  );
}
