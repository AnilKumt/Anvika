import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from '../../dummyData/calenderData';
const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [view, setView] = useState('month');

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl bg-gray-800/50 backdrop-blur-lg p-6"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Calendar
          </h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors">
              Add Event
            </button>
            <select 
              value={view} 
              onChange={(e) => setView(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600"
            >
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="day">Day</option>
              <option value="agenda">Agenda</option>
            </select>
          </div>
        </div>

        <div className="calendar-wrapper">
          <BigCalendar
            localizer={localizer}
            events={events}
            view={view}
            onView={setView}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 'calc(100vh - 240px)' }}
            className="custom-calendar"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Calendar;
