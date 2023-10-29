import { Switch } from "../src/components";

export default {
  title: "Switch",
  component: Switch,
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
