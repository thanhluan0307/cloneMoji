import { BrowserRouter, Routes, Route } from 'react-router'
import { Toaster } from 'sonner'

import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import { Chat } from "./pages/Chat"
import ProtectedRoute from './components/auth/protected'
function App() {

  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route
            path="/signin"
            element={<SignIn />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />

          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/"
              element={<Chat />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
