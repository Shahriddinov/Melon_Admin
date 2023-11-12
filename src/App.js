import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner.jsx";
import { useSelector } from "react-redux";
import RouteController from "./Routes/RouteController";

const Home = lazy(() => import("./components/Admin/Register/SignIn.jsx"));

export default function App() {
  const {token} = useSelector(state => state.authSlice);

  return <Suspense fallback={<Spinner position={'full'} />}>
    <Routes>
      <Route path="/" element={<Home />}/>
      { token && <Route path="/*" element={<RouteController />} /> }
      <Route path="*" element={<h1>Not Found</h1>}/>
    </Routes>
  </Suspense>
}


