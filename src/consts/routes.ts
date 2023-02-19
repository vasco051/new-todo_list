import TodoPage from "../pages/TodoPage/TodoPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const ROUTES = [
  {path: '/', element: TodoPage},
  {path: '/todos', element: TodoPage},
  {path: '/about', element: AboutPage},
  {path: '*', element: ErrorPage}
]