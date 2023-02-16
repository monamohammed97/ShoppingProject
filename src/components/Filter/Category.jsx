import React from 'react'

export default function Category({title}) {
  return (
    <div className='d-flex justify-content-between'>
      <p className='fw-bold'>{title}</p>
      <i class="fa-solid fa-chevron-right"></i>
    </div>
  )
}
