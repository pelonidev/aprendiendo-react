import { useState } from "react"


export function TwitterFollowCard({ userName, name, initialIsFollowing }) {
  /*
  const state = useState(false)    // Se crea un state con useState(valorInicial). Este state es un array de dos elementos
  const isFollowing = state[0]     // El primer elemento state[0] contiene el valor del estado
  const setIsFollowing = state[1]  // El segundo elemento state[1] contiene la función que actualiza el estado
  */
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-followButton is-following'
    : 'tw-followCard-followButton'
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt="Avatar" />
        <div className='tw-followCard-info'>
          <strong className='tw-followCard-name'>{name}</strong>
          <span className='tw-followCard-nick'>@{userName}</span>
        </div>
      </header>
      <aside className='tw-followCard-aside'>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-followButton-text'>{text}</span>
          <span className='tw-followCard-followButton-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}