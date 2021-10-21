import { Typography } from "antd";
import React from "react";

export default {
  title: "General/Typography/Title",
  component: Typography,
  argTypes: {
    level: {
      name: "heading level",
      defaultValue: 1,
      description: "Level of typography",
      options: [1, 2, 3, 4, 5],
      control: { type: "radio" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "5" },
      },
    },
    type: {
      defaultValue: "danger",
      description: "Text color",
      type: { name: "string", require: false },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    code: {
      defaultValue: false,
      description: "Code style",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      type: { name: "boolean", require: false },
    },
    delete: {
      defaultValue: false,
      description: "Delete line style",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      defaultValue: false,
      description: "Disable content",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    mark: {
      defaultValue: false,
      description: "Marked style",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    italic: {
      defaultValue: false,
      description: "Italic style",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    underline: {
      defaultValue: false,
      description: "Underline style",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    strong: {
      defaultValue: false,
      description: "Bold style",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    editable: {
      defaultValue: false,
      description: "If editable. Can control edit state when is object",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean | editable" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

export const Title = (args) => (
  <Typography.Title {...args}>Typography</Typography.Title>
);
