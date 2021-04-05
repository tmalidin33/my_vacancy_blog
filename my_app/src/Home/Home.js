import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './Home.css';
const Home = () => {
    const { t } = useTranslation('translation');
    return (
        <>
            <div className="jumbotron">
                <p>
                    <Trans i18nKey="home.parag1">
                        Ceci est un <strong>test</strong> de Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Rem id delectus iusto quisquam odio pariatur recusandae
                        debitis reprehenderit ut necessitatibus consequatur error animi tempore
                        magni, placeat, fugiat enim quam temporibus.
                    </Trans>
                </p>
                <p>{t('home.parag2')}</p>
                <p>{t('home.parag3')}</p>
            </div>
            <h2>{t('home.lastArticles')}</h2>
        </>
    );
};
export default Home;
