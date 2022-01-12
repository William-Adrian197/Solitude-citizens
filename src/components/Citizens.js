import Citizen from './Citizen'

const Citizens = ({citizensProp, onDelete,onToggle}) => {
  return (
    <>
      {citizensProp.map((eachCitizenData)=> 
        (
          <Citizen 
            key ={eachCitizenData.id} 
            singleCitizenProp={eachCitizenData}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        )
        )
      } 
    </>
  )
}

export default Citizens
