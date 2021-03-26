import React from 'react';

const ArticleMainBody = ({ article }) => {
    return (
        <>
            <h1>{article.title}</h1>
            <h2>{article.subtitle}</h2>
            <h3>{article.genre}</h3>
            <p>{article.created_at}</p>
            <p>{article.desc}</p>
        </>
    );
};

export default ArticleMainBody;
