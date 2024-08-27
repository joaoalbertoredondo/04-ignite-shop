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

interface Props {
  setModalOpen: (value: boolean) => void;
}

export default function CartModal({ setModalOpen }: Props) {
  const { cartCount, cartDetails, removeItem, redirectToCheckout } =
    useShoppingCart();

  const cart = Object.entries(cartDetails!).map((product) => product[1]);

  let totalValue = 0;

  cart.map((product) => {
    totalValue = totalValue + product.defaultPrice * product.quantity;
  });

  // function handleBuyProduct() {
  //   console.log(cart);
  // }

  async function handleCheckoutClick() {
    // event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
    console.log("clicou");
  }

  return (
    <CartModalContainer>
      <CloseButton onClick={() => setModalOpen(false)}>
        <X size={24} weight="bold" />
      </CloseButton>

      <h2>Sacola de compras</h2>
      <Content>
        <ProductsInCart>
          {cart.length > 0 &&
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
            ))}
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

          <OrderButton onClick={() => handleCheckoutClick()}>
            Finalizar compra
          </OrderButton>
        </OrderDetails>
      </Content>
    </CartModalContainer>
  );
}
