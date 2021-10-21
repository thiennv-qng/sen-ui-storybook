import { useState } from "react";

import { Row, Col, Modal, Button } from "antd";

export default {
  title: "Control/Modal",
  component: Modal,
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
    closable: {
      defaultValue: false,
      description:
        "Whether a close (x) button is visible on top right of the modal dialog or not",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    confirmLoading: {
      defaultValue: false,
      description:
        "Whether to apply loading visual effect for OK button or not",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    destroyOnClose: {
      defaultValue: false,
      description: "Whether to unmount child components on onClose",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    focusTriggerAfterClose: {
      defaultValue: false,
      description:
        "Whether need to focus trigger element after dialog is closed",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    forceRender: {
      defaultValue: false,
      description: "Force render Modal",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    mask: {
      defaultValue: false,
      description: "Whether show mask or not",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    keyboard: {
      defaultValue: false,
      description: "Whether support press esc to close",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    maskClosable: {
      defaultValue: false,
      description:
        "Whether to close the modal dialog when the mask (area outside the modal) is clicked",
      type: { name: "boolean", require: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

export const DialogModal = (args) => {
  const [visible, setVisible] = useState(false);

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Button onClick={() => setVisible(true)}>Dialog modal</Button>
        <Modal visible={visible} onCancel={() => setVisible(false)} {...args}>
          Button
        </Modal>
      </Col>
    </Row>
  );
};
