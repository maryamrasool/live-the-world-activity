import React from "react";
import Tag from "./common/tag";

type ArticleProps = {
  name: string;
  labels: Label[];
  descriptionShort: string;
  descriptionLong: string;
  updatedAt: string;
};

type Label = {
  id: string;
  name: string;
};

const Article = ({
  name,
  labels,
  descriptionShort,
  descriptionLong,
  updatedAt,
}: ArticleProps) => {
  return (
    <>
      <h1 className="font-extrabold text-2xl text-blue  mt-5">{name}</h1>
      <div className="grid gird-flow-col auto-cols-min w-full mt-2.5">
        {labels?.map(({ id, name }) => {
          return <Tag key={id} text={name} />;
        })}
      </div>
      <div className="font-normal text-base text-dark-blue leading-6.25 space-y-4 mt-2.5">
        <p className="font-bold text-blue">{descriptionShort}</p>
        <p className="whitespace-pre-line">{descriptionLong}</p>
      </div>
      <p className="font-normal text-xs text-light-gray mt-6">
        Updated on {updatedAt}
      </p>
    </>
  );
};

export default Article;
