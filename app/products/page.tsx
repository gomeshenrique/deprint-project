export default function Produts() {
  const Products = [
    { id: 1, name: "Product 1", description: "Description for Product 1" },
    { id: 2, name: "Product 2", description: "Description for Product 2" },
    { id: 3, name: "Product 3", description: "Description for Product 3" },
    { id: 4, name: "Product 4", description: "Description for Product 4" },
    { id: 5, name: "Product 5", description: "Description for Product 5" },
    { id: 6, name: "Product 6", description: "Description for Product 6" },
  ];

  return (
    <main className="container mt-32 mb-8 mx-auto px-4 lg:px-8">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-center text-balance">
        Nossos produtos
      </h1>
      {Products.length ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
          {Products.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-border rounded-md light:shadow-md w-full"
            >
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </main>
  );
}
