import React from "react";
import { Calenderdata } from "../Data";

const CalendarCard = (props) => {
  return (
    <>
      {/* calender card */}
      <div className="w-[50%] pt-[14px] pl-[21px] pb-[6px] border-2 border-zinc-300 rounded-md mr-[15px] h-[155px]">
        <h2 className="font-medium text-[16px] mb-[18px]">
          Calendar & Scheduling
        </h2>
        <div className="flex justify-between">
          {Calenderdata.map((data, id) => {
            return (
              <div className="w-[25%]" key={id}>
                <h2 className="font-medium text-[24px] mb-[px]">{data.num}</h2>
                <p className="font-normal text-[14px]">{data.user}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CalendarCard;
