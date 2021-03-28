import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ArticleMainBody';
import ArticleMainBody from './ArticleMainBody';
import ArticleComments from './Comments/ArticleComments.js';
import ArticleAddComment from './Comments/ArticleAddComment.js';

// import './ArticleView.css';
const ArticleViewContainer = (props) => {
    const history = useHistory();
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState({});
    const [openForm, setOpenForm] = useState(false);
    const [spinBtn, setSpinBtn] = useState(false);
    const id = props.match.params.id;
    const urlArticles = `http://localhost:4000/api/articles/${id}`;
    const urlComments = `http://localhost:4000/api/articles/${id}/comments`;

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
    return (
        <>
            <ArticleMainBody article={article} />
            {comments.length > 0 && (
                <>
                    <hr />
                    <div className="commentsContainer">
                        {comments.map((comment) => (
                            <ArticleComments key={comment.id} comment={comment} />
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
