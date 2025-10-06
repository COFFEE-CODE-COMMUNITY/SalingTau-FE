export default function Profile() {
  return (
    <div className="p-8">
      {/* Header Profile */}
      <div className="bg-white rounded-xl shadow-md border p-6">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <img
            className="h-24 w-24 rounded-full object-cover ring-4 ring-blue-100"
            src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?q=80&w=2574&auto=format&fit=crop"
            alt="User avatar"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900">Andi Pratama</h2>
            <p className="text-gray-500">Creator & Web Developer</p>
          </div>
          <button className="bg-blue-50 text-blue-600 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-100">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <a
              href="#"
              className="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              aria-current="page"
            >
              Profile
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Settings
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Security
            </a>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 space-y-8">
        {/* Informasi umum */}
        <div className="bg-white rounded-xl shadow-md border p-6">
          <h3 className="text-lg font-bold text-gray-900">Informasi Pribadi</h3>
          <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <dt className="text-sm text-gray-500">Email</dt>
              <dd className="mt-1 text-gray-900">andi.pratama@example.com</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Username</dt>
              <dd className="mt-1 text-gray-900">@andipratama</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Tanggal Bergabung</dt>
              <dd className="mt-1 text-gray-900">Januari 2023</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Role</dt>
              <dd className="mt-1 text-gray-900">Instructor</dd>
            </div>
          </dl>
        </div>

        {/* Aktivitas Terakhir */}
        <div className="bg-white rounded-xl shadow-md border p-6">
          <h3 className="text-lg font-bold text-gray-900">Aktivitas Terbaru</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center justify-between">
              <p className="text-gray-700">Mengupdate course "React Basics"</p>
              <span className="text-sm text-gray-500">2 hari lalu</span>
            </li>
            <li className="flex items-center justify-between">
              <p className="text-gray-700">Mengganti foto profil</p>
              <span className="text-sm text-gray-500">1 minggu lalu</span>
            </li>
            <li className="flex items-center justify-between">
              <p className="text-gray-700">Bergabung sebagai Instructor</p>
              <span className="text-sm text-gray-500">Januari 2023</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
