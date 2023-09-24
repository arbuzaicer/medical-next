"use client";

import React from "react";

import Button from "@atoms/button/Button";
import { MainLayout } from "@app/components/templates";

const HomePage = () => {
  return (
    <MainLayout>
      <div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <h1 className="text-6xl text-white">Hello from HOME page</h1>
          <Button
            onClick={() => {
              console.log("clicked");
            }}
          >
            Hello
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
