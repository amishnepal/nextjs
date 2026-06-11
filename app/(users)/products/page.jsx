import ProductList from "./ProductList";

const Products = async ({ searchParams }) => {
  const searchParam = await searchParams;

  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || 1;

  return (
    <div>
      Showing {category} products, sorted by {sort}, page {page}
      <ProductList />
    </div>
  );
};

export default Products;