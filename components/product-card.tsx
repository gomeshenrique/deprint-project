"use client";

import { ProductCardButton } from "@/components/product-card-button";
import { useInView } from "@/hooks/useInView";
import Markdown from "react-markdown";
import type { Product } from "@/lib/types";

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
      className={`group glass rounded-xl p-6 transition-transform duration-250 hover:-translate-y-1.5 h-full flex flex-col ${
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
      }}
    >
      <div className="flex flex-col h-full justify-between">
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

          <div className="prose dark:prose-invert prose-sm leading-none line-clamp-2">
            <Markdown>{product.description}</Markdown>
          </div>
        </div>

        <div className="pt-4 mt-auto">
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
