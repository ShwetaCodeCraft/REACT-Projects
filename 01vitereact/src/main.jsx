import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <div>
//       <h1>Testing123</h1>
//     </div>
//   )
// }
const testUser = ' i am confident'

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit page !! ** ' ,
  testUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
      // <App />
      // <MyApp />
      // MyApp()
      reactElement

)
