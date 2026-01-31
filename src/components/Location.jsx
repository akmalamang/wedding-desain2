import React from 'react';
import dataWedding from '../data';
import Maps from '../assets/image/maps.png';
import bungaBiruAlamat from '../assets/image/bunga-biru-png.png';
import bunga1Alamat from '../assets/image/bunga-1-alamat.png';

const Location = () => {
  return (
    <div className="font-poppins">
      {/* paragraf location */}
      <div className="location-section flex justify-center gap-8 text-[14px] font-semibold  mt-4 sm:text-[16px] md:text-[18px]">
        <p className="ml-4 sm:ml-20" data-fade="left">
          Alamat
        </p>
        <p className="" data-fade="right">
          Google Maps
        </p>
      </div>

      {/* detail location dan google maps */}
      <div className="flex flex-row gap-4 justify-center items-center mt-2">
        {/* detail location */}
        <div className="flex flex-col text-[10px] text-right sm:text-[14px] leading-6 sm:leading-10">
          <p data-fade="left">{dataWedding.tanggal}</p>
          <p data-fade="left">{dataWedding.jam}</p>
          <p data-fade="left">{dataWedding.tempat}</p>
        </div>
        {/* garis pemisah */}
        <div className="border bg-black border-black w-[2px] h-[90px] mt-2 mb-2" data-fade="up"></div>
        {/* google maps */}
        <div className="">
          <a href="">
            <img src={Maps} alt="" data-fade="right" />
          </a>
        </div>
      </div>
      {/* waktu mundur acara */}
      <div className="flex flex-row gap-4 justify-center items-center justify-items-center self-center text-center mt-4 ">
        <div className="flex justify-center gap-2 text-[12px] font-semibold sm:text-[18px] ">
          <div className="p-1 rounded-full bg-[#B8DB80] w-max" data-fade="left">
            <p>0</p>
          </div>
          <div className="p-1 rounded-full bg-[#B8DB80] w-max" data-fade="left">
            <p>0</p>
          </div>
        </div>
        <div className="flex justify-center gap-2 text-[12px] font-semibold items-center self-center text-center justify-items-center sm:text-[18px] ">
          <p data-fade="up">:</p>
        </div>
        <div className="flex justify-center gap-2 text-[12px] font-semibold sm:text-[18px]">
          <div className="p-1 rounded-full bg-[#B8DB80] w-max" data-fade="right">
            <p>0</p>
          </div>
          <div className="p-1 rounded-full bg-[#B8DB80] w-max" data-fade="right">
            <p>0</p>
          </div>
        </div>
      </div>

      {/* gambar bunga bawah */}
      <div className="flex justify-center items-center mt-4">
        <img src={bungaBiruAlamat} alt="" className="w-[111.72px]" data-fade="left" />
        <img src={bunga1Alamat} alt="" className="w-[111.72px]" data-fade="up" />
        <img src={bunga1Alamat} alt="" className="w-[111.72px]" data-fade="right" />
      </div>
    </div>
  );
};

export default Location;
