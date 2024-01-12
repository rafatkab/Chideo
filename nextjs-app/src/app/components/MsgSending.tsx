"use client";
import { log } from "console";
import { useRef } from "react";
import { io } from "socket.io-client";

// const socket = io("http://localhost:3001/");

export default function MsgSending() {
  // socket.emit("send message", message);
  const message = useRef(0);

  var handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div>
      <form className="flex w-screen" onSubmit={handleSubmit}>
        <input
          val
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
