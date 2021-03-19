import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation('translation');
    return (
        <footer className="main">
            <p>{t('footer.private')}</p>
            <p>Thomas Malidin Delabriere</p>
        </footer>
    );
};
export default Footer;
