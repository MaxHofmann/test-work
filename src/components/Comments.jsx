import React from 'react'
import { useState } from 'react';

const Comments = ({ comments, addMoreComm, pageCount, loading}) => {

    const [pushPage, setAddPage] = useState([])
    if(loading) {
      return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    }
    const arr = []
    arr.push(...pushPage)
    const addMore = () => {
      setAddPage(addMoreComm.data)
      let a = addMoreComm.next_page_url
      let b = a.substring(a.length-1, a.length)
      pageCount(b)
    }

    return (
      <>
        <ul className="comments-group">
          {
            comments.map((item, i) => (
              <li className="comments-group-item" key={item.id}>
                <p>{`Name - ${item.name}`}</p>
                <p>{`Comment - ${item.text}`}</p>
              </li>
            ))
          }
          {
            arr.map((item, i) => (
              <li className="comments-group-item" key={item.id}>
                <p>{`Name - ${item.name}`}</p>
                <p>{`Comment - ${item.text}`}</p>
              </li>
            ))
          }
        </ul>
        <button className="btn-add" onClick={addMore}>add more</button>
      </>
    )
}

export default Comments