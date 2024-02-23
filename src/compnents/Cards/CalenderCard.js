import React from "react";
import { Calenderdata } from "../Data";

const CalendarCard = (props) => {
  return (
    <>
      {/* calender card */}
      <div className="w-[50%] pt-[14px] xl:pl-[21px] lg:pl-[13px] pb-[6px] border-2 border-zinc-300 rounded-md xl:mr-[15px] lg:mr-[7px] xl:h-[155px] lg:h-[140px]">
        <h2 className="font-medium text-[16px] mb-[18px]">
          Calendar & Scheduling
        </h2>
        <div className="flex justify-between">
          {Calenderdata.map((data, id) => {
            return (
              <div className="w-[25%]" key={id}>
                <h2 className="font-medium xl:text-[24px] lg:text-[20px] mb-[px]">{data.num}</h2>
                <p className="font-normal xl:text-[14px] lg:text-[11px]">{data.user}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CalendarCard;
