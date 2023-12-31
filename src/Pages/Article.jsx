import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";

import Articles from "../Components/Articles";
import NotFound from "./NotFound";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name == name);
  if (!article) return <NotFound />
  const otherArticles = articleContent.filter(
    (article) => article.name === name
  );
  return (
    <>
      <div>
        <h1 className="mb-20 sm:text-4xl text-2xl my-6 text-grey-900 font-bold">
          {article.title}
        </h1>
        {article.content.map((paragraph, index) => (
          <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
            {paragraph}
          </p>
        ))}
        <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
          Other Articles
        </h1>
        <div className="flex flex-wrap -m-4">
          <Articles articles={otherArticles} />
        </div>
      </div>
    </>
  );
};

export default Article;
