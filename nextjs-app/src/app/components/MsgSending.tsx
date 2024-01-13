"use client";
import { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001/");

interface Props {
  sentMessage: ({
    isUser,
    message,
  }: {
    isUser: boolean;
    message: string;
  }) => void;
}

export default function MsgSending({ sentMessage }: Props) {
  const [message, setMessage] = useState("");

  var handleSubmit = (e: { preventDefault: () => void }) => {
    const isUser = true;
    e.preventDefault();
    sentMessage({ isUser, message });
    socket.emit("send-message", message);
  };

  socket.on("recieve-message", (message) => {
    const isUser = false;
    sentMessage({ isUser, message });
  });

  return (
    <div>
      <form className="flex w-screen" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          id="last_name"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
        <input
          type="submit"
          value="Send"
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
}
