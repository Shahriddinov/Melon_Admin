import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner.jsx";
import { useSelector } from "react-redux";
import { RouteController } from "./Routes/RouteController";
import { AdminTeacher } from "./components/Admin/AdminLayout/adminTeacher/AdminTeacher.jsx";
import { AddTeacher } from "./components/Admin/AdminLayout/adminTeacher/AddTeacher/AddTeacher.jsx";
import { LearnCenter } from "./components/Admin/AdminLayout/LearnCenter/LearnCenter.jsx";
import { AddLearnCenter } from "./components/Admin/AdminLayout/LearnCenter/AddLearnCenter/AddLearnCenter.jsx";
import { AllUser } from "./components/Admin/AdminLayout/AllUser/User/AllUser.jsx";
import { ChangeUserInfo } from "./components/Admin/AdminLayout/AllUser/ChangeUserInfo/ChangeUserInfo.jsx";
import { EditTeacher } from "./components/Admin/AdminLayout/adminTeacher/EditTeacher/EditTeacher.jsx";
import { EditCenter } from "./components/Admin/AdminLayout/LearnCenter/EditCenter/EditCenter.jsx";
import { User } from "./components/Admin/AdminLayout/AppealsUser/User/User";

const Login = lazy(() => import("./Login/Login"));

export default function App() {
  const { token } = useSelector(state => state.authSlice);
  return <Suspense fallback={<Spinner position={'full'} />}>
    <Routes>
      <Route path="/" element={<Login />} />
      {token &&
        <Route path="/" element={<RouteController />} >
          <Route path="/admin/*" index element={<AdminTeacher />} />
          <Route path="add" element={<AddTeacher />} />
          <Route path="edit/:id" element={<EditTeacher />} />
          <Route path="center" element={<LearnCenter />} />
          <Route path="center/add" element={<AddLearnCenter />} />
          <Route path="center/edit/:id" element={<EditCenter />} />
          <Route path="alluser" element={<AllUser />} />
          <Route path="alluser/add/:id" element={<ChangeUserInfo />} />
          <Route path="appeals" element={<User />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </Suspense>
}


