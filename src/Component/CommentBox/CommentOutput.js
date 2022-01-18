import React from "react";

export default function CommentOutput({ comment }) {
  return (
    <div className="comment">
      <h3>Comment</h3>
      {comment &&
        comment.map((data, i) => {
          return (
            <div key={i} className="p-3 mb-3 border rounded border-bottom">
              <strong className="border-bottom">
                {data.name}
                <span className="text-muted fw-normal"> {data.email}</span>
              </strong>
              <p className="mb-0">{data.comment}</p>
            </div>
          );
        })}
    </div>
  );
}
