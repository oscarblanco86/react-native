// import { ObjectLiterals } from './typescript/ObjectLiterals'
// import { BasicTypes } from './typescript/BasicTypes'
// import { BasicFunctions } from './typescript/BasicFunctions'
// import './App.css'
// import { Counter } from "./components/Counter"
// import { LoginPage } from "./components/LoginPage"

import { UsersPage } from "./components/UsersPage"
import { AuthProvider } from "./context/AuthContext"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className='text-4xl mb-5'>React + TS</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        <UsersPage />
      </div>
    </AuthProvider>
  )
}

export default App
