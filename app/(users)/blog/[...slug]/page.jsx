const Blog = async ({ params }) => {
  const { slug } = await params;

  console.log(slug);

  return (
    <>
      <h1>Ecom</h1>
    </>
  );
};

export default Blog;