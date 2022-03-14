import { ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

const Spacer = () => (
  <div style={{ margin: "10px", display: "inline-block" }}></div>
);
export const Primary = () => {
  return (
    <>
      <Button variant="primary">Primary Button</Button>
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
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>
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
