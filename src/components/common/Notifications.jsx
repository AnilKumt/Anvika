import { motion, AnimatePresence } from 'framer-motion';
import { HiBell, HiX, HiCheck, HiExclamation } from 'react-icons/hi';

const Notifications = () => {
  return (
    <div className="fixed top-20 right-4 z-50 w-96">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="mb-4"
          >
            <div className="p-4 rounded-xl bg-gray-800/90 backdrop-blur-lg border border-purple-500/20 shadow-lg">
              <div className="flex items-start">
                <div className={`p-2 rounded-lg ${notification.typeStyles}`}>
                  {notification.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="font-semibold">{notification.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                  {notification.action && (
                    <div className="mt-3 flex space-x-3">
                      <button className="text-sm text-purple-400 hover:text-purple-300">
                        {notification.action}
                      </button>
                      <button className="text-sm text-gray-400 hover:text-gray-300">
                        Dismiss
                      </button>
                    </div>
                  )}
                </div>
                <button className="text-gray-400 hover:text-gray-300">
                  <HiX className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Notifications;
