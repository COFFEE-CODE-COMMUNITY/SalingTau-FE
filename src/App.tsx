import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage.tsx';
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
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="homepage" element={<Homepage/>}/>
          <Route path="courses" element={<Courses />} />
          <Route path="courses/player" element={<CoursePlayer />} />
          <Route path="forum" element={<Forum />} />
          <Route path="forum/thread" element={<ForumThread />} />
          <Route path="forum/create" element={<CreatePost />} />
          <Route path="livestream" element={<Livestream />} />
          <Route path="livestream/player" element={<LivestreamPlayer />} />
          <Route path="dashboard/go-live" element={<GoLive />} />
          <Route path="dashboard/create-course" element={<CreateCourse />} />
          <Route path="shop" element={<Shop />} />
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
