import Link from "next/link";
import React from "react";
import MainLayout from "../src/components/main-layout/main-layout";

const Dashboardlayout = ({ children }) => {
  return (
    <>
   <MainLayout>
    {children}
   </MainLayout>
    </>
  );
};

export default Dashboardlayout;
