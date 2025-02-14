import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//The function name can be learn, but when using it in JSX, you must use an uppercase letter. 🚀
import Learn from './Learn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Learn />
  </StrictMode>
)
//strict mode is recommended but not necesaary


