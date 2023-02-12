import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Events() {
    const navigate = useNavigate()
    const [allEvents, populate] = useState([])

    useEffect(() => {
        const getEvents = async () => {
            const res = await fetch('http://localhost:3001/events')
            if (res.status === 200) {
                const data = await res.json()
                populate(data)
            }
            else {
                populate(null)
            }
        }
        getEvents()
    }, [populate])

    return (
        <>
            <h3 className='m-5'>You never have more fun than what you make yourself</h3>
            <div className='container'>
                <div className='col-8 mx-auto bg-white shadow-lg '>
                    <table className='table table-striped table-hover'>
                        <thead >
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody className='fw-bold'>
                            {allEvents != null
                                ?
                                allEvents.map(event =>
                                    <tr title='Click to open event' onClick={() => navigate(`/event/${event.ID}`)} key={event.ID}>
                                        <td>{event.Name}</td>
                                        <td>{event.Date}</td>
                                    </tr>
                                )
                                :
                                <tr onClick={() => navigate('/add')}>
                                    <td colSpan={2}>[Create new Event]</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}