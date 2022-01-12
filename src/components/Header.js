import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({onAdd,showAdd}) => {  

  return (
    <header>
      <div className='inliner'>
        <h1 style={headingStyle}> The ElderScrolls V.V</h1>      
        <Button 
          color={showAdd ? 'blue':'green'}
          text= {showAdd ? 'close' : 'add'} 
          onClick={onAdd}        
        />       
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
