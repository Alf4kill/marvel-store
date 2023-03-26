import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoute from "./routes/RootRoute";
import HomeRoute from "./routes/HomeRoute";
import CartRoute from "./routes/CartRoute";
import ComicRoute from "./routes/ComicRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        path: "",
        element: <HomeRoute />,
      },
      {
        path: "cart",
        element: <CartRoute />,
      },
      {
        path: "/:id",
        element: <ComicRoute />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
