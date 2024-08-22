import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mycss.css'
// import Fakes from './Fakes'
import Lay from './Lay'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Fakes/> */}
    <Lay/>
  </StrictMode>,
)
