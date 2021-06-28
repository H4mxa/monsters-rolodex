import React from 'react'
import './card-list.styles.css'

function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((element, index) => (
        <h1 key={index}>{element.name}</h1>
      ))}
    </div>
  )
}

export default CardList
