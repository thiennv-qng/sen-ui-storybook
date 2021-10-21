import { Col, Row, Typography } from "antd";
import React from "react";

import Widget from "../components/widget";

export default {
  title: "Sen-ui/Widget",
  component: Widget,
  argTypes: {
    // header is the property we want to remove from the UI
    header: {
      control: false,
    },
    Wrapper: {
      control: false,
    },
    children: {
      control: false,
    },
  },
};

const Template = (args) => (
  <Row gutter={[16, 16]} align="center" justify="center">
    <Widget {...args}>
      <Row>
        <Col span={24}>
          <Typography.Text type="secondary">Widget content</Typography.Text>
        </Col>
      </Row>
    </Widget>
  </Row>
);

export const DefaultWidget = Template.bind({});
DefaultWidget.args = {
  type: "default",
  size: "small",
  header: <Typography.Text type="secondary">Default widget</Typography.Text>,
};
export const SolidWidget = Template.bind({});
SolidWidget.args = {
  type: "solid",
  size: "small",
  header: <Typography.Text type="secondary">Solid widget</Typography.Text>,
};

export const GlassWidget = Template.bind({});
GlassWidget.args = {
  type: "glass",
  size: "small",
  header: <Typography.Text type="secondary">Glass widget</Typography.Text>,
};
