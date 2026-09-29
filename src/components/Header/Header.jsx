// src/components/Header/Header.jsx
import React from 'react'

export default function Header({ balance, onClaimFreeMoney, searchQuery, setSearchQuery }) {
  return (
    <header className="header">
      <h1>LuttiDonat</h1>
      <div className="header-controls">
        <input 
          type="text" 
          placeholder="Поиск игры..." 
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="balance-box">
          Баланс: <span className="balance-amount">{balance}$</span>
        </div>
        <button className="btn btn-primary" onClick={onClaimFreeMoney}>
          +1000$
        </button>
      </div>
    </header>
  )
}