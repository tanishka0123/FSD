import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from "./Marks";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Marks name={"Tanishka"} rollnumber={"123"} sem1={"89"} sem2={"90"} sem3={"99"} />
    <Marks name={"Saumya"} rollnumber={"234"} sem1={"86"} sem2={"20"} sem3={"89"}/>
  </StrictMode>,
)
