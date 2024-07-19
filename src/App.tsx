import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "watch",
        //   element: <Player />,
        // },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        {" "}
        <Navbar />
        <RouterProvider router={appRouter} />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
