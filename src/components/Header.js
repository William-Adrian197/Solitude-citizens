import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({scrolls,onAdd,showAdd}) => {  

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
    
      <h2> really.. {scrolls} when todd!</h2>
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
