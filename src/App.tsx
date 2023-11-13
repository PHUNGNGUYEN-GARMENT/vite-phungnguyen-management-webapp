import { Route, Routes } from 'react-router-dom'
import Main from './components/layout/Main'
import routes from './constants/route'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route element={<Main />}>
          {routes.map((route, index) => {
            return <Route key={index} path={route.path} element={<route.component />} />
          })}
        </Route>
      </Routes>
    </div>
  )
}

export default App
