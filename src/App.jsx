import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import Education from "./components/pages/Education";
import Experience from "./components/pages/Experience";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";

import { restApiPath } from "./restApiPath";
import { GetDataFromBack } from "./API/GetDataFromBack";

function App() {
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout />}
        loader={() => GetDataFromBack(restApiPath.sidebar)}
        errorElement={<ErrorPage />}
      >
        <Route index element={<Navigate to="/home" />} />
        <Route
          path="home"
          element={<Home />}
          loader={() => GetDataFromBack(restApiPath.homepage)}
        />
        <Route
          path="education"
          element={<Education />}
          loader={() => GetDataFromBack(restApiPath.education)}
        />
        <Route
          path="experience"
          element={<Experience />}
          loader={() => GetDataFromBack(restApiPath.experience)}
        />
        <Route
          path="skills"
          element={<Skills />}
          loader={() => GetDataFromBack(restApiPath.skills)}
        />
        <Route
          path="contact"
          element={<Contact />}
          loader={() => GetDataFromBack(restApiPath.contact)}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
