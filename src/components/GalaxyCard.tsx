import React from 'react'

export default function GalaxyCard() {
  return (
    <>
        <div className="container mx-auto relative z-10">
            <div className="text-center mt-3">

        <h3 className='text-4xl'>ETHERON</h3>
        <ul className='flex justify-center gap-16 mt-2'>
            <li>
                <div className="uppercase text-[#BDC5E2] text-[13px] lg:text-[18px]">GALAXY</div>
                <div className="">Andromeda-IV</div>
            </li>
            <li>
                <div className="uppercase text-[#BDC5E2] text-[13px] lg:text-[18px]">Diameter</div>
                <div className="">16,400 km-IV</div>
            </li>
            <li>
                <div className="uppercase text-[#BDC5E2] text-[13px] lg:text-[18px]">Day Length</div>
                <div className="">26 Earth hours</div>
            </li>
            <li>
                <div className="uppercase text-[#BDC5E2] text-[13px] lg:text-[18px]">Avg Temperature</div>
                <div className="">-20°C to 0°C</div>
            </li>
            <li>
                <div className="uppercase text-[#BDC5E2] text-[13px] lg:text-[18px]">Climate</div>
                <div className="">Polar</div>
            </li>
        </ul>
            </div>
        </div>

    </>
  )
}
