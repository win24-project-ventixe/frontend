
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from '/.assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'

function App() {

  return (
    <Routes>
      <Route element={<CenterLayout />}>

      </Route>

      <Route path="">

      </Route>

    </Routes>
  )
}

export default App
