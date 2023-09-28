import React from "react";
import WelcomeCard from "./WelcomeCard";
import MyCard from "./MyCard";

const Body = () => {
  return (
    <div className="ml-12 my-3">
      <WelcomeCard />
      <MyCard />
    </div>
  );
};

export default Body;
