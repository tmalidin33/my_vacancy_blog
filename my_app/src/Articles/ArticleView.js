import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// import './ArticleView.css';
const ArticleView = (props) => {
    const history = useHistory();
    const [article, setArticle] = useState({});
    const id = props.match.params.id;
    const url = `http://localhost:4000/api/articles/${id}`;
    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setArticle(res.data);
            })
            .catch((err) => {
                history.push('/404');
            });
    }, [article, history, url]);
    return (<>
        <h1>{article.title}</h1>
        <h2>{article.subtitle}</h2>
        <h3>{article.genre}</h3>
        <p>{article.created_at}</p>
        <p>{article.desc}</p>
    </>);
};
export default ArticleView;
