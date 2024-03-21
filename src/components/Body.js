import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
