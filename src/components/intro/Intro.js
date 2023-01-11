import { useAtom } from 'jotai'
import { gameViewStatus } from '../../data/store/Atoms'
import styled from 'styled-components'

const IntroStyles = styled.div`
  border: 1px solid white;
  width: 30rem;
  height: 30rem;
  display: flex;
  justify-content: center;
  p {
    padding-left: 1rem;
    font-size: 1.25em;
  }
  button {
    font-weight: bold;
    padding: 1rem;
    cursor: pointer;
  }
  .name {
    font-size: 1em;
    position: absolute;
    top: 63%;
    left: 49%;
    color: #37ebf3;
  }
  .by {
    font-size: 0.85em;
    position: absolute;
    top: 59%;
    left: 49%;
    color: #e455ae;
  }
`

const Intro = () => {
  const [gameView, setGameView] = useAtom(gameViewStatus)

  const playGame = () => {
    setGameView('game')
  }
  return (
    <IntroStyles>
      <p className="">Cyber Squares</p>
      <button onClick={playGame}>Play</button>
      <p className="by portillo">by</p>
      <p className="portillo name">Adk1ns</p>
    </IntroStyles>
  )
}

export default Intro
