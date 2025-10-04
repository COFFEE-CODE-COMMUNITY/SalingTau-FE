import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export default function Courses() {
  return (
    <>
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b z-10">
        <div className="h-16 flex items-center justify-between px-6">
          <h2 className="text-xl font-semibold text-gray-900">All Courses</h2>
          <Link
            to="/courses/create"
            className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Course
          </Link>
        </div>
      </header>

      <div className="p-8">
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My Creations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-blue-500">
              <div className="relative">
                <img
                  className="h-40 w-full object-cover"
                  src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2670&auto=format&fit=crop"
                  alt="Course thumbnail"
                />
                <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                  YOUR COURSE
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 truncate">Advanced React & Redux</h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-gray-500">by Andi Pratama</p>
                  <span className="text-sm font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                    Paid
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t flex space-x-2">
                  <button className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
                    Edit
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
                    Stats
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-blue-500">
              <div className="relative">
                <img
                  className="h-40 w-full object-cover"
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                  alt="Course thumbnail"
                />
                <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                  YOUR COURSE
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  Full-Stack Web Developer Bootcamp
                </h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-gray-500">by Andi Pratama</p>
                  <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">
                    Free
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t flex space-x-2">
                  <button className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
                    Edit
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200">
                    Stats
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore Other Courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <Link
              to="/courses/player"
              className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1"
            >
              <img
                className="h-40 w-full object-cover"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                alt="Data Science Course"
              />
              <div className="p-5">
                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  Data Science
                </span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 truncate">
                  Data Science with Python
                </h3>
                <p className="mt-1 text-sm text-gray-500">by Jane Smith</p>
              </div>
            </Link>
            <Link
              to="/courses/player"
              className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1"
            >
              <img
                className="h-40 w-full object-cover"
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop"
                alt="Digital Marketing Course"
              />
              <div className="p-5">
                <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                  Marketing
                </span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 truncate">
                  The Ultimate Digital Marketing Guide
                </h3>
                <p className="mt-1 text-sm text-gray-500">by Emily White</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
