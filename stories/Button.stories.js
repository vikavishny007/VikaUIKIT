import { Button } from "../src/components/Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = {
  args: {
    label: "Button",
  },
};
