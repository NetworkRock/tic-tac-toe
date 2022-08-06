import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Grid, { Rows } from '../models/Grid'
import Players from '../models/Players';
import Score from '../models/Score';
import { RootState } from '../store'

export enum GameMode {
  SINGLE = 'SINGLE',
  MULTI = 'MULTIPLAYER',
}

export interface InitialGameState {
  gameMode: GameMode,
  score: Score,
  currentPlayer: Players
  grid: Grid
  gridSize: number
}

const initialState: InitialGameState = {
  gameMode: GameMode.SINGLE,
  score: {
    [Players.X]: 0,
    [Players.O]: 0
  },
  currentPlayer: Players.X,
  gridSize: 3,
  grid: {} as Grid,
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGrid: (state, action: PayloadAction<Grid>) => {
      return {
        ...state,
        grid: action.payload
      };
    },
    setGridSize: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        gridSize: action.payload
      };
    },
    setGameMode: (state, action: PayloadAction<GameMode>) => {
      return {
        ...state,
        gameMode: action.payload
      };
    },
    setCurrentPlayer: (state, action: PayloadAction<Players>) => {
      return {
        ...state,
        currentPlayer: action.payload
      }
    },
    setScore: (state, action: PayloadAction<Players>) => {
      // The winner was the one before the currentPlayer so thats why logix is turned here
      const player = action.payload === Players.X ? Players.X : Players.O
      return {
        ...state,
        score: {
          ...state.score,
          [player]: state.score[player] + 1,
        }
      };
    },
  },
});


export const selectGameMode = (state: RootState): GameMode => state.game.gameMode
export const selectGrid = (state: RootState): Grid => state.game.grid
export const selectGridSize = (state: RootState): number => state.game.gridSize
export const selectScore = (state: RootState): Score => state.game.score
export const selectCurrentPlayer = (state: RootState): Players => state.game.currentPlayer

export const { setGameMode, setGrid, setGridSize, setScore, setCurrentPlayer } = gameSlice.actions

export default gameSlice.reducer
