import { FaTimes} from 'react-icons/fa' //npm i react-icons

const Citizen = ({singleCitizenProp,onDelete,onToggle}) => {
  return (
    <div className={`task ${singleCitizenProp.cleaned ? 'reminder':''}`}
      onDoubleClick={()=>onToggle(singleCitizenProp.id)}
    >
      <h3>{singleCitizenProp.name} 
        <FaTimes onClick={() => onDelete(singleCitizenProp.id)}/>       
      </h3>
      <p>race: {singleCitizenProp.race}</p>
      <p>traits: {singleCitizenProp.attribute}</p>
      <p>cleaned: {singleCitizenProp.cleaned === true ?"yes":"no"}</p>
    </div>
  )
}

export default Citizen