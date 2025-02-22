import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { motion } from 'framer-motion';
import { HiFlag, HiChat, HiPaperClip, HiClock } from 'react-icons/hi';
import taskColumns from '../../dummyData/taskData';
const Tasks = () => {
  return (
    <div className="p-6">
      <motion.div 
        className="flex flex-col h-[calc(100vh-6rem)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Task Board
          </h1>
          <button className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
            Add New Task
          </button>
        </div>

        <DragDropContext onDragEnd={() => {}}>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {taskColumns.map((column) => (
              <Droppable key={column.id} droppableId={column.id}>
                {(provided) => (
                  <div className="w-80 flex-shrink-0">
                    <div className="p-4 rounded-xl bg-gray-800/50 backdrop-blur-lg h-full">
                      <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <span className={`w-3 h-3 rounded-full mr-2 ${column.colorClass}`}></span>
                        {column.title}
                        <span className="ml-2 text-sm text-gray-400">({column.tasks.length})</span>
                      </h2>
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="space-y-4"
                      >
                        {column.tasks.map((task, index) => (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided) => (
                              <motion.div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-all duration-300 cursor-pointer group"
                              >
                                <div className={`text-xs ${task.priority.color} mb-2`}>
                                  <HiFlag className="inline mr-1" />
                                  {task.priority.label}
                                </div>
                                <h3 className="font-semibold mb-2">{task.title}</h3>
                                <p className="text-sm text-gray-400">{task.description}</p>
                                
                                <div className="mt-4 flex justify-between items-center">
                                  <div className="flex -space-x-2">
                                    {task.assignees.map((assignee, i) => (
                                      <img
                                        key={i}
                                        src={assignee.avatar}
                                        alt={assignee.name}
                                        className="w-8 h-8 rounded-full border-2 border-gray-800"
                                        title={assignee.name}
                                      />
                                    ))}
                                  </div>
                                  
                                  <div className="flex items-center space-x-2 text-gray-400">
                                    <HiChat className="w-4 h-4" />
                                    <span className="text-xs">{task.comments}</span>
                                    <HiPaperClip className="w-4 h-4" />
                                    <span className="text-xs">{task.attachments}</span>
                                    <HiClock className="w-4 h-4" />
                                    <span className="text-xs">{task.dueDate}</span>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    </div>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </motion.div>
    </div>
  );
};

export default Tasks;
