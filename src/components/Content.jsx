import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Comments from './Comments.jsx';
import Pagination from './Pagination.jsx';

const Content = () => {
  const [comments, setComments] = useState([])
  const [addMoreComm, setAddComm] = useState([])
  const [addPageCount, pageCount] = useState()
  const [commentsPage, setCommentsPage] = useState([])
  const [loading, setLoading] = useState(false)
  const [paginNumb, pag] = useState(1)

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true)
      const res = await axios.get(`https://jordan.ashton.fashion/api/goods/30/comments`)
      const url = (!res.data.links[paginNumb].url)?res.data.links[1].url:res.data.links[paginNumb].url
      const resTwo = await axios.get(url)
      let a = resTwo.data.next_page_url
      let b = a.substring(0, a.length - 1) + `${addPageCount}`
      const nextRes = await axios.get(b)
      setComments(resTwo.data.data)
      setAddComm(nextRes.data)
      setCommentsPage(resTwo.data.links.length);
      setLoading(false)
    }
    getCountries()
  }, [paginNumb, addPageCount])

  return (
    <div className="wrap-content">
      <Comments comments={comments} addMoreComm={addMoreComm} pageCount={pageCount} loading={loading}/>
      <Pagination commentsPage={commentsPage} pag={pag}/>
    </div>
  )
}

export default Content;