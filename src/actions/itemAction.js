import { itemActions, itemTypes } from './types';
import axios from 'axios'

const { baseUrl = "http://localhost:5000" } = process.env
export const updateItemCategory = (newCategory) => {
    return {
        type: itemActions.UPDATE_CATEGORY,
        payload: { newCategory }
    }
}
export const loadItemsStart = () => {
    return {
        type: itemActions.LOAD_ITEMS_START
    }
}

export const loadItemsSuccess = (data, itemType) => {
    return {
        type: itemActions.LOAD_ITEMS_SUCCESS,
        payload: { data, itemType }
    }
}
export const loadItemsError = (err) => {
    return {
        type: itemActions.LOAD_ITEMS_ERROR,
        payload: { err }
    }
}

export const loadItemStart = () => {
    return {
        type: itemActions.LOAD_ITEM_START
    }
}

export const loadItemSuccess = (data, itemType) => {
    return {
        type: itemActions.LOAD_ITEM_SUCCESS,
        payload: { data, itemType }
    }
}
export const loadItemError = (err) => {
    return {
        type: itemActions.LOAD_ITEM_ERROR,
        payload: { err }
    }
}

export const createItemStart = () => {
    return {
        type: itemActions.CREATE_ITEM_START
    }
}

export const createItemSuccess = (data, itemType) => {
    return {
        type: itemActions.CREATE_ITEM_SUCCESS,
        payload: { data, itemType }
    }
}
export const createItemError = (err) => {
    return {
        type: itemActions.CREATE_ITEM_ERROR,
        payload: { err }
    }
}

export const loadItem = (id) => {
    return async (dispatch, getState) => {
        const { item: { itemType } } = getState();
        if (itemType == null) return

        const url = baseUrl + getUrl(itemType) + "/" + id
        const {
            user: { token },
        } = getState();
        try {
            dispatch(loadItemStart());
            const response = await axios.get(
                url,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            dispatch(loadItemSuccess(response.data.book, itemType));
        } catch (err) {
            dispatch(loadItemError(err));
        }
    };
};

export const loadItems = () => {
    return async (dispatch, getState) => {
        const { item: { itemType } } = getState()
        if (itemType == null) return

        const url = baseUrl + getUrl(itemType)
        const {
            user: { token },
        } = getState();
        try {
            dispatch(loadItemsStart());
            const response = await axios.get(
                url,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            dispatch(
                loadItemsSuccess(
                    response.data.result.docs,
                    itemType
                )
            );
        } catch (err) {
            dispatch(loadItemsError(err));
        }
    };
}

export const createItem = (formData) => {
    return async (dispatch, getState) => {
        const { item: { itemType } } = getState()
        if (itemType == null) return

        const url = baseUrl + getUrl(itemType)
        const {
            user: { token },
        } = getState();
        try {
            dispatch(createItemStart());
            const response = await axios.post(
                url,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            dispatch(createItemSuccess(response.data.book));
        } catch (err) {
            dispatch(createItemError(err));
        }
    };
};

export const getUrl = (itemtype) => {
    switch (itemtype) {
        case itemTypes.MOVIE:
            return "/api/v1/movies"
        case itemTypes.ANIME:
            return "/api/v1/anime"
        case itemTypes.BOOK:
            return "/api/v1/books"

        default:
            return "/api/v1/movies"
    }
}

const postJsonData = (url, data) => {
    return new Promise(resolve => {
        resolve(
            fetch(
                url,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            ).then(resp => resp.json())
        )
    })
}