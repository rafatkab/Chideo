import React from "react";
import MsgSending from "./components/MsgSending";
import Texts from "./components/Texts";
import { io } from "socket.io-client";

export default function page() {
  return (
    <>
      <div className="fixed bottom-0">
        <Texts />
        <MsgSending />
      </div>
    </>
  );
}
