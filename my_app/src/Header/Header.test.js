import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));
describe('Header', () => {
    describe('render', () => {
        it('should return a container', () => {
            const { container } = render(
                <Router>
                    <Header />
                </Router>
            );
            expect(container).toBeDefined();
        });
        it('should have Home and article', () => {
            const { getByTestId } = render(
                <Router>
                    <Header />
                </Router>
            );
            const home = getByTestId('home-label');
            const article = getByTestId('article-label');
            expect(home).toHaveTextContent('header.Home');
            expect(article).toHaveTextContent('header.Articles');
        });
    });
});
