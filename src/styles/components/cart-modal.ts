import { styled } from "@stitches/react";

export const CartModalContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  minHeight: "100vh",
  height: "100%",
  width: 480,

  backgroundColor: "$gray800",
  boxShadow: "0px 20px 30px black",
  padding: 48,
  paddingTop: 24,

  position: "absolute",
  top: 0,
  right: 0,

  zIndex: 1,

  h2: {
    fontSize: "$lg",
    fontWeight: "bold",
    color: "gray100",
  },
});

export const CloseButton = styled("button", {
  backgroundColor: "transparent",
  border: 0,
  width: "fit-content",
  alignSelf: "end",
  color: "$gray500",
  cursor: "pointer",

  "&:hover": {
    color: "$gray300",
  },
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  height: "100%",
});

export const ProductsInCart = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  marginTop: "2rem",
});

export const ItemContainer = styled("div", {
  display: "flex",
  gap: "20px",

  div: {
    display: "flex",
    flexDirection: "column",
    padding: 8,
    width: "stretch",
  },

  h3: {
    color: "$gray300",
    fontSize: 18,
    marginBottom: 5,
  },

  p: {
    fontSize: "$sm",
    color: "$gray300",
  },

  strong: {
    color: "$gray100",
  },

  span: {
    color: "$gray100",
    fontSize: "$md",
    fontWeight: "bold",
    marginBottom: 15,
  },

  section: {
    display: "flex",
    justifyContent: "space-between",
  },

  button: {
    background: "transparent",
    color: "$green500",
    fontWeight: "bold",
    border: 0,
    width: "fit-content",
    fontSize: "$sm",
    cursor: "pointer",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImgContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  maxWidth: 100,
  maxHeight: 100,

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "8px",
});

export const OrderDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const Quantity = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 10,

  color: "$gray300",
  fontSize: "$md",
});

export const Total = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  fontWeight: "bold",
  color: "$gray100",
  fontSize: "$md",

  span: {
    fontSize: 24,
  },
});

export const OrderButton = styled("button", {
  backgroundColor: "$green500",
  fontWeight: "bold",
  color: "white",
  fontSize: "$md",
  padding: 20,
  border: 0,
  borderRadius: 8,
  marginTop: 60,

  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$green300",
  },
});
