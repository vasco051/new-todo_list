import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import TodoPage from "./pages/TodoPage/TodoPage";

const App: FC = observer(() => {
  return (
    <div className='container'>
      <TodoPage/>
    </div>
  );
});

export default App;