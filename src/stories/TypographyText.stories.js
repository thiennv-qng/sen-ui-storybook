import { Typography } from "antd";

export default {
  title: "General/Typography/Text",
  component: Typography,
  argTypes: {
    type: {
      defaultValue: "danger",
      description: "Content type",
      type: { name: "string", require: false },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "secondary | success | warning | danger" },
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

export const Text = (args) => (
  <Typography.Text {...args}>Typography</Typography.Text>
);
