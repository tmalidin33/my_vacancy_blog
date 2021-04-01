const Articles = require('../models/dbHelpers');

function articlesController() {
    function post(req, res) {
        Articles.add(req.body)
            .then((article) => {
                return res.status(201).json(article);
            })
            .catch((err) => {
                return res.status(500).json({ message: 'Cannot insert article' });
            });
    }
    function get(req, res) {
        Articles.find(req.body)
            .then((articles) => {
                const returnArticles = articles.map((article) => {
                    const newArticle = article;
                    newArticle.links = {};
                    newArticle.links.self = `http://${req.headers.host}/api/articles/${article.id}`;
                    return newArticle;
                });
                if (req.query.title) {
                    const queryTitle = req.query.title.toLowerCase();
                    const filterArticles = returnArticles.filter((article) => {
                        return article.title.toLowerCase().includes(queryTitle);
                    });
                    console.log(filterArticles);
                    return res.status(200).json(filterArticles);
                }
                return res.status(200).json(returnArticles);
            })
            .catch((err) => {
                return res.status(500).json({ message: 'Cannot retrived articles' });
            });
    }
    return { get, post };
}
module.exports = articlesController;
