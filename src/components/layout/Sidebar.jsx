import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HiHome, 
  HiViewGrid, 
  HiClipboardList, 
  HiCalendar, 
  HiUserGroup,
  HiChartPie,
  HiCog,
  HiChat,
  HiFolder
} from 'react-icons/hi';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: HiHome, path: '/' },
    { name: 'Projects', icon: HiViewGrid, path: '/projects' },
    { name: 'Tasks', icon: HiClipboardList, path: '/tasks' },
    { name: 'Calendar', icon: HiCalendar, path: '/calendar' },
    { name: 'Team', icon: HiUserGroup, path: '/team' },
    { name: 'Analytics', icon: HiChartPie, path: '/analytics' },
    { name: 'Files', icon: HiFolder, path: '/files' },
    { name: 'Chat', icon: HiChat, path: '/chat' },
  ];

  return (
    <motion.div 
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="w-64 bg-gray-800/50 backdrop-blur-lg border-r border-gray-700 h-screen fixed"
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 py-6 overflow-y-auto">
          <nav className="px-4 space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700/50'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-700">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700/50'
              }`
            }
          >
            <HiCog className="w-5 h-5 mr-3" />
            Settings
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
