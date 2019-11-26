import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Button from '../index';

export default {
  title: "btn",
  decorators: [withKnobs]
};

export const button = () => {
  const size = text("size", "normal");

  return <Button size={size}>{`${size} button`}</Button>;
};