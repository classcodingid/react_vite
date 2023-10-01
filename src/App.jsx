import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProjectList from './pages/ProjectList'
import ProjectCreate from './pages/ProjectCreate'
import ProjectEdit from './pages/ProjectEdit'
import ProjectShow from './pages/ProjectShow'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/project' element={<ProjectList />} />
        <Route path='/create' element={<ProjectCreate />} />
        <Route path='/edit/:id' element={<ProjectEdit />} />
        <Route path='/show/:id' element={<ProjectShow />} />
      </Routes>
    </Router>
  )
}

export default App