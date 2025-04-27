import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategories, addCategory, updateCategory, deleteCategory} from '/src/lib/actions.js';
import {Formik, Field, Form} from 'formik';
import AOS from 'aos';

const Dashboard = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const [editingCategory, setEditingCategory] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'slide',
            once: true
        });
        AOS.refresh();
    }, []);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleAdd = (values) => {
        dispatch(addCategory(values));
    };

    const handleEdit = (id, values) => {
        dispatch(updateCategory(id, values));
        setEditingCategory(null);
    };

    const handleDelete = (id) => {
        dispatch(deleteCategory(id));
    };

    const handleStartEdit = (category) => {
        setEditingCategory(category);
    };

    return (
        <div className="container py-5 mt-5">
            <div data-aos="fade-up">
                <h1 className="mb-4 text-center">Admin Panel</h1>

                <div className="card shadow-sm mb-4">
                    <div className="card-body">
                        <Formik
                            initialValues={{
                                name: editingCategory ? editingCategory.name : '',
                                description: editingCategory ? editingCategory.description : ''
                            }}
                            enableReinitialize={true}
                            onSubmit={(values, { resetForm }) => {
                                if (editingCategory) {
                                    dispatch(updateCategory(editingCategory.id, values));
                                    setEditingCategory(null);
                                } else {
                                    dispatch(addCategory(values));
                                }
                                resetForm();
                            }}
                        >
                            {({ values, handleChange }) => (
                                <Form>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="description"
                                            value={values.description}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Description"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        {editingCategory ? 'Update Category' : 'Add Category'}
                                    </button>
                                    {editingCategory && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setEditingCategory(null);
                                            }}
                                            className="btn btn-secondary ms-2"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up">
                <h2 className="mb-4">Categories List</h2>
                <ul className="list-group">
                    {categories.map((category) => (
                        <li key={category.id}
                            className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{category.name} - {category.description}</span>
                            <div>
                                <button
                                    onClick={() => handleStartEdit(category)}
                                    className="btn btn-warning btn-sm me-2 px-3"
                                >
                                    <span className="icon-edit"></span>
                                </button>
                                <button
                                    onClick={() => handleDelete(category.id)}
                                    className="btn btn-danger btn-sm px-3"
                                >
                                    <span className="icon-trash"></span>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
