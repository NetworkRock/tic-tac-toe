// React specific
import React, { FC } from "react";

// Providers
import { Provider } from "react-redux";
import { AppStore, RootState, setupStore } from "./store";
import { render as rtlRender } from "@testing-library/react-native";
import { PreloadedState } from '@reduxjs/toolkit';

interface ExtendedRenderOptions extends Omit<any, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

function render(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}) {
  const Wrapper: FC = ({ children }) => (
      <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, {
    wrapper: Wrapper as React.ComponentType,
    ...renderOptions,
  });
}

// re-export everything
export * from "@testing-library/react-native"

// override render method
export { render };
