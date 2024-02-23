import React from "react";
import { carddata } from "../Data";

const Cards = (props) => {
  return (
    <>
      {/* dashboard card */}
      {carddata.map((data, id) => {
        return (
          <div
            className="bg-teal-300 pt-[26px] pb-[30px] pl-[25px] mb-[20px] xl:w-[23%] lg:w-[48%] sm:w-[48%] w-[88%] rounded-[10px] text-slate-600 xl:mr-[15px] lg:mr-[7px] mr-[7px]"
            key={id}
          >
            <p className=" xl:text-sm lg:text-[0.6rem] font-normal">
              {data.cliets}
            </p>
            <h2 className="xl:text-[64px] lg:text-[41px] font-medium ">
              {data.counter}
            </h2>
            <p className="text-sm font-normal">{data.user}</p>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
