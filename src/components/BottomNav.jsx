import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Image, Mail, BookOpen } from 'lucide-react';

/**
 * Bottom Navigation elegan dengan:
 * - Scroll halus ke section
 * - Highlight otomatis saat section aktif
 * - Efek getar halus (haptic feedback) ketika diklik
 */
export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('love-section');

  const sections = [
    { id: 'love-section', label: 'Couple', icon: Heart, color: '#F39EB6' },
    { id: 'location-section', label: 'Lokasi', icon: MapPin, color: '#B8DB80' },
    { id: 'gallery-section', label: 'Galeri', icon: Image, color: '#E0B973' },
    { id: 'rsvp-section', label: 'RSVP', icon: Mail, color: '#F39EB6' },
    { id: 'doa-section', label: 'Doa', icon: BookOpen, color: '#A3BFFA' },
  ];

  // Fungsi scroll halus dan efek getar
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // 🔹 Efek getar kecil saat tombol diklik
    if ('vibrate' in navigator) {
      navigator.vibrate(25); // durasi dalam milidetik
    }
  };

  // Gunakan IntersectionObserver untuk mendeteksi section aktif
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-0 left-0  right-0 sm:left-120 sm:right-120 z-50 bg-[#F7F6D3] backdrop-blur-sm border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] flex justify-around items-center py-2 sm:py-1 font-poppins sm:justify-center sm:space-x-10 opacity-90">
      {sections.map(({ id, label, icon: Icon, color }) => {
        const isActive = activeSection === id;
        return (
          <button key={id} onClick={() => handleScroll(id)} className={`flex flex-col items-center transition-all duration-300 ${isActive ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}>
            <Icon
              className="w-6 h-6"
              style={{
                color: isActive ? color : '#4B5563',
                transition: 'color 0.3s ease',
              }}
            />
            <span className={`text-[10px] sm:text-xs mt-1 transition-colors duration-300 ${isActive ? 'font-semibold' : ''}`} style={{ color: isActive ? color : '#4B5563' }}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
