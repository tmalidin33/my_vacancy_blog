import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import ArticleCreateForm from './ArticleCreateForm';

import './Articles.css';
const ArticleCreateModal = (props) => {
    const { t } = useTranslation('translation');
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        const source = axios.CancelToken.source();
        const fetchUsers = async () => {
            try {
                const res = await axios.get('/api/users', {
                    cancelToken: source.token,
                });
                setTimeout(() => {
                    setAuthors(res.data);
                }, 200);
            } catch (error) {
                if (axios.isCancel(error)) {
                } else {
                    throw error;
                }
            }
        };
        fetchUsers();
        return () => {
            source.cancel();
        };
    }, [setAuthors]);
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {t('articleCreate.modalTitle')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ArticleCreateForm submit={props.onSubmit} authors={authors} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>{t('articleCreate.closeModal')}</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default ArticleCreateModal;
