import React from 'react'
import './card.style.css'

function Card({ monster }) {
  const { name, id, email } = monster

  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}

export default Card
