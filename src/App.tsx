import { Navigate, Route, Routes } from 'react-router-dom'
import Main from './components/layout/Main'
import { routes, routesMobile } from './constants/route.constant'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'

import useBreakpoint from './hooks/useBreakpoint'

function App() {
  const { breakpoint } = useBreakpoint()

  const isMobile: boolean = breakpoint === 'md'

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route element={<Main />}>
            <Route path='/' element={<Navigate to='dashboard' replace />} />
            {(isMobile ? routesMobile : routes).map((route) => {
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
    </>
  )
}

export default App
