import dashboardIcon from '../assets/icons/dashboard.svg';
import alarmIcon from '../assets/icons/alarm.svg';
import mapIcon from '../assets/icons/map.svg';
import eventIcon from '../assets/icons/event.svg';
import deviceIcon from '../assets/icons/device.svg';
import trendIcon from '../assets/icons/trend.svg';
import aboutIcon from '../assets/icons/about.svg';
import settingsIcon from '../assets/icons/settings.svg';

const sidebar=[
    {
        label: 'Dashboard',
        icon: dashboardIcon,
        path: '/'
    },

    {
        label: 'Map',
        icon: mapIcon,
        path: 'map'
    },

    {
        label: 'Alarms',
        icon: alarmIcon,
        path: ''
    },

    {
        label: 'Events',
        icon: eventIcon,
        path: ''
    },

    {
        label: 'Trends',
        icon: trendIcon,
        path: ''
    },

    {
        label: 'Device Manager',
        icon: deviceIcon,
        path: '/device'
    },

    {
        label: 'About',
        icon: aboutIcon,
        path: ''
    },

    {
        label: 'Settings',
        icon: settingsIcon,
        path: ''
    }
]

export default sidebar;