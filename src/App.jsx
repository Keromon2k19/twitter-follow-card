import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'NASA',
    name: 'NASA',
    isFollowing: true
  },
  {
    userName: 'TeamCherryGames',
    name: 'Team Cherry',
    isFollowing: false
  },
  {
    userName: 'Alexelcapo',
    name: 'EvilAFM',
    isFollowing: true
  },
  {
    userName: 'MrBeast',
    name: 'MrBeast',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}