import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { motion } from 'framer-motion';

// Add this projectColumns array before your component
const projectColumns = [
  {
    id: 'todo',
    title: 'To Do',
    projects: [
      {
        id: 'project-1',
        title: 'Website Redesign',
        description: 'Redesign the company website with modern UI/UX',
        members: [
          { name: 'John Doe', avatar: 'https://ui-avatars.com/api/?name=John+Doe' },
          { name: 'Jane Smith', avatar: 'https://ui-avatars.com/api/?name=Jane+Smith' }
        ]
      },
      {
        id: 'project-2',
        title: 'Mobile App Development',
        description: 'Create a new mobile app for customer engagement',
        members: [
          { name: 'Mike Johnson', avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson' },
          { name: 'Sarah Wilson', avatar: 'https://ui-avatars.com/api/?name=Sarah+Wilson' }
        ]
      }
    ]
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    projects: [
      {
        id: 'project-3',
        title: 'API Integration',
        description: 'Integrate third-party APIs for payment processing',
        members: [
          { name: 'Alex Brown', avatar: 'https://ui-avatars.com/api/?name=Alex+Brown' },
          { name: 'Emily Davis', avatar: 'https://ui-avatars.com/api/?name=Emily+Davis' }
        ]
      }
    ]
  },
  {
    id: 'completed',
    title: 'Completed',
    projects: [
      {
        id: 'project-4',
        title: 'Database Migration',
        description: 'Migrate data to new cloud infrastructure',
        members: [
          { name: 'Tom Wilson', avatar: 'https://ui-avatars.com/api/?name=Tom+Wilson' },
          { name: 'Lisa Anderson', avatar: 'https://ui-avatars.com/api/?name=Lisa+Anderson' }
        ]
      }
    ]
  }
];

// Your existing Projects component code continues here...


const Projects = () => {
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <h1 className="text-3xl font-bold">Projects</h1>
        <button className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
          New Project
        </button>
      </motion.div>

      <DragDropContext onDragEnd={() => {}}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectColumns.map((column, columnIndex) => (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="p-4 rounded-xl bg-gray-800/50 backdrop-blur-lg"
                >
                  <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
                  {column.projects.map((project, index) => (
                    <Draggable key={project.id} draggableId={project.id} index={index}>
                      {(provided) => (
                        <motion.div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 mb-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors cursor-pointer"
                        >
                          <h3 className="font-semibold">{project.title}</h3>
                          <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                          <div className="flex items-center mt-4">
                            {project.members.map((member, i) => (
                              <img
                                key={i}
                                src={member.avatar}
                                alt={member.name}
                                className="w-8 h-8 rounded-full border-2 border-purple-500 -ml-2 first:ml-0"
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Projects;
