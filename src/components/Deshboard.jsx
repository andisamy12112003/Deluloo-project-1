import React from 'react'
import { GoPlus } from "react-icons/go";
import { MdOutlineSecurity } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { TiMicrophone } from "react-icons/ti";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
const Deshboard = () => {
  return (
    <div className='w-full h-auto px-19 mt-5 box-border mb-5'  >
        
        <div className='w-full flex justify-between items-center '>
            <div>
                <h1 className='text-[22px] font-bold'>Dashboard</h1>
                <p className='text-gray-500'>Welcome back! Here's what's happening with your hiring pipeline.</p>
            </div>

            <div className='ml-192' >
                <button className='flex justify-center items-center p-3 rounded-2xl text-white
                bg-linear-to-r from-[#9A6AF9] bg-[#B07FFB] to-[#C391FE]'><GoPlus className='transition delay-75 duration-500 hover:rotate-160 mr-3'/> New Check</button>
            </div>

            <div>

            </div>
        </div>
    {/*cards*/}
        <div className='flex justify-between my-10'>

        <div className='w-80 flex justify-center items-center transition delay-75 duration-500 
        hover:scale-105 hover:shadow-xl hover:shadow-[#c491fe3b] box-border p-3 rounded-2xl border-1 border-[#6a728258]'>
            <div>
                <div className="bg-linear-to-r from-violet-500 to-violet-400 p-2 flex justify-center items-center m-3 rounded-xl mr-5">
                    <span className=""><BsPersonLinesFill className="text-[24px] text-white mx-1"/></span>
              </div>
            </div>

            <div className='mr-4 mx-2'>
                <h1 className='text-gray-500'>Active Candidates</h1>
                    <p className='text-[23px] font-bold'>24</p>
                </div>

            <div>
                <span className='bg-[#9056FF] text-white w-12 rounded-2xl px-2 py-1 text-center text-[13px]' >+12% </span>
            </div>

        </div>

        <div className='w-80 flex justify-center items-center transition delay-75 duration-500 
        hover:scale-105 hover:shadow-xl hover:shadow-[#c491fe3b] box-border p-3 rounded-2xl border-1 border-[#6a728258]'>
            <div>
                <div className="bg-linear-to-r from-violet-500 to-violet-400 p-2 flex justify-center items-center m-3 rounded-xl mr-5">
                    <span className=""><MdOutlineSecurity className="text-[24px] text-white mx-1"/></span>
              </div>
            </div>

            <div className='mr-4 mx-2'>
                <h1 className='text-gray-500'>Reference Checks</h1>
                    <p className='text-[23px] font-bold'>18</p>
                </div>

            <div>
                <span className='bg-[#9056FF] text-white w-12 rounded-2xl px-2 py-1 text-center text-[13px]' >+8% </span>
            </div>

        </div>

        <div className='w-80 flex justify-center items-center transition delay-75 duration-500 
        hover:scale-105 hover:shadow-xl hover:shadow-[#c491fe3b] box-border p-3 rounded-2xl border-1 border-[#6a728258]'>
            <div>
                <div className="bg-linear-to-r from-violet-500 to-violet-400 p-2 flex justify-center items-center m-3 rounded-xl mr-5">
                    <span className=""><TiMicrophone className="text-[24px] text-white mx-1"/></span>
              </div>
            </div>

            <div className='mr-4 mx-2'>
                <h1 className='text-gray-500'>AI Interviews</h1>
                    <p className='text-[23px] font-bold'>12</p>
                </div>

            <div>
                <span className='bg-[#9056FF] text-white w-12 rounded-2xl px-2 py-1 text-center text-[13px]' >+15% </span>
            </div>

        </div>

        <div className='w-80 flex justify-center items-center transition delay-75 duration-500 
        hover:scale-105 hover:shadow-xl hover:shadow-[#c491fe3b] box-border p-3 rounded-2xl border-1 border-[#6a728258]'>
            <div>
                <div className="bg-linear-to-r from-violet-500 to-violet-400 p-2 flex justify-center items-center m-3 rounded-xl mr-5">
                    <span className=""><HiArrowTrendingUp className="text-[24px] text-white mx-1"/></span>
              </div>
            </div>

            <div className='mr-4 mx-2'>
                <h1 className='text-gray-500'>Completion Rate</h1>
                    <p className='text-[23px] font-bold'>92%</p>
                </div>

            <div>
                <span className='bg-[#9056FF] text-white w-12 rounded-2xl px-2 py-1 text-center text-[13px]' >+5% </span>
            </div>

        </div>

        </div>

        <div className='w-full flex justify-center items-center '>
            {/*resent actives*/}
            <div className='w-[65vw] h-auto p-5 rounded-xl  border-1 border-[#6d7c92a7]'>
                <div>
                    <h1 className='text-[22px] font-[600]'>Recent Activity</h1>
                <p className='text-gray-500'>Latest updates from your hiring pipeline</p>
                </div>

                <div>

                    <div>
                    
                    <div className='flex justify-between mx-2'>
                    <div className='flex items-center mt-12'>
                    <div>
                        <span><MdOutlineSecurity className='bg-violet-500 text-lg p-2 text-[35px] box-border rounded-4xl text-white'/> </span>
                    </div>
                    <div className='ml-4'>
                        <h1 className='font-medium '>
                            Sarah Chen
                        </h1>
                        <p className='text-[14px] text-gray-500'>Reference check completed</p>
                    </div>

                    </div>

                    <div className='flex flex-col justify-end items-end w-100 '>
                    <span className='bg-violet-500 flex justify-center items-center px-2 
                    text-white rounded-2xl text-[13px] hover:bg-[#BB8AFD] '> <IoCheckmarkDoneCircle className='mr-1'/> completed</span>
                    <p className='px-1 text-[14px] text-gray-500'>2 hours ago</p>
                     </div>
                </div>
                
                <div className='flex justify-between mx-2'>
                    <div className='flex items-center mt-12'>
                    <div>
                        <span><TiMicrophone className='bg-violet-500 text-lg p-2 text-[35px] box-border rounded-4xl text-white'/> </span>
                    </div>
                    <div className='ml-4'>
                        <h1 className='font-medium '>
                            Marcus Rodriguez
                        </h1>
                        <p className='text-[14px] text-gray-500'>AI interview scheduled</p>
                    </div>

                    </div>

                    <div className='flex flex-col justify-end items-end w-100 '>
                    <span className='bg-[#F3F6FA] flex justify-center items-center px-2 
                     rounded-2xl text-[13px] font-[500]'> <LuClock className='mr-1'/> pending</span>
                    <p className='px-1 text-[14px] text-gray-500'>4 hours ago</p>
                     </div>
                </div>

                {/**/}

                <div className='flex justify-between mx-2'>
                    <div className='flex items-center mt-12'>
                    <div>
                        <span><BsPersonLinesFill className='bg-violet-500 text-lg p-2 text-[35px] box-border rounded-4xl text-white'/> </span>
                    </div>
                    <div className='ml-4'>
                        <h1 className='font-medium '>
                        Emma Thompson
                        </h1>
                        <p className='text-[14px] text-gray-500'>Passport verified</p>
                    </div>

                    </div>

                    <div className='flex flex-col justify-end items-end w-100 '>
                    <span className='bg-violet-500 flex justify-center items-center px-2 
                    text-white rounded-2xl text-[13px] hover:bg-[#BB8AFD] '> <IoCheckmarkDoneCircle className='mr-1'/> completed</span>
                    <p className='px-1 text-[14px] text-gray-500'>6 hours ago</p>
                     </div>
                </div>
                
                <div className='flex justify-between mx-2'>
                    <div className='flex items-center mt-12'>
                    <div>
                        <span><MdOutlineSecurity className='bg-violet-500 text-lg p-2 text-[35px] box-border rounded-4xl text-white'/> </span>
                    </div>
                    <div className='ml-4'>
                        <h1 className='font-medium '>
                            David Kim
                        </h1>
                        <p className='text-[14px] text-gray-500'>Reference request sent</p>
                    </div>

                    </div>

                    <div className='flex flex-col justify-end items-end w-100 '>
                    <span className='bg-[#F3F6FA] flex justify-center items-center px-2 
                     rounded-2xl text-[13px] font-[500]'> <LuClock className='mr-1'/> pending</span>
                    <p className='px-1 text-[14px] text-gray-500'>1 day ago</p>
                     </div>
                </div>


                </div>

                </div>


            </div>

            <div className='-mt-19 w-[30vw]  h-auto p-5 rounded-xl  border-1 border-[#6d7c92a7] ml-8'>
                <div>
                    <h1 className='text-[22px] font-[600]'>Quick Actions</h1>
                <p className='text-gray-500'>Common tasks and shortcuts</p>
                </div>
                <div>
                    <span className='mt-6 rounded-xl flex justify-start items-center w-full border-1 
            border-[#b080fc68] p-2 text-violet-500 font-medium hover:bg-[#F2E6FF]'><MdOutlineSecurity       className='mx-5'/> Start Reference Check</span>
            <span className='mt-6 rounded-xl flex justify-start items-center w-full border-1 
            border-[#b080fc68] p-2 text-violet-500 font-medium hover:bg-[#F2E6FF]'><TiMicrophone     className='mx-5'/> Shedule AI Interview</span>
            <span className='mt-6 rounded-xl flex justify-start items-center w-full border-1 
            border-[#b080fc68] p-2 text-violet-500 font-medium hover:bg-[#F2E6FF]'><BsPersonLinesFill    className='mx-5'/> Start Reference Check</span>
                </div>
                <div>
                    <h1 className='font-[600] mt-4 mb-3'>Pipeline Health</h1>

                    <div>
                        <div className='flex justify-between items-center my-3'>
                            <p className='text-gray-500'>Completion Rate</p> 
                            <p>92%</p>
                        </div>
                        <div className='w-[100%] h-3 bg-gray-300 rounded-2xl'>
                            <div className='w-[92%] h-3 bg-violet-500 rounded-l-2xl'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    </div>
  )
}

export default Deshboard