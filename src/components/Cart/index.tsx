import { useShoppingCart } from "use-shopping-cart";

import {
  CloseButton,
  Content,
  ImgContainer,
  ItemContainer,
  OrderButton,
  OrderDetails,
  ProductsInCart,
  Quantity,
  CartModalContainer,
  Total,
} from "../../styles/components/cart-modal";
import Image from "next/image";
import { X } from "@phosphor-icons/react";
import { priceFormatter } from "../../utils/formatter";
import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  setModalOpen: (value: boolean) => void;
}

export default function CartModal({ setModalOpen }: Props) {
  const { cartCount, cartDetails, removeItem, clearCart } = useShoppingCart();

  const cart = Object.keys(cartDetails).map((key) => cartDetails[key]);
  console.log(cart);
  async function handleBuyProduct() {
    try {
      const products = cart.map((product) => {
        return { price: product.defaultPriceId, quantity: product.quantity };
      });

      console.log("products: ", products);
      const response = await axios.post("/api/checkout", {
        products,
      });

      clearCart();

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  let totalValue = 0;

  cart.map((product) => {
    totalValue = totalValue + product.defaultPrice * product.quantity;
  });

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (cart.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [cart]);

  return (
    <CartModalContainer>
      <CloseButton onClick={() => setModalOpen(false)}>
        <X size={24} weight="bold" />
      </CloseButton>

      <h2>Sacola de compras</h2>
      <Content>
        <ProductsInCart>
          {cart.length > 0 ? (
            cart.map((product) => (
              <ItemContainer key={product.id}>
                <ImgContainer>
                  <Image src={product.image} alt="" width={100} height={100} />
                </ImgContainer>

                <div>
                  <h3>{product.name}</h3>
                  <span>{priceFormatter.format(product.price / 100)}</span>

                  <section>
                    <button onClick={() => removeItem(product.id)}>
                      Remover
                    </button>
                    <p>
                      Qtd: <strong>{product.quantity}</strong>
                    </p>
                  </section>
                </div>
              </ItemContainer>
            ))
          ) : (
            <p>Sua sacola está vazia.</p>
          )}
        </ProductsInCart>

        <OrderDetails>
          <div>
            <Quantity>
              <p>Quantidade</p>
              <span>{cartCount} itens</span>
            </Quantity>

            <Total>
              <p>Total</p>
              <span>{priceFormatter.format(totalValue / 100)}</span>
            </Total>
          </div>

          <OrderButton onClick={handleBuyProduct} disabled={isDisabled}>
            Finalizar compra
          </OrderButton>
        </OrderDetails>
      </Content>
    </CartModalContainer>
  );
}
