import { GameMode } from '../features/gameSlice';
import Grid from '../models/Grid';
import Players from '../models/Players';


export const initialStateMock = {
  game: {
    gameMode: GameMode.SINGLE,
    gameOver: false,
    currentPlayer: Players.X,
    score: {
      [Players.X]: 0,
      [Players.O]: 0,
    },
    gridSize: 3,
    grid: {} as Grid,
    winningStates: {},
  },
}