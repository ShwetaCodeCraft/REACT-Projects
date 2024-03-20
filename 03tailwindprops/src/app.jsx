import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Card from './components/Cards'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='bg-green-400 text-black p-4 rounded-xl'>React Project using Tailwind</h2>
    <Card username="shweta" btnText="click me" />
    <Card username="Shweta Singh" btnText="Visit me"/>
    </>
  )
}
export default App;