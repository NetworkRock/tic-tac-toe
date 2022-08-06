import React from 'react';
import AppStack from './AppStack';
import { render } from './test-utils';

describe('AppStack', () => {
  test('render the menu screen', async () => {
    render(
      <AppStack />
    )
  });
});