import { useAtom } from 'jotai'
import { gameViewStatus } from '../../data/store/Atoms'
import Board from '../game/Board'
import Intro from '../intro/Intro'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #fdf500;
  padding: 0.5rem;
  border-radius: 2rem;
  font-weight: 700;
  font-family: portillo;
  font-size: 0.65em;
  position: absolute;
  left: 90%;
  top: 87%;
  cursor: pointer;
  &:hover {
    background-color: #1ac5b0;
  }
`

const MainPage = () => {
  const [gameView, setGameView] = useAtom(gameViewStatus)

  return (
    <div>
      <div>
        {gameView === 'intro' && <Intro />}
        {gameView === 'game' && <Board />}
      </div>
      {gameView === 'game' && (
        <Button
          onClick={() => {
            setGameView('intro')
          }}
        >
          End Game
        </Button>
      )}
    </div>
  )
}
export default MainPage
