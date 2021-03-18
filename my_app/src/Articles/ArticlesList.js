/** @format */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Article from './ArticleCard';
import './Articles.css';

const Articles = (props) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/api/articles').then((res) => {
            setArticles(res.data);
        });
    }, [articles]);
    return (
        <>
            <h1>Articles</h1>
            <div className="articles-container">
                {articles.map((article) => (
                    // <Link key={article.id} to={`/articles/${article.id}`}>
                    <Article key={article.id} data={article} />
                    // </Link>
                ))}
            </div>
        </>
    );
};
export default Articles;
