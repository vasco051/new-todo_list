import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "../consts/routes";

const AppRouter = () => {
  return (
    <Routes>
      {ROUTES.map(route => <Route path={route.path} element={<route.element/>} key={route.path}/>)}
    </Routes>
  );
};

export default AppRouter;