import { HiChartBar, HiClock, HiUserGroup, HiCheck } from 'react-icons/hi';

export const performanceMetrics = [
  {
    id: 1,
    title: "Project Completion",
    value: "87%",
    trend: 12,
    icon: HiChartBar
  },
  {
    id: 2,
    title: "Average Time",
    value: "4.2h",
    trend: -8,
    icon: HiClock
  },
  {
    id: 3,
    title: "Team Velocity",
    value: "94",
    trend: 23,
    icon: HiUserGroup
  },
  {
    id: 4,
    title: "Tasks Completed",
    value: "156",
    trend: 15,
    icon: HiCheck
  }
];

export const productivityData = [
  { date: "Mon", productivity: 65 },
  { date: "Tue", productivity: 78 },
  { date: "Wed", productivity: 82 },
  { date: "Thu", productivity: 75 },
  { date: "Fri", productivity: 85 },
  { date: "Sat", productivity: 72 },
  { date: "Sun", productivity: 68 }
];

export const taskCompletionData = [
  { name: "Week 1", completed: 45 },
  { name: "Week 2", completed: 52 },
  { name: "Week 3", completed: 49 },
  { name: "Week 4", completed: 58 },
  { name: "Week 5", completed: 63 }
];
