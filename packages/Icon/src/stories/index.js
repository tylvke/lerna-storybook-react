import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Icon from '../index';

export default {
  title: "icon",
  decorators: [withKnobs]
};

export const icon = () => {
  const type = text("type", "normal");

  return <Icon type={type}>{`${type} icon`}</Icon>;
};