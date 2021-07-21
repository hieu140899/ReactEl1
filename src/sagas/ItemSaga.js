import { put, takeEvery } from "redux-saga/effects"
import getItems from '../fetchAPI/getItems'
import addItem from '../fetchAPI/addItems'
import deleteItem from '../fetchAPI/deleteItems'
import updateItem from '../fetchAPI/updateItems'
import searchItem from '../fetchAPI/searchItems'
import paginationItem from '../fetchAPI/panigationItems'
import searchAll from '../fetchAPI/searchAll'
import * as types from '../constant'

function* getListItem() {
    try {
        const res = yield getItems()
        // console.log("hihihih",res);
        yield put({
            type: types.GET_ITEM_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* addListItem(data) {
    console.log("data in CONTAINER to SAGA");
    try {
        yield addItem(data)
        yield put({
            type: types.ADD_ITEM_SUCCESS
        })
        yield put({
            type: types.GET_ITEM_REQUEST
        })
    } catch (error) {
        yield put({
            type: types.ADD_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* deleteItemID(data) {
    try {
        yield deleteItem(data.payload.itemID)
        yield put({
            type: types.DELETE_ITEM_SUCCESS
        })
        yield put({
            type: types.GET_ITEM_REQUEST
        })
    } catch (error) {
        yield put({
            type: types.DELETE_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* updateItemID(update) {
    console.log("ap detaaaaaaa", update.payload);
    try {
        yield updateItem(update.payload)
        console.log(update.payload,'sagaaaaaaaaa');
        yield put({
            type: types.UPDATE_ITEM_SUCCESS
        })
        yield put({
            type: types.GET_ITEM_REQUEST
        })
    } catch (error) {
        yield put({
            type: types.UPDATE_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* searchItemID(search) {
    console.log("search item - saga...", search.payload);
    try {
        const res  = yield searchItem(search.payload)
        const resall  = yield searchAll(search.payload)

        yield put({
            type: types.SEARCHPAG_ITEM_SUCCESS,
            payload: {
                listItem: res,
                activePage: search.payload.activePage,
                totalPage: Math.ceil(resall.length / types.LIMIT)
            }
        })
    } catch (error) {
        yield put({
            type: types.SEARCHPAG_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* paginationItemID(pagination) {
    console.log("pagination item - saga...", pagination);
    try {
        const data = yield getItems()

        const res  = yield paginationItem(pagination.payload)
        console.log('pagination trong saga...', pagination.payload);
        yield put({
            type: types.PAGINATION_ITEM_SUCCESS,
            payload: {
                activePage: pagination.payload,
                listItem: res,
                totalPage: Math.ceil(data.length / types.LIMIT)
            }
        })
    } catch (error) {
        yield put({
            type: types.PAGINATION_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getListItem),
    takeEvery(types.ADD_ITEM_REQUEST, addListItem),
    takeEvery(types.DELETE_ITEM_REQUEST, deleteItemID),
    takeEvery(types.UPDATE_ITEM_REQUEST, updateItemID),
    takeEvery(types.SEARCHPAG_ITEM_REQUEST, searchItemID),
    takeEvery(types.PAGINATION_ITEM_REQUEST, paginationItemID)
];
