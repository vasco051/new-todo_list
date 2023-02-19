import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";

const App: FC = observer(() => {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  );
});

export default App;