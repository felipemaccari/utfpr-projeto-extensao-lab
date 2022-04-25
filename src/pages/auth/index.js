import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";

const Login = lazy(() => import("./Login"));

const Auth = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Auth;
