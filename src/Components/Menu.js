import React, { useState } from 'react'
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineTags } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";

function Menu() {
    const [showSidebar , setShowSidebar] = useState(false);
    const handleToggle = () => {
        setShowSidebar(!showSidebar); 
    }
  return (
    <div>
      <button
      type="button"
      className='inline-flex items-center p-2 mt-2 ml-2 text-gray-500 bg-black sm:hidden  '
      onClick={handleToggle}
      >
         <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

<aside
className={`fixed top-3 lg:left-4 z-40 w-64 h-[95%] transition-transform ${showSidebar ? "" : "-translate-x-full"} sm:translate-x-0 `}
>
   <div    onClick={handleToggle}
className='h-full px-3 py-4 rounded-2xl overflow-y-auto bg-black'>
     <div className='p-5 flex justify-start'>
    <span className='font-bold text-3xl text-white' >Intellipaat</span>
   </div>
   
   <ul
   className='text-white font-2xl p-2 '
   
   >
<li>
    <div className='flex items-center p-2 rounded-xl hover:text-black hover:bg-gray-400 ' >

    <AiOutlinePieChart/>
    <span className='m-3'> 
    Dashboard 

    </span>
    </div>
     </li>


     <li>
    <div className='flex items-center p-2 rounded-xl hover:text-black hover:bg-gray-400 ' >

    <AiOutlinePieChart/>
    <span className='m-3'> 
    Dashboard 

    </span>
    </div>
     </li>
     <li>
    <div className='flex items-center p-2 rounded-xl hover:text-black hover:bg-gray-400 ' >

    <AiOutlinePieChart/>
    <span className='m-3'> 
    Dashboard 

    </span>
    </div>
     </li>
     <li>
    <div className='flex items-center p-2 rounded-xl hover:text-black hover:bg-gray-400 ' >

    <AiOutlinePieChart/>
    <span className='m-3'> 
    Dashboard 

    </span>
    </div>
     </li>
     <li>
    <div className='flex items-center p-2 rounded-xl hover:text-black hover:bg-gray-400 ' >

    <AiOutlinePieChart/>
    <span className='m-3'> 
    Dashboard 

    </span>
    </div>
     </li>


   </ul>

   <div className='text-white p-7 text-left grid mt-[15vh]' >
    <span>Help</span>
    <span>Contact us</span>
   </div>


   </div>
 

</aside>

    </div>
  )
}

export default Menu
