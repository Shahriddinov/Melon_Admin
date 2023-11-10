import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollTop from "./hoc/ScrollTop";
import Spinner from "./components/Spinner/Spinner.jsx";
const Home = lazy(() => import("./components/Admin/Register/SignIn.jsx"));
const Teacher = lazy(() =>
  import("./components/Admin/AdminLayout/adminTeacher/AdminTeacher.jsx")
);
const AddTeacher = lazy(() =>
  import(
    "./components/Admin/AdminLayout/adminTeacher/AddTeacher/AddTeacher.jsx"
  )
);
const LearningCenter = lazy(() =>
  import("./components/Admin/AdminLayout/LearnCenter/LearnCenter.jsx")
);
const AddLearningCenter = lazy(() =>
  import(
    "./components/Admin/AdminLayout/LearnCenter/AddLearnCenter/AddLearnCenter.jsx"
  )
);
const AllUser = lazy(() =>
  import("./components/Admin/AdminLayout/AllUser/AllUser.jsx")
);
const ChangeUser = lazy(() =>
  import("./components/Admin/AdminLayout/AllUser/ChangeUserInfo/ChangeUserInfo.jsx")
);

const routes = [
  { path: "/", element: Home },
  { path: "/admin/Teacher", element: Teacher },
  { path: "/admin/Teacher/add", element: AddTeacher },
  { path: "/admin/learnCenter", element: LearningCenter },
  { path: "/admin/learnCenter/add", element: AddLearningCenter },
  { path: "/admin/alluser", element: AllUser },
  { path: "/admin/alluser/infoUser", element: ChangeUser },
];
const RoutesContainer = () => (
  <Suspense fallback={<Spinner position="full" />}>
    <Routes>
      {routes.map((route, key) => {
        const RouteComponent = ScrollTop(route.element);
        return (
          <Route key={key} path={route.path} element={<RouteComponent />} />
        );
      })}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Suspense>
);

export default RoutesContainer;
