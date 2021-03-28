import React from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
const ArticleCreateForm = (props) => {
    const { t } = useTranslation('translation');
    return (
        <Formik
            initialValues={{ title: '', subtitle: '', genre: '', desc: '' }}
            validate={(values) => {
                const errors = {};
                if (!values.title) {
                    errors.title = t('articleCreate.errors.requiredTitle');
                }
                if (!values.desc) {
                    errors.desc = t('articleCreate.errors.requiredDesc');
                }
                if (values.genre && !values.genre.match(/^[a-z]+$/i)) {
                    errors.genre = t('articleCreate.errors.alphaTitle');
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    props.submit(values);
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
                    <Form.Group controlId="titleControl">
                        <Form.Label>{t('articleCreate.title')}</Form.Label>
                        <Form.Control
                            name="title"
                            required
                            value={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.title && !errors.title}
                            isInvalid={touched.title && errors.title}
                            placeholder={t('articleCreate.titlePlaceholder')}
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.title || 'Please enter a title'}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="subtitleControl">
                        <Form.Label>{t('articleCreate.subtitle')}</Form.Label>
                        <Form.Control
                            name="subtitle"
                            value={values.subtitle}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.subtitle && !errors.subtitle}
                            isInvalid={touched.subtitle && errors.subtitle}
                            placeholder={t('articleCreate.subtitlePlaceholder')}
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.subtitle || 'Please enter a subtitle'}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="genreControl">
                        <Form.Label>{t('articleCreate.genre')}</Form.Label>
                        <Form.Control
                            name="genre"
                            value={values.genre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.genre && !errors.genre}
                            isInvalid={touched.genre && errors.genre}
                            placeholder={t('articleCreate.genrePlaceholder')}
                            type="text"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.genre || 'Only alpha cars!'}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="titleControl">
                        <Form.Label>{t('articleCreate.desc')}</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="desc"
                            required
                            value={values.desc}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.desc && !errors.desc}
                            isInvalid={touched.desc && errors.desc}
                            placeholder={t('articleCreate.descPlaceholder')}
                            rows={6}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.desc || 'Please enter some text'}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {t('articleCreate.submit')}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default ArticleCreateForm;
