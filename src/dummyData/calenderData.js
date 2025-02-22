import moment from 'moment';

const events = [
    {
      id: 1,
      title: 'Team Planning Meeting',
      start: moment().add(1, 'days').toDate(),
      end: moment().add(1, 'days').add(2, 'hours').toDate(),
      color: '#9333ea'
    },
    {
      id: 2,
      title: 'Project Deadline',
      start: moment().add(3, 'days').toDate(),
      end: moment().add(3, 'days').add(1, 'hours').toDate(),
      color: '#dc2626'
    },
    {
      id: 3,
      title: 'Client Presentation',
      start: moment().add(5, 'days').toDate(),
      end: moment().add(5, 'days').add(1.5, 'hours').toDate(),
      color: '#2563eb'
    },
    {
      id: 4,
      title: 'Sprint Review',
      start: moment().add(2, 'days').toDate(),
      end: moment().add(2, 'days').add(1, 'hours').toDate(),
      color: '#16a34a'
    },
    {
      id: 5,
      title: 'Design Workshop',
      start: moment().add(4, 'days').toDate(),
      end: moment().add(4, 'days').add(3, 'hours').toDate(),
      color: '#9333ea'
    }
  ];
  

export default events;