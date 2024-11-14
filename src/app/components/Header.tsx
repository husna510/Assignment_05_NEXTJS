import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; 

const Header = () => {
  return (
    <div className='bg-[#A29875] mx-auto w-[1741.06px] h-[135.01px] left-[-127.27px] flex items-center'>
    
      <h1 className='w-[242.56px] h-[87.45px] top-[23.22px] left-[56.76px] p-[0.89px] text-[#FFFFFF] font-normal text-[66.78px] leading-[83.48px] font-rye'>
        Purity
      </h1>
      
      
      <div className='flex items-center ml-[50px] bg-[#F8F8F8] rounded-[13.83px] px-4 w-[769.89px] h-[56.24px]'>
        <input 
          type='text' 
          placeholder='Search for Gold Jewellery, Diamond Jewellery and more...' 
          className='bg-transparent w-full focus:outline-none text-[#A1A1A1] text-[16px]'
        />
        <AiOutlineSearch className='text-[#A1A1A1] text-[20px]' />
      </div>
    </div>
  );
}

export default Header;