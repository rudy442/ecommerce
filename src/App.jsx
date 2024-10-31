import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout.jsx";
import Produits from "./Pages/Produits.jsx";

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
      },

      {
        path: "contact",
        // element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
