import React from 'react'

const Pagination = ({ commentsPage, pag}) => {
  const pageNumbers = []

  for (let i = 1; i < commentsPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul className="pagination">
        {
          pageNumbers.map((number) => {
            return (
              <li className="page-item" key={number} onClick={() => pag( number)}>
                <a href="!#" className="page-link" >
                  {number}
                </a>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Pagination