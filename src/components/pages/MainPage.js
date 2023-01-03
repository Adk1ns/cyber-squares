import { useAtom } from 'jotai'
import { gameViewStatus } from '../../data/store/Atoms'
import CyberSquares from '../cyberSquares/CyberSquares'
import Board from '../game/Board'
import Intro from '../intro/Intro'

const MainPage = () => {
  const [gameView, setGameView] = useAtom(gameViewStatus)

  return (
    <div>
      {gameView === 'intro' && <Intro />}
      {gameView === 'game' && <Board />}
    </div>
  )
}
export default MainPage
