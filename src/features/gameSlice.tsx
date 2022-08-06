import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Field from '../models/Field'
import Grid, { Rows } from '../models/Grid'
import Players from '../models/Players'
import Score from '../models/Score'
import { RootState } from '../store'

export enum GameMode {
  SINGLE = 'SINGLE',
  MULTI = 'MULTIPLAYER',
}

export interface InitialGameState {
  gameMode: GameMode,
  gameOver: boolean
  currentPlayer: Players
  score: Score
  grid: Grid
  gridSize: number
  winningStates: Rows
}

const initialState: InitialGameState = {
  gameMode: GameMode.SINGLE,
  gameOver: false,
  currentPlayer: Players.X,
  score: {
    [Players.X]: 0,
    [Players.O]: 0
  },
  gridSize: 3,
  grid: {} as Grid,
  winningStates: {}
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
    setFieldTouched: (state, action: PayloadAction<{rowId: number, fieldId: number}>) => {
      const {rowId, fieldId} = action.payload;
      state.grid.rows[rowId as number].fields[fieldId as number].touched = state.currentPlayer
      return {
        ...state,
      };
    },
    setCurrentPlayer: (state, action: PayloadAction<Players>) => {
      return {
        ...state,
        currentPlayer: action.payload
      }
    },
    rematch: (state) => {
      return {
        ...initialState,
        gridSize: state.gridSize,
        grid: new Grid(state.gridSize, state.gridSize),
        score: state.score
      }
    },
    resetState: (state) => {
      return {
        ...initialState,
        gridSize: state.gridSize,
        grid: new Grid(state.gridSize, state.gridSize)
      }
    },
  },
});

export const selectGameMode = (state: RootState): GameMode => state.game.gameMode
export const selectGrid = (state: RootState): Grid => state.game.grid
export const selectGridSize = (state: RootState): number => state.game.gridSize
export const selectField = (state: RootState, rowId: number, fieldId: number): Field => {
  return state.game.grid.rows[rowId].fields[fieldId]
}
export const selectScore = (state: RootState): Score => state.game.score
export const selectCurrentPlayer = (state: RootState): Players => state.game.currentPlayer

export const { setGameMode, setGrid, setGridSize, setScore, setCurrentPlayer, setFieldTouched, rematch, resetState } = gameSlice.actions

export default gameSlice.reducer
