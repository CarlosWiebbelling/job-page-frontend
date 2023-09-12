import React, { useState } from "react";
import type { ReactElement } from "react";

import { VisibilityController } from "./components";
import Chat from "./components/Chat";

const Messages = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (!isOpen) {
    return (
      <VisibilityController onClick={() => setIsOpen(state => !state)} />
    )
  }

  return (
    <Chat onClose={() => setIsOpen(state => !state)} />
  )
}

export default Messages;
