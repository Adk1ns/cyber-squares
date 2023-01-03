import { useAtom } from 'jotai'
import { gameViewStatus } from '../../data/store/Atoms'

const Intro = () => {
  const [gameView, setGameView] = useAtom(gameViewStatus)

  const playGame = () => {
    setGameView('game')
  }
  return (
    <div>
      Intro <button onClick={playGame}>Play</button>
    </div>
  )
}

export default Intro
