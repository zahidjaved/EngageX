import React from 'react';
import { carddata } from "../Data";


const Cards = (props) => {
    return (
       <>
     {/* dashboard card */}
     {carddata.map((data ,id)=>{
          return(
            <div className="bg-teal-300 pt-[26px] pb-[30px] pl-[25px] mb-[20px] w-[24%] rounded-[10px] text-slate-600 mr-[15px] " key={id}>
            <p className=" text-sm font-normal">{data.cliets}</p>
            <h2 className="text-[64px] font-medium ">{data.counter}</h2>
            <p className="text-sm font-normal">{data.user}</p>
          </div>
 
          );
  })}
       
       </>
    );
};

export default Cards;