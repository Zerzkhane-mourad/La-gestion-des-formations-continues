import React from "react";
import Routs from './User/Routs';
import { Provider } from "react-redux";
import store from "./store/store";


const App = ()=> {
  return (
    <Provider store={store}>
      <Routs/>
    </Provider>

  );
}

export default App;
