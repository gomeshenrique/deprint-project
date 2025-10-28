"use client";

import { ProductCardButton } from "@/components/product-card-button";
import { useInView } from "@/hooks/useInView";

export type Product = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  Images: Image[];
};

type Image = {
  id: number;
  documentId: string;
  alternativeText: string;
  ext: string;
  mime: string;
  url: string;
};

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });

  const colorScheme = index % 3;
  const isPrimary = colorScheme === 0;
  const isSecondary = colorScheme === 1;
  const isAccent = colorScheme === 2;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group glass rounded-xl p-6 hover:glass-strong transition-all duration-500 hover:scale-[1.02] hover:shadow-xl transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        borderTop: `3px solid ${
          isPrimary
            ? "var(--primary)"
            : isSecondary
            ? "var(--secondary)"
            : "var(--accent)"
        }`,
        boxShadow: `0 0 0 1px ${
          isPrimary
            ? "oklch(from var(--primary) l c h / 0.2)"
            : isSecondary
            ? "oklch(from var(--secondary) l c h / 0.2)"
            : "oklch(from var(--accent) l c h / 0.2)"
        }`,
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="space-y-4">
        <h2
          className="text-xl font-semibold transition-colors duration-300"
          style={{
            color: isPrimary
              ? "var(--primary)"
              : isSecondary
              ? "var(--secondary)"
              : "var(--accent)",
          }}
        >
          {product.title}
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {product.description}
        </p>

        <div className="pt-2">
          <ProductCardButton
            href={`/products/${product.documentId}`}
            colorScheme={
              isPrimary ? "primary" : isSecondary ? "secondary" : "accent"
            }
          />
        </div>
      </div>
    </div>
  );
}
