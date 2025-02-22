import { motion } from 'framer-motion';
import { HiPencil, HiCamera, HiBadgeCheck } from 'react-icons/hi';

const Profile = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8"
      >
        {/* Profile Header */}
        <div className="relative">
          <div className="h-48 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600"></div>
          <div className="absolute -bottom-16 left-8 flex items-end">
            <div className="relative">
              <img
                src="/avatar.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-gray-800"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors">
                <HiCamera className="w-5 h-5" />
              </button>
            </div>
            <div className="ml-6 mb-4">
              <h1 className="text-2xl font-bold flex items-center">
                John Doe
                <HiBadgeCheck className="w-6 h-6 text-blue-500 ml-2" />
              </h1>
              <p className="text-gray-400">Senior Project Manager</p>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <section className="bg-gray-700/30 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
              <p className="text-gray-300">
                Experienced project manager with a passion for delivering successful projects
                and leading high-performing teams.
              </p>
            </section>

            <section className="bg-gray-700/30 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-400">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-gray-700/30 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Statistics</h2>
              {stats.map((stat) => (
                <div key={stat.label} className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">{stat.label}</span>
                  <span className="font-semibold">{stat.value}</span>
                </div>
              ))}
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
