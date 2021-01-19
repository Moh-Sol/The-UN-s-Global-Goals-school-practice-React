

import React from 'react';
import './goals.css'


function Goals(props) {
    const handleClick = () => {
        props.showGoalProp(props.goalsDataProp)
    }

    return (
        <div  onClick={handleClick} className='theGoal-container'>
            <h4> {props.goalNum} </h4>
            <p> {props.goalsDataProp.title} </p>
        </div>
    );
}

export default Goals;


