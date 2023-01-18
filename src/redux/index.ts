import { all } from "redux-saga/effects";
import { watcherPost } from "./actionCreators/postActionCreators";
import { watcherShop } from "./actionCreators/shopActionCreators";

function* rootWatcher () {
    yield all([watcherPost(), watcherShop()])
}

export default rootWatcher