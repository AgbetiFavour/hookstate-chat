import { useState } from "@hookstate/core";
import React from "react";
import ChatBox from "react-custom-chat";
import store from "./store";

const FirstPerson = () => {
  const { firstPersonMessageList, secondPersonMessageList } = useState(store);
  const handleSendMessage = (newMessage) => {
    firstPersonMessageList.merge([
      {
        text: newMessage,
        person: "primary",
      },
    ]);
    setTimeout(() => {}, 500);
    secondPersonMessageList.merge([
      {
        text: newMessage,
        person: "secondary",
      },
    ]);
  };
  return (
    <div>
      <ChatBox
        settings={{
          position: "left",
          navColor: "green",
          navText: "Dennis",
          isOpen: true,
        }}
        messageList={firstPersonMessageList.get()}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default FirstPerson;
