import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Users.css';

const UsersCard = ({ user }) => {
    const [infoShow, setInfoShow] = useState(false);
    const { t } = useTranslation('translation');
    const handleHover = () => {
        setInfoShow(!infoShow);
    };
    return (
        <Card
            style={{ width: '100%' }}
            className="card-ctn"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <Card.Img variant="top" src={user.picture} className="img-ctn" />
            <Card.Body className={infoShow ? 'user_info' : null}>
                <Card.Title>{user.first_name + ' ' + user.last_name}</Card.Title>
                <Card.Subtitle>{user.profession}</Card.Subtitle>
                <Card.Link href={'/articles?author=' + user.userId}>
                    {t('users.seeArticles')}
                </Card.Link>
            </Card.Body>
        </Card>
    );
};

export default UsersCard;
