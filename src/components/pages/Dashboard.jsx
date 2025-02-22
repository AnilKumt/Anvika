import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, PieChart, Pie, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  return (
    <div className="p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* Stats Cards */}
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-transparent border border-purple-500/20"
          >
            <div className="flex items-center justify-between">
              <stat.icon className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <h3 className="mt-4 text-gray-400">{stat.title}</h3>
          </motion.div>
        ))}

        {/* Charts Section */}
        <div className="col-span-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Project Progress</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={progressData}>
                <Area type="monotone" dataKey="progress" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Task Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={taskDistribution} dataKey="value" nameKey="name" fill="#8b5cf6" />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
