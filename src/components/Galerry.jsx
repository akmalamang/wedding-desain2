import React from 'react';
import gambar from '../gambar.js';
import bunga1 from '../assets/image/bunga-1.png';
import bungaKuning3 from '../assets/image/bunga-kuning-3.png';

function Gallery() {
  const { gallery } = gambar;

  return (
    <div className="mt-10 font-poppins relative">
      {/* Judul */}
      <h1 className="text-center text-lg font-medium mb-4 sm:font-semibold sm:text-[24px]" data-fade="up">
        Galeri Prewedding
      </h1>

      {/* Gambar Galeri */}
      <div className="grid grid-cols-2 justify-items-center">
        {gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className={`m-2 w-38 h-38 object-cover rounded-md shadow-sm hover:scale-105 ${index === 2 ? 'col-span-2 w-full p-4' : ''} transition-transform duration-200 sm:w-[250px] sm:h-[250px] ${index === 2 ? 'sm:col-span-2 sm:w-[540px] sm:p-0' : ''} `}
            data-fade="up"
          />
        ))}
      </div>
      {/*hiasan bunga - 1*/}
      <img src={bunga1} alt="" className="w-[71px] absolute top-2 sm:left-[35px] lg:left-[98px] xl:left-[181px]" data-fade="left" />
      {/*hiasan bunga - 2*/}
      <img src={bungaKuning3} alt="" className="w-[71px] h-[72px] absolute top-2 right-0 sm:right-[31px] lg:right-[99px] xl:right-[171px]" data-fade="right" />
      {/*hiasan bunga - 3*/}
      <img src={bungaKuning3} alt="" className="w-[71px] h-[72px] absolute bottom-40 right-0 sm:bottom-88 sm:right-20 lg:right-47 xl:right-90" data-fade="right" />
      {/*hiasan bunga - 4*/}
      <img src={bunga1} alt="" className="w-[71px] absolute -bottom-8 left-0 sm:left-10 lg:left-25 xl:left-45" data-fade="left" />
      {/*hiasan bunga - 5*/}
      <img src={bungaKuning3} alt="" className="w-[71px] h-[72px] absolute -bottom-4 right-0 sm:right-8 lg:right-45" data-fade="right" />
    </div>
  );
}

export default Gallery;
