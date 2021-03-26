import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import ArticleCreateForm from './ArticleCreateForm';

import './Articles.css';
const ArticleCreateModal = (props) => {
    const { t } = useTranslation('translation');
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {t('articleCreate.modalTitle')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ArticleCreateForm submit={props.onSubmit}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>{t('articleCreate.closeModal')}</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default ArticleCreateModal;
