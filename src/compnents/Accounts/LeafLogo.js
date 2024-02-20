import React from 'react';
import Leaf from "../../Assets/Variant6.png";

const LeafLogo = (props) => {
    return (
       <>
       {/* LeafLogo component */}
      <div className="w-[260px] text-center mb-[33px]">
          <img className="mb-[27px]" src={Leaf} alt="img" />
          <h2 className="text-2xl">{props.text}</h2>
        </div>
       
       </>
    );
};

export default LeafLogo;