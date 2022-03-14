import React from "react";
import { styled } from "../stiches.config";
import "../styles/satoshi.css";

const ButtonStyled = styled("button", {
  padding: "17px 28px",
  display: "inline",
  cursor: "pointer",
  border: "none",
  fontFamily: "Satoshi-Variable",
  variants: {
    disabled: {
      true: {},
    },
    variant: {
      primary: {
        backgroundColor: "$blue",
        color: "$white",
        "&:hover": {
          backgroundColor: "$blue-40",
        },
        "&:active": {
          backgroundColor: "$blue-50",
        },
      },
      secondary: {
        backgroundColor: "$grey-90",
        color: "$white",
        "&:hover": {
          backgroundColor: "$grey-80",
        },
        "&:active": {
          backgroundColor: "$black",
        },
      },
      tertiary: {
        backgroundColor: "$blue-10",
        color: "$blue",
        "&:hover": {
          backgroundColor: "$blue-10",
        },
        "&:active": {
          backgroundColor: "$blue-20",
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      disabled: true,
      css: {
        backgroundColor: "$blue-20",
        "&:hover": {
          backgroundColor: "$blue-20",
          cursor: "not-allowed",
        },
      },
    },

    {
      variant: "secondary",
      disabled: true,
      css: {
        backgroundColor: "$grey-20",
        color: "$grey-40",
        cursor: "not-allowed",
        "&:hover": {
          backgroundColor: "$grey-20",
          color: "$grey-40",
        },
      },
    },
    {
      variant: "tertiary",
      disabled: true,
      css: {
        backgroundColor: "$blue-5",
        color: "$blue-25",
        cursor: "not-allowed",
        "&:hover": {
          backgroundColor: "$blue-5",
          color: "$blue-25",
        },
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}

const Button = ({ children, variant = "primary", disabled }: ButtonProps) => {
  return (
    <ButtonStyled variant={variant} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};
export default Button;
