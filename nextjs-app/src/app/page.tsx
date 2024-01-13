"use client";
import React, { useState } from "react";
import MsgSending from "./components/MsgSending";
import Texts from "./components/Texts";
import { io } from "socket.io-client";

export default function page() {
  const [texts, setTexts] = useState<{ isUser: boolean; message: string }[]>(
    []
  );

  const sentMessage = (text: { isUser: boolean; message: string }) => {
    setTexts([...texts, text]);
  };

  return (
    <>
      <div className="fixed bottom-0">
        <Texts texts={texts} />
        <MsgSending sentMessage={sentMessage} />
      </div>
    </>
  );
}
