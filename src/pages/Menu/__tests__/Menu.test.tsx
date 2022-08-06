import React from 'react';
import { setupStore } from '../../../store';
import { render, screen, fireEvent, act, waitFor } from '../../../test-utils';
import MenuScreen from '../Menu';


describe('MenuScreen', () => {
  beforeEach(() => {
    const store = setupStore()
    render(
      <MenuScreen store={store}/>
    )
  })

  test('render the menu screen', async () => {
    const gridSizeInput = screen.getByText('CHOOSE YOUR GRID SIZE')
    const modeText = screen.getByText('WHICH MODE YOU WANNA PLAY?')
    const multiplayerText = screen.getByText('MULTIPLAYER')
    expect(gridSizeInput).toBeTruthy()
    expect(modeText).toBeTruthy()
    expect(multiplayerText).toBeTruthy()
  });
});