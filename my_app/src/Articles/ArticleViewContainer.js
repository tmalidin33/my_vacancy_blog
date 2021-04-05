import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './ArticleMainBody';
import ArticleMainBody from './ArticleMainBody';
import ArticleComments from './Comments/ArticleComments.js';
import ArticleAddComment from './Comments/ArticleAddComment.js';

import { useTranslation } from 'react-i18next';

// import './ArticleView.css';
const ArticleViewContainer = (props) => {
    const history = useHistory();
    const { t } = useTranslation('translation');

    const [article, setArticle] = useState({});
    const [comments, setComments] = useState({});
    const [openForm, setOpenForm] = useState(false);
    const [spinBtn, setSpinBtn] = useState(false);

    const id = props.match.params.id;
    const urlArticles = `/api/articles/${id}`;
    const urlComments = `/api/articles/${id}/comments`;

    useEffect(() => {
        let source = axios.CancelToken.source();
        axios
            .get(urlArticles, { CancelToken: source.token })
            .then((res) => {
                setArticle(res.data);
            })
            .catch((err) => {
                history.push('/404');
            });
        axios
            .get(urlComments, { CancelToken: source.token })
            .then((res) => {
                setComments(res.data);
            })
            .catch((err) => {
                history.push('/404');
            });

        return () => {
            source.cancel('Component got unmounted');
        };
    }, [setArticle, setComments, history, urlArticles, urlComments]);

    const handleSubmitComment = (values) => {
        axios
            .post(urlComments, values)
            .then(function (res) {
                if (res.status === 200) {
                    setComments([...comments, res.data]);
                    setOpenForm(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDeleteComment = (comment) => {
        axios
            .delete(`/api/comments/${comment.id}`)
            .then(function (res) {
                if (res.status === 204) {
                    const filterComment = comments.filter((com) => com.id !== comment.id);
                    setComments(filterComment);
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
                <Breadcrumb.Item href={'/articles/' + article.id}>{article.title}</Breadcrumb.Item>
            </Breadcrumb>
            <ArticleMainBody article={article} />
            {comments.length > 0 && (
                <>
                    <hr />
                    <div className="commentsContainer">
                        {comments.map((comment) => (
                            <ArticleComments
                                key={comment.id}
                                comment={comment}
                                onDeleteComment={handleDeleteComment}
                            />
                        ))}
                    </div>
                </>
            )}
            <ArticleAddComment
                submit={handleSubmitComment}
                openForm={openForm}
                setOpenForm={setOpenForm}
                spinBtn={spinBtn}
                setSpinBtn={setSpinBtn}
            />
        </>
    );
};
export default ArticleViewContainer;
