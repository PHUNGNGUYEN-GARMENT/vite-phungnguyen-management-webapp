import { Route, Routes } from 'react-router-dom'
import Calendar from './pages/Calendar'
import Dashboard from './pages/Dashboard'
import Ecommerce from './pages/Ecommerce'
import Mail from './pages/Mail'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/e-commerce' element={<Ecommerce />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/mail' element={<Mail />} />
      </Routes>
    </div>
  )
}

export default App
