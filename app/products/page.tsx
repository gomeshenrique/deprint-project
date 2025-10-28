import { ProductCard } from "@/components/product-card";

async function getProdutcs(): Promise<any[]> {
  let responseJson;

  try {
    const response = await fetch(
      `${process.env.STRAPI_BASE_URL}/api/products`,
      {
        headers: {
          Authorization: `bearer ${process.env.STRAPI_KEY}`,
        },
      }
    );

    responseJson = await response.json();
  } catch (error) {
    console.error(`Erro ao carregar lista de produtos: ${error}`);
  }

  return responseJson.data;
}

export default async function Produts() {
  const products = await getProdutcs();

  return (
    <main className="min-h-screen pt-24 lg:pt-32 pb-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight">
            Nossos{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              produtos
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Descubra nossa linha completa de produtos gráficos desenvolvidos com
            tecnologia de ponta e materiais de alta qualidade. Cada peça é
            pensada para atender às suas necessidades específicas com excelência
            e agilidade.
          </p>
        </div>

        {/* Products Grid */}
        {products.length ? (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="glass rounded-xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Nenhum produto disponível
              </h3>
              <p className="text-muted-foreground text-sm">
                Em breve teremos produtos incríveis para você. Fique ligado!
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
