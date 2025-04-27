// actions.js
export const fetchCategories = () => async (dispatch) => {
    try {
        const response = await fetch('https://northwind.vercel.app/api/categories/');
        const data = await response.json();
        dispatch({type: 'FETCH_CATEGORIES', payload: data});
    } catch (error) {
        console.error(error);
    }
};

export const addCategory = (category) => async (dispatch) => {
    try {
        await fetch('https://northwind.vercel.app/api/categories/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(category),
        });
        dispatch(fetchCategories());  // Refresh categories after adding
    } catch (error) {
        console.error(error);
    }
};

export const updateCategory = (id, category) => async (dispatch) => {
    try {
        await fetch(`https://northwind.vercel.app/api/categories/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(category),
        });
        dispatch(fetchCategories());  // Refresh categories after updating
    } catch (error) {
        console.error(error);
    }
};

export const deleteCategory = (id) => async (dispatch) => {
    try {
        await fetch(`https://northwind.vercel.app/api/categories/${id}`, {
            method: 'DELETE',
        });
        dispatch(fetchCategories());  // Refresh categories after deleting
    } catch (error) {
        console.error(error);
    }
};
