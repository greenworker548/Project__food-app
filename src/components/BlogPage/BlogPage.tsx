import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchPosts } from "../../redux/actionCreators/postActionCreators";
import Button from "../Button/Button";
import Pagination from "../Pagination/Pagination";
import { Post } from "../Post/Post";

import './BlogPage.scss'

const BlogPage = () => {

  const dispatch = useDispatch()
  const countPagination = useSelector((state: any) => state.settingsReducers.paginationCount)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchPosts(countPagination))
  },[countPagination])
    
  const arrPost = useSelector((state: any) => state.postReducer.data)

  return (
    <>
    <div className="blog-page">
      <div className="blog__nav">
        <NavLink to="/">
          <Button text="< Назад" className="button-nav" />
        </NavLink>
      </div>
      <div className="blog__list">
        {arrPost.map((item: any) => <Post linkImage={item.linkImage} title={item.title} date={item.date} id={item.id} key={item.id} description={item.description}/>)}
      </div>
      <Pagination />
    </div>
    </>
  )
}

export { BlogPage }