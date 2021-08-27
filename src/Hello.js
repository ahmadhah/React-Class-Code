import PropTypes from 'prop-types'

function HelloWorldComponent({cities}) {
    
  return (
    <>Hello, {cities.map(city=>city)} </>
  )
}

HelloWorldComponent.propTypes = {
    Name: PropTypes.string,
    cities: PropTypes.array
}






// HelloWorldComponent.propTypes = {
//   name: PropTypes.object.isRequired
// }

export default HelloWorldComponent