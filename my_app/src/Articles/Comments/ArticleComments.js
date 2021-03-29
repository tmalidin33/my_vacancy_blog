import React from 'react';
import './comments.css';
import { Card } from 'react-bootstrap';
const ArticleComments = ({ comment, onDeleteComment }) => {
    return (
        <>
            <Card bg="dark" text="light" className="commentInfo">
                <Card.Body>
                    <div className="deleteComment-ctn" onClick={()=>onDeleteComment(comment)}>
                        <span className='deleteComment'>&#10006;</span>
                    </div>
                    <blockquote className="blockquote mb-0">
                        <p>{comment.text}</p>
                        <footer className="blockquote-footer">
                            {comment.sender} - {comment.created_at}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            
        </>
    );
};

export default ArticleComments;
