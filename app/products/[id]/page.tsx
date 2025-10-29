import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

async function getProduct(id: string): Promise<any> {
  let responseJson;

  try {
    const response = await fetch(
      `${process.env.STRAPI_BASE_URL}/api/products/${id}?populate=images`,
      {
        headers: {
          Authorization: `bearer ${process.env.STRAPI_KEY}`,
        },
      }
    );

    responseJson = await response.json();
  } catch (error) {
    console.error(`Erro ao buscar produto: ${error}`);
  }

  return responseJson.data;
}

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return notFound();

  return (
    <main className="min-h-screen pt-24 lg:pt-32 pb-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Voltar para produtos
          </Link>
        </nav>

        {/* Product Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-4 lg:gap-6 lg:grid-cols-2">
            {/* Product Images Section */}
            <div className="space-y-6">
              <div className="glass rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                {product.images?.length ? (
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    {product.images.map((image: any, index: number) => (
                      <div
                        key={image.id}
                        className="relative overflow-hidden rounded-lg"
                        style={{
                          borderTop: `3px solid ${
                            index % 3 === 0
                              ? "var(--primary)"
                              : index % 3 === 1
                              ? "var(--secondary)"
                              : "var(--accent)"
                          }`,
                        }}
                      >
                        <Image
                          src={`${process.env.STRAPI_BASE_URL}${image.url}`}
                          alt={image.alternativeText}
                          width={300}
                          height={300}
                          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Imagens em breve
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        As imagens deste produto serão adicionadas em breve
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="space-y-8">
              <div className="glass rounded-xl p-8">
                <div className="space-y-6">
                  {/* Product Title */}
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-4">
                      <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        {product.title}
                      </span>
                    </h1>

                    {/* Product Badge */}
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-muted-foreground">
                        Produto disponível
                      </span>
                    </div>
                  </div>

                  {/* Product Description */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-foreground">
                      Sobre este produto
                    </h2>
                    <div className="prose dark:prose-invert prose-sm max-w-none leading-relaxed">
                      <Markdown>{product.description}</Markdown>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex flex-col justify-center sm:flex-row gap-4">
                      <Link
                        href="https://wa.me/5521972944994?text=Ol%C3%A1%2C%20estou%20interessado%20neste%20produto%20da%20deprint%20Gr%C3%A1fica%20R%C3%A1pida."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25 font-medium"
                      >
                        <Image
                          src="/whatsapp.svg"
                          alt="WhatsApp"
                          width={20}
                          height={20}
                          className="w-5 h-5 mr-2"
                        />
                        Solicitar orçamento
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
