import React from "react";

import Branch from "../components/brand";

export default {
  title: "Sen-ui/Branch",
  component: Branch,
};

const Template = (args) => <Branch {...args} />;

export const Default = Template.bind({});
Default.args = {
  lite: false,
  size: 24,
  href: "brand direct link",
};
