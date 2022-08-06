import React from "react";
import { Provider } from "react-redux";
import AppStack from './src/AppStack';
import { setupStore } from "./src/store";

export default function App() {
  return (
    <Provider store={setupStore()}>
      <AppStack/>
    </Provider>
  );
}


