// import React from 'react' //needed jika menggunakan class
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddRace from './components/AddTask'
import {useState} from 'react'


const App =() => {
  const [showAddRace, setShowAddRace] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id:1, 
      race:'elven',
      attribute:'magic',
      cleaned: true,
    },{
      id:2, 
      race:'orc',
      attribute:'physique',
      cleaned: true,
    },{
      id:3, 
      race:'nord',
      attribute:'balanced',
      cleaned: true,
    },{
      id:4,
      race:'khajiit',
      attribute:'speed',
      cleaned: true,
    }
  ])

  //Add Task
  const addRace = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id);

    const newTask = {id,...task}
    setTasks([...tasks,newTask]);
  }

  //delete task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((singleTask)=>singleTask.id !== id))
  }

  //reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? { ...task,cleaned: !task.cleaned} : task))
  }

  return (
    <div className='container'>
      <Header 
        onAdd={()=> setShowAddRace(!showAddRace)}
        showAdd={showAddRace}      
      />    

      {showAddRace &&  <AddRace onAdd={addRace}/> }

      {tasks.length > 0 ? 
        <Tasks tasks={tasks}
          onDelete = {deleteTask} 
          onToggle = {toggleReminder}
        />   
        : 'No tasks to show'
      }
    </div>
  );
}

// class App extends React.Component {
//   render () {
//     return <h3> Oblivion when </h3>
//   }
// }

export default App;
