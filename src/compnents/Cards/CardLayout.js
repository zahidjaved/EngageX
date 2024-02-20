import React, { Children } from "react";

const CardLayout = ({ children }) => {
  return (
    <>
      <div className="pt-[14px] pl-[21px] pb-[6px] border-2 border-zinc-300 rounded-md mr-[15px] pr-[30px]">
        {children}
      </div>
    </>
  );
};

export default CardLayout;

export const CardLayoutNew = ({ children }) => {
  return (
    <>
      <div className="pt-[14px] pl-[21px] pb-[6px] border-2 border-zinc-300 rounded-md pr-[30px] mb-[11px]">
        {children}
      </div>
    </>
  );
};


