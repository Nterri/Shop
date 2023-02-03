import React from 'react';

const CommentItem = ({comm}) => {
    return (
        <div className="comment">
            <div className="comment__name">Имя: <span>{comm.name}</span></div>
            <div className="comment__email">Почта: <span>{comm.email}</span></div>
            <div className="comment__text">Сообщение: <span>{comm.body}</span></div>
        </div>
    );
};

export default CommentItem;