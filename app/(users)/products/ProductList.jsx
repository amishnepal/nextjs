"use client";
import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams();

  const pages = searchParams.get("page");
  const category = searchParams.get("category");

  console.log("inside: ", pages, category);

  return (
    <>
      <h1>Client - {category}</h1>
    </>
  );
};

export default ProductList;