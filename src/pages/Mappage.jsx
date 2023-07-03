import React, {useRef} from 'react';
import network from '../assets/images/network.jpg';
import alarm from '../assets/alert/alarm.wav';

function Mappage() {

    const alarmRef=useRef(null);

    return (
        <div>
            <audio id="alarm" ref={alarmRef}>
                <source src={alarm} type="audio/mp3" />
            </audio>

            <button onClick={()=>alarmRef.current.play()}>Click</button>
            <img src={network} alt="map image" style={{ height: '600px', width: '600px' }} />
        </div>
    )
}

export default Mappage;