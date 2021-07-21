import * as types from '../constant'

const DEFAULT_STATE = {
    listItem: [],
    dataFetched: false,
    isFetching: false,
    error: null,
    errorMessage: null,
}

let reducerItem = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_ITEM_REQUEST:
        case types.ADD_ITEM_REQUEST:
        case types.DELETE_ITEM_REQUEST:
        case types.UPDATE_ITEM_REQUEST:
        case types.SEARCH_ITEM_REQUEST:
        case types.PAGINATION_ITEM_REQUEST:
        case types.SEARCHPAG_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.GET_ITEM_SUCCESS:
        case types.SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: null,
                errorMessage: null,
                listItem: action.payload
            }
        
        case types.PAGINATION_ITEM_SUCCESS:
            console.log("reducer pag..." ,action.payload);
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: null,
                errorMessage: null,
                listItem: action.payload.listItem,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage
            }
        
        case types.SEARCHPAG_ITEM_SUCCESS:
            console.log("reducer searchpag..." ,action.payload);
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: null,
                errorMessage: null,
                listItem: action.payload.listItem,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage
            }

        case types.ADD_ITEM_SUCCESS:
        case types.DELETE_ITEM_SUCCESS:
        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: null,
                errorMessage: null
            }
        case types.GET_ITEM_FAILURE:
        case types.ADD_ITEM_FAILURE:
        case types.DELETE_ITEM_FAILURE:
        case types.UPDATE_ITEM_FAILURE:
        case types.SEARCH_ITEM_FAILURE:
        case types.PAGINATION_ITEM_FAILURE:
        case types.SEARCHPAG_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: null,
                errorMessage: action.payload.errorMessage
            }
        
        default:
            return state;
    }
}
export default reducerItem