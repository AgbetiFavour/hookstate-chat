import React from "react";
import ChatBox from "react-custom-chat";
import store from "./store";
import { useState } from "@hookstate/core";

const SecondPerson = () => {
  const { firstPersonMessageList, secondPersonMessageList } = useState(store);
  const handleSendMessage = (newMessage) => {
    secondPersonMessageList.merge([
      {
        text: newMessage,
        person: "primary",
        }])
      setTimeout(() => {
          
          firstPersonMessageList.merge([
            {
              text: newMessage,
              person: "secondary",
            },
          ]);
      }, 500)
  };
  return (
    <div>
      <ChatBox
        settings={{
          navColor: "blue",
          navText: "Favour",
          isOpen: true,
        }}
              messageList={secondPersonMessageList.get()}
              onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default SecondPerson;
