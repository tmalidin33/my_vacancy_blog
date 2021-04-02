import React from 'react';
import { Formik } from 'formik';
import { Form, Button, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
const ArticleCreateForm = (props) => {
    const { t } = useTranslation('translation');
    return (
        <Formik
            initialValues={{ title: '', subtitle: '', genre: '', desc: '', author: '' }}
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
                if (!values.author) {
                    errors.author = t('articleCreate.errors.requiredAuthor');
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
                    <Form.Row>
                        <Form.Group as={Col} controlId="genreControl">
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
                        <Form.Group as={Col} controlId="authorControl">
                            <Form.Label>{t('articleCreate.author')}</Form.Label>
                            <Form.Control
                                as="select"
                                defaultValue={t('articleCreate.authorPlaceholder')}
                                name="author"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.author && !errors.author}
                                isInvalid={touched.author && errors.author}
                                placeholder={t('articleCreate.authorPlaceholder')}
                            >
                                <option disabled>{t('articleCreate.authorPlaceholder')}</option>
                                {props.authors.map((aut) => (
                                    <option value={aut.userId} key={aut.userId}>
                                        {aut.first_name + ' ' + aut.last_name}
                                    </option>
                                ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.authors || 'Please select an author!'}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

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
