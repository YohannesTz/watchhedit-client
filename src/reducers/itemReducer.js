import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';
import { itemTypes } from '../actions/types'
import { itemActions } from '../actions/types'

const initialState = {
    itemType: itemTypes.MOVIE,
    items: [

    ],
    item: {},
    loadingItems: false,
    loadingItem: false,
    loadItemError: null,
    loadItemsError: null,
    creatingItem: false,
    createItemError: null,
    createItemSuccess: false,
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        case itemActions.LOAD_ITEMS_START:
            return {
                ...state,
                loadingItems: true
            }
        case itemActions.LOAD_ITEM_START:
            return {
                ...state,
                loadingItem: true
            }
        case itemActions.UPDATE_CATEGORY:
            return {
                ...state,
                itemType: action.payload.newType
            }
        case itemActions.LOAD_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.payload.data,
                itemType: action.payload.itemType,
                loadingItems: false,
            }
        case itemActions.LOAD_ITEM_SUCCESS:
            return {
                ...state,
                item: action.payload.data,
                itemType: action.payload.itemType,
                loadingItem: false,
            }
        case itemActions.LOAD_ITEMS_ERROR:
            return {
                ...state,
                loadItemsError: action.payload.err,
                loadingItems: false,
            }
        case itemActions.LOAD_ITEM_ERROR:
            return {
                ...state,
                loadItemError: action.payload.err,
                loadingItem: false,
            }
        case itemActions.CREATE_ITEM_START:
            return {
                ...state,
                creatingItem: true,
                createItemError: false,
            }
        case itemActions.CREATE_ITEM_SUCCESS:
            return {
                ...state,
                creatingItem: false,
                createItemSuccess: true,
                items: [action.payload.data, ...state.items],
            }
        case itemActions.CREATE_ITEM_ERROR:
            return {
                ...state,
                createItemError: action.payload.err,
                creatingItem: false
            }

        default:
            return state;
    }
}

export default itemReducer 