import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

export default function Settings() {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert('Password baru dan konfirmasi tidak cocok!');
      return;
    }
    console.log('Mengubah password...');
    alert('Password berhasil diubah! (Simulasi)');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md border p-8">
        <h2 className="text-2xl font-bold text-gray-900">Keamanan Akun</h2>
        <p className="mt-1 text-gray-500 mb-8">Ubah password Anda secara berkala untuk menjaga keamanan akun.</p>

        <form onSubmit={handleChangePassword} className="mt-6 space-y-4">
          {/* Current Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password Saat Ini</label>
            <input
              type={showCurrent ? 'text' : 'password'}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pr-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute inset-y-0 right-0 top-6 flex items-center pr-3"
            >
             {showCurrent ? <EyeIcon/>:<EyeOffIcon/>}
            </button>
          </div>

          {/* New Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password Baru</label>
            <input
              type={showNew ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pr-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute inset-y-0 right-0 top-6 flex items-center pr-3"
            >
               {showNew ? <EyeIcon/>:<EyeOffIcon/>}
            </button>
          </div>

          {/* Confirm New Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Konfirmasi Password Baru</label>
            <input
              type={showConfirm ? 'text' : 'password'}
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pr-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute inset-y-0 right-0 top-6 flex items-center pr-3"
            >
              {showConfirm ? <EyeIcon/>:<EyeOffIcon/>}
            </button>
          </div>
          
          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700"
            >
              Simpan Password
            </button>
          </div>
        </form>
      </div>

      {/* Tombol kembali */}
      <div className="flex justify-start mt-8">
        <button
          type="button"
          onClick={() => navigate('/profile')}
          className="bg-white py-2 px-5 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          Kembali ke Profil
        </button>
      </div>
    </div>
  );
}