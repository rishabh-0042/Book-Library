import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Add from "./pages/Add.jsx";
import Books from "./pages/Books.jsx";
import Update from "./pages/Update.jsx";
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />
  },
  {
    path: "/add",
    element: <Add />
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);


const App = () => {

  return (
    <>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
