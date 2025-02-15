import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//The function name can be learn, but when using it in JSX, you must use an uppercase letter.
import Learn from './Learn.jsx'

function MyFunction(){
  return(
    <h1>Today is 14 feb 2025.</h1>
  )
}
// const ReactElement={
//   tag:"a",
//   property:{
//       href:"https://google.com",
//       target:"_blank"
//   },
//   child:"this is a link to google"
// }
const AnotherElement=(
  <a href='https://google.com' target='_blank'> this is a google link </a>
)

const anotherReactElement=React.createElement(
  "a",
  {href:'https://google.com',target:"_blank"},//yeh empty bhi de sakte hai if you want but {} dena hoga
  "click this to reach google"
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Learn />

    {/* <MyFunction /> */}
    {/* MyFunction() */}

    {/* ReactElement */}
     
    {/* {AnotherElement} */}
    {anotherReactElement}
    {/* <AnotherElement/> */}

  </StrictMode>
)
//strict mode is recommended but not necesaary
//as we are importing a function so we can also write the fx here only but not recommended (chalega)nhi chalra but sir ka chala tha
//tag vala chalega ******************
//also we can write the object directly as we made in custom react but that will not work as the name of keys could be different(nahi chalega) but we can write the actual tag(chalega) in {}
//Problem: AnotherElement is a JSX element, but you are passing it like a normal variable.
//Solution: JSX elements must be wrapped inside {} when used inside JSX.
//jab use tag main likha to nhi chalega

/* ******** now ab if hame react element ko banana hai to hamare way se ni but the actual is shown in anotherReactElement ane there we
have used React.createElement*/

