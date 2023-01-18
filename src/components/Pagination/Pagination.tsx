import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostFromPaginationNext, setPostFromPaginationPrev } from "../../redux/actionCreators/settingsActionCreators";

import './Pagination.scss'


const Pagination = () => {
    const dispatch = useDispatch()
    const countPagination = useSelector((state: any) => state.settingsReducers.paginationCount)

    const [statusButton, setStatusButton] = useState(countPagination)

    return (
        <div className="pagination">
            <button className="pagination_button" disabled={statusButton == 1 ? true : false} onClick={() => {
                dispatch(setPostFromPaginationPrev())
                setStatusButton(1)
            }}>
                {'< '}Назад
            </button>
            <button className="pagination_button" disabled={statusButton == 2 ? true : false} onClick={() => {
                dispatch(setPostFromPaginationNext())
                setStatusButton(2)
            }}>
                Вперед{' >'}
            </button>
        </div>
    )
}

export default Pagination