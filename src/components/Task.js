import { FaTimes} from 'react-icons/fa' //npm i react-icons

const Task = ({task,onDelete,onToggle}) => {
  return (
    <div className={`task ${task.cleaned ? 'reminder':''}`}
      onDoubleClick={()=>onToggle(task.id)}
    >
      <h3>{task.race} <FaTimes onClick={() => onDelete(task.id)}/> </h3>
      <p>traits: {task.attribute}</p>
      <p>cleaned: {task.cleaned === true ?"yes":"no"}</p>
    </div>
  )
}

export default Task