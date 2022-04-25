import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";
import Navbar from "components/Navbar";

import { Flex } from "@chakra-ui/react";

import "service/axiosConfig";

const Dashboard = lazy(() => import("./Dashboard"));
const Institutions = lazy(() => import("./Institutions"));

const Admin = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <Flex minHeight="100vh" direction="column">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/instituicoes" element={<Institutions />} />
        </Routes>
      </Flex>
    </Suspense>
  );
};

export default Admin;
