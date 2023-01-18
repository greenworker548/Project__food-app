import { put, takeEvery, call } from "redux-saga/effects"
import { FETCH_SHOP, GET_SHOP_FROM_API } from "../actionTypes/shopActionTypes"

export const getShop = (payload: any) => ({type: GET_SHOP_FROM_API, payload})
export const fetchShop = () => ({type: FETCH_SHOP})

function* getShopFetch() {
    const data: Response = yield call(() => fetch(`http://localhost:3001/shop`))
    const json: Response = yield call(() => new Promise(res => res(data.json())))
    console.log(json)
    yield put(getShop(json))
}

function* watcherShop() {
    yield takeEvery(FETCH_SHOP, getShopFetch)
}

export {
    watcherShop
}