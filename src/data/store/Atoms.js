import { atom } from 'jotai'

export const gameViewStatus = atom('intro')
//const [gameView, SetGameView] = useAtom(gameViewStatus)

export const rows = atom(5)
//const [nRows, setNRows] = useAtom(rows)

export const cols = atom(5)
//cons [nCols, setNCols] - useAtom(cols)

export const lightOnChance = atom(0.25)
