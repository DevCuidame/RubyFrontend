import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "../../containers/Welcome";
import { About } from "../../views/private/users/About";
import { DontFound } from "../../views/shared/DontFound";

const LazyAbout = lazy(() => import("../../views/private/users/About").then(() => ({ default: About })) );
const LazyWelcome = lazy(() => import("../../containers/Welcome").then(() => ({ default: Welcome, })) );
const LazyDontFound = lazy(() => import("../../views/shared/DontFound").then(() => ({ default: DontFound })) );


export const RuteoHome = () => {
  return (
    //To manage all routes or the complete routes
    <Routes>
      <Route path="/" element={<LazyWelcome />} />
      <Route path="/about" element={<LazyAbout />} />
      <Route path="/*" element={<LazyDontFound />} />
    </Routes>
  );
};
