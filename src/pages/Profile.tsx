export default function Profile() {
  return (
    <div className="p-8">
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

      <div className="mt-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Profile
            </a>
            <a
              href="#"
              className="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
              aria-current="page"
            >
              Monetization
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              Settings
            </a>
          </nav>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <div className="bg-white rounded-xl shadow-md border p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-900">Ringkasan Pendapatan</h3>
            <span className="text-sm font-medium text-gray-500">Oktober 2025</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 text-center">
            <div>
              <p className="text-sm text-gray-500">Estimasi Pendapatan</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">Rp 2.850.000</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Penjualan</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">15</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Saldo Berikutnya</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">Rp 1.980.000</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border p-6">
          <h3 className="text-lg font-bold text-gray-900">Manage Paid Content</h3>
          <p className="text-sm text-gray-500 mt-1">
            Atur kursus mana yang ingin Anda jadikan konten berbayar.
          </p>
          <ul className="divide-y divide-gray-200 mt-4">
            <li className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <img
                  className="h-16 w-24 object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                  alt="Course thumbnail"
                />
                <div>
                  <p className="font-semibold text-gray-800">Full-Stack Web Developer Bootcamp</p>
                  <p className="text-sm text-gray-500">
                    Status: <span className="font-medium text-green-600">Free</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-end">
                <label className="flex items-center cursor-pointer">
                  <span className="mr-3 text-sm font-medium text-gray-900">Paid</span>
                  <div className="relative">
                    <input type="checkbox" className="sr-only" />
                    <div className="block bg-gray-200 w-12 h-7 rounded-full"></div>
                  </div>
                </label>
              </div>
            </li>
            <li className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <img
                  className="h-16 w-24 object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2670&auto=format&fit=crop"
                  alt="Course thumbnail"
                />
                <div>
                  <p className="font-semibold text-gray-800">Advanced React & Redux</p>
                  <p className="text-sm text-gray-500">
                    Status: <span className="font-medium text-blue-600">Paid</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-end">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    Rp
                  </span>
                  <input
                    type="text"
                    defaultValue="250.000"
                    className="pl-8 pr-3 py-2 border border-gray-300 rounded-lg w-36 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <label className="flex items-center cursor-pointer">
                  <span className="mr-3 text-sm font-medium text-gray-900">Paid</span>
                  <div className="relative">
                    <input type="checkbox" defaultChecked className="sr-only" />
                    <div className="block bg-blue-600 w-12 h-7 rounded-full"></div>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
