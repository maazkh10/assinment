import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white  flex  justify-between rounded-b-xl h-[80px] w-full'>
      <div className='flex items-center   md:ml-[80px] gap-6'>
        <img 
          src="https://s3-alpha-sig.figma.com/img/e01f/597f/7946fae470826ae956a66d90342c5098?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J1K0-ETI4YaSbAcFXA0nkpDI~axvq3LtfOyqbfPVzIcKw2-h352nnSWSxlqBDAR2cARcIAHI9P4nz8Unf-raHKshl3gcfou7N2bSHiZ-WD7hy0CNg8ANkN5XCTxQ8sp47iAWVxcDMWhxTH2uf0ooTsc7UbDTsZrGmbv96Mx~HECUNjQSkwPQmVV1UvPWBbKPLrqGtgeSjCyDq7PECzXSPBqoO9bjd2Zh0mwrJswqkwLRC9ZhWs1SVfd4fPjdpcvoQQCw4SwjQ0OTS2E8SMQsyadqhR2X64zIwMxtFIV8iio9WnbIJeNwGnNRIuqhbv-OEec0uGA~3dcXLnEFYx5w5A__"
          alt=""
          className='lg:w-[200px] md: h-[25px] ml-3 mt-2' 
        />
        <img src='https://s3-alpha-sig.figma.com/img/2ea4/bfd0/d8a6ba9b9ccb22195bfe2231d6900387?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VI1AKtw-v-4a6CzynTHPlqd5w4QAtuokC6xqosjnIjtIQHIgvW35s-zhgl0laqNVQuenCcgLJKj6fq7YpG6U3N3VppGGaO6Sp~-RMqwcP7LOr~CLPeiOGnkA~BI37tk~hUuYiuk6sRqLqePTCHSpTSaAW5-Ilm~L1CbqSvS0ITc58zIhFqRniJ5OIaoudGYtoSVrHQ7dUwPT48eVL99YsMCk6tr-cGYLL0GrfAOkHISuK061O3X14vov~t~YKxpSxpagsMfC0TmI-uCsqwE3BEpqzHEFvYF1dAVJnInGLgO-QYeF5d7dAx2HJ57gDXG1Pxahw1W1EFDvJKDqPbunDg__' 
        alt='' className='h-[40px] ' />
      </div>
      <button className='bg-[#191970] text-[15px] font-bold items-center lg:mr-[140px] rounded-2xl text-[#fff] mt-3 h-[30px] w-[75px] '>
        Get info
      </button>
    </div>
  )
}

export default Navbar
