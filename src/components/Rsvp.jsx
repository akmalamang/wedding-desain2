import React, { useState } from 'react';

const Rsvp = () => {
  const [riwayat, setRiwayat] = useState([]);
  const [form, setForm] = useState({
    nama: '',
    hadir: '',
    ucapan: '',
  });

  // 🔹 Handle input perubahan
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // 🔹 Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nama || !form.hadir || !form.ucapan) {
      alert('Mohon isi semua kolom terlebih dahulu 🙏');
      return;
    }

    // Simpan ke riwayat ucapan
    setRiwayat([...riwayat, form]);

    // Reset form
    setForm({
      nama: '',
      hadir: '',
      ucapan: '',
    });
  };

  return (
    <div className="relative font-poppins mt-20 px-4">
      {/* 🌸 Gambar bunga hiasan */}
      <img src="/image/bunga-1-alamat.png" alt="hiasan bunga" className="absolute -top-10 right-4 w-20 sm:right-15 sm:top-0 sm:w-30 lg:right-30 xl:right-80" data-fade="right" />

      {/* 📝 Judul */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800" data-fade="up">
          RSVP Form
        </h1>
        <p className="text-sm text-gray-600 mt-1">Konfirmasi kehadiran & tuliskan ucapan terbaikmu 💌</p>
      </div>

      {/* 📋 Form Input */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center">
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama"
          className="p-2 bg-white rounded-2xl w-[307px] border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8DB80]"
          data-fade="left"
        />

        <select name="hadir" value={form.hadir} onChange={handleChange} className="p-2 bg-white rounded-2xl w-[307px] border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8DB80]" data-fade="right">
          <option value="">Konfirmasi Kehadiran</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>

        <textarea
          name="ucapan"
          value={form.ucapan}
          onChange={handleChange}
          placeholder="Ucapan"
          className="p-2 bg-white rounded-2xl w-[307px] h-[159px] border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8DB80]"
          data-fade="left"
        ></textarea>

        <button type="submit" className="bg-[#B8DB80] hover:bg-[#9dc96a] p-2 rounded-[10px] text-[16px] font-medium w-[150px] transition-colors duration-200" data-fade="up">
          Kirim
        </button>
      </form>

      {/* 💌 Riwayat Ucapan */}
      <div className="mt-10">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-4" data-fade="left">
          Riwayat Ucapan
        </h2>

        {riwayat.length === 0 ? (
          <p className="text-center text-gray-500 text-sm" data-fade="right">
            Belum ada ucapan yang masuk 💭
          </p>
        ) : (
          <div className="space-y-4">
            {riwayat.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <p className="font-semibold text-gray-800">{item.nama}</p>
                <p className="text-sm text-gray-500 mb-2">Kehadiran: {item.hadir}</p>
                <p className="text-gray-700 text-sm italic">“{item.ucapan}”</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rsvp;
