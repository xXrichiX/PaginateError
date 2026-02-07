export type ErrorCopy = {
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};

export const ERROR_CATALOG: Record<number, ErrorCopy> = {
  400: {
    title: "Ups, algo no cuadró",
    description: "La solicitud no llegó bien. No te preocupes: vuelve atrás o intenta de nuevo cuando quieras.",
    primaryAction: { label: "Ir al inicio", href: "/" },
    secondaryAction: { label: "Volver atrás", href: "javascript:history.back()" },
  },
  401: {
    title: "Necesitamos saber quién eres",
    description: "Para seguir por aquí hace falta iniciar sesión. Así cuidamos tu cuenta y tus datos.",
    primaryAction: { label: "Iniciar sesión", href: "/" },
    secondaryAction: { label: "Ir al inicio", href: "/" },
  },
  403: {
    title: "Por aquí no se puede pasar",
    description: "No tienes permiso para ver esta parte. Si crees que es un error, prueba a iniciar sesión de nuevo.",
    primaryAction: { label: "Ir al inicio", href: "/" },
    secondaryAction: { label: "Iniciar sesión", href: "/" },
  },
  404: {
    title: "No encontramos lo que buscas",
    description: "Puede que el enlace haya cambiado o ya no exista. Te ayudamos a volver al camino.",
    primaryAction: { label: "Ir al inicio", href: "/" },
    secondaryAction: { label: "Volver atrás", href: "javascript:history.back()" },
  },
  500: {
    title: "Ups, algo salió mal",
    description: "Tuvimos un problemita por aquí. Estamos en ello. ¿Probamos de nuevo en un momento?",
    primaryAction: { label: "Reintentar", href: "/" },
    secondaryAction: { label: "Ir al inicio", href: "/" },
  },
  502: {
    title: "Algo se nos atascó",
    description: "Hubo un fallo al hablar con otro servicio. Intenta de nuevo en un momento.",
    primaryAction: { label: "Reintentar", href: "/" },
    secondaryAction: { label: "Ir al inicio", href: "/" },
  },
  503: {
    title: "Estamos haciendo mejoras",
    description: "Ahora mismo no estamos disponibles. Vuelve en un rato y lo retomamos.",
    primaryAction: { label: "Ir al inicio", href: "/" },
  },
  504: {
    title: "Se nos fue el tiempo",
    description: "La solicitud tardó demasiado. Revisa tu conexión e inténtalo otra vez.",
    primaryAction: { label: "Reintentar", href: "/" },
    secondaryAction: { label: "Ir al inicio", href: "/" },
  },
};

export function getErrorCopy(code: number): ErrorCopy {
  return (
    ERROR_CATALOG[code] ?? {
      title: "Algo no salió como esperábamos",
      description: "Puedes volver al inicio e intentar de nuevo cuando quieras.",
      primaryAction: { label: "Ir al inicio", href: "/" },
    }
  );
}
