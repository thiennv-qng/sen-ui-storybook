import React from "react";

import SenIcon from "../components/icon";

export default {
  title: "General/Icon",
  component: SenIcon,
  argTypes: {
    name: {
      defaultValue: "home-outline",
      description: "Icon name",
      type: { name: "string", require: false },
      table: {
        type: { summary: "string" },
        defaultValue: {
          summary: "https://ionic.io/ionicons",
        },
      },
    },
  },
};

const Template = (args) => <SenIcon {...args} />;

export const Icon = Template.bind({});
