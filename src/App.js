import './App.css';
import React, { useEffect, useState } from 'react';
import Goals from './component/goals'
import TheTargets from './component/theTargets'


function App() {

  const [goalsData, setGoalsData] = useState([])
  const [subGoal, setSubGoal] = useState('')

  function showGoal(theGoal) {
    setSubGoal(theGoal)
  }

  function clearTargets(theGoal) {
    setSubGoal(theGoal)
  }


  useEffect(async () => {
    const response = await fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true')
    const data = await response.json();
    setGoalsData(data);
  }, [])


  return (

    <div className="App">
      <h1 className='app-title'> The UN's Global Goals </h1>
      {subGoal ?
        <main className='targets-container'>
          <TheTargets targetsDataProp={subGoal} clearTargetsProp={clearTargets} />
        </main>
        :
        <main className='goals-container'>
          {goalsData.map(item => <Goals goalsDataProp={item} key={item.code} goalNum={item.code} showGoalProp={showGoal} />)}
        </main>}
    </div>
  );
}

export default App;


