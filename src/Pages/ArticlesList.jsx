import React from "react";
import articleContent from "./article-content";

import Articles from "../Components/Articles";
const ArticlesList = () => {
  return (
    <>
      <h1 className="mb-20 sm:text-4xl text-2xl my-6 text-grey-900 font-bold">
        Articles
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap m-4">
          <Articles articles={articleContent}/>
        </div>
      </div>
    </>
  );
};

export default ArticlesList;
