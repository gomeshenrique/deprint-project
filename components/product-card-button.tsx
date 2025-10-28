"use client";

import Link from "next/link";

interface ProductCardButtonProps {
  href: string;
  colorScheme: "primary" | "secondary" | "accent";
}

export function ProductCardButton({
  href,
  colorScheme,
}: ProductCardButtonProps) {
  const getButtonClasses = () => {
    switch (colorScheme) {
      case "primary":
        return "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25";
      case "secondary":
        return "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-secondary/25";
      case "accent":
        return "bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent/25";
      default:
        return "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25";
    }
  };

  const getShadowStyle = () => {
    switch (colorScheme) {
      case "primary":
        return "0 4px 14px 0 oklch(from var(--primary) l c h / 0.25)";
      case "secondary":
        return "0 4px 14px 0 oklch(from var(--secondary) l c h / 0.25)";
      case "accent":
        return "0 4px 14px 0 oklch(from var(--accent) l c h / 0.25)";
      default:
        return "0 4px 14px 0 oklch(from var(--primary) l c h / 0.25)";
    }
  };

  return (
    <Link
      className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg text-sm font-medium ${getButtonClasses()}`}
      style={{
        boxShadow: getShadowStyle(),
      }}
      href={href}
    >
      Ver detalhes
      <svg
        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}
