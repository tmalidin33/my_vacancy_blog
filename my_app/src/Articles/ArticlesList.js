/** @format */

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Article from './ArticleCard';
import ArticleCreateForm from './ArticleCreateModal';
import SearchArticles from './SearchArticles';
import Loader from '../Loader/Loader';
import { Breadcrumb } from 'react-bootstrap';
import './Articles.css';

import { Pen } from 'react-bootstrap-icons';

import { useTranslation } from 'react-i18next';

const Articles = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const { t } = useTranslation('translation');
    const search = useLocation().search;
    useEffect(() => {
        const source = axios.CancelToken.source();
        const fetchArticles = async () => {
            try {
                let url = '/api/articles';
                if (search) {
                    url += search;
                }
                const res = await axios.get(url, {
                    cancelToken: source.token,
                });
                setTimeout(() => {
                    setArticles(res.data);
                    setLoading(false);
                }, 200);
            } catch (error) {
                if (axios.isCancel(error)) {
                } else {
                    throw error;
                }
            }
        };
        fetchArticles();
        return () => {
            source.cancel();
        };
    }, [search, setArticles, setLoading]);

    const handleShowModal = (e) => {
        setShowModal(true);
    };

    const handleSubmit = (values) => {
        setLoading(true);
        axios
            .post('/api/articles', values)
            .then(function (res) {
                if (res.status === 201) {
                    setArticles([...articles, res.data]);
                    setShowModal(false);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleClick = (values) => {
        setLoading(true);
        axios
            .get(`/api/articles?title=${values}`)
            .then((res) => {
                if (res.status === 200) {
                    setTimeout(() => {
                        //Artificial Loading
                        setArticles(res.data);
                        setLoading(false);
                    }, 200);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">{t('header.Home')}</Breadcrumb.Item>
                <Breadcrumb.Item href="/articles">{t('header.Articles')}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="container">
                <div className="articles-header">
                    <h1>{t('articles.articles')}</h1>
                    <div className="newArticles_search">
                        <button
                            style={{ marginRight: '15px' }}
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={handleShowModal}
                        >
                            <Pen /> {t('articles.newArticle')}
                        </button>
                        <SearchArticles handleClick={handleClick} />
                    </div>
                </div>
                <hr />
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="articles-container">
                            {articles.length > 0 ? (
                                articles.map((article) => (
                                    <Article key={article.id} data={article} />
                                ))
                            ) : (
                                <h2>Aucun article trouvé !</h2>
                            )}
                        </div>
                        <ArticleCreateForm
                            show={showModal}
                            onSubmit={handleSubmit}
                            onHide={() => setShowModal(false)}
                        />
                    </>
                )}
            </div>
        </>
    );
};
export default Articles;
