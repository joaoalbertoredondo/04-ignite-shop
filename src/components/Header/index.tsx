import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";

import logoImage from "../../assets/logo.svg";
import { Cart, Counter, HeaderContainer } from "../../styles/components/header";
import Link from "next/link";
import CartModal from "../Cart";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function Header() {
  const { cartCount } = useShoppingCart()
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <HeaderContainer>
      <Link href={"/"}>
        <Image src={logoImage} width={100} height={100} alt="" />
      </Link>

      <Cart onClick={() => setModalOpen(!modalOpen)}>
        <Handbag weight="bold" size={24} />
        <Counter>{cartCount}</Counter>
      </Cart>

      {modalOpen && <CartModal setModalOpen={setModalOpen} />}
    </HeaderContainer>
  );
}
