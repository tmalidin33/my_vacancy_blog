/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from './ArticleCard';
import ArticleCreateForm from './ArticleCreateModal';
import Loader from '../Loader/Loader';
import './Articles.css';
import { Pen } from 'react-bootstrap-icons';

import { useTranslation } from 'react-i18next';

const Articles = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const { t } = useTranslation('translation');

    useEffect(() => {
        const source = axios.CancelToken.source();
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:4000/api/articles', {
                    cancelToken: source.token,
                });
                setArticles(res.data);
                setLoading(false);
            } catch (error) {
                if (axios.isCancel(error)) {
                } else {
                    throw error;
                }
            }
        };
        fetchUsers();
        return () => {
            source.cancel();
        };
    }, []);

    const handleShowModal = (e) => {
        setShowModal(true);
    };
    return (
        <>
            <div className="container">
                <div className="articles-header">
                    <h1>{t('articles.articles')}</h1>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={handleShowModal}
                    >
                        <Pen /> {t('articles.newArticle')}
                    </button>
                </div>
                <hr />
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="articles-container">
                            {articles.map((article) => (
                                <Article key={article.id} data={article} />
                            ))}
                        </div>
                        <ArticleCreateForm show={showModal} onHide={() => setShowModal(false)} />
                    </>
                )}
            </div>
        </>
    );
};
export default Articles;
