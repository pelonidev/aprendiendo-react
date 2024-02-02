import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'MiguelPelon17',
    name: 'Miguel Alonso Hernández',
    isFollowing: false
  },
  {
    userName: 'TMChein',
    name: 'Tomás',
    isFollowing: true
  }
]
export function App() {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}
          />
        ))
      }
    </section>
  )
}