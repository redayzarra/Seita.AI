import React from "react";
import ExpandableText from "./ExpandableText";

const Bio = () => {
  const userBio =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloribus ducimus. Modi laborum architecto dignissimos eos blanditiis culpa ratione? Voluptates assumenda ea nulla ipsam voluptate eaque, quod totam rerum placeat deserunt sit porro excepturi labore dolorum ab in reprehenderit laboriosam aperiam adipisci magni debitis dolorem quaerat. Facilis architecto maiores voluptas!";

  return (
    <div className="flex">
      <span className="font-semibold pr-2">Bio:</span>
      <div className="flex-grow">
        <ExpandableText children={userBio} maxChars={30} />
      </div>
    </div>
  );
};

export default Bio;
