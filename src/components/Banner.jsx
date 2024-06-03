import React from 'react';
import Batch from '../imgs/Batch.jpg';
import Boygirl from '../imgs/boygirl.png';
import Arrow from '../imgs/Arrow.png'
import Home from '../imgs/Home.png'
import Book from '../imgs/Book.png'
import Time from '../imgs/Time.png'
import Person from '../imgs/person.png'
import Line from '../imgs/line.png'
import {Boss,  IIT } from './Boss';
const Banner = () => {
  return (
    <div className=''>
      {/* Mobile view */}
      <div className='xl:hidden  '>
        <div className=' justify-center items-center text-center mt-5'>
          <h2 className='text-black font-medium text-xl'>KICKSTACT YOUR </h2>
          <h1 className='text-3xl font-bold text-[#191970] mt-2'>IIT JEE/NEET Test Prep,</h1>
          <h2 className='text-md font-[700] mt-5'>Powered by</h2>
          <div className='justify-center mt-5 ml-[140px]'> 
            <img src='https://s3-alpha-sig.figma.com/img/2ea4/bfd0/d8a6ba9b9ccb22195bfe2231d6900387?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VI1AKtw-v-4a6CzynTHPlqd5w4QAtuokC6xqosjnIjtIQHIgvW35s-zhgl0laqNVQuenCcgLJKj6fq7YpG6U3N3VppGGaO6Sp~-RMqwcP7LOr~CLPeiOGnkA~BI37tk~hUuYiuk6sRqLqePTCHSpTSaAW5-Ilm~L1CbqSvS0ITc58zIhFqRniJ5OIaoudGYtoSVrHQ7dUwPT48eVL99YsMCk6tr-cGYLL0GrfAOkHISuK061O3X14vov~t~YKxpSxpagsMfC0TmI-uCsqwE3BEpqzHEFvYF1dAVJnInGLgO-QYeF5d7dAx2HJ57gDXG1Pxahw1W1EFDvJKDqPbunDg__' alt='' className='h-[50px]' />
          </div>
        </div>
        <div className='mt-5 flex gap-3 m-2'>
          <div className='flex gap-2'>
            <img src={Batch} alt='' className='rounded-full w-[40px] h-[45px]' />
            <h2 className='font-[700] text-[13px]'>BATCH STARTS FROM  3 APRIL ' 24</h2>
          </div>
          <div className='flex gap-2'>
            <img src={Batch} alt='' className='rounded-full w-[40px] h-[45px]' />
            <h2 className='font-[700] text-[13px]'>BATCH STARTS FROM  3 APRIL ' 24</h2>
          </div>
        </div>
        <div className='ml-5'>
          <img src={Boygirl} alt='' className='h-[300px]' />
        </div>
        <div className='w-full  h-[550px] bg-white ml-1    rounded-3xl mr-[80px]'>
      <h1 className='bg-[#FDDF49]  h-[40px] rounded-t-2xl items-center justify-center text-center text-[20px] font-[500]'> ENQUIRE NOW!</h1>
    
    <div className='mt-8  ml-[20px]'>
        <div className='flex gap-4 items-center'>
        <h3 className='text-[18px] font-[400]'>Academic Year </h3>
        <div className='bg-[#191970] w-[150px] h-8 content-center  text-center text-white text-[15px]'>
            <h4 className=''>2024-2026</h4>
        </div>
        
        </div>
        <div className='mt-[20px] flex gap-2 mr-2'>
       <div>
       <label htmlFor="childFirstName" className=" text-[16px] font-[400]  text-gray-700">
  Child First Name
</label>
<input
  id="childFirstName"
  name="childFirstName"
  type="text"
  placeholder="Type here"
  className="mt-1 block text-center w-[180px]   py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
       </div>

<div>
<label htmlFor="childFirstName" className=" text-[16px] font-[400] text-gray-700">
  Child Last Name
</label>
<input
  id="childFirstName"
  name="childFirstName"
  type="text"
  placeholder="Type here"
  className="mt-1 block text-center w-[180px]  py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>

        </div>

        <div className='mt-[10px] flex gap-4 mr-2'>
       <div>
       <label htmlFor="childFirstName" className=" text-[16px] font-[400]  text-gray-700">
  Your First Name
</label>
<input
  id="childFirstName"
  name="childFirstName"
  type="text"
  placeholder="Type here"
  className="mt-1 block text-center w-[180px]  py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
       </div>

<div>
<label htmlFor="childFirstName" className=" text-[16px] font-[400] text-gray-700">
  Your Last Name
</label>
<input
  id="childFirstName"
  name="childFirstName"
  type="text"
  placeholder="Type here"
  className="mt-1 block text-center w-[180px]  py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>

        </div>

        
<form class="max-w-sm mx-2 mt-1">
  <label for="countries" class=" mb-2 text-sm font-medium text- dark:text-white">Choose Course Applying For</label>
  <select id="countries" class="bg- border border-gray-300 text- text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-00 dark:border-gray-00 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose Course</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</form>

<div className='mt-3'>
<label htmlFor="childFirstName" className="  text-[16px] font-[400]  text-gray-700">
  Mobile Number
</label>
<form class=" mx-auto">
    <div class="">
        
        <input type="text" id="floating-phone-number" class="    w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
        <label for="floating-phone-number" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
    </div>
    
</form>



</div>

<div className='m-5 '>
<label htmlFor="childFirstName" className=" text-[16px] font-[400] text-gray-700">
 Email Address
</label>
<input
  id="childFirstName"
  name="childFirstName"
  type="text"
  placeholder="maazkh2700@gmail.com"
  className="mt-1 block text-center w-full   py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>
 <div className=' text-center mt-8'>
 <button className='bg-[#191970] rounded-2xl text-white w-[120px]  h-8'>Enquire Now </button>
 </div>
    </div>
   </div>
      </div>

      {/* Web responsive view */}
      <div className='hidden xl:flex'>
  <div className=' flex'>
    <div className='mt-[200px] ml-[80px]'>
        <h1 className='font-[700] text-[24px] font-[Satoshi]'>Kickstart Your </h1>
        <h1 className='text-3xl font-bold text-[#191970] mt-2 whitespace-nowrap'>IIT JEE/NEET Test Prep,</h1>

        <div className=' ml-[120px]'>
          <h2 className='text-md font-[700] mt-5'>Powered by</h2>
            <img src='https://s3-alpha-sig.figma.com/img/2ea4/bfd0/d8a6ba9b9ccb22195bfe2231d6900387?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VI1AKtw-v-4a6CzynTHPlqd5w4QAtuokC6xqosjnIjtIQHIgvW35s-zhgl0laqNVQuenCcgLJKj6fq7YpG6U3N3VppGGaO6Sp~-RMqwcP7LOr~CLPeiOGnkA~BI37tk~hUuYiuk6sRqLqePTCHSpTSaAW5-Ilm~L1CbqSvS0ITc58zIhFqRniJ5OIaoudGYtoSVrHQ7dUwPT48eVL99YsMCk6tr-cGYLL0GrfAOkHISuK061O3X14vov~t~YKxpSxpagsMfC0TmI-uCsqwE3BEpqzHEFvYF1dAVJnInGLgO-QYeF5d7dAx2HJ57gDXG1Pxahw1W1EFDvJKDqPbunDg__' alt='' className='h-[50px]' />
          </div>
          <div className='flex gap-6 mt-5'>
            <h2 className='font-[700] text-lg'>Admissions Open</h2>
            <button className='bg-[#191970] rounded-2xl w-[120px] text-white font-[500] text-[15px]'>Enquire Now</button>
          </div>
          <div className='mt-5  '>
          <div className='flex gap-2'>
            <img src={Batch} alt='' className='rounded-full w-[40px] h-[45px]' />
            <h2 className='font-[700] text-[13px]'>BATCH STARTS FROM  3 <br></br> APRIL ' 24</h2>
          </div>
          <div className='flex gap-2 mt-3'>
            <img src={Batch} alt='' className='rounded-full w-[40px] h-[45px]' />
            <h2 className='font-[700] text-[13px]'>BATCH STARTS FROM <br></br> 3 APRIL  ' 24</h2>
          </div>
        </div>
    </div>
    <div>
        <img src="https://s3-alpha-sig.figma.com/img/047d/c5ed/3f19641c56bc4ce6e237fe795e6360bf?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i26YEpMDIyCuYVyTuHbgw0~Z~BH4qEzTbr9gXloifTHNIwlsiIHbcdeqVwMcGEef5pakJEZz8dcLQU~fdNYqcjSfJLvwsATeJ7nN5DTJPcOGQ7KV327uO9jrkOUTzpZSEFHeOUaYOk~LpedRMrAmMNIRHYyyhV-J9xNSdnMJpVzXW~EdrWOLra8lTI9ebP1NjvNKVxhj8Y7V1TSu0~ItA8qAtsoU~sEvE2gUxyMZZhSChfi~QbOTo-EPuyJPgEUH8jjTOQj1sHgPcPSboS8k6NiACR2xYwtBUrEz8~QkzsPSOyN4r5GzHvPhnE9irEZ5OaLDN2vyRFQUmWLSkAyy9g__" alt='' 
        className='mt-[100px] h-[530px]   mr-[200px]' />
    </div>
    
   <div className='w-[450px] h-[550px] bg-white   mt-[50px] rounded-3xl mr-[80px]'>
      <h1 className='bg-[#FDDF49] rounded-t-2xl items-center justify-center text-center text-[20px] font-[500]'> ENQUIRE NOW!</h1>
    
    <div className='mt-8 ml-[20px]'>
        <div className='flex gap-4 items-center'>
        <h3 className='text-[18px] font-[400]'>Academic Year </h3>
        <div className='bg-[#191970] w-[150px] h-8 content-center  text-center text-white text-[15px]'>
            <h4 className=''>2024-2026</h4>
        </div>
        
        </div>
        <div className='mt-[20px] flex gap-4 mr-2'>
       <div>
       <label htmlFor="childFirstName" className=" text-[16px] font-[400]  text-gray-700">
  Child First Name
</label>
<input
  id="childFirstName"
  name="childFirstName"
  type="text"
  placeholder="Type here"
  className="mt-1 block text-center   py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
       </div>

<div>
<label htmlFor="childFirstName" className=" text-[16px] font-[400] text-gray-700">
  Child Last Name
</label>
<input
  id="childFirstName"
  name="childFirstName"
  type="text"
  placeholder="Type here"
  className="mt-1 block text-center   py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>

        </div>

        <div className='mt-[10px] flex gap-4 mr-2'>
       <div>
       <label htmlFor="childFirstName" className=" text-[16px] font-[400]  text-gray-700">
  Your First Name
</label>
<input
  id="childFirstName"
  name="childFirstName"
  type="text"
  placeholder="Type here"
  className="mt-1 block text-center   py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
       </div>
1
<div>
<label htmlFor="childFirstName" className=" text-[16px] font-[400] text-gray-700">
  Your Last Name
</label>
<input
  id="childFirstName"
  name="childFirstName"
  type="text"
  placeholder="Type here"
  className="mt-1 block text-center   py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>

        </div>

        
<form class="max-w-sm mx-2 mt-1">
  <label for="countries" class=" mb-2 text-sm font-medium text- dark:text-white">Choose Course Applying For</label>
  <select id="countries" class="bg- border border-gray-300 text- text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-00 dark:border-gray-00 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose Course</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</form>

<div className='mt-3'>
<label htmlFor="childFirstName" className="  text-[16px] font-[400]  text-gray-700">
  Mobile Number
</label>
<form class=" mx-auto">
    <div class="">
        
        <input type="text" id="floating-phone-number" class="    w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
        <label for="floating-phone-number" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
    </div>
    
</form>



</div>

<div className='m-2'>
<label htmlFor="childFirstName" className=" text-[16px] font-[400] text-gray-700">
 Email Address
</label>
<input
  id="childFirstName"
  name="childFirstName"
  type="text"
  placeholder="maazkh2700@gmail.com"
  className="mt-1 block text-center w-full   py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>
 <div className=' text-center mt-8'>
 <button className='bg-[#191970] rounded-2xl text-white w-[120px]  h-8'>Enquire Now </button>
 </div>
    </div>
   </div>
  
  
  </div>

</div>
 {/* THAT BOX  */}

{/* WEB  */}
 <div className='hidden xl:flex'>
 <div className='bg-[#191970] ml-[80px] rounded-3xl w-[1200px] h-[380px]'>
 <div class="flex flex-col items-center justify-center">
  <img src={Arrow} alt="" className="h-8" />
  <h2 className="text-white font-400 mt-2">OUR</h2>
  <h2 className="text-[#FDDF49] text-[28px] font-[600] mt-2">Learning Approach</h2>
</div>
<div>
<div className='flex items-center mt-3 ml-[50px] text-center gap-6'>
  <div className='flex gap-6'>
    <img src={Home} className='ml-4  h-[180px]' alt='' />
    <img src={Line} alt='' className='h-[180px]' />
  </div>
  
  <div className='flex gap-6'>
    <img src={Book} className='ml-4 h-[180px]' alt='' />
    <img src={Line} alt='' className='h-[180px]' />
  </div>

  <div className='flex gap-6'>
    <img src={Time} className='ml-4  h-[180px]' alt='' />
    <img src={Line} alt='' className='h-[180px]' />
  </div>

  <div className=' '>
    <img src={Person} className='ml-4  h-[180px]' alt='' />
    
  </div>
</div>

</div>
<div className='ml-[500px] mt-[30px] bg-[#FDDF49] justify-center w-[160px]  flex gap-4 rounded-2xl '>
      <h3 className='text-center items text-[16px] font-[500]'>Enquire Now </h3>
     <div className='bg-[#191970] rounded-full w-[32px]'>
     <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
     </div>
    </div>
 </div>
 
 </div>

 {/* MOBILE  */}

 <div className='lg:hidden '>
 <div className='bg-[#191970]  rounded-3xl mt-5 m-2 w-[390px] h-[740px]'>
 <div class="flex flex-col items-center justify-center">
  
  <h2 className="text-white font-400 mt-2">OUR</h2>
  <h2 className="text-[#FDDF49] text-[36px] font-[600] mt-2">Learning Approach</h2>
</div>
<div className='grid grid-cols-2 gap-6 mt-3 ml-[] text-center'>
  <div className='flex gap-6'>
    <img src={Home} className='ml-4  h-[150px]' alt='' />
    <img src={Line} alt='' className='h-[150px]' />
  </div>
  
  <div className='flex gap-4'>
    <img src={Book} className='ml-4 h-[150px]' alt='' />
    <img src={Line} alt='' className='h-[150px]' />
  </div>

  <div className='flex gap-4'>
    <img src={Time} className='ml-4  h-[150px]' alt='' />
    <img src={Line} alt='' className='h-[150px]' />
  </div>

  <div className=' '>
    <img src={Person} className='ml-4  h-[150px]' alt='' />
    
  </div>
  
</div>
<div className=' mt-5 flex ml-[120px] '>
    <img src={Person} className='  h-[150px]' alt='' />
    
  </div>

  <div>
    <div className='ml-[100px] mt-8 bg-[#FDDF49] justify-center w-[160px]  flex gap-4 rounded-2xl '>
      <h3 className='text-center items text-[16px] font-[500]'>Enquire Now </h3>
     <div className='bg-[#191970] rounded-full w-[32px]'>
     <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
     </div>
    </div>
  </div>
 </div>
 </div>
 <Boss />
 <IIT />
    </div>
  );
}

export default Banner;
