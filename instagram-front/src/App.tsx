import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PostPage } from "./pages/post";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PostPage />,
  },
]);

function App():JSX.Element {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
