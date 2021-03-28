import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import './comments.css';
const ArticleAddComment = ({ openForm, setOpenForm, spinBtn, setSpinBtn, submit }) => {
    const { t } = useTranslation('translation');
    return (
        <div className="newComment_ctn">
            <div
                className={openForm ? 'newComment_btn expand' : 'newComment_btn'}
                onClick={() => setOpenForm(!openForm)}
                onMouseEnter={() => setSpinBtn(!spinBtn)}
                onMouseLeave={() => setSpinBtn(!spinBtn)}
                aria-controls="form-collapse"
                aria-expanded={openForm}
            >
                <span className={spinBtn ? 'button spin' : 'button'}>&#10006;</span>
                <div id="form-collapse" onClick={(e) => e.stopPropagation()}>
                    <Formik
                        initialValues={{ sender: '', text: '' }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.sender) {
                                errors.sender = t('commentCreate.errors.requiredSender');
                            }
                            if (!values.text) {
                                errors.text = t('commentCreate.errors.requiredComment');
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                submit(values);
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            /* and other goodies */
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="senderControl">
                                    <Form.Label>{t('commentCreate.Sender')}</Form.Label>
                                    <Form.Control
                                        name="sender"
                                        required
                                        value={values.sender}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.sender && !errors.sender}
                                        isInvalid={touched.sender && errors.sender}
                                        placeholder={t('commentCreate.SenderPlaceholder')}
                                        type="text"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.sender || 'Please enter your name'}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="commentControl">
                                    <Form.Label>{t('commentCreate.Comment')}</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="text"
                                        required
                                        value={values.text}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.text && !errors.text}
                                        isInvalid={touched.text && errors.text}
                                        placeholder={t('commentCreate.CommentPlaceholder')}
                                        rows={3}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.text || 'Please enter a comment!'}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button variant="dark" type="submit">
                                    {t('commentCreate.submit')}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ArticleAddComment;
