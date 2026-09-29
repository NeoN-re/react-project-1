// src/components/GameSlots/GameSlots.jsx
import React, { useState } from 'react'

const SYMBOLS = ['0', '1', '2', '3', '4']

export default function GameSlots({ balance, setBalance }) {
  const [reels, setReels] = useState(['?', '?', '?'])
  const [status, setStatus] = useState('')
  const [statusClass, setStatusClass] = useState('')
  const bet = 100

  const spin = () => {
    if (balance < bet) {
      setStatus('Недостаточно денег для ставки 100\$')
      setStatusClass('status-lose')
      return
    }

    const r1 = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
    const r2 = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
    const r3 = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
    
    setReels([r1, r2, r3])

    if (r1 === r2 && r2 === r3) {
      setBalance(prev => prev + bet * 5)
      setStatus(`Джекпот! Вы выиграли ${bet * 5}\$`)
      setStatusClass('status-win')
    } else if (r1 === r2 || r2 === r3 || r1 === r3) {
      setBalance(prev => prev + bet * 1.5)
      setStatus(`Частичное совпадение! Выиграно ${bet * 1.5}\$`)
      setStatusClass('status-win')
    } else {
      setBalance(prev => prev - bet)
      setStatus(`Проигрыш -${bet}\$`)
      setStatusClass('status-lose')
    }
  }

  return (
    <div className="game-interface">
      <div className="slots-display">{reels.join(' ')}</div>
      <button className="btn btn-action" onClick={spin}>Крутить за 100$</button>
      <div className={`game-status ${statusClass}`}>{status}</div>
    </div>
  )
}