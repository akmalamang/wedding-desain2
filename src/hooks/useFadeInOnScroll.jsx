import { useEffect } from 'react';

export default function useFadeInOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-fade]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const direction = el.dataset.fade; // "left" | "right" | "up"
          if (entry.isIntersecting) {
            el.classList.remove('fade-hidden');
            el.classList.add(`fade-in-${direction}`);
            observer.unobserve(el); // hentikan setelah muncul
          }
        });
      },
      { threshold: 0.2 }, // aktif saat 20% elemen terlihat
    );

    elements.forEach((el) => {
      el.classList.add('fade-hidden'); // sembunyikan dulu
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
