import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Landing from './components/pages/Landing';
import Dashboard from './components/pages/Dashboard';
import Projects from './components/pages/Projects';
import Tasks from './components/pages/Tasks';
import Calendar from './components/pages/Calendar';
import Analytics from './components/pages/Analytics';
import Auth from './components/auth/Auth';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Team from './components/team/TeamManagement';
import Chat from './components/collaboration/Chat';
import Profile from './components/user/Profile';
import Settings from './components/settings/Settings';
import FileUpload from './components/collaboration/FileUpload';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
          <Navbar />
          <div className="flex">
            {/* Sidebar for authenticated users
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/*" element={<Sidebar />} />
              </Route>
            </Routes> */}
            
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <Routes>
                  {/* Public routes */}
                  <Route path="/" element={<Landing />} />
                  <Route path="/auth" element={<Auth />} />

                  {/* Protected routes */}
                  <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetails />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/files" element={<FileUpload />} />
                  </Route>
                </Routes>
              </AnimatePresence>
            </main>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
