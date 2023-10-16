import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import ProductList from "@/components/products";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("d9f45404-e29e-42c9-b365-73a9d3c8d1ff");

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />

        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 '>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
