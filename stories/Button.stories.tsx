import { Button } from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";

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
    width="20"
    height="20"
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

}

export const Primary = () => {
  return (
    <>
      <Button variant="primary" rightIcon={<IconRight />}>
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
