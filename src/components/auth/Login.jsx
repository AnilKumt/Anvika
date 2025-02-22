import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import { FaGoogle, FaGithub } from 'react-icons/fa';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  return (
    <div className="space-y-6">
      {/* Email Input */}
      <div>
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Email Address
        </label>
        <div className="relative">
          <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-2 px-10 focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      {/* Password Input */}
      <div>
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Password
        </label>
        <div className="relative">
          <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-2 px-10 focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500 focus:ring-offset-0 bg-gray-700/50"
          />
          <span className="ml-2 text-sm text-gray-300">Remember me</span>
        </label>
        <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
          Forgot Password?
        </button>
      </div>

      {/* Login Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
      >
        Sign In
      </motion.button>

      {/* Social Login */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700/50 transition-colors group"
        >
            <FaGoogle className="w-5 h-5 mr-2 text-gray-400 group-hover:text-red-500 transition-colors" />
            Google
        </motion.button>

        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700/50 transition-colors group"
        >
            <FaGithub className="w-5 h-5 mr-2 text-gray-400 group-hover:text-white transition-colors" />
            GitHub
        </motion.button>
        </div>

    </div>
  );
};

export default Login;
