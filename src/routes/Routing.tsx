import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeView } from '../views/homeView/HomeView'
import { DetailedView } from '../views/detailedView/DetailedView'

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