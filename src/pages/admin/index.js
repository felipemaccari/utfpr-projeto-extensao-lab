import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";
import Navbar from "components/Navbar";

const Dashboard = lazy(() => import("./Dashboard"));

const Admin = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Admin;
