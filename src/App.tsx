import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/homepages/Homepage.tsx';
import Courses from './pages/courses/Courses.tsx';
import CreateCourse from './pages/dashboards/CreateCourse.tsx';
import CoursePlayer from './pages/courses/CoursePlayer.tsx';
import Forum from './pages/forums/Forum.tsx';
import ForumThread from './pages/forums/ForumThread.tsx';
import CreatePost from './pages/forums/CreatePost.tsx';
import Livestream from './pages/livestreams/Livestream.tsx';
import LivestreamPlayer from './pages/livestreams/LivestreamPlayer.tsx';
import GoLive from './pages/dashboards/GoLive.tsx';
import Shop from './pages/shops/Shop.tsx';
import Profile from './pages/profiles/Profile.tsx';
import Dashboard from './pages/dashboards/Dashboard.tsx';
import Login from "./pages/login/Login.tsx";
import Register from "./pages/register/Register.tsx";
import ForgotPassword from './pages/ForgotPassword.tsx';
import Notifications from './pages/Notifications.tsx';
import Settings from './pages/Settings.tsx';
import EditProfile from './pages/EditProfile.tsx';
import Security from './pages/Security.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

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
          <Route path="notifications" element={<Notifications />} />
          <Route path="shop" element={<Shop />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="security" element={<Security />} /> 
          <Route path="dashboard" element={<Dashboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;