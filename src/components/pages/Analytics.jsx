import { motion } from 'framer-motion';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';

import { performanceMetrics,productivityData,taskCompletionData} from '../../dummyData/AnalyticsData';

const Analytics = () => {
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-transparent border border-purple-500/20"
            >
              <div className="flex items-center justify-between">
                <metric.icon className="w-8 h-8 text-purple-400" />
                <span className={`text-2xl font-bold ${metric.trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.value}
                  <span className="text-sm ml-1">
                    {metric.trend > 0 ? '↑' : '↓'} {Math.abs(metric.trend)}%
                  </span>
                </span>
              </div>
              <h3 className="mt-4 text-gray-400">{metric.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Productivity Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg"
          >
            <h3 className="text-xl font-semibold mb-6">Team Productivity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '0.5rem'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="productivity" 
                  stroke="#8B5CF6" 
                  fill="url(#productivityGradient)" 
                />
                <defs>
                  <linearGradient id="productivityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg"
          >
            <h3 className="text-xl font-semibold mb-6">Task Completion Rate</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={taskCompletionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '0.5rem'
                  }}
                />
                <Bar dataKey="completed" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;
