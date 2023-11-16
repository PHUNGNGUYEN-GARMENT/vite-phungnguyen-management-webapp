import { Navigate, Route, Routes } from 'react-router-dom'
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
          <Route path='/' element={<Navigate to='dashboard' replace />} />
          {routes.map((route) => {
            return (
              <Route key={route.key} path={route.path} element={<route.component />}>
                {route.childs
                  ? route.childs.map((child) => {
                      return <Route key={child.key} path={child.path} element={<child.component />} />
                    })
                  : null}
              </Route>
            )
          })}
        </Route>
      </Routes>
    </div>
  )
}

export default App
