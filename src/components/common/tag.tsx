import React from "react";

type TagProps = {
  text: string;
  href?: string;
};

const Tag = ({ text, href }: TagProps) => {
  return (
    <div className="flex justify-center items-center rounded-full border border-light-blue group px-2.5 py-1.25">
      <a
        href={href}
        className="font-normal text-xs text-dark-blue group-hover:text-blue-alt/75"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  );
};

export default Tag;
