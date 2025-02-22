import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiUpload, HiDocument, HiPhotograph, HiX } from 'react-icons/hi';

const FileUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            dragActive ? 'border-purple-500 bg-purple-500/10' : 'border-gray-600'
          }`}
          onDragEnter={() => setDragActive(true)}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragActive(false);
            // Handle file drop
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <input
            type="file"
            ref={inputRef}
            className="hidden"
            multiple
            onChange={(e) => {
              // Handle file selection
            }}
          />
          
          <HiUpload className="w-12 h-12 mx-auto text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Upload Files</h3>
          <p className="text-gray-400 mb-4">
            Drag and drop your files here, or click to select files
          </p>
          <button
            onClick={() => inputRef.current?.click()}
            className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Select Files
          </button>
        </div>

        {/* File List */}
        <div className="mt-8 space-y-4">
          <AnimatePresence>
            {files.map((file) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="flex items-center p-4 rounded-lg bg-gray-800/50 backdrop-blur-lg"
              >
                {file.type.includes('image') ? (
                  <HiPhotograph className="w-8 h-8 text-purple-500" />
                ) : (
                  <HiDocument className="w-8 h-8 text-purple-500" />
                )}
                <div className="ml-4 flex-1">
                  <h4 className="font-medium">{file.name}</h4>
                  <div className="mt-1 flex items-center space-x-4">
                    <span className="text-sm text-gray-400">{file.size}</span>
                    <div className="flex-1 h-1 bg-gray-700 rounded-full">
                      <div 
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: `${file.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-400">{file.progress}%</span>
                  </div>
                </div>
                <button 
                  className="ml-4 text-gray-400 hover:text-red-400"
                  onClick={() => {
                    // Handle file removal
                  }}
                >
                  <HiX className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default FileUpload;
