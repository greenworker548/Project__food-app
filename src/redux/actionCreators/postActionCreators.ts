import { useSelector } from "react-redux"
import { put, takeEvery, call } from "redux-saga/effects"
import { FETCH_POST, GET_POST_FROM_API, GET_FULL_POST } from "../actionTypes/actionTypes"

export const getPosts = (payload: any) => ({type: GET_POST_FROM_API, payload})
export const fetchPosts = (countPagination: any) => ({type: FETCH_POST, countPagination})

export const getFullPost = (payload: any) => ({type: GET_FULL_POST, payload})

function* getPostsFetch(action: any) {
    const { countPagination } = action
    const data: Response = yield call(() => fetch(`http://localhost:3001/posts?_page=${countPagination}&_limit=9`))
    const json: Response = yield call(() => new Promise(res => res(data.json())))
    yield put(getPosts(json))
}

function* watcherPost() {
    yield takeEvery(FETCH_POST, getPostsFetch)
}

export {
    watcherPost
}