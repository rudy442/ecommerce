import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout.jsx";
import "./App.css";

import { Login, ErrorPage } from "./Pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // element: <Accueille />,
        // errorElement: <SingleError />,
        // loader: homeLoader,
      },

      {
        path: "ordiBureau",
        // element: <Ordibureau />,
      },

      {
        path: "ordiPortable",
        // element: <Ordiportable />,
      },

      {
        path: "pieceDetachees",
        // element: <Piecedétachées />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    // element: <Register />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
