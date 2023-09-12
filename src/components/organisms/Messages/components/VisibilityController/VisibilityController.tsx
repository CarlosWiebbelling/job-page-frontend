import React from "react";
import type { ReactElement } from 'react';

import { Switcher } from './VisibilityController.styles';

import type { VisibilityControllerPros } from "./tyes";

const VisibilityController = (props: VisibilityControllerPros): ReactElement => {
  const {
    onClick
  } = props;

  return (
    <Switcher
      src="https://lordicon.com/icons/wired/gradient/208-chat-message-minus.svg"
      role="button"
      onClick={onClick}
    />
  )
}

export default VisibilityController;
