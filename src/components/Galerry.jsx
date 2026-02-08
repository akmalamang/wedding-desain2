import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react'; // icon navigasi
import gambar from '../gambar.js';
import bunga1 from '../assets/image/bunga-1.png';
import bungaKuning3 from '../assets/image/bunga-kuning-3.png';

/**
 * Galeri dengan modal animasi + navigasi + caption
 */
function Gallery() {
  const { gallery } = gambar;
  const [selectedIndex, setSelectedIndex] = useState(null);

  // buka modal
  const openModal = (index) => setSelectedIndex(index);

  // tutup modal
  const closeModal = () => setSelectedIndex(null);

  // navigasi prev/next
  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  };
  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  };

  // Esc key & lock scroll
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev(e);
      if (e.key === 'ArrowRight') showNext(e);
    };

    if (selectedIndex !== null) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  const isOpen = selectedIndex !== null;

  return (
    <div className="mt-10 font-poppins relative">
      {/* Judul */}
      <h1 className="text-center text-lg font-medium mb-4 sm:font-semibold sm:text-[24px]" data-fade="up">
        Galeri Prewedding
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 justify-items-center gap-2">
        {gallery.map((item, index) => (
          <button key={index} onClick={() => openModal(index)} className={`focus:outline-none ${index === 2 ? 'col-span-2 w-full flex justify-center p-2' : ''}`}>
            <img
              src={item.src}
              alt={item.caption}
              className={`m-2 w-38 h-38 object-cover rounded-md shadow-sm hover:scale-105 transition-transform duration-200 sm:w-[250px] sm:h-[250px] ${index === 2 ? 'w-full sm:w-[540px]' : ''}`}
              data-fade="up"
            />
          </button>
        ))}
      </div>

      {/* hiasan bunga (tetap ada di bawah grid) */}
      <img src={bunga1} alt="" className="w-[71px] absolute top-2 sm:left-[35px] lg:left-[98px] xl:left-[181px]" data-fade="left" />
      <img src={bungaKuning3} alt="" className="w-[71px] h-[72px] absolute top-2 right-0 sm:right-[31px] lg:right-[99px] xl:right-[171px]" data-fade="right" />
      <img src={bungaKuning3} alt="" className="w-[71px] h-[72px] absolute bottom-40 right-0 sm:bottom-88 sm:right-20 lg:right-47 xl:right-90" data-fade="right" />
      <img src={bunga1} alt="" className="w-[71px] absolute -bottom-8 left-0 sm:left-10 lg:left-25 xl:left-45" data-fade="left" />
      <img src={bungaKuning3} alt="" className="w-[71px] h-[72px] absolute -bottom-4 right-0 sm:right-8 lg:right-45" data-fade="right" />

      {/* === Modal dengan animasi === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-12 sm:p-4"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={selectedIndex}
              className="relative max-w-[95%] sm:max-w-[50%] max-h-[90%] flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Tombol X */}
              <button onClick={closeModal} className="absolute -top-5 -right-5 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform" aria-label="Tutup gambar">
                <X className="h-5 w-5 text-gray-700" />
              </button>

              {/* Tombol Prev / Next */}
              <button onClick={showPrev} className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg" aria-label="Gambar sebelumnya">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={showNext} className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg" aria-label="Gambar berikutnya">
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Gambar utama */}
              <img src={gallery[selectedIndex].src} alt={gallery[selectedIndex].caption} className="block max-w-full max-h-[80vh] rounded-md shadow-2xl object-contain mx-auto" />

              {/* Caption */}
              <p className="text-center text-white mt-1 text-sm italic">{gallery[selectedIndex].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
