import { Suspense, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Loading } from "../components/Suspance";
import Group from "./Group";
import Users from "./Users";
import Doctors from "./Doctors";
import Specialist from "./Specialist";
import WorkPlace from "./WorkPlace";
import Settings from "./Settings";
import Error from "../components/Error";
import { LoginContext } from "../context/Context";

const Home = () => {
  const navigate = useNavigate();
  const { isVisibleRoute } = useContext(LoginContext);

  useEffect(() => {
    if (!isVisibleRoute) {
      navigate("/login");
    }
  }, [isVisibleRoute]);

  return (
    <div className="flex h-screen w-full overflow-y-scroll ">
      <div className="flex-[1] shadow-2xl h-ful bg-white scale-[1]">
        <Sidebar />
      </div>
      <div className="flex h-screen flex-col  flex-[6]">
        <Navbar />
        <div className="h-full">
          <Layout>
            <Routes>
              <Route
                // path="/group"
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
                    <Users />
                  </Suspense>
                }
              />
              <Route
                path="doctors"
                element={
                  <Suspense fallback={<Loading />}>
                    <Doctors />
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
            </Routes>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default Home;
