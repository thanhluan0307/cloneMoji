import { BrowserRouter, Routes, Route } from 'react-router'
import { Toaster } from 'sonner'

import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import { Chat } from "./pages/Chat"
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
          <Route
            path="/"
            element={<Chat />}
          />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
