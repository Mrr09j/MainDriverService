import React from 'react'

function Cards({ item }) {
  return (
  <>
  <div className="mt-10 my-3 ">
  <div className="card    w-100 mb-10 hover: shadow-2xl dark:bg-slate-900 dark:text-white dar:border hover:scale-10">
  <figure></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions   justify-between">
      <div className="badge badge-outline px-2 py-1">Distinct</div> 
      <div className="badge badge-outline px-2 py-1">Service</div>
    </div>
  </div>
</div>

  </div>
  </>
  )
}

export default Cards
