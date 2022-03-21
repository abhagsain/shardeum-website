import { ComponentStyleConfig } from "@chakra-ui/react";
import { CSSProperties } from "@stitches/react";
import { HtmlProps } from "next/dist/shared/lib/utils";
import React from "react";
import { darkTheme, styled } from "../../stiches.config";

export const Box = styled("div", {});
export const Image = styled("img", {
  // Reset
  verticalAlign: "middle",
  maxWidth: "100%",
});

const ButtonStyled = styled("button", {
  padding: "17px 28px",
  display: "inline",
  cursor: "pointer",
  border: "none",
  fontFamily: "Satoshi-Variable",
  "& svg": {
    display: "inline-block",
    marginLeft: "8px",
    width: "16px",
    height: "16px",
    verticalAlign: "bottom",
  },
  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
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
        color: "$secondaryTextColor",
        "&:hover": {
          backgroundColor: "$secondaryHover",
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
          backgroundColor: "$secondaryHover",
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

interface ButtonProps
  extends Omit<
    React.HTMLProps<HTMLButtonElement>,
    "children" | "ref" | "css" | "type"
  > {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  fullWidth?: boolean;
  iconRight?: React.ReactNode;
}

const Button = ({
  children,
  variant = "primary",
  disabled,
  fullWidth,
  iconRight,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      css={{
        padding: "",
      }}
      {...props}
    >
      {children} {iconRight}
    </ButtonStyled>
  );
};
export default Button;
