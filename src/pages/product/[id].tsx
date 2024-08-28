import {
  ImageContainer,
  ProducDetails,
  ProductContainer,
} from "../../styles/pages/product";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import Head from "next/head";
import { useShoppingCart } from "use-shopping-cart";

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
    description: string;
    defaultPrice: number;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart();

  function handleAddToCart(id: string) {
    const productCart = {
      name: product.name,
      description: product.description,
      id: product.id,
      price: product.defaultPrice,
      price_id: product.defaultPriceId,
      currency: "BRL",
      image: product.imageUrl,
    };

    addItem(productCart);
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProducDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={() => handleAddToCart(product.id)}>
            Colocar na sacola
          </button>
        </ProducDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_QhceSOVIza5n9R" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPrice: price.unit_amount,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
