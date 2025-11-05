import { ProductCard } from "@/components/product-card";
import { Product, StrapiResponse } from "@/lib/types";

async function getProdutcs(): Promise<StrapiResponse<Product> | null> {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL
      : process.env.STRAPI_BASE_URL;
  const apiKey = process.env.STRAPI_KEY || "";

  if (!baseUrl || !apiKey) {
    console.warn("Strapi URL or API Key not configured");
    return null;
  }

  try {
    const response = await fetch(
      `${baseUrl}/api/products?fields[0]=title&fields[1]=description&fields[2]=order&fields[3]=hasPromo&populate=[images][fields][0]=name&populate[images][fields][1]=url&populate[images][fields][2]=width&populate[images][fields][3]=height&populate[images][fields][4]=alternativeText&sort[0]=hasPromo:desc&sort[1]=order`,
      {
        headers: {
          Authorization: `bearer ${apiKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch banners: ${response.statusText}`);
    }

    const data: StrapiResponse<Product> = await response.json();

    return data;
  } catch (error) {
    console.error(`Erro ao carregar lista de produtos: ${error}`);
    return null;
  }
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
        {products?.data.length ? (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {products.data.map((product, index) => (
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
