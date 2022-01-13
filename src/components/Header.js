import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({onAdd,showAdd}) => {  

  const location = useLocation()

  return (
    <header>
      <div className='inliner'>
        <h1 style={headingStyle}> The ElderScrolls V.V</h1>    
        {location.pathname === '/' && <Button 
          color={showAdd ? 'blue':'green'}
          text= {showAdd ? 'close' : 'add'} 
          onClick={onAdd}        
        />       
        }          
      </div>    
    </header>
    
  )
}

Header.defaulltProps = {
  scrolls: 'Hammerfall',
}

Header.propTypes = {
  title: PropTypes.string,
}

//css in js
const headingStyle = {
  color:"yellow", 
  backgroundColor:"green"
}

export default Header
