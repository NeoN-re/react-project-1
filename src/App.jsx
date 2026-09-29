// src/App.jsx
import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import GameCard from './components/GameCard/GameCard'
import GameSlots from './components/GameSlots/GameSlots'
import GameDice from './components/GameDice/GameDice'
import GameHiLo from './components/GameHiLo/GameHiLo'

export default function App() {
  const [balance, setBalance] = useState(() => {
    const saved = localStorage.getItem('casino_balance')
    return saved ? parseInt(saved, 10) : 5000
  })
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    localStorage.setItem('casino_balance', balance)
  }, [balance])

  const handleClaimMoney = () => {
    setBalance(prev => prev + 1000)
  }

  const allGames = [
    {
      id: 'slots',
      title: 'Sweet Melon',
      component: <GameSlots balance={balance} setBalance={setBalance} />
    },
    {
      id: 'dice',
      title: 'Кости',
      component: <GameDice balance={balance} setBalance={setBalance} />
    },
    {
      id: 'hilo',
      title: 'Больше или меньше',
      component: <GameHiLo balance={balance} setBalance={setBalance} />
    }
  ]

  const filteredGames = allGames.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="app-container">
      <Header 
        balance={balance} 
        onClaimFreeMoney={handleClaimMoney} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="games-grid">
        {filteredGames.length > 0 ? (
          filteredGames.map(game => (
            <GameCard key={game.id} title={game.title} description={game.description}>
              {game.component}
            </GameCard>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: 'var(--text-muted)' }}>
            Игры не найдены 🔍
          </p>
        )}
      </main>
    </div>
  )
}