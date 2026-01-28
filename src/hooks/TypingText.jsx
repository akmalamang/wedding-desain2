import { useEffect, useState, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

/**
 * Komponen ini membuat teks muncul huruf demi huruf
 * (efek mengetik / typing animation)
 * dan baru mulai berjalan saat teks terlihat di layar (viewport).
 *
 * @param {string} text - teks yang ingin ditampilkan dengan animasi ketik
 * @param {number} speed - kecepatan animasi dalam milidetik (default: 100 ms per huruf)
 * @param {string} className - class tambahan untuk styling teks
 */
export default function TypingText({ text = '', speed = 100, className = '' }) {
  // State untuk menyimpan teks yang sudah ditampilkan (berjalan huruf demi huruf)
  const [displayedText, setDisplayedText] = useState('');

  // State untuk menandai apakah animasi sudah selesai
  const [done, setDone] = useState(false);

  // Ref digunakan untuk menghubungkan elemen DOM ke IntersectionObserver
  const ref = useRef(null);

  // Gunakan hook useOnScreen → akan bernilai true jika elemen ini terlihat di layar
  const isVisible = useOnScreen(ref);

  /**
   * Efek utama:
   * - Saat elemen terlihat di layar (isVisible = true)
   * - Jalankan interval yang menambahkan huruf satu per satu ke displayedText
   */
  useEffect(() => {
    // Jika elemen belum terlihat atau sudah pernah dijalankan, hentikan
    if (!isVisible || displayedText || !text) return;

    let i = 0;
    setDisplayedText('');

    // Set interval untuk menambahkan huruf satu per satu
    const interval = setInterval(() => {
      if (i < text.length) {
        // Tambahkan huruf berikutnya ke state displayedText
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        // Jika semua huruf sudah ditampilkan, hentikan interval
        clearInterval(interval);
        setDone(true);
      }
    }, speed); // durasi antar huruf (dalam milidetik)

    // Bersihkan interval jika komponen di-unmount
    return () => clearInterval(interval);
  }, [isVisible, text, speed]); // efek dijalankan ulang jika elemen terlihat atau teks berubah

  return (
    <span
      ref={ref} // hubungkan ref ke elemen agar bisa dideteksi oleh useOnScreen
      className={`${className} transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {displayedText}
      {/* Tampilkan kursor berkedip selama animasi belum selesai */}
      {!done && <span className="typing-cursor" />}
    </span>
  );
}
