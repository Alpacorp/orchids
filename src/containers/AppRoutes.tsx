import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "../layouts/Layout";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export const AppRoutes: FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};
