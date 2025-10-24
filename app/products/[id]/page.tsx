import { notFound } from "next/navigation";
import { Product as ProductType } from "@/app/products/page";
import Image from "next/image";

async function getProduct(id: string): Promise<ProductType> {
  let responseJson;

  try {
    const response = await fetch(
      `${process.env.STRAPI_BASE_URL}/api/products/${id}?populate=Images`,
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

  console.log(product);

  return (
    <main className="container mt-32 mb-8 mx-auto px-4 lg:px-8">
      <h2>{product.Title}</h2>
      <p>{product.Description}</p>
      {product.Images?.length &&
        product.Images.map((image) => (
          <Image
            key={image.id}
            src={`${process.env.STRAPI_BASE_URL}${image.url}`}
            alt={image.alternativeText}
            width={160}
            height={160}
          />
        ))}
    </main>
  );
}
