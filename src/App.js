// import React from 'react' //needed jika menggunakan class
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Citizens from './components/Citizens'
import AddCitizen from './components/AddCitizen'
import {useState, useEffect} from 'react'
import CitizenDetails from './components/CitizenDetails'



const App =() => {
  const [showAddCitizen, setShowAddCitizen] = useState(false);
  const [citizens, setCitizens] = useState([])

  //useEffect 
  useEffect(() => {
    const getCitizens = async () => {
      const citizensFromImperialServer = await fetchCitizens()
      setCitizens(citizensFromImperialServer)
    }
   
    getCitizens()
  },[])

  //Fetch Citizen
  const fetchCitizens = async () => {
    const res = await fetch('http://localhost:5000/citizens')
    const data = await res.json()

    return data
  }      

  //Fetch one Citizen 
  const fetchOneCitizen = async(id) => {
    const res = await fetch(`http://localhost:5000/citizens/${id}`)
    const data = await res.json()

    return data
  }

  //Add Citizen
  const addCitizen = async (newCitizen) => {
    const res = await fetch('http://localhost:5000/citizens',{
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newCitizen)
    })

    const data = await res.json()
    setCitizens([...citizens,data])


    // const id = Math.floor(Math.random() * 10000) + 1 //new citizenID  
    // const finalizedNewCitizenData = {id,...newCitizen}
    // setCitizens([...citizens,finalizedNewCitizenData]);   
  }

  //delete Citizen
  const deleteCitizen = async (id) => {
    await fetch(`http://localhost:5000/citizens/${id}`,{method:'DELETE'})
    setCitizens(citizens.filter((filteredCitizen)=>filteredCitizen.id !== id))
  }

  //reminder
  const toggleReminder = async (id) => {
    const citizensToClean = await fetchOneCitizen(id);
    const updateCitizens = {...citizensToClean, cleaned: !citizensToClean.cleaned}

    const res = await fetch(`http://localhost:5000/citizens/${id}`,{
      method:'PUT',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(updateCitizens)
    })

    const data = await res.json()
    
    setCitizens(
      citizens.map(
        (singleCitizen)=> singleCitizen.id === id ? { ...singleCitizen,cleaned: data.cleaned} : singleCitizen
      )
    )
  }

  return (
    <Router>
      <div className='container'>
      <Header 
        onAdd={()=> setShowAddCitizen(!showAddCitizen)}
        showAdd={showAddCitizen}      
      />    
      <Routes>
        <Route 
          path='/' 
          element ={
          <>
            {showAddCitizen &&  <AddCitizen onAdd={addCitizen}/> }

            {citizens.length > 0 ? 
              <Citizens 
                citizensProp = {citizens}
                onDelete     = {deleteCitizen} 
                onToggle     = {toggleReminder}
              />   
              : 'No citizens to show'
            }
          </>
          }        
        />
        <Route path ='/about' element= {<About />} />
        <Route path ='/citizens/:id' element= {<CitizenDetails />} />
      </Routes>
      <Footer/>  
    </div>    
    </Router>    
  );
}

// class App extends React.Component {
//   render () {
//     return <h3> Oblivion when </h3>
//   }
// }

export default App;
