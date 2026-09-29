// src/components/GameCard/GameCard.jsx
import React from 'react'

export default function GameCard({ title, description, children }) {
  return (
    <div className="game-card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {children}
    </div>
  )
}