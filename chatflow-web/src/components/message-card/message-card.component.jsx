import React, { createElement, useState } from "react";
import { Comment, Tooltip, Skeleton, Button } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  PushpinOutlined,
  PushpinFilled,
} from "@ant-design/icons";
import "./message-card.styles.css";

const MessageCard = ({ id, content, pinned, onReply, onPin }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
  ];

  if (onReply && id) {
    actions.push(
      <Button
        key="comment-basic-reply-to"
        type="link"
        onClick={() => onReply(id)}
      >
        Reply to
      </Button>
    );
  }

  if (onPin && id) {
    actions.push(
      <Button
        type="text"
        icon={pinned ? <PushpinFilled /> : <PushpinOutlined />}
        onClick={() => onPin(id, !pinned)}
      ></Button>
    );
  }

  return (
    <div className="my-comment">
      <Skeleton
        loading={!content}
        avatar
        active
        title={false}
        paragraph={{ rows: 3 }}
      />
      {content ? (
        <Comment
          actions={actions}
          author={<p>John Doe</p>}
          content={<div dangerouslySetInnerHTML={{ __html: content }} />}
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default MessageCard;
