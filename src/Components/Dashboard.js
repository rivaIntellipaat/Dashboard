import React from 'react'
import { AiOutlinePieChart } from "react-icons/ai";
import Menu from './Menu';


function Dashboard() {
  return (
    <div className='bg-blue-300 h-100% w-100%' >

      <div>
        <Menu/>
      </div>

<div className='lg:pl-28 sm:pl-4 pr-7 sm:ml-64' >
  <div className=' p-2 lg:w-[90%] align-center ' >
    <div className='grid lg:grid-cols-2 lg:p-2 lg:gap-5' >
      <div className='grid justify-items-start'  >
      <span className=' font-bold text-black'> Dashboard </span>
      </div>
<div className=' grid justify-items-end mb-1'>
  <input className=' rounded-xl outline-none pl-3'>
  </input>
</div>

    </div>
{/* //! card */}
   <div className=' grid lg:grid-cols-4 sm:grid-cols-2 sm:grid-rows-2 gap-x-8 gap-y-4 mb-3 ' >
   <div className="flex  h-32  rounded-2xl bg-orange-100">
              <div className="relative p-3 w-[100%] ">
                <div className="p-5">
                  <AiOutlinePieChart className="absolute right-5  top-4 " />
                  <div className="absolute bottom-4 text-left ">
                    <p>Total Transactions</p>
                    <p className="font-bold text-3xl sm:text-2xl ">
                      12347
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>



            <div className="flex  h-32  rounded-2xl bg-green-100">
              <div className="relative p-3 w-[100%] ">
                <div className="p-5">
                  <AiOutlinePieChart className="absolute right-5  top-4 " />
                  <div className="absolute bottom-4 text-left ">
                    <p>Total Transactions</p>
                    <p className="font-bold text-3xl sm:text-2xl ">
                      12347
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>
   </div>

  </div>


</div>

    </div>
  )
}

export default Dashboard
