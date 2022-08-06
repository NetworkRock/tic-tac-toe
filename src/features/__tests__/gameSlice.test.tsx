import Grid from '../../models/Grid'
import { setupStore } from '../../store'
import reducer, {  GameMode, rematch, resetState, setFieldTouched, setGameMode, setGrid, setGridSize, setScore} from '../gameSlice'

// MOCKS
import { initialStateMock } from '../../mocks/initialStateMock';
import Players from '../../models/Players';

const store = setupStore(initialStateMock);

const configureGrid = (gridSize: number, grid: Grid) => {
  store.dispatch(setGridSize(gridSize));
  store.dispatch(setGrid(grid));
}

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(store.getState().game)
})

test("REMATCH: should only reset the state and values of gridSize and grid but keep the score", () => {
  configureGrid(3, new Grid(3,3))
  store.dispatch(setScore(Players.X));
  expect(reducer(store.getState().game, rematch())).toEqual({
      ...initialStateMock.game,
      gridSize: 3,
      grid: new Grid(3, 3),
      score: {
        [Players.X]: 1,
        [Players.O]: 0,
      }
  });
});

test("RESET STATE: should reset grid, gridSize and the game score", () => {
  configureGrid(3, new Grid(3,3))
  store.dispatch(setScore(Players.X));
  expect(reducer(store.getState().game, resetState())).toEqual({
      ...initialStateMock.game,
      gridSize: 3,
      grid: new Grid(3, 3),
      score: {
        [Players.X]: 0,
        [Players.O]: 0,
      }
  });
});

test('should handle game mode change', () => {
  expect(reducer(initialStateMock.game, setGameMode(GameMode.MULTI))).toEqual({
      ...initialStateMock.game,
      gameMode: GameMode.MULTI
    })
})

test('should handle setFieldTouched', () => {
  configureGrid(3, new Grid(3,3))
  const expectedGrid = new Grid(3, 3);
  expectedGrid.rows[0].fields[0].touched = Players.X
  expect(reducer(store.getState().game, setFieldTouched({rowId: 0, fieldId: 0}))).toEqual(
    {
      ...store.getState().game,
      grid: expectedGrid
    }
  )
})


// Tests which should be written for having a higher coverage in the gameSlice
test.todo('should handle select game mode')
test.todo('should handle select grid size')
test.todo('should handle select grid')
test.todo('should handle select field')
test.todo('should handle select score')
test.todo('should handle select currentPlayer')