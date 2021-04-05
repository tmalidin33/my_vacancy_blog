/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Articles from './Articles/ArticlesList';
import Users from './Users/Users';
import ArticleViewContainer from './Articles/ArticleViewContainer';
import NotFoundPage from './404/404';

function App() {
    return (
        <div className="container">
            <Router>
                <div>
                    <Header />
                    <main>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/articles" component={Articles} />
                            <Route exact path="/users" component={Users} />
                            <Route path="/articles/:id" component={ArticleViewContainer} />
                            <Route path="/404" component={NotFoundPage} />
                            <Redirect to="/404" />
                        </Switch>
                    </main>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
