import { Link } from 'react-router-dom';
import { Video, Calendar } from 'lucide-react';

export default function Livestream() {
  return (
    <>
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b z-10">
        <div className="h-16 flex items-center justify-between px-6">
          <h2 className="text-xl font-semibold text-gray-900">Live Streams</h2>
          <Link
            to="/livestream/go-live"
            className="flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
          >
            <Video className="w-5 h-5 mr-2" />
            Go Live
          </Link>
        </div>
      </header>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Happening Now</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Link to="/livestream/player" className="block bg-white rounded-xl shadow-md overflow-hidden group">
            <div className="relative">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1516975069153-cab7de853922?q=80&w=2592&auto=format&fit=crop"
                alt="Live Stream Thumbnail"
              />
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                LIVE
              </div>
              <div className="absolute bottom-3 left-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                3.4k viewers
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 truncate group-hover:text-blue-600">
                Live Coding: Building a Web App with React
              </h3>
              <p className="text-sm text-gray-500 mt-1">John Doe</p>
            </div>
          </Link>
          <Link to="/livestream/player" className="block bg-white rounded-xl shadow-md overflow-hidden group">
            <div className="relative">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2670&auto=format&fit=crop"
                alt="Live Stream Thumbnail"
              />
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                LIVE
              </div>
              <div className="absolute bottom-3 left-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                1.8k viewers
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 truncate group-hover:text-blue-600">
                UI/UX Design Review Session
              </h3>
              <p className="text-sm text-gray-500 mt-1">Jane Smith</p>
            </div>
          </Link>
          <div className="bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 group flex items-center justify-center text-center">
            <div className="p-4">
              <div className="mx-auto bg-white rounded-full p-3 w-16 h-16">
                <Calendar className="w-full h-full text-gray-400" />
              </div>
              <h3 className="font-semibold text-gray-600 mt-4">Next stream starts in 2 hours</h3>
              <p className="text-sm text-gray-500 mt-1">Q&A with Michael Brown</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
