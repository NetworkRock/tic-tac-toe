import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
}

const initialState: InitialGameState = {
  gameMode: GameMode.SINGLE,
  score: {
    [Players.X]: 0,
    [Players.O]: 0
  },
  currentPlayer: Players.X,
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
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
export const selectScore = (state: RootState): Score => state.game.score
export const selectCurrentPlayer = (state: RootState): Players => state.game.currentPlayer

export const { setGameMode, setScore, setCurrentPlayer } = gameSlice.actions

export default gameSlice.reducer
