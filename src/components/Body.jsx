
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import GptSearchPage from "./GptComponent/GptSearchPage";

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
      path:"/gptSearch",
      element:<GptSearchPage/>
    }
  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
