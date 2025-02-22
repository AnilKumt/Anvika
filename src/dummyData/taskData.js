const taskColumns = [
    {
      id: 'backlog',
      title: 'Backlog',
      colorClass: 'bg-gray-400',
      tasks: [
        {
          id: 'task-1',
          title: 'Design System Updates',
          description: 'Update the design system with new components',
          priority: { label: 'High', color: 'text-red-400' },
          assignees: [
            { name: 'John Doe', avatar: 'https://ui-avatars.com/api/?name=John+Doe' },
            { name: 'Jane Smith', avatar: 'https://ui-avatars.com/api/?name=Jane+Smith' }
          ],
          comments: 5,
          attachments: 2,
          dueDate: '2d'
        },
        {
          id: 'task-2',
          title: 'API Documentation',
          description: 'Create comprehensive API documentation',
          priority: { label: 'Medium', color: 'text-yellow-400' },
          assignees: [
            { name: 'Mike Brown', avatar: 'https://ui-avatars.com/api/?name=Mike+Brown' }
          ],
          comments: 3,
          attachments: 1,
          dueDate: '4d'
        }
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      colorClass: 'bg-blue-400',
      tasks: [
        {
          id: 'task-3',
          title: 'User Authentication',
          description: 'Implement OAuth2 authentication',
          priority: { label: 'High', color: 'text-red-400' },
          assignees: [
            { name: 'Sarah Wilson', avatar: 'https://ui-avatars.com/api/?name=Sarah+Wilson' },
            { name: 'Tom Davis', avatar: 'https://ui-avatars.com/api/?name=Tom+Davis' }
          ],
          comments: 8,
          attachments: 4,
          dueDate: '1d'
        }
      ]
    },
    {
      id: 'review',
      title: 'In Review',
      colorClass: 'bg-yellow-400',
      tasks: [
        {
          id: 'task-4',
          title: 'Performance Optimization',
          description: 'Optimize application performance',
          priority: { label: 'Medium', color: 'text-yellow-400' },
          assignees: [
            { name: 'Alex Johnson', avatar: 'https://ui-avatars.com/api/?name=Alex+Johnson' }
          ],
          comments: 6,
          attachments: 2,
          dueDate: 'Today'
        }
      ]
    },
    {
      id: 'done',
      title: 'Completed',
      colorClass: 'bg-green-400',
      tasks: [
        {
          id: 'task-5',
          title: 'Bug Fixes',
          description: 'Fix reported bugs in production',
          priority: { label: 'Low', color: 'text-green-400' },
          assignees: [
            { name: 'Emily Brown', avatar: 'https://ui-avatars.com/api/?name=Emily+Brown' }
          ],
          comments: 4,
          attachments: 1,
          dueDate: 'Done'
        }
      ]
    }
  ];
export default taskColumns;