"use client";
import React, { useState, createElement } from "react";

interface Props {
  texts: { isUser: boolean; message: string }[];
}

export default function Texts({ texts }: Props) {
  return (
    <div className="flex flex-col">
      {texts.map((text) =>
        text.isUser ? (
          <div className="m-4 p-2 ml-auto bg-blue-700 rounded-l-lg rounded-tr-lg">
            {text.message}
          </div>
        ) : (
          <div className="m-4 p-2 mr-auto bg-gray-700 rounded-r-lg rounded-tl-lg">
            {text.message}
          </div>
        )
      )}
    </div>
  );
}
