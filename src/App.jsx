import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from './data.js';
import LoveSection from './components/LoveSection.jsx';
import Location from './components/Location.jsx';
import Galerry from './components/Galerry.jsx';
import Rsvp from './components/Rsvp.jsx';
import Rek from './components/Rek.jsx';
import Doarestu from './components/Doarestu.jsx';
import Footer from './components/Footer.jsx';
import useFadeInOnScroll from './hooks/useFadeInOnScroll.jsx';
import TypingText from './hooks/TypingText.jsx';
import bungaKuning1 from './assets/image/bunga-kuning-1.png';
import bungaKuning2 from './assets/image/bunga-kuning-2.png';
import profilDepan from './assets/image/cople-gambar.jpg';
import bungaPink from './assets/image/bunga-1.png';
import bungaBiru from './assets/image/bunga-biru-1.png';
import bungaKuning3 from './assets/image/bunga-kuning-3.png';
import music from './assets/image/music.png';
import silent from './assets/image/silent.png';
import akadAudio from './assets/akad.mp3';
import BottomNav from './components/BottomNav.jsx';

function App() {
  useFadeInOnScroll();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef(null);

  const handleOpenInvitation = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 0.7;
      audio.play(); // audio play
      setIsPlaying(true);
    } else {
      setIsOpened(true);
    }
  };

  const handleMusicToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) audio.pause();
    else audio.play();

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="containerr overflow-x-hidden pb-13.5 relative">
      {/* === Overlay “Buka Undangan” === */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div key="overlay" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="fixed inset-0 bg-gradient-to-b from-[#fff8ec] to-[#fff] z-50 flex flex-col justify-center items-center text-center">
            <motion.h1 className="text-4xl sm:text-6xl font-pinyon mb-4 text-gray-800" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <TypingText text="Udin & Mantu" speed={100} />
            </motion.h1>
            <motion.p className="text-gray-600 mb-8 font-poppins" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              Kepada Yth. {data.tamuUndangan}
            </motion.p>
            <motion.button
              onClick={handleOpenInvitation}
              className="bg-[#e0b973] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#d5a85d] transition-all duration-300 cursor-pointer hover:transform hover:scale-105 shadow-lg font-poppins"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Buka Undangan
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Konten Undangan === */}
      <AnimatePresence>
        {isOpened && (
          <motion.div key="content" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }} className="relative z-10">
            {/* header bunga */}
            <div className="flex justify-between">
              <img src={bungaKuning2} alt="" data-fade="left" />
              <img src={bungaKuning1} alt="" data-fade="right" />
            </div>

            {/* profile wedding */}
            <div>
              <div className="w-62.75 h-66.75 mx-auto rounded-full">
                <img src={profilDepan} alt="foto profil" className="w-full h-full object-cover rounded-full" data-fade="up" />
              </div>
            </div>

            {/* nama pasangan */}
            <div className="flex justify-between">
              <img src={bungaPink} alt="" className="w-31.25 sm:w-[250px]" data-fade="left" />
              <img src={bungaPink} alt="" className="w-31.25 sm:w-[250px]" data-fade="right" />
            </div>

            <div className="text-center -mt-8 font-poppins xl:mt-[-200px]">
              <p className="sm:text-[20px]">Kepada</p>
              <p className="text-2xl sm:text-3xl ">{data.tamuUndangan}</p>
              <p className="mt-6 text-[16px] sm:text-[18px]">Kami mengundang anda untuk menghadiri acara pernikahan dari</p>
            </div>

            {/* nama pasangan nikah */}
            <div>
              <p className="text-center text-[48px] font-pinyon">
                <TypingText text="Udin dan Mantu" className="block" speed={120} />
              </p>
            </div>

            {/* waktu acara */}
            <div className="flex justify-center items-start gap-12 mt-6 text-[16px] font-poppins font-semibold text-black p-4 rounded-lg">
              <div className="flex divide-x divide-black">
                <div className="px-6 text-center">
                  <p className="font-semibold sm:text-3xl">Akad</p>
                  <p className="text-[14px] font-normal mt-1 sm:text-[18px]">Pukul 07:00 – 10:00</p>
                </div>
                <div className="px-6 text-center">
                  <p className="font-semibold sm:text-3xl">Resepsi</p>
                  <p className="text-[14px] font-normal mt-1 sm:text-[18px]">Pukul 10:00 – 20:00</p>
                </div>
              </div>
            </div>

            {/* tanggal acara */}
            <div>
              <p className="text-center text-2xl font-pinyon sm:text-3xl sm:mt-4">
                <TypingText text={data.tanggal} className="block" speed={150} />
              </p>
            </div>

            <div className="flex flex-2 justify-between p-2">
              <img src={bungaBiru} alt="" className="sm:w-[100px]" data-fade="left" />
              <img src={bungaKuning3} alt="" className="sm:w-[100px]" data-fade="right" />
            </div>

            {/* Tombol musik */}
            <div className="fixed bottom-16 right-4 z-50 cursor-pointer" onClick={handleMusicToggle}>
              <img src={isPlaying ? music : silent} alt="" className={`w-[50px] transition-transform duration-300 ${isPlaying ? 'animate-spin' : ''}`} />
            </div>

            {/* Audio */}
            <audio ref={audioRef} src={akadAudio} loop />

            {/* Komponen lain */}
            {/* Love Section Component */}
            <section id="love-section">
              <LoveSection />
            </section>
            {/* Location Component */}
            <section id="location-section">
              <Location />
            </section>
            {/* Galerry Component */}
            <section id="gallery-section">
              <Galerry />
            </section>
            {/* Rsvp Component */}
            <section id="rsvp-section">
              <Rsvp />
            </section>
            {/* data rekening */}
            <section id="rek-section">
              <Rek />
            </section>
            {/* Ayat Suci */}
            <section id="doa-section">
              <Doarestu />
            </section>
            {/* Footer Component */}
            <section>
              <Footer />
            </section>
            <BottomNav />
          </motion.div>
        )}
        {/* === Parallax Bunga (background) === */}
        <img src={bungaKuning3} alt="bunga kiri atas" className="absolute top-10 left-4 w-[80px] opacity-80 parallax-x z-0" />

        <img src={bungaKuning3} alt="bunga kanan bawah" className="absolute top-10 right-6 w-[100px] opacity-75 parallax-y z-0" />
      </AnimatePresence>
    </div>
  );
}

export default App;
