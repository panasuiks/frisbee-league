import { useState } from 'react'
import { Button } from '@mui/material'
import './App.css'


function App() {

  const [info, setInfo] = useState<any>(null)
  const getData = () => {
    fetch("http://localhost:8080/get_data")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setInfo(data)
    })
  }
return (
  <>
    <Button onClick={getData}>get data</Button>
    { info ? <h1>{info.MRData.RaceTable.Races[0].raceName}</h1> : <div/>}
  </>
)
}

export default App
