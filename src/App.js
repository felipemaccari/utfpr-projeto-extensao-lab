import React, { useMemo, Suspense, lazy } from "react";
import Providers from "./providers";

import LoadingBox from "components/LoadingBox";

const Auth = lazy(() => import("./pages/auth"));
const Admin = lazy(() => import("./pages/admin"));

const App = () => {
  const authUser = localStorage.getItem("USER");

  const Component = useMemo(() => {
    if (!authUser) {
      return Auth;
    }

    return Admin;
  }, [authUser]);

  return (
    <Suspense fallback={<LoadingBox />}>
      <Providers>
        <Component />
      </Providers>
    </Suspense>
  );
};

export default App;
