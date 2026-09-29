// src/components/GameDice/GameDice.jsx
import React, { useState } from 'react'

export default function GameDice({ balance, setBalance }) {
  const [dice, setDice] = useState(1)
  const [status, setStatus] = useState('')
  const [statusClass, setStatusClass] = useState('')
  const bet = 50

  const rollDice = () => {
    if (balance < bet) {
      setStatus('Недостаточно денег!')
      setStatusClass('status-lose')
      return
    }

    const roll = Math.floor(Math.random() * 6) + 1
    setDice(roll)

    if (roll >= 4) {
      setBalance(prev => prev + bet)
      setStatus(`Выпало ${roll} (Победа от 4 до 6). Вы выиграли \$${bet}!`)
      setStatusClass('status-win')
    } else {
      setBalance(prev => prev - bet)
      setStatus(`Выпало ${roll} (Проигрыш от 1 до 3). -\$${bet}`)
      setStatusClass('status-lose')
    }
  }

  return (
    <div className="game-interface">
      <div className="dice-display">{dice}</div>
      <button className="btn btn-action" onClick={rollDice}>Бросить за 50\$</button>
      <div className={`game-status ${statusClass}`}>{status}</div>
    </div>
  )
}