import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";
import Navbar from "components/Navbar";

const Dashboard = lazy(() => import("./Dashboard"));
const Institutions = lazy(() => import("./Institutions"));

const Admin = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/instituicoes" element={<Institutions />} />
      </Routes>
    </Suspense>
  );
};

export default Admin;
