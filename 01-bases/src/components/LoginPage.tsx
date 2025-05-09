import { useAuthContext } from '../context/AuthContext'

export const LoginPage = () => {
    const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } = useAuthContext();

    if (isChecking) {
        return <h1>Verificando usuario</h1>
    }
    
  return (
    <>
        {
            isAuthenticated ? (
                <> 
                    <h3>Bienvenido</h3>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    <button 
                        onClick={() => logout()}
                        className='bg-blue-500 p-2 text-white rounded-xl mt-2'>
                        Salir
                    </button>
                </>
            ) : (
                <> 
                    <h3>Ingresa a la aplicacion</h3>
                    <button 
                        onClick={() => loginWithEmailPassword('oscar@email.com','123456')}
                        className='bg-blue-500 p-2 text-white rounded-xl mt-2'>
                        Ingresar
                    </button>
                </>
            )
        } 
        {/* <h3>Login</h3>
        <span>{status}</span> */}
    </>
  )
}
