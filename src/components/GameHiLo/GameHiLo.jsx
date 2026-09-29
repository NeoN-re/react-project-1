// src/components/GameHiLo/GameHiLo.jsx
import React, { useState } from 'react'

export default function GameHiLo({ balance, setBalance }) {
  const [currentCard, setCurrentCard] = useState(7)
  const [status, setStatus] = useState('')
  const [statusClass, setStatusClass] = useState('')
  const bet = 100

  const play = (guess) => {
    if (balance < bet) {
      setStatus('Недостаточно денег')
      setStatusClass('status-lose')
      return
    }

    const nextCard = Math.floor(Math.random() * 13) + 1
    let isWin = false
    
    if (guess === 'higher' && nextCard >= currentCard) isWin = true
    if (guess === 'lower' && nextCard <= currentCard) isWin = true

    if (isWin) {
      setBalance(prev => prev + bet)
      setStatus(`Следующая карта ${nextCard}. Правильно! +\$${bet}`)
      setStatusClass('status-win')
    } else {
      setBalance(prev => prev - bet)
      setStatus(`Следующая карта ${nextCard}. Неверно! -\$${bet}`)
      setStatusClass('status-lose')
    }

    setCurrentCard(nextCard)
  }

  return (
    <div className="game-interface">
      <div className="hilo-card">Карта: {currentCard}</div>
      <p style={{fontSize: '12px', margin: '5px 0'}}>Следующая карта выше/равна или ниже/равна?</p>
      <div className="hilo-buttons">
        <button className="btn btn-action" onClick={() => play('higher')}>Выше</button>
        <button className="btn btn-action" onClick={() => play('lower')}>Ниже</button>
      </div>
      <div className={`game-status ${statusClass}`}>{status}</div>
    </div>
  )
}