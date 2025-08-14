import iconDeluloo from "../assets/iconDeluloo.png";
import { BsList, BsStars } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiArrowTrendingDown } from "react-icons/hi2";
import { TiWarningOutline } from "react-icons/ti";
import { IoMdTime } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { TiMicrophone } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import { FiCreditCard } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsPeopleFill } from 'react-icons/bs';
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GoOrganization } from "react-icons/go";
import { LuDot, LuList } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";

import {Link} from "react-router-dom"
import { useState } from "react";

const MainPage = () => {

  const [hide,setHide] = useState(true)
console.log(hide)
  const hideList = () => {
    setHide(!hide)
  }
  return(
    <div className="w-full font-sans no-scrollbar ">

      {/*Header */}
      <header className="w-full fixed max-lg:hidden">
        <div className="w-full flex justify-between h-20 bg-[#fcfcffdf] items-center box-border">
          <div>
            <img src={iconDeluloo} alt="" className="w-10 ml-22" />
          </div>
          <div>
            <a href="#Home" className="mx-4 text-[#64748B] font-medium hover:text-[#9263F8] ">Features</a>
            <a href="#HowDeluloo" className="mx-4 text-[#64748B] font-medium hover:text-[#9263F8]">How its Works</a>
            <a href="#Pricing" className="mx-4 text-[#64748B] font-medium hover:text-[#9263F8]">Pricing</a>
            <a href="#About" className="mx-4 text-[#64748B] font-medium hover:text-[#9263F8]">About</a>
            <Link to="/Dashboard" className="mx-4 text-[#64748B] font-medium hover:text-[#9263F8]">Dashboard</Link>
          </div>
          <div className="mr-10">
            <a href="#Pricing"><button  className="mx-3 w-26 h-10 hover:bg-violet-200 rounded-2xl hover:text-voilet-300 hover:text-[#9565F8] hover:font-bold"  >Sign in</button></a>
            <a href="#Home">
              <button className="mx-3 w-26 h-10 rounded-2xl bg-gradient-to-l from-bg-[#895AF7] bg-[#895AF6] to-bg-[#895AF6] text-white text-md items-center transition delay-10 
            duration-100 ease-in-out hover:scale-109 ">Get Started</button>
            </a>
          </div>
      </div>
      </header>

      {/*header sm md lg */}
      <header className="w-full fixed xl:hidden lg:hidden ">
        <div className="w-full flex justify-between h-20 bg-[#fcfcffdf] items-center box-border">
          <div>
            <img src={iconDeluloo} alt="" className="w-15 ml-9 " />
          </div>
          <div >
            {hide ? <BsList className="-ml-12 text-3xl" onClick={hideList}/>:
            <ImCancelCircle className="-ml-12 text-3xl" onClick={hideList}/>}
          </div> 
        </div>
        <div className={`flex flex-col bg-[#fcfcffe7] ${hide? "hidden" : " "} gap-y-7 `}>
            <a href="#Home" className="mx-4 text-[#64748B] font-medium hover:text-[#9263F8] ">Features</a>
            <a href="#HowDeluloo" className="mx-4 text-[#64748B] font-medium hover:text-[#9263F8]">How its Works</a>
            <a href="#Pricing" className="mx-4 text-[#64748B] font-medium hover:text-[#9263F8]">Pricing</a>
            <a href="#About" className="mx-4 text-[#64748B] font-medium hover:text-[#9263F8]">About</a>
            <Link to="/Dashboard" className="mx-4 text-[#64748B] font-medium hover:text-[#9263F8]">Dashboard</Link>
            <div className="mr-10 flex flex-col">
            <a href="#Pricing"><button  className="mx-3 w-full h-10 hover:bg-violet-200 rounded-2xl hover:text-voilet-300 hover:text-[#9565F8] hover:font-bold"  >Sign in</button></a>
            <a href="#Home">
              <button className="mx-3 w-full h-10 rounded-2xl bg-gradient-to-l from-bg-[#895AF7] bg-[#895AF6] to-bg-[#895AF6] text-white text-md items-center transition delay-10 
            duration-100 ease-in-out hover:scale-109 ">Get Started</button>
            </a>
          </div>
          </div>
          
      </header>

      
      {/*Home Page*/}
      <main id="Home" className="w-full h-auto bg-[#F9F6FF] flex flex-col justify-center pt-20 ">
        
        <div className="flex justify-center ">
          <div className="flex justify-center rounded-2xl bg-[#7f669923] mt-10 w-60 p-1"> 
          <div className="flex items-center "><span className="mr-1 text-[#9E77F8]"><BsStars /></span> 
          <span className="text-[#9E77F8] font-medium">Deluloo is the new Soluloo</span></div>
        </div>
        </div>


        <div className="">
          <h1 className="max-sm:text-[50px] text-[100px] text-center font-bold tracking-[2px]">
            <span className="block ">The world doesn't </span><span className="block max-sm:-mt-1 -mt-12">need 
            </span><span className="block max-sm:-mt-1 -mt-12 text-[#9465F8]">another solution.</span>
            <span className="block -mt-12 max-sm:-mt-1">It needs a</span> 
            <span className="block max-sm:-mt-1 -mt-12 text-[#9465F8]">delusion-free one.</span>
          </h1>
        </div>

        <div className="flex justify-center text-center ">
          <p className="text-2xl w-180 text-[#64748B]">Deluloo helps you hire better with verified trust — not 
          just another tool in your stack. AI-powered reference checks + Candidate Passports + L1 interviews that reveal what's real.</p>
        </div>

        <div className="flex justify-center mt-12 mb-12">
            <button className="w-40 h-15 text-md mx-12 font-medium rounded-2xl text-white 
            bg-linear-to-l from-violet-400 bg-[#7d49d8c8] flex justify-center items-center transition delay-100 duration-300 hover:scale-110 ">
            <span className="mr-2">Book a Demo</span> <IoIosArrowRoundForward/></button>

            <button className="transition delay-75 duration-200 hover:bg-[#d4bfecc0] w-40 h-15 rounded-2xl hover:border-1 hover:border-[#9465f8c9] text-violet-500 font-[500]">Try it Free</button>
        </div>
      </main>

      {/*THE PROBLEM WITH HIRING */}
      <section id="Home" className="w-full h-auto">
        <div className="text-center">
          <h2 className="mt-9 text-5xl text-black font-medium">The Problem with <span className="line-through text-[#64748B] ">Soluloo</span> Hiring</h2>
          <p className="text-center text-[#64748B] mt-4 text-xl">Soluloo = More dashboards. More forms. More hiring noise.
            <span className="block">But still...</span>
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-6 max-sm:flex-col max-sm:w-full max-sm:items-center max-sm:justify-center ">

          <div className="border-1 w-80 border-gray-200 p-8 rounded-2xl transition delay-75 duration-400 hover:scale-106 hover:shadow-2xl ">
            <p className="text-[30px] text-red-600 font-bold"><HiArrowTrendingDown/></p>
            <p className="mt-2 font-bold">Bad hires</p>
            <p className="text-[#64748B] text-[13px]">Despite all the tools, wrong people still slip through</p>
          </div>

          <div className="border-1 w-80 border-gray-200 p-8 rounded-2xl transition delay-75 duration-400 hover:scale-106 hover:shadow-2xl ">
            <p className="text-[30px] text-red-600 font-bold"><TiWarningOutline/></p>
            <p className="mt-2 font-bold">Ghost references</p>
            <p className="text-[#64748B] text-[13px]">References that tell you nothing useful</p>
          </div>

          <div className="border-1 w-80 border-gray-200 p-8 rounded-2xl transition delay-75 duration-400 hover:scale-106 hover:shadow-2xl ">
            <p className="text-[30px] text-red-600 font-bold"><IoMdTime/></p>
            <p className="mt-2 font-bold">Resume bluffing</p>
            <p className="text-[#64748B] text-[13px]">Skills and experience that don't match reality</p>
          </div>

          <div className="border-1 w-80 border-gray-200 p-8 rounded-2xl transition delay-75 duration-400 hover:scale-106 hover:shadow-2xl ">
            <p className="text-[30px] text-red-600 font-bold"><FaDollarSign/></p>
            <p className="mt-2 font-bold">Low retention</p>
            <p className="text-[#64748B] text-[13px]">High turnover because trust was never established</p>
          </div>
        </div>

      {/*quote container */}
      <div className="w-full h-30 flex justify-center items-center mt-12 mb-30">
        <div className="bg-[#FBF7FF] w-[90vw] p-12 text-center rounded-2xl" >
        <p className="text-[23px] text-[#895AF6] font-medium">Most "solutions" just mask the truth.</p>
        <h1 className="text-[32px] text-[#AB7AFB] font-medium">Deluloo reveals it.</h1>
      </div>
      </div>

      </section>

      {/*What Makes Deluloo Different*/}
      <section className=" w-full h-auto bg-[#F4F0FE] ">  
        <div className="p-12 box-border flex justify-center max-sm:flex-col "> 

          <div className="bg-[#FFFFFF]  text-lg w-70  max-md:w-auto max-md:px-19 flex justify-center items-center p-5 mx-8 hover:shadow-2xl rounded-2xl transition delay-75 duration-300 ">
            <h1 className="flex items-center "><FaMicrophone className="text-violet-800 text-2xl"/> <span className="ml-3">AI L1 Interviews
            </span></h1>
          </div>

          
          <div className="bg-[#FFFFFF] max-sm:my-5 text-lg w-70 max-md:w-auto max-md:px-19 flex justify-center items-center p-5 mx-8 hover:shadow-2xl rounded-2xl transition delay-75 duration-300 ">
            <h1 className="flex items-center "><MdOutlineSecurity className="text-violet-800 text-2xl"/> <span className="ml-3">Reference Checks
            </span></h1>
          </div>

          
          <div className="bg-[#FFFFFF] text-lg w-70 flex justify-center max-md:w-auto max-md:px-19 items-center p-5 mx-8 hover:shadow-2xl rounded-2xl transition delay-75 duration-300 ">
            <h1 className="flex items-center "><BsPersonLinesFill className="text-violet-800 text-2xl"/> <span className="ml-3">Candidate Passports
            </span></h1>  
          </div>

        </div>
        <div className="text-center">
          <h1 className="text-[50px] font-bold text-[#020817]">
            What Makes Deluloo Different? 
          </h1>
          <p className=" text-[#64748B] text-[20px]">Not just another hiring tool. A new way to establish trust before the <span className="block">handshake.</span></p>


          {/**/}
          <div className=" flex justify-center gap-12 mt-10 max-sm:flex-col flex-wrap">

            <div className="max-sm:w-auto max-sm:mx-2 w-140  flex bg-[#ffff] p-8 rounded-2xl transition delay-85 duration-400 hover:scale-106 hover:shadow-lg hover:shadow-[#b383fc33]">
              <div className="bg-linear-to-r from-violet-500 to-violet-400 p-4 flex justify-center items-center m-3 rounded-2xl mr-5">
                <span className=""><TiMicrophone className="text-[28px] text-white mx-1"/></span>
              </div>
              <div className="text-start mt-2">
                <h1 className="text-[20px] text-[#020817] font-[700]">AI-powered reference interviews</h1>
                <p className="text-[#64748B]">Structured & scored conversations that reveal real insights</p>
              </div>
            </div>

            <div className="max-sm:w-auto max-sm:mx-2 w-140 flex bg-[#ffff] p-8 rounded-2xl transition delay-85 duration-400 hover:scale-106 hover:shadow-lg hover:shadow-[#b383fc33]">
              <div className="bg-linear-to-r from-violet-500 to-violet-400 p-4 flex justify-center items-center m-3 rounded-2xl mr-5">
                <span className=""><FiCreditCard className="text-[28px] text-white mx-0.  5 "/></span>
              </div>
              <div className="text-start mt-2">
                <h1 className="text-[20px] text-[#020817] font-[700]">Candidate Passports: portable, verified credentials</h1>
                <p className="text-[#64748B]">Reusable hiring profiles that candidates own and control</p>
              </div>
            </div>

          </div>

          <div className="max-sm:flex-col flex justify-center gap-12 mt-10 flex-wrap">

            <div className="max-sm:w-auto max-sm:mx-2 w-140 flex bg-[#ffff] p-8 rounded-2xl transition delay-85 duration-400 hover:scale-106 hover:shadow-lg hover:shadow-[#b383fc33]">
              <div className="bg-linear-to-r from-violet-500 to-violet-400 p-4 flex justify-center items-center m-3 rounded-2xl mr-5">
                <span className=""><TbWorld className="text-[28px] text-white mx-1"/></span>
              </div>
              <div className="text-start mt-2">
                <h1 className="text-[20px] text-[#020817] font-[700] ">Works globally, built for offshore & remote</h1>
                <p className="text-[#64748B]">Especially critical for distributed teams and global talent</p>
              </div>
            </div>

            <div className="max-sm:w-auto max-sm:mx-2 w-140 flex bg-[#ffff] p-8 rounded-2xl transition delay-85 duration-400 hover:scale-106 hover:shadow-lg hover:shadow-[#b383fc33]">
              <div className="bg-linear-to-r from-violet-500 to-violet-400 p-4 flex justify-center items-center m-3 rounded-2xl mr-5">
                <span className=""><MdOutlineSecurity className="text-[28px] text-white mx-1"/></span>
              </div>
              <div className="text-start mt-2 ">
                <h1 className="text-[20px] text-[#020817] font-[700] ">Trust signals up front, not after the offer</h1>
                <p className="text-[#64748B]">Know what you're getting before you commit</p>
              </div>
            </div>

          </div>

        </div>
        <div className=" w-full flex justify-center ">
          <div className="max-sm:w-auto max-sm:mx-2 w-[50vw] bg-white mt-20 mb-27 text-center p-7 rounded-2xl shadow-2xl shadow-[#925cff3c]">
            
          <h1 className="font-[700] text-lg">💸 Bad hires can cost 30% of an employee's CTC.</h1>
          <p className="text-[#64748B] my-3">And reference checks? Most are done on autopilot — or skipped.

          </p>
          <h1 className="text-[#9564FF] font-[700] text-lg text-[19px]"><span>📊</span> Deluloo fixes the most broken step in hiring: the truth filter.</h1>
          </div>
        </div>
      </section>

      {/*How Deluloo Works*/}
      <section id="HowDeluloo" className="w-full " >
        <div className="flex justify-center mt-12 mb-4">
          <div className="flex justify-center rounded-2xl bg-[#7f669923] mt-10 w-auto p-1 "> 
            <div className="flex items-center px-3 "><span className="mr-1 text-[#9E77F8]"><BsStars /></span> 
            <span className="text-[#956cf4] font-medium">Three Core Modules</span></div>
          </div>
        </div>

        <div className="text-center flex flex-col items-center ">
          <h1 className="text-[50px] font-bold mb-2">How Deluloo Works</h1>
          <p className="text-gray-500 text-[20px] w-210 mb-10 max-sm:w-full">Three powerful modules that work together 
          to establish trust before you hire. Use them individually or as a complete hiring solution.</p>
        </div>
        
        <div className="flex justify-evenly mt-7 max-md:flex-col flex-wrap max-md:items-center">
        {/*card 1*/}
        <div className="max-sm:w-full container1 flex flex-col justify-center items-center border-1 border-gray-200 w-90 
        rounded-2xl p-6 mb-10 transition delay-75 duration-300 hover:scale-103 hover:shadow-2xl hover:shadow-gray-200 ">
          <span className="bg-violet-600 text-lg rounded-[100%] w-7 text-center text-white font-medium absolute -mt-146 -mr-97 max-md:-mr-90 max-md:-mt-150 ">1</span>
          <div className="icon-scale bg-linear-to-r from-violet-500 to-violet-400 p-4 flex justify-center items-center m-3 rounded-2xl mr-5">
            <span className=""><MdOutlineSecurity className="text-[28px] text-white mx-1"/></span>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-[26px] font-bold text-color ">AI Reference Checks</h1>
            <p className="bg-[#F2ECFE] text-[#8E61F6] rounded-2xl text-center w-45 px-2 my-3">Structured & Verified</p>
            <p className="text-gray-500 text-center">AI-powered reference interviews that go beyond 
            generic questions. Get structured insights with scoring and verification that reveals real performance patterns.</p>

          </div>
          <ul className="flex flex-col justify-start items-start w-auto">
            <li className="flex justify-center items-center text-[14px] mt-2"><LuDot className="text-violet-600 text-[45px] -mr-2"/>Structured interview framework</li>
            <li className="flex justify-center items-center text-[14px] -mt-4"><LuDot className="text-violet-600 text-[45px] -mr-2"/>AI-powered analysis & scoring</li>
            <li className="flex justify-center items-center text-[14px] -mt-4"><LuDot className="text-violet-600 text-[45px] -mr-2"/>Verification of claims & skills</li>
            <li className="flex justify-center items-center text-[14px] -mt-4"><LuDot className="text-violet-600 text-[45px] -mr-2"/>Global compliance built-in</li>

          </ul>
          <div className="w-full flex flex-col">
            <button className="bg-[#F2EDFE] mt-2 w-full rounded-lg py-3 text-[15px] text-[#935EFF] 
            font-[600] my-2">No more ghost references</button> 
            <button className=" button-color w-full flex justify-center items-center border-[#F2E6FF] 
                border-2 p-2 rounded-2xl transition delay-75 duration-300 hover:scale-103 
                hover:bg-[#935EFF] text-violet-500  hover:border-[0.1px] my-4 hover:text-[#FFFFFF] text-md"> <span className="font-medium btn-white">Try Reference Checks</span> 
                <IoIosArrowRoundForward className="mx-1 text-2xl btn-white"/> </button>
            
          </div>
        </div>

        {/*card 2*/}
        <div className="max-sm:w-full container1 flex flex-col justify-center items-center border-1 border-gray-200 w-90  
        rounded-2xl p-6 mb-10 transition delay-75 duration-300 hover:scale-103 hover:shadow-2xl hover:shadow-gray-200 ">
          <span className="bg-violet-600 text-lg rounded-[100%] w-7 text-center text-white font-medium absolute -mt-146 -mr-97 max-md:-mr-90 max-md:-mt-150">2</span>
          <div className="icon-scale bg-linear-to-r from-violet-500 to-violet-400 p-4 flex justify-center items-center m-3 rounded-2xl mr-5">
            <span className=""><FiCreditCard className="text-[28px] text-white mx-1"/></span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[26px] font-bold text-color">Candidate Passports</h1>
            <p className="bg-[#F2ECFE] text-[#8E61F6] rounded-2xl text-center w-45 px-2 my-3">Portable & Reusable</p>
            <p className="text-gray-500 text-center">Verified, portable hiring profiles that candidates own. Think LinkedIn + Credit Score + Background Check in one reusable document.</p>

          </div>
          <ul className="flex flex-col justify-start items-start w-auto">
            <li className="flex justify-center items-center text-[14px] mt-2"><LuDot className="text-violet-600 text-[45px] -mr-2"/>AI-summarized references</li>
            <li className="flex justify-center items-center text-[14px] -mt-4"><LuDot className="text-violet-600 text-[45px] -mr-2"/>Verified credentials & skills</li>
            <li className="flex justify-center items-center text-[14px] -mt-4"><LuDot className="text-violet-600 text-[45px] -mr-2"/>Reputation layer for careers</li>
            <li className="flex justify-center items-center text-[14px] -mt-4"><LuDot className="text-violet-600 text-[45px] -mr-2"/>Owned by candidates</li>

          </ul>
          <div className="w-full flex flex-col">
            <button className="bg-[#F2EDFE] mt-2 w-full rounded-lg py-3 text-[15px] text-[#935EFF] 
            font-[600] my-2">Owned by candidates, trusted by employers</button> 
            <button className=" button-color w-full flex justify-center items-center border-[#F2E6FF] 
                border-2 p-2 rounded-2xl transition delay-75 duration-300 hover:scale-103 
                hover:bg-[#935EFF] text-violet-500  hover:border-[0.1px] my-4 hover:text-[#FFFFFF] text-md"> <span className="font-medium btn-white">Create Passport </span> 
                <IoIosArrowRoundForward className="mx-1 text-2xl btn-white"/> </button>
            
          </div>
        </div>
        {/*card 3*/}
        <div className="max-sm:w-full container1 flex flex-col justify-center items-center 
        border-1 border-gray-200 rounded-2xl p-6 mb-10 transition delay-75 duration-300 hover:scale-103 hover:shadow-2xl hover:shadow-gray-200 w-90 ">
          <span className="bg-violet-600 text-lg rounded-[100%] w-7 text-center text-white font-medium absolute -mt-146 -mr-97 max-md:-mr-90 max-md:-mt-150">3</span>
          <div className="icon-scale bg-linear-to-r from-violet-500 to-violet-400 p-4 flex justify-center items-center m-3 rounded-2xl mr-5">
            <span className=""><FaMicrophone className="text-[28px] text-white mx-1"/></span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[26px] font-bold text-color">L1 AI Interviews</h1>
            <p className="bg-[#F2ECFE] text-[#8E61F6] rounded-2xl text-center w-45 px-2 my-3">Scale Your Screening</p>
            <p className="text-gray-500 text-center">Screen high-volume non-tech roles with intelligent, conversational AI. Perfect for sales, support, and ops roles where soft skills matter.</p>

          </div>
          <ul className="flex flex-col justify-start items-start w-auto">
            <li className="flex justify-center items-center text-[14px] mt-2"><LuDot className="text-violet-600 text-[45px] -mr-2"/>Conversational AI interviews</li>
            <li className="flex justify-center items-center text-[14px] -mt-4"><LuDot className="text-violet-600 text-[45px] -mr-2"/>Soft skills assessment</li>
            <li className="flex justify-center items-center text-[14px] -mt-4"><LuDot className="text-violet-600 text-[45px] -mr-2"/>Volume screening capability</li>
            <li className="flex justify-center items-center text-[14px] -mt-4"><LuDot className="text-violet-600 text-[45px] -mr-2"/>Human-like interactions</li>

          </ul>
          <div className="w-full flex flex-col">
            <button className="bg-[#F2EDFE] mt-2 w-full rounded-lg py-3 text-[15px] text-[#935EFF] 
            font-[600] my-2">Coming soon - join waitlist</button> 
            <button className="button-color w-full flex justify-center items-center border-[#F2E6FF] 
                border-2 p-2 rounded-2xl transition delay-75 duration-300 hover:scale-103 
                hover:bg-[#935EFF] text-violet-500  hover:border-[0.1px] my-4 hover:text-[#FFFFFF] text-md"> <span className="font-medium btn-white">Try AI Interviews</span> 
                <IoIosArrowRoundForward className="mx-1 text-2xl btn-white"/> </button>
            
          </div>
        </div>


        </div>
        
        <div className="flex justify-center my-9 max-sm:w-full ">
          <div className="text-center bg-[#F4F0FE] border-1 border-[#c18ffe31] w-[85vw] rounded-2xl p-7 ">
          <h1 className="text-[25px] font-[700] ">Use them together or individually</h1>
          <p className="text-gray-600 mt-3">Start with one module and scale up, or implement the complete trust layer for your hiring process. </p>
          <div className="flex justify-center mt-5 mb-3 max-sm:flex max-sm:flex-col max-sm:w-full max-sm:justify-center max-sm:items-center  ">
            <a href="#About">
            <button className=" w-70 h-15 text-md mx-12 font-medium rounded-2xl text-white 
            bg-linear-to-l from-violet-400 bg-[#7d49d8c8] flex justify-center items-center transition delay-100 duration-300 hover:scale-110 ">
            <span className="mr-2">Book Demo - See All Modules</span> <IoIosArrowRoundForward/></button>
            </a>

            <a href="#Pricing">
              <button className="max-sm:w-70 max-sm:mt-2 transition delay-75 duration-300 w-40 h-15 rounded-2xl border-1 
            border-[#9465f845] font-[600] text-violet-500 hover:bg-[#F2E6FF]">View Pricing</button>
            </a>

        </div>
        </div>

        </div>

      </section>

      {/*Simple, Transparent Pricing*/}
      <section id="Pricing" className=" bg-[#F7F4FF] max-md:pt-[10vh] max-md:h-auto ">
        <div className="text-center">
          <h1 className="text-[48px] font-[700]">Simple, Transparent Pricing</h1>
          <p className="text-[#777E8F] text-[20px]">Start free, scale as you grow. No setup fees, no hidden costs.</p>
        </div>

        <div className="flex justify-center gap-8 max-sm:flex-col max-sm:items-center flex-wrap ">
        {/*card 1*/}
         <div className="max-md:w-70 card w-100 flex flex-col justify-center items-center bg-white p-8 mt-12 mb-12 rounded-2xl transition delay-75 duration-300 hover:scale-105 card">
            <div className="flex flex-col items-center">
              <p className=""><BsPeopleFill className="text-[57px] text-[#A676FA] bg-[#F2E6FF] p-3 rounded-2xl"/></p>
              <h1 className="text-[26px] font-[700] mt-2  ">Starter</h1>
              <p className="text-[#939FAF]">Perfect for small teams getting started</p>
              <h1 className=""><span className="text-[37px] font-[700] ">$49</span><span className="text-[#939FAF] text-lg">/month</span></h1>
            </div>
            <div>
              <ul className=" flex flex-col justify-start items-start">
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className=" text-[15px] text-[#0C1220] ">
                5 reference checks/month</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className=" text-[15px] text-[#0C1220] ">
                Basic candidate passports</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className="text-[15px] text-[#0C1220] ">
                Email support</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className="text-[15px]  text-[#0C1220] ">
                Standard templates</span></li>

              </ul>
            </div>
            
              <div className="w-full mt-3">
                <button className="w-full flex justify-center items-center border-[#F2E6FF] 
                border-2 p-2 rounded-2xl transition delay-75 duration-300 hover:scale-103 
                hover:bg-[#F2E6FF] hover:border-red-400 hover:border-[0.1px] text-[#9D6DF9] text-md"> <span className="font-medium ">Start Free Trial</span> 
                <IoIosArrowRoundForward className="mx-1 text-2xl "/> </button>
              </div>
          </div>
          {/*card 2*/}
          <div className="max-md:w-70 w-100 flex flex-col justify-center items-center bg-white p-8 mt-12 mb-12 rounded-2xl transition delay-75 duration-300 hover:scale-105 shadow-2xl shadow-[#A676FA]
          border-2  border-[#a573fc]">
            <span className="w-auto text-center px-3 text-white font-bold -mt-125 text-md rounded-2xl absolute bg-linear-to-r from-[#9464F7] bg-[#A772FA] to-[#A774FA]">Most Popular</span>
            <div className="flex flex-col items-center">
              
              <p className=""><AiOutlineThunderbolt className="text-[57px] text-white bg-[#AE7DFB] p-3 rounded-2xl"/></p>
              <h1 className="text-[26px] font-[700] mt-2  ">Professional</h1>
              <p className="text-[#939FAF]">For growing teams with higher volume</p>
              <h1 className=""><span className="text-[37px] font-[700] ">$149</span><span className="text-[#939FAF] text-lg">/month</span></h1>
            </div>
            <div>
              <ul className=" flex flex-col justify-start items-start">
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className=" text-[15px] text-[#0C1220] ">
                25 reference checks/month</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className=" text-[15px] text-[#0C1220] ">
                Full candidate passport features</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className="text-[15px] text-[#0C1220] ">
                L1 AI interviews {`(beta access)`}</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className="text-[15px]  text-[#0C1220] ">
                Priority support</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className="text-[15px] text-[#0C1220] ">
                Custom branding {`(beta access)`}</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className="text-[15px]  text-[#0C1220] ">
                API access  </span></li>

              </ul>
            </div>
            
              <div className="w-full mt-3">
                <button className="w-full flex justify-center items-center 
                p-2 rounded-2xl transition delay-75 duration-300 hover:scale-104 text-md bg-linear-to-r from-[#9464F7] bg-[#A772FA] to-[#A774FA] "> <span className="font-medium text-white">
                Start Free Trial</span> 
                <IoIosArrowRoundForward className="mx-1 text-2xl text-white"/> </button>
              </div>
          </div>
          {/*card 3*/}
          <div className="max-md:w-70 w-100 flex flex-col justify-center items-center bg-white p-8 mt-12 mb-12 rounded-2xl transition delay-75 duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              <p className=""><GoOrganization className="text-[57px] text-[#A676FA] bg-[#F2E6FF] p-2 rounded-2xl"/></p>
              <h1 className="text-[26px] font-[700] mt-2  ">Enterprise</h1>

              <p className="text-[#939FAF]">For large organizations with custom needs</p>
              <h1 className="text-[36px] font-[700] mt-2  ">Custom</h1>
            </div>
            <div>
              <ul className=" flex flex-col justify-start items-start">
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className=" text-[15px] text-[#0C1220] ">
                Unlimited reference checks</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className=" text-[15px] text-[#0C1220] ">
                White-label solution</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className="text-[15px] text-[#0C1220] ">
                Custom integrations</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className="text-[15px]  text-[#0C1220] ">
                Dedicated success manager</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className="text-[15px] text-[#0C1220] ">
                SLA guarantees</span></li>
                <li className="flex justify-center items-center "><IoIosCheckmarkCircle className=" text-[#895AF6] rounded-2xl text-2xl m-1"/> <span className="text-[15px]  text-[#0C1220] ">
                Custom AI training</span></li>

              </ul>
            </div>
            
              <div className="w-full mt-3">
                <button className="w-full flex justify-center items-center border-[#F2E6FF] 
                border-2 p-2 rounded-2xl transition delay-75 duration-300 hover:scale-103 
                hover:bg-[#F2E6FF] hover:border-red-400 hover:border-[0.1px] text-[#9D6DF9] text-md"> <span className="font-medium ">Contact Sales</span> 
                <IoIosArrowRoundForward className="mx-1 text-2xl "/> </button>
              </div>
          </div>
        </div>
        {/*ask questions*/}
        <div className="h-100 mt-12 w-full ">
            <h1 className="text-center text-[24px] font-[700]">Frequently Asked Questions</h1>
            <div className="flex flex-col justify-center items-center gap-7">
              <div className=" flex gap-6 mt-8 max-md:flex-col ">
              <div className="w-100 h-auto bg-white rounded-2xl p-5  max-md:w-70">
                <p className="font-[600]">Do you offer a free trial?</p>
                <p className="text-[14px] text-gray-500">Yes! All plans include a 14-day free trial with full access to features.</p>
              </div>

              <div className="w-100 h-auto bg-white rounded-2xl p-5 max-md:w-70">
                <p className="font-[600]">Can I change plans anytime?</p>
                <p className="text-[14px] text-gray-500">Absolutely. Upgrade or downgrade your plan at any time with prorated billing.</p>
              </div>

            </div>

            <div className=" flex gap-6 max-md:flex-col">

              <div className="w-100 h-auto bg-white rounded-2xl p-5 max-md:w-70">
                <p className="font-[600]">What about data security?</p>
                <p className="text-[14px] text-gray-500">We're SOC 2 compliant with enterprise-grade security and global privacy compliance.</p>
              </div>

              <div className="w-100 h-auto bg-white rounded-2xl p-5 max-md:w-70">
                <p className="font-[600]">Do candidates pay anything?</p>
                <p className="text-[14px] text-gray-500">Candidate Passports are completely free for job seekers to create and maintain.</p>
              </div>

            </div>

            </div>


        </div>
      </section>

      {/*Ready to build trust before you hire?*/}
      <section id="About"  className="pt-[6vw] max-md:w-full max-md:mt-50 h-auto flex max-lg:flex-col justify-center items-center p-10 max-md:p-0 ">

        <div className="max-lg:w-full w-[46vw] h-auto p-11 ">
          <h1 className="text-[49px] font-[700]"><span className="block max-md:text-3xl">Ready to build trust</span> <span className="-mt-6 block max-md:text-3xl max-md:-mt-1 ">before you 
          hire?</span></h1>
          <p className="text-gray-500 text-[21px] max-md:text-lg max-md:mt-2">Book a demo to see how Deluloo's three modules work together to create a delusion-free 
          hiring process. Our team will show you exactly how to implement verified trust in your hiring workflow.</p>
          <div>
            
            <div className="flex flex-col justify-start mt-8">        
             <p className="flex justify-start items-center"><LuDot className="text-violet-500 text-6xl"/> <span className="-ml-2 text-[18px] font-[500]">15-minute setup</span></p>
             <p className="ml-13 -mt-2 text-gray-500">Get started with your first reference check or candidate passport in minutes.</p>
            </div>

            <div className="flex flex-col justify-start ">        
             <p className="flex justify-start items-center"><LuDot className="text-violet-500 text-6xl"/> <span className="-ml-2 text-[18px] font-[500]">Custom demo</span></p>
             <p className="ml-13 -mt-2 text-gray-500">See real examples with your specific use cases and hiring challenges.</p>
            </div>

            <div className="flex flex-col justify-start ">        
             <p className="flex justify-start items-center"><LuDot className="text-violet-500 text-6xl"/> <span className="-ml-2 text-[18px] font-[500]">No commitment</span></p>
             <p className="ml-13 -mt-2 text-gray-500">Try it free for 14 days. No setup fees, no contracts, cancel anytime.</p>
            </div>

          </div>

          {/* button */}

          <div className="flex gap-7 mt-5 max-sm:flex-col">
            <div className="w-full mt-3">
                <button className="w-full flex justify-center items-center 
                  p-2 py-4 rounded-2xl transition delay-75 duration-300 hover:scale-104 text-md bg-linear-to-l from- [#9264F7] bg-[#A782FA] to-[#A734FA] "> <span className="font-medium text-white">
                  Book Demo Now</span> 
                  <IoIosArrowRoundForward className="mx-1 text-2xl text-white "/> 
                </button>
          </div>
          <div className="w-full mt-3">
                <a href="#Home">
                  <button className="w-full flex justify-center items-center border-[#F2E6FF] 
                border-2 p-2 py-4 rounded-2xl transition delay-75 duration-300 hover:scale-103 
                hover:bg-[#F2E6FF] hover:border-[0.1px] text-[#9D6DF9] text-md"> <span className="font-medium ">Start Free Trial</span> 
                <IoIosArrowRoundForward className="mx-1 text-2xl "/> </button>
                </a>
          </div>
          </div>
        </div>
      {/*form*/}
        <div className=" max-lg:w-full max-sm:w-[100vw] w-[50vw] h-auto flex justify-center items-center ">
          <span className="animate-bounce absolute -mt-178 -mr-130 max-sm:-mr-60  flex items-center text-[15px] 
          bg-[#895AF6] p-1 px-2 text-white font-[600] rounded-2xl text-center transition delay-100 duration-1000">Demo Ready <GiCheckMark className="mx-1 text-sm"/></span>
          <span className=" animate-bounce absolute -mb-178 -ml-145 max-sm:-ml-60   flex items-center text-[15px] border-1 
          border-[#FAF8FF]  p-1 px-2 font-[600] rounded-2xl text-center bg-white shadow-2xl">Free Trial </span>
            <div className="bg-white max-lg:w-full w-[40vw] h-auto rounded-2xl shadow-xl shadow-violet-200 ">
              <div>              
                <div className="flex justify-start items-center ml-6 mt-7">
                  <img src={iconDeluloo} alt="" className="w-18 rounded-2xl p-2 mx-3" />
                  <div >
                    <h1 className="text-[20px] font-[700]">Get in Touch</h1>
                    <p className="text-gray-500">Let's discuss your hiring challenges</p>
                  </div>
                </div>

                <div   className="p-7">
                  <label htmlFor="name" className="text-[14px] font-[600]" >
                    Name
                  </label>
                  <input type="text" className="border-1 w-full border-gray-400 p-2 py-3 rounded-lg outline-[#A73FFA] mt-1 mb-4" id="name" placeholder="Your full name"/>
                  <label htmlFor="email" className="text-[14px] font-[600]" >
                    Email
                  </label>
                  <input type="gmail" className="border-1 w-full border-gray-400 p-2 py-3 rounded-lg outline-[#A73FFA] mt-1 mb-4" id="email" placeholder="your@company.com"/>
                  <label htmlFor="name" className="text-[14px] font-[600]" >
                    Company
                  </label>
                  <input type="text" className="border-1 w-full border-gray-400 p-2 py-3 rounded-lg outline-[#A73FFA] mt-1 mb-4" id="name" placeholder="Your company name"/>
                  <label htmlFor="company" className="text-[14px] font-[600] " >
                    Team Size
                  </label>
                  <select type="text" className="border-1 w-full border-gray-400 p-2 py-3 rounded-lg outline-[#A73FFA] mt-1 mb-4" id="company">
                    <option value="">1-10 Employees</option>
                    <option value="">11-50 Employees</option>
                    <option value="">51-200 Employees</option>
                    <option value="">200+ Employees</option>
                  </select>

                <div className="w-full mt-3">
                <button className="w-full flex justify-center items-center 
                p-2 py-3 rounded-lg  transition delay-75 duration-300 hover:scale-104 text-md bg-linear-to-r from-[#9464F7] bg-[#A772FA] to-[#A774FA] "> <span className="font-medium text-white">
                Shedule Demo</span> 
                <IoIosArrowRoundForward className="mx-1 text-2xl text-white"/> </button>
              </div>
              {/*contact*/}

        <div className="my-5 mt-7 text-gray-500">
          <p className="flex items-center"><MdOutlineMailOutline className="mx-2"/>hello@deluloo.com</p>
          <p className="flex items-center my-2"><LuPhone className="mx-2"/>Book a call anytime</p>
          <p className="flex items-center"><CiLocationOn className="mx-2"/>Global team, local support</p>
        </div>
      </div>

              </div>
            </div>
        </div>
        <div>

        </div>

      </section>

      {/*The Hiring Stack Needed a Reset*/}
      <section className="w-full h-auto  bg-[#F4EFFE] py-12"> 

        <div className="flex justify-center pb-7 ">
          <div className="flex justify-center rounded-2xl bg-[#7f669923] mt-10 w-auto p-1 "> 
          <div className="flex items-center px-3 "><span className="mr-1 text-[#9E77F8]"><BsStars /></span> 
          <span className="text-[#956cf4] font-medium">The Hiring Stack Needed a Reset</span></div>
        </div>
        </div>  

        <div className="text-center">
          <h1 className="font-bold text-[60px]"><span className="block">Deluloo isn't just another </span> 
          <span className="line-through block text-gray-500"> Soluloo.</span></h1>
          <h1 className="text-[50px] font-bold "><span className="block ">It's a</span>
          <span className="block -mt-6 text-[#A070F9]">new primitive:</span>
          <span className="block -mt-4">trust, before talk.</span></h1>
          <p  className="text-[24px] text-gray-500 mt-4">Don't just fix your hiring pipeline. Fix your trust layer.</p>
        </div>

        <div className="flex justify-center gap-6 mt-7 max-sm:flex-col max-sm:w-full max-sm:justify-center max-sm:p-8">
            <div className=" mt-3">
                <a href="#About" className="">
                  <button className=" w-auto flex justify-center items-center max-sm:w-full
                  p-9 py-4 rounded-2xl transition delay-75 duration-300 hover:scale-104 text-md bg-linear-to-l from- [#9264F7] bg-[#A782FA] to-[#A734FA] "> <span className="font-medium text-white">
                  Book Demo</span> 
                  <IoIosArrowRoundForward className="mx-1 text-2xl text-white "/> 
                </button>
                </a>
          </div>
          <div className="mt-3 max-sm:-mt-2">
                <a href="#Pricing">
                  <button className="max-sm:w-full max-sm:mb-12 w-auto flex justify-center items-center border-[#F2E6FF] 
                border-2 p-9 py-4 rounded-2xl transition delay-75 duration-300 hover:scale-103 
                hover:bg-[#F2E6FF] hover:border-[0.1px] text-[#9D6DF9] text-md bg-white"> <span className="font-medium ">Use Passport Free</span> 
                <IoIosArrowRoundForward className="mx-1 text-2xl "/> </button>
                </a>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-1 max-sm:flex-col max-sm:-mt-15">
            <div className="flex flex-col justify-start ">        
             <p className="flex justify-start items-center"><LuDot className="text-violet-500 text-5xl"/> <span className="-ml-2 text-[15px] font-[400] text-[#738197]">No setup fees</span></p>
            </div>
            <div className="flex flex-col justify-start ">        
             <p className="flex justify-start items-center"><LuDot className="text-violet-500 text-5xl"/> <span className="-ml-2 text-[15px] font-[400] text-[#738197]">Free candidate passports</span>
             </p>
            </div>
            <div className="flex flex-col justify-start ">        
             <p className="flex justify-start items-center"><LuDot className="text-violet-500 text-5xl"/> <span className="-ml-2 text-[15px] font-[400] text-[#738197]">Global compliance</span></p>
            </div>
        </div>


      </section>

      {/*footer*/}
      <footer className="w-full h-auto p-15">

        <div className="flex justify-between max-sm:flex-col">
          <div className="">
          <div className="flex items-center ">
            <img src={iconDeluloo} alt="" className="w-13" />
            <h1 className="font-medium text-xl ">Deluloo</h1>
            
          </div>
          <p className="text-gray-500 text-[18px] my-7  ">The delusion-free hiring solution. Verify trust before you hire.</p>
          <div className=" mt-5 mb-6">
                <a href="#Home">
                  <button className="w-auto flex justify-center items-center 
                  p-4 py-3 rounded-2xl transition delay-75 duration-300 hover:scale-110 text-md bg-linear-to-l from- [#9264F7] bg-[#A782FA] to-[#A734FA] "> <span className="font-medium text-white">
                  Get Started Today</span> 
                </button>
                </a>
          </div>
        </div>
        
        <div>
          <h1 className="font-[600] text-lg">Stay Updated</h1>
          <p className="text-gray-500 my-4">Get the latest insights on hiring, trust verification, and building better teams.</p>
          <div className="flex items-center">
            <input type="text" className="border-1 w-full border-gray-400 p-2 py-3 rounded-lg outline-[#A73FFA] mt-1" placeholder="Enter your Email" />
            <div className="-mt-1 mx-2 ">
                <button className="w-auto flex justify-center items-center border-[#F2E6FF] 
                border-2 px-2 py-2 rounded-2xl transition delay-75 duration-300 hover:scale-103 
                hover:bg-[#F2E6FF] hover:border-[0.1px] text-[#9D6DF9] text-md bg-white"> <span className="font-medium m-0.5">Subscripe</span> 
               </button>
          </div>
          </div>
        </div>

        </div>

        <div className="flex justify-between mt-12 mb-8 max-sm:flex-col flex-wrap ">
          
            <div className="text-gray-500 ">
            <h1 className="text-black font-medium ">Product</h1>
            <h1 className="my-2 hover:text-violet-500">Features</h1>
            <h1 className="hover:text-violet-500">Pricing</h1>
            <h1 className="my-2 hover:text-violet-500">API</h1>
            <h1 className="hover:text-violet-500">Integrations</h1>   
          </div>
          
          <div className="text-gray-500 max-sm:my-5">
            <h1 className="text-black font-medium ">Company</h1>
            <h1 className="my-2 hover:text-violet-500">About</h1>
            <h1 className="hover:text-violet-500">Blog</h1>
            <h1 className="my-2 hover:text-violet-500">Careers</h1>
            <h1 className="hover:text-violet-500">Contact</h1> 
          </div>
        
            <div className="text-gray-500">
            <h1 className="text-black font-medium">Resources</h1>
            <h1 className="my-2 hover:text-violet-500">Documentation</h1>
            <h1 className="hover:text-violet-500">Help Center</h1>
            <h1 className="my-2 hover:text-violet-500">Community</h1>
            <h1 className="hover:text-violet-500">Status</h1> 
          </div>
          
          <div className="text-gray-500 max-sm:mt-5">
            <h1 className="text-black font-medium">Legal</h1>
            <h1 className="my-2 hover:text-violet-500">Privacy</h1>
            <h1 className="hover:text-violet-500">Terms</h1>
            <h1 className="my-2 hover:text-violet-500"  >Security</h1>
            <h1 className="hover:text-violet-500"> Compliance</h1> 
          </div>

          

          
        </div>
        <hr className="text-gray-300" />
        <div className="mt-8 flex justify-between">
          <h1 className="text-gray-500"> © 2024 Deluloo. All rights reserved.</h1>
          <div className="flex gap-5 ">
            <FaTwitter className="text-[22px] text-gray-500 hover:text-violet-500"/>
            <FaLinkedin className="text-[22px] text-gray-500 hover:text-violet-500"/>
            <FaGithub className="text-[22px] text-gray-500 hover:text-violet-500"/>
          </div>
        </div>
      </footer>

    </div>
  )}

export default MainPage