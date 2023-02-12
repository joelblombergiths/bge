import './index.css';
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { createRoot } from 'react-dom/client'
import { Route, NavLink, RouterProvider, createBrowserRouter, createRoutesFromElements, redirect } from 'react-router-dom';
import Events from './pages/events'
import Event from './pages/event'
import Login from './pages/login'
import Add from './pages/add'
import DeleteEvent from './functions/deleteEvent'
import AddEvent from './functions/addEvent'
import UpdateEvent from './functions/updateEvent'

const appRoutes = createBrowserRouter(
    createRoutesFromElements([
        <Route path='/login' element={<><Menu /><Login /></>} />,
        <Route path='/' element={<><Menu /><Events /></>} />,
        <Route path='/event/:id' element={<><Menu /><Event /></>} loader={() => {
            const user = true
            if (!user) {
                throw redirect("/login")
            }
            return user
        }} />,        
        <Route path='/deleteEvent/:id' element={<><Menu /><DeleteEvent /></>} loader={() => {
            const user = true
            if (!user) {
                throw redirect("/login")
            }
            return user
        }} />,        
        <Route path='/add' element={<><Menu /><Add /></>} loader={() => {
            const user = true
            if (!user) {
                throw redirect("/login")
            }
            return user
        }} />,
        <Route path='/addEvent' element={<><Menu /><AddEvent /></>}
            loader={() => {
                const user = true
                if (!user) {
                    throw redirect("/login")
                }
                return user
            }}
            action={async ({ request }) => {
                const data = await request.formData()
                return { name: data.get('name'), date: data.get('date') }
            }}
        />,
        <Route path='/updateEvent' element={<><Menu /><UpdateEvent /></>}
            loader={() => {
                const user = true
                if (!user) {
                    throw redirect("/login")
                }
                return user
            }}
            action={async ({ request }) => {
                const data = await request.formData()
                return { id:data.get('id'), name: data.get('name'), date: data.get('date') }
            }}
        />
    ])
)

createRoot(document.querySelector('#root'))
    .render(
        <RouterProvider router={appRoutes} />
    )

function Menu() {
    const [isOpen, setOpen] = useState(false)
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand px-5 fw-bold">BGE</NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    aria-controls="navmenu">
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#6f8496" rounded />
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/add" className="nav-link btn">Add&nbsp;Event</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link btn">Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
