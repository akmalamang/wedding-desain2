import React from 'react';
import dataRekening from '../dataRek';

function Rek() {
  return (
    <div className="font-poppins text-center mt-20">
      <div className="text-center mb-8">
        <h1 className="font-semibold" data-fade="up">
          Rekening
        </h1>
      </div>
      <div>
        <h1 className="font-bold" data-fade="left">
          {dataRekening[0].bank}
        </h1>
        <p data-fade="right">{dataRekening[0].nama}</p>
      </div>
      <div>
        <h1 className="font-bold" data-fade="left">
          {dataRekening[1].bank}
        </h1>
        <p data-fade="right">{dataRekening[1].nama}</p>
      </div>
      <div>
        <h1 className="font-bold" data-fade="left">
          QRIS
        </h1>
        <img src="/public/image/qris.png" alt="" className="mx-auto" data-fade="right" />
      </div>
    </div>
  );
}

export default Rek;
