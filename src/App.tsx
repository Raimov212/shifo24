import { Suspense, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading } from "./components/Suspance";
import Group from "./pages/Group";
import Doctors from "./pages/Doctors";
import Users from "./pages/Users";
import Specialist from "./pages/Specialist";
import WorkPlace from "./pages/WorkPlace";
import Settings from "./pages/Settings";
import Error from "./components/Error";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "./context/Context";

function App() {
  const [isVisibleRoute, setIsVisibleRoute] = useState(false);

  return (
    <LoginContext.Provider value={{ isVisibleRoute, setIsVisibleRoute }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              // path="group"
              index={true}
              element={
                <Suspense fallback={<Loading />}>
                  <Group />
                </Suspense>
              }
            />
            <Route
              path="users"
              element={
                <Suspense fallback={<Users />}>
                  <Group />
                </Suspense>
              }
            />
            <Route
              path="doctors"
              element={
                <Suspense fallback={<Doctors />}>
                  <Group />
                </Suspense>
              }
            />

            <Route
              path="specialist"
              element={
                <Suspense fallback={<Loading />}>
                  <Specialist />
                </Suspense>
              }
            />
            <Route
              path="workplace"
              element={
                <Suspense fallback={<Loading />}>
                  <WorkPlace />
                </Suspense>
              }
            />
            <Route
              path="settings"
              element={
                <Suspense fallback={<Loading />}>
                  <Settings />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Loading />}>
                  <Error />
                </Suspense>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
