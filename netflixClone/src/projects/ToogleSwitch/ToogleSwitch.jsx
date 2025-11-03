import './ToogleSwitch.css'
import { useState } from 'react'


export const ToogleSwitch = () =>{
    const [isOn, setIsOn] = useState(false);

    const handleToogleSwitch = () =>{
        setIsOn(!isOn);
    }

    return (
        <div className="toggle-switch" 
            style={{backgroundColor: isOn? 'green' : ''}} onClick={handleToogleSwitch}>
            <div className={`switch ${isOn ? "on" : "off"}`}>
                <span className='switch-state'>{isOn ? "On" : "Off"}</span>
            </div>
        </div>
    )
}






