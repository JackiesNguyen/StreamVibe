import { RouterProvider } from "react-router-dom";
import router from "./routes";
import NextTopLoader from "nextjs-toploader";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <NextTopLoader color="#e50000" showSpinner={false} />
    </>
  );
};

export default App;
