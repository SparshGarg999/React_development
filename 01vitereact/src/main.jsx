import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return(
    <h1>Hi Guys!</h1>
  )
}

function AnoterApp(){
  return(
    <a href="https://google.com" target='_blank'>Visit Google</a>
  )
}


// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: 'Click to visit Google'
// }

const anotherUser = "HI AGAIN!!!"
const ReactElement = React.createElement(
  "a",
  {'href': 'https://google.com', target:'_blank'},
  'Click here to visit Google',
  anotherUser
)

createRoot(document.getElementById('root')).render(

    <App />

)
