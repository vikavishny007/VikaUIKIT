import { Typography } from "../src/components";

export default {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const RegularSM = {
  args: {
    children: "Simple text",
    variant: "regularSM",
    color: "success",
  },
};
