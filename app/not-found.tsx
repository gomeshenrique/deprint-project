import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid place-content-center min-h-screen pt-24 lg:pt-32 pb-16 text-center">
      <h1 className="text-2xl">Ops! 😖</h1>
      <p className="mt-2 pt-2 border-t">
        A página que você está procurando não foi encontrada.
      </p>
      <Link href="/">
        <Button className="inline-flex gap-2 items-center mt-4 cursor-pointer">
          Voltar para home
        </Button>
      </Link>
    </main>
  );
}
