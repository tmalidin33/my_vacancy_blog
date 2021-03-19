/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from './ArticleCard';
import ArticleCreateForm from './ArticleCreateForm';
import './Articles.css';

const Articles = (props) => {
    const [articles, setArticles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:4000/api/articles').then((res) => {
            setArticles(res.data);
        });
    }, [articles]);
    const handleShowModal = (e) => {
        setShowModal(true);
    };
    return (
        <>
            <div>
                <h1>Articles</h1>
                <button onClick={handleShowModal}>+</button>
            </div>
            <div className="articles-container">
                {articles.map((article) => (
                    <Article key={article.id} data={article} />
                ))}
            </div>
            <ArticleCreateForm show={showModal} />
        </>
    );
};
export default Articles;
