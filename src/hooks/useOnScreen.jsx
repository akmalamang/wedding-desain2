import { useState, useEffect } from 'react';

/**
 * Hook ini digunakan untuk mendeteksi apakah sebuah elemen
 * saat ini terlihat (masuk) di dalam viewport (layar pengguna).
 *
 * @param {React.RefObject} ref - referensi ke elemen DOM yang ingin dideteksi
 * @param {number} threshold - persentase elemen yang harus terlihat agar dianggap "terlihat" (default: 0.2 = 20%)
 * @returns {boolean} isVisible - bernilai true jika elemen terlihat di layar, false jika belum
 */
export default function useOnScreen(ref, threshold = 0.2) {
  // State untuk menyimpan status apakah elemen sedang terlihat
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Buat instance IntersectionObserver
    // Fungsi ini akan otomatis dijalankan setiap kali elemen muncul atau keluar dari viewport
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold });

    // Ambil elemen dari ref
    const currentRef = ref.current;

    // Jika elemen ada, mulai observasi
    if (currentRef) observer.observe(currentRef);

    // Hentikan observasi saat komponen di-unmount
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, threshold]); // dijalankan ulang jika ref atau threshold berubah

  // Kembalikan hasil true/false ke komponen pemanggil
  return isVisible;
}
