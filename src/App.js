// import React from 'react' //needed jika menggunakan class
import Header from './components/Header'
import Citizens from './components/Citizens'
import AddCitizen from './components/AddCitizen'
import {useState} from 'react'


const App =() => {
  const [showAddCitizen, setShowAddCitizen] = useState(false);
  const [citizens, setCitizens] = useState([
    {
      id:1, 
      race:'elven',
      name: 'Cinos Greenlock',
      attribute:'magic',
      cleaned: true,
    },{
      id:2, 
      race:'orc',
      name: 'Handul Agamgdum',
      attribute:'physique',
      cleaned: true,
    },{
      id:3, 
      race:'nord',
      name: 'Karlrrod Double-Fist',
      attribute:'balanced',
      cleaned: true,
    },{
      id:4,
      race:'khajiit',
      name: 'Jikhtar',
      attribute:'speed',
      cleaned: true,
    }
  ])

  //Add Citizen
  const addCitizen = (newCitizen) => {
    const id = Math.floor(Math.random() * 10000) + 1 //new citizenID  
    const finalizedNewCitizenData = {id,...newCitizen}
    setCitizens([...citizens,finalizedNewCitizenData]);   
  }

  //delete Citizen
  const deleteCitizen = (id) => {
    setCitizens(citizens.filter((filteredCitizen)=>filteredCitizen.id !== id))
  }

  //reminder
  const toggleReminder = (id) => {
    console.log(id);
    setCitizens(citizens.map((singleCitizen)=> singleCitizen.id === id ? { ...singleCitizen,cleaned: !singleCitizen.cleaned} : singleCitizen))
  }

  return (
    <div className='container'>
      <Header 
        onAdd={()=> setShowAddCitizen(!showAddCitizen)}
        showAdd={showAddCitizen}      
      />    

      {showAddCitizen &&  <AddCitizen onAdd={addCitizen}/> }

      {citizens.length > 0 ? 
        <Citizens 
          citizensProp = {citizens}
          onDelete     = {deleteCitizen} 
          onToggle     = {toggleReminder}
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
