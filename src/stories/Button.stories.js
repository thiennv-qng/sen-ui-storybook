import { Button } from "antd";
import React from "react";

export default {
  title: "Control/Button",
  component: Button,
  argTypes: {
    type: {
      defaultValue: "primary",
      description:
        "Can be set to `primary` `ghost` `dashed` `link` `text` `default`",
      options: ["primary", "ghost", "dashed", "link", "text", "default"],
      mapping: {
        primary: "primary",
        ghost: "ghost",
        dashed: "dashed",
        link: "link",
        text: "text",
        default: "default",
      },
      type: { name: "option", require: false },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    href: {
      description: "Redirect url of link button",
      type: { name: "string", require: false },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#" },
      },
    },
    danger: {
      defaultValue: false,
      description: "Set the danger status of button",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    block: {
      defaultValue: false,
      description: "Option to fit button width to its parent width",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      defaultValue: false,
      description: "Disabled state of button",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    ghost: {
      defaultValue: false,
      description:
        "Make background transparent and invert text and border colors",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      defaultValue: false,
      description: "Set the loading status of button",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean | { delay: number }" },
        defaultValue: { summary: "false" },
      },
    },
    icon: {
      defaultValue: undefined,
      description: "Set the icon component of button",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    shape: {
      defaultValue: "default",
      description: "Can be set button shape",
      options: ["default", "circle", "round"],
      mapping: {
        default: "default",
        circle: "circle",
        round: "round",
      },
      type: { name: "option", require: false },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      defaultValue: "middle",
      description: "Set the size of button",
      options: ["small", "middle", "large"],
      mapping: {
        small: "small",
        middle: "middle",
        large: "large",
      },
      type: { name: "option", require: false },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "middle" },
      },
    },
  },
};

export const Buttons = (args) => <Button {...args}>Button</Button>;
