import { Checkbox } from "../src/components/Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Regular = {
  args: {
    label: "Label",
    error: false,
    indeterminate: false,
    checked: false,
    disabled: false,
  },
};
