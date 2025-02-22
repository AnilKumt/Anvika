import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiChartPie, 
  HiUsers, 
  HiClock, 
  HiDocumentText,
  HiChat,
  HiPaperClip 
} from 'react-icons/hi';

const ProjectDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        {/* Project Header */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Project Phoenix</h1>
              <div className="flex items-center space-x-4 text-gray-400">
                <span className="flex items-center">
                  <HiUsers className="w-5 h-5 mr-2" />
                  12 Members
                </span>
                <span className="flex items-center">
                  <HiClock className="w-5 h-5 mr-2" />
                  2 months left
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                Edit Project
              </button>
              <button className="px-4 py-2 border border-purple-600 rounded-lg hover:bg-purple-600/20 transition-colors">
                Invite Members
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Progress</span>
              <span className="font-semibold">75%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6">
              <div className="flex space-x-4 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-purple-600'
                        : 'hover:bg-gray-700/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {/* Content based on activeTab */}
                  {activeTab === 'overview' && <ProjectOverview />}
                  {activeTab === 'tasks' && <ProjectTasks />}
                  {activeTab === 'files' && <ProjectFiles />}
                  {activeTab === 'discussions' && <ProjectDiscussions />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-6">
            {/* Team Members */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Team Members</h3>
              <div className="space-y-4">
                {projectMembers.map((member) => (
                  <div key={member.id} className="flex items-center">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                      <h4 className="font-medium">{member.name}</h4>
                      <p className="text-sm text-gray-400">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Activity */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <activity.icon className="w-5 h-5 text-purple-500 mt-1" />
                    <div className="ml-3">
                      <p className="text-sm">{activity.description}</p>
                      <span className="text-xs text-gray-400">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
