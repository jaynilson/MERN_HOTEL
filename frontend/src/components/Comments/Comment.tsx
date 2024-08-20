import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Comments: React.FC = () => {
    const comments = useSelector((state: RootState) => state.comment.comments);

    return ( // I am not clear about map function yet.
        <div>
            {comments.map(comment => (
                <div key={comment._id}>
                    <p>{comment.text}</p>
                    <p>{comment.user?.username}</p>
                </div>
            ))}
        </div>
    );
};

export default Comments;