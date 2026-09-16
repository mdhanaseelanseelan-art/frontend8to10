import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Button from './Button.jsx'
import Input from './Input.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button />
    <Input/>
    <Card/>
  </StrictMode>,
)
