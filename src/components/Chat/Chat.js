import React from "react";
import cam from "../../img/cam.png";
import add from "../../img/add.png";
import more from "../../img/more.png";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Janet</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
