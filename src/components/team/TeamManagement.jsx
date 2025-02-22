import { motion } from 'framer-motion';
import { HiUserAdd, HiUserGroup, HiCog, HiMail } from 'react-icons/hi';
import { teamMembers,teamStats,roleDistribution,totalMembers } from '../../dummyData/teamMemberData';
const TeamManagement = () => {
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Team Overview */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Team Members
            </h2>
            <button className="flex items-center px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
              <HiUserAdd className="w-5 h-5 mr-2" />
              Add Member
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50"
              >
                <div className="flex items-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                      <HiMail className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                      <HiCog className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Stats & Roles */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-4">Team Statistics</h3>
            {teamStats.map((stat) => (
              <div key={stat.label} className="flex justify-between items-center mb-4">
                <span className="text-gray-400">{stat.label}</span>
                <span className="font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-4">Role Distribution</h3>
            <div className="space-y-4">
              {roleDistribution.map((role) => (
                <div key={role.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">{role.name}</span>
                    <span className="text-sm font-semibold">{role.count}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: `${(role.count / totalMembers) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamManagement;
