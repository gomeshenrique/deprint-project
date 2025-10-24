import Link from "next/link";

export type Product = {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
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

async function getProdutcs(): Promise<Product[]> {
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
    <main className="container mt-32 mb-8 mx-auto px-4 lg:px-8">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-center text-balance">
        Nossos produtos
      </h1>
      {products.length ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-border rounded-md light:shadow-md w-full"
            >
              <h2>{product.Title}</h2>
              <p>{product.Description}</p>
              <Link
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                href={`/products/${product.documentId}`}
              >
                Ver detalhes
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </main>
  );
}
