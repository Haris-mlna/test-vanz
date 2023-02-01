import React from "react";
import "./case2.css";

import { Link } from "react-router-dom";

const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

const case2 = () => {
  const countComment = (comment) => {
    if (comment.replies) {
      return (
        1 +
        comment.replies.reduce((total, reply) => {
          return total + countComment(reply);
        }, 0)
      );
    } else {
      return 1;
    }
  };

  const totalComments = comments.reduce((total, comment) => {
    return total + countComment(comment);
  }, 0);

  console.log(totalComments); // 7

  return (
    <div className="case-2">
      <div className="whiteboard">
        <h1 className="header-whiteboard">CASE 2</h1>
        <p>Recursion</p>
        <pre>
          const countComment ={">"} (comment) ={">"} {"{"}
          <br />{' '}if(comment.replies){"{"}
          <br />{' '}{' '}return {"("}
          <br /> {' '}{' '}{' '}{' '}1 + comment.replies.reduce{"("}(total, reply) ={">"} {"{"}
          <br /> {' '}{' '}{' '}{' '}{' '}return total + countComment(reply);
          <br /> {' '}{' '}{' '}{' '}{"},0)"}
          <br />
          {' '}{' '}{");"}
          <br/>{' '} else {'{'}
          <br/> {' '}{' '}return 1
          <br/>{' '} {'}'}
          const totalComments = comments.reduce((total,comment) ={'> {'})
          <br/>
          {' '}return total + countComment(comment);
          <br/>
          {'}, 0);'}

          console.log(totalComments)
        </pre>
        <h2>Result :</h2>
        <p>{totalComments}</p>
      </div>
      <Link to="/">
        <button className="next-button">Case 1</button>
      </Link>
      <Link to="/case3">
        <button className="next-button">Case 3</button>
      </Link>
    </div>
  );
};

export default case2;
