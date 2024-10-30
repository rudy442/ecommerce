import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout.jsx";
import Produits from "./Pages/Produits.jsx";
import OrdinateurDeBureau from "./Pages/OrdinateurDeBureau.jsx";
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
        path: "produits",
        element: <Produits />,
        children: [
          {
            path: "ordinateur-de-bureau",
            element: <OrdinateurDeBureau />,
          },
          {
            path: "ordinateur-portable",
            // element: <OrdinateurPortable />,
          },
          {
            path: "pieces-detachees",
            // element: <PiecesDetachees />,
          },
        ],
      },

      {
        path: "contact",
        // element: <Contact />,
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
  // {
  //   path: "/register",
  //   // element: <Register />,
  //   errorElement: <ErrorPage />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
