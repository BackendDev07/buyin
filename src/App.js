import { React } from 'react'
import { GlobalStyles } from './components'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { routes } from './helpers/routes'

function App() {
    const { categoryModal, loginModal } = useSelector(
        (state) => state.modalState
    )

    

    return (
        <div>
            <GlobalStyles
                open={[categoryModal, loginModal].some((item) => item)}
            />  

            <Routes>
                {routes.map((item) => (
                    <Route
                        key={item.id}
                        path={item.path}
                        element={item.component}
                    />
                ))}
            </Routes>
        </div>
    )
}

export default App
