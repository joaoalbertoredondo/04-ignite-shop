import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";

import logoImage from "../../assets/logo.svg";
import {
  CartButton,
  Counter,
  HeaderContainer,
} from "../../styles/components/header";
import Link from "next/link";
import CartModal from "../Cart";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

import { usePathname } from "next/navigation";

export default function Header() {
  const { cartCount } = useShoppingCart();
  const [modalOpen, setModalOpen] = useState(false);

  const isCartDisplayed = !usePathname().includes("success");

  return (
    <HeaderContainer>
      <Link href={"/"}>
        <Image src={logoImage} width={100} height={100} alt="" />
      </Link>

      {isCartDisplayed && (
        <CartButton onClick={() => setModalOpen(!modalOpen)}>
          <Handbag
            weight="bold"
            size={24}
            color={cartCount === 0 ? "#8D8D99" : "#C4C4CC"}
          />
          {cartCount > 0 && <Counter>{cartCount}</Counter>}
        </CartButton>
      )}

      {modalOpen && <CartModal setModalOpen={setModalOpen} />}
    </HeaderContainer>
  );
}
