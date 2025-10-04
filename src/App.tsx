import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CreateCourse from './pages/CreateCourse';
import CoursePlayer from './pages/CoursePlayer';
import Forum from './pages/Forum';
import ForumThread from './pages/ForumThread';
import CreatePost from './pages/CreatePost';
import Livestream from './pages/Livestream';
import LivestreamPlayer from './pages/LivestreamPlayer';
import GoLive from './pages/GoLive';
import Shop from './pages/Shop';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/create" element={<CreateCourse />} />
          <Route path="courses/player" element={<CoursePlayer />} />
          <Route path="forum" element={<Forum />} />
          <Route path="forum/thread" element={<ForumThread />} />
          <Route path="forum/create" element={<CreatePost />} />
          <Route path="livestream" element={<Livestream />} />
          <Route path="livestream/player" element={<LivestreamPlayer />} />
          <Route path="livestream/go-live" element={<GoLive />} />
          <Route path="shop" element={<Shop />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
