import PropType from 'prop-types'

const MyComponent = ({ cityArray, ah }) => {
  
  return (
    <div>
      {ah}
    </div>

  )
}

MyComponent.propTypes = {
  cityArray: PropType.array, //! take a look at isRequired keyword here
  ah: PropType.number,
}
export default MyComponent