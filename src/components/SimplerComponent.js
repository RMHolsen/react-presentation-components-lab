// Code SimplerComponent Here

import React from 'react'

const SimplerComponent = props => <div onClick={props.handleClick}>"I am just happy</div>

// YES, THIS ALSO WORKS
// const SimplerComponent = (props) => {
//     return(
//         <div onClick={props.handleClick}>"I am just happy"</div>
//     )
// }

export default SimplerComponent

// for the love of Jacquard do not forget to import and export your crap. come on. 