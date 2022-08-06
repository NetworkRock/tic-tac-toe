import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export enum GameMode {
  SINGLE = 'SINGLE',
  MULTI = 'MULTIPLAYER',
}

export interface InitialGameState {
  gameMode: GameMode,
}

const initialState: InitialGameState = {
  gameMode: GameMode.SINGLE,
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
  },
});

export const selectGameMode = (state: RootState): GameMode => state.game.gameMode

export const { setGameMode } = gameSlice.actions

export default gameSlice.reducer
