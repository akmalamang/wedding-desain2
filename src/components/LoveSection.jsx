import React from 'react';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import copleGambar from '../assets/image/cople-gambar.jpg';
import bungaKuning3 from '../assets/image/bunga-kuning-3.png';
import bunga1 from '../assets/image/bunga-1.png';

export default function CoupleSection() {
  useFadeInOnScroll();
  return (
    <div className="flex items-start justify-center bg-[#F7F6D3] px-4 py-6 overflow-hidden relative font-poppins mt-[50px] mb-[50px] ">
      {/* Kiri - Nama dan kutipan */}
      <div className="flex flex-col  w-1/2 ">
        {/* Nama */}
        <div className="flex flex-col text-gray-800  font-poppins">
          <div className="flex flex-col ">
            <p className="ml-4 text-[20px] font-semibold leading-none sm:text-[24px] lg:text-[32px] sm:ml-15 xl:ml-25" data-fade="left">
              Udin
            </p>
          </div>
          <p className="text-[18px] font-light leading-none text-center sm:text-[24px] md:text-[32px]" data-fade="up">
            &
          </p>
          <div className="flex justify-end">
            <p className="text-[20px] font-semibold leading-none sm:text-[24px] lg:text-[32px] sm:mr-5 xl:mr-20" data-fade="right">
              Mantu
            </p>
          </div>
        </div>

        {/* Kutipan */}
        <p className="mt-4 text-[12px] text-gray-700 leading-relaxed w-[90%] md:text-[16px] max-w-sm sm:ml-10 sm:mt-15 xl:ml-28" data-fade="left">
          “Mencintai dirimu sama halnya mencintai alam. Semakin dijaga maka kita akan merasakan kebahagiaan yang sesungguhnya.”
        </p>
      </div>

      {/* Kanan - Gambar */}
      <div className="relative w-1/2 flex justify-center">
        <img src={copleGambar} alt="pasangan" className="w-[140px] h-[200px] object-cover rounded-md shadow-md sm:w-[200px] sm:h-[260px]" data-fade="up" />

        {/* bunga atas kanan */}
        <img src={bungaKuning3} alt="bunga atas" className="absolute -top-6 right-[-10px] w-[71px] rotate-6 sm:right-[40px] lg:right-[110px] xl:right-[180px]" data-fade="right" />

        {/* bunga bawah kiri */}
        <img src={bunga1} alt="bunga bawah" className="absolute bottom-[-33px] left-[-21px] w-[73px] sm:left-[40px] lg:left-[110px] xl:left-[180px]" data-fade="left" />
      </div>
    </div>
  );
}
