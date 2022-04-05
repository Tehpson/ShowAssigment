import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { DetailedView } from '../views/DetailedView'

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeView />} />
                <Route path='/:id' element={<DetailedView />} />
            </Routes>
        </BrowserRouter>
    )
}