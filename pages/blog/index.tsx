import React from "react";

import { MainLayout } from "@app/components/templates";

const BlogPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-1 justify-center items-center">
        <h1 className="text-6xl text-gray-300">Hello from blog page</h1>
      </div>
    </MainLayout>
  );
};

export default BlogPage;
