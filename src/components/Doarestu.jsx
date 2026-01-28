import React from 'react';

const Doarestu = () => {
  return (
    <div className="font-poppins mt-20 px-4 space-y-6">
      {/* Judul Ayat Suci */}
      <div className="text-center">
        <h1 className="font-extrabold text-[16px]" data-fade="up">
          Ayat Suci
        </h1>
      </div>

      {/* Isi Ayat Suci */}
      <div className="text-center sm:w-[350px] mx-auto">
        <p className="text-[10px] sm:text-[14px]" data-fade="left">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang
          demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
        </p>
      </div>

      {/* Sumber Ayat Suci */}
      <div>
        <p className="text-center text-[12px] sm:text-[16px]" data-fade="right">
          Surah Ar-Rum ayat 21
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="flex justify-center items-center mt-6 space-x-4 flex-wrap mb-4">
        {[...Array(5)].map((_, i) => (
          <img key={i} src="/image/bunga-1.png" alt="bunga" className={`w-16 h-16 transform ${i % 2 === 0 ? '-rotate-6 translate-y-1' : 'rotate-6 -translate-y-1'} sm:w-20 sm:h-20`} data-fade="up" />
        ))}
      </div>
    </div>
  );
};

export default Doarestu;
