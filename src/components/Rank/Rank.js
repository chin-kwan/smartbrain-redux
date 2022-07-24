import React from "react";
import { useSelector } from "react-redux";

const Rank = () => {

  const { name, entries } = useSelector((state) => state.user)

  return (
    <div>
      <div className="white f3">{`${name}, your current entry count is ...`}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
