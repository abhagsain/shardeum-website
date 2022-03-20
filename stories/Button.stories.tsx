import { ComponentMeta } from "@storybook/react";
import Button, { Box, Image } from "../components/Button/Button";
import { darkTheme } from "../stiches.config";

export default {
  title: "Components/Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

const Spacer = () => (
  <div style={{ margin: "10px", display: "inline-block" }}></div>
);
const IconRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

{
  /* 
      
      <Spacer />
      
      <Button
        variant="primary"
        css={{ padding: "16px", "& svg": { marginLeft: 0 } }}
      >
        <IconRight />{" "}
    </Button> */
}

export const Primary = () => {
  return (
    <>
      <Button variant="primary" iconRight={<IconRight />}>
        Primary Button
      </Button>
      <Spacer />
      <Spacer />
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </>
  );
};

export const Secondary = () => {
  return (
    <>
      <Button variant="secondary">Secondary Button</Button>
      <Spacer />
      <Button variant="secondary">Secondary Dark Mode Button</Button>
      <Spacer />
    </>
  );
};

export const Tertiary = () => {
  return (
    <>
      <Button variant="tertiary">Tertiary Button</Button>
      <Spacer />
      <Button variant="tertiary" disabled>
        Disabled
      </Button>
    </>
  );
};

const Card = () => (
  <Box
    css={{
      $md: {
        width: "$8",
      },
      $lg: {
        width: "$12",
      },
    }}
  ></Box>
);
export const Breakpoints = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <>
      <Box
        css={{
          $md: {
            width: "$8",
          },
          $lg: {
            width: "$12",
          },
        }}
      ></Box>
      <Spacer />
      {/* <Button variant="tertiary" disabled>
        Disabled
      </Button> */}
    </>
  );
};
