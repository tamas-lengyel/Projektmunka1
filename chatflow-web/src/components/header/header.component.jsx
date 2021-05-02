import React from "react";
import "antd/dist/antd.css";
import "./header.styles.css";
git import { Layout, Avatar, Skeleton, /*Menu,*/ Dropdown, Button } from "antd";
import { UserOutlined, PushpinOutlined } from "@ant-design/icons";
//import MessageCard from "../message-card/message-card.component";
import { PinnedMessages } from "../pinned-messages/pinned-messages.component";

const { Header } = Layout;

export const TopRow = ({ selectedRoom }) => (
  <Header className="header">
    <div className="header-left">
      <Skeleton
        loading={!selectedRoom}
        active
        title={false}
        paragraph={{ rows: 1 }}
      />
      {selectedRoom ? <h3>{selectedRoom.name}</h3> : ""}
    </div>
    <div className="header-right">
      <Dropdown
        overlay={<PinnedMessages selectedRoom={selectedRoom} />}
        trigger={["click"]}
        placement="bottomRight"
      >
        <Button icon={<PushpinOutlined />}></Button>
      </Dropdown>
      <div className="header-right-avatar">
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </div>
  </Header>
);
