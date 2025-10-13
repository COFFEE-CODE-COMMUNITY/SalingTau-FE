import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon, CheckCircle2 } from 'lucide-react';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);
  
  const handleSendCode = () => {
    console.log(`Mengirim kode verifikasi ke: ${email}`);
    setIsCodeSent(true);
    setCountdown(60);
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Memverifikasi kode: ${verificationCode}`);
    if (verificationCode === "123456") {
      setStep(2);
    } else {
      alert("Kode verifikasi salah!");
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Password baru dan konfirmasi tidak cocok!");
      return;
    }

    console.log(`Password baru telah diatur untuk: ${email}`);
    setStep(3);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
        {/* Logo */}
        <div className="mb-6">
          <img src="/SalingTau.png" alt="Logo" className="w-20 mx-auto" />
        </div>

        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Lupa Password</h2>
            <p className="text-gray-600 mb-6">Masukkan email Anda untuk menerima kode verifikasi.</p>
            <form onSubmit={handleVerifyCode}>
              {/* Email Input */}
              <div className="relative w-full mb-4">
                <span className="absolute left-3 top-3.5 text-gray-400"><MailIcon size={20} /></span>
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isCodeSent}
                  className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                />
              </div>

              {/* Verification Code Input */}
              {isCodeSent && (
                <div className="relative w-full mb-4">
                  <span className="absolute left-3 top-3.5 text-gray-400"><LockIcon size={20} /></span>
                  <input
                    type="text"
                    placeholder="Kode Verifikasi"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                    className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              
              {/* Action Button */}
              {!isCodeSent ? (
                <button
                  type="button"
                  onClick={handleSendCode}
                  className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
                >
                  Kirim Kode
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
                >
                  Verifikasi & Lanjutkan
                </button>
              )}
            </form>
            
            {/* Resend Code */}
            {isCodeSent && (
              <p className="mt-4 text-sm text-gray-600">
                {countdown > 0 ? (
                  `Kirim ulang kode dalam ${countdown} detik`
                ) : (
                  <button onClick={handleSendCode} className="text-blue-600 hover:underline">
                    Kirim Ulang Kode
                  </button>
                )}
              </p>
            )}
            
            {/* Back to Login */}
            <p className="mt-6 text-gray-700">
              <Link to="/" className="text-blue-600 hover:underline">Kembali ke Login</Link>
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Atur Password Baru</h2>
            <p className="text-gray-600 mb-6">Masukkan password baru Anda.</p>
            <form onSubmit={handleResetPassword}>
              {/* New Password Input */}
              <div className="relative w-full mb-4">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Password Baru"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute top-3 right-3 text-gray-500">
                  {showNewPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </button>
              </div>

              {/* Confirm New Password Input */}
              <div className="relative w-full mb-4">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Konfirmasi Password Baru"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute top-3 right-3 text-gray-500">
                  {showConfirmPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </button>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
              >
                Atur Ulang Password
              </button>
            </form>
          </>
        )}

        {step === 3 && (
          <>
            {/* Success Icon */}
            <div className="flex justify-center mb-4">
              <CheckCircle2 size={56} className="text-green-500" />
            </div>

            {/* Success Message */}
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Password Diperbarui!</h2>
            <p className="text-gray-600 mb-6">
              Password Anda telah berhasil diatur ulang. Silakan login dengan password baru Anda.
            </p>

            {/* Back to Login Button */}
            <button
              onClick={() => navigate('/')}
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            >
              Kembali ke Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}