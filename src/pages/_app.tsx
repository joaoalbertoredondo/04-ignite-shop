import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { CartProvider } from "use-shopping-cart";

import { Container } from "../styles/pages/app";
import Header from "../components/Header";
import CartModal from "../components/Cart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider
        shouldPersist
        cartMode="checkout-session"
        stripe="pk_test_51PqDGII8jVw9hPRIkVbraTncgSPsyxQfL6SDyfRljIszaL1yJsbVbWH9s31eXL51LCzFyPfl6pWbGzaASQHRQuFb00qSSIaucB"
        currency="BRL"
      >
        <Header />

        <Component {...pageProps} />
      </CartProvider>
    </Container>
  );
}
