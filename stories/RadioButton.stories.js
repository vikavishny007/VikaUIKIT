import { RadioButton } from "../src/components";

export default {
  title: "RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Regular = {
  args: {
    label: "Label",
    error: false,
    checked: false,
    disabled: false,
  },
};
