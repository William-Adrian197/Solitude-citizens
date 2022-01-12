import { useState } from 'react'

const AddRace = ({onAdd}) => {

  const [race,setRace] = useState('');
  const [attribute,setAttribute] = useState('');
  const [cleaned,setCleaned] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault() //prevent submit on another page 
   
    if(!race) {
      alert('Please add a race')
      return
    }

    onAdd({race,attribute,cleaned}) //trigger onAdd
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className = 'form-control'>
        <label>Race</label>
        <input 
          Type='text' 
          placeholder='Add Race' 
          value = {race} 
          onChange={(e)=> setRace(e.target.value)}/>        
      </div>

      <div className = 'form-control'>
        <label>Attribute</label>
        <input 
          Type='text' 
          placeholder='Add Attribute'         
          value = {attribute} 
          onChange={(e)=> setAttribute(e.target.value)}
        />        
      </div>

      <div className = 'form-control form-control-check'>
        <label>cleaned</label>
        <input 
          Type='checkbox' 
          checked = {cleaned}
          value = {cleaned}
          onChange={(e)=> setCleaned(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value = 'Save Race' 
      className='btn btn-block'/>
      

    </form>        
  )
}

export default AddRace
