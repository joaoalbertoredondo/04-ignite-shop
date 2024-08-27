import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",
});

export const Cart = styled("button", {
  width: 48,
  height: 48,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "$gray800",
  borderRadius: "6px",
  color: "$gray100",
  border: 0,

  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#37373b",
  },
});

export const Counter = styled("div", {
  width: 24,
  height: 24,

  marginTop: "-100%",
  marginRight: "-50%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "$green300",
  borderRadius: "100px",
  outline: "4px solid $gray900",
  fontWeight: "bold",
});
