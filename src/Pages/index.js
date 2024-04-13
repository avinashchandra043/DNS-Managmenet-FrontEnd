import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth/UserAuth";
import Dashboard from "./Dashboard";
import UserAwsAuth from "./Auth/UserAwsAuth";
import SubDomain from "./SubDomain";
import NotFound from "./NotFound";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/auth/aws" element={<UserAwsAuth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/dashboard/hostedzone/:hostedZoneId"
        element={<SubDomain />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Index;
