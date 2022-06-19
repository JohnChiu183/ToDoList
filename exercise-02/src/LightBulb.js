import {useState} from 'react';

export default function LightBulb(){

    const [isOn, setLightOn] = useState(false);

    return(
        <div>
            <img src={isOn ? './light-on.png' : './light-off.png'}/>
            <button onClick={()=>setLightOn(!isOn)}>
                {isOn ? 'Turn off' : 'Turn on'}
            </button>
        </div>
    );
}