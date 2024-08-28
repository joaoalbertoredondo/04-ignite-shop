import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
    marginTop: "3rem",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block]",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },

  div: {
    display: "flex",
  },
});

export const ImageContainer = styled("div", {
  width: 140,
  height: 140,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 1000,
  padding: "0.25rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "-50px",

  boxShadow: "0 18px 35px black",

  "&:first-child": {
    marginLeft: "unset",
  },

  img: {
    objectFit: "cover",
  },
});
