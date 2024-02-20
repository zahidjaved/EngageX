import React from 'react';
import logo from "../../Assets/logo.png"

const AccountsSidebar = () => {
    return (
       <>
       <aside className='h-full bg-[#009E9B] w-[26%] flex flex-col items-center justify-center fixed right-0'>
          <div>
            <img src={logo}/>
          </div>
       </aside>
       
       </>
    );
};

export default AccountsSidebar;