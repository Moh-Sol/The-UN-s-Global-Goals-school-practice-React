import React from 'react';
import './target.css'


function TheTargets(props) {

    const handleClick = () => {
        props.clearTargetsProp(false)
    }

    return (
        <div className='theTargets-container'>
            <div className='targets-first'>
                <h1> {props.targetsDataProp.title} </h1>
                <p> {props.targetsDataProp.description} </p>
            </div>
            <div className='targets-second'>
                {props.targetsDataProp.targets.map((item) =>
                    <li key={item.code}> {item.title}  </li>)}
            </div>
            <button onClick={handleClick}> Back </button>

        </div>
    );
}

export default TheTargets;


