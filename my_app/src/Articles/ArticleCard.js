import React from 'react';
import './Articles.css';
import { useHistory } from 'react-router-dom';

const Article = (props) => {
    const history = useHistory();
    const { title, subtitle, id } = props.data;
    return (
        <div className="article-card" onClick={() => history.push(`/articles/${id}`)}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
};
export default Article;
