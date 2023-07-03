import React, { useContext, useEffect, useState } from 'react';
import { DevicesContext } from '../DevicesContext';
import status_green from '../assets/icons/status_green.svg';
import status_red from '../assets/icons/status_red.svg';
import DevicesList from '../components/DevicesList';




const Devices = [
    {
        name: 'Baseband Unit',
        param1: 'param1',
        param2: 'param2',
        param3: 'param3',
        status: 'ok'
    },

    {
        name: 'Amplifier',
        param1: 'param1',
        param2: 'param2',
        param3: 'param3',
        status: 'ok'
    },

    {
        name: 'GPS',
        param1: 'param1',
        param2: 'param2',
        param3: 'param3',
        status: 'fail'
    }
]


const statusIcon = {
    ok: status_green,
    fail: status_red
}


function Dashboard() {

    const [blink, setBlik] = useState('fail');
    const {devices, setDevices} = useContext(DevicesContext);
   useEffect(()=>{
        fetch('http://localhost:4000/devices').then((response)=>{
            response.json().then(devices=>{setDevices(devices)});
        })
        },[]);

    useEffect(() => {
        const interval = setInterval(() => setBlik(blink === 'fail' ? 'ok' : 'fail'), 500);
        return () => clearInterval(interval);
    }, [blink]);

    return (
        <DevicesList data={devices} />
    )
}

export default Dashboard;