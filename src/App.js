import React from 'react'
import MyComponent from './MyComponent'
// class MyComponent extends React.Component {
//   render() {
//     // This must be exactly one element or it will warn.
//     const {cityArray,ah} = this.props;
//     return (
//       <div>
//         {ah}
//       </div>
//     );
//   }
// }

// MyComponent.propTypes = {
//   cityArray: PropType.array, //! take a look at isRequired keyword here
//   ah: PropType.string, //
// }



function App() {

  const cityArray1 = ['Karachi', 'Lahore', 'Peshawar', 'Quetta']
  const cityObj = { city1: 'Karachi', city2: 'Lahore', city3: 'Peshawar', city4: 'Quetta' }
  const int = 123;
  return (
    <div>
      {/* <MyComponent cityArray={cityArray1} ah={int} /> */}
      <MyComponent cityArray={cityArray1} ah={int} />
    </div>
  )
}

export default App