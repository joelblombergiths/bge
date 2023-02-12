import { useEffect, useState } from 'react'
import { useParams, useNavigate, Form } from 'react-router-dom'

export default function Event() {
  const navigate = useNavigate()

  const { id } = useParams()

  const [event, populate] = useState({})
  const [editEvent, EditEvent] = useState(false)

  useEffect(() => {
    const getEvent = async () => {
      const res = await fetch(`http://localhost:3001/event/${id}`)
      if (res.status === 200) {
        const data = await res.json()
        populate(data)
      }
      else {
        populate(null)
        console.log(res)
      }
    }
    getEvent()
  }, [populate, id])

  return (
    <>
      <div className="modal fade" id="confirmBox" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger fw-bold">Delete Event</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-body">
              <p>Are you sure you want to delete this event?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => navigate(`/deleteEvent/${id}`)}>Yes</button>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='col-8 mx-auto bg-white shadow-lg m-5'>
          <Form id='updateForm' method='post' action='/updateEvent'>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Most Prefered Game</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody className='fw-bold'>
                <tr>
                  <td>{editEvent ? <input className="form-control" type='text' name='name' defaultValue={event.Name}></input> : event.Name}</td>
                  <td>{editEvent ? <input className="form-control" type='datetime-local' name='date' defaultValue={event.Date}></input> : event.Date}</td>
                  <td>{event.TopVote}</td>
                  <td>
                    <input type='hidden' className="form-control" name='id' value={id}></input>
                    <button title='Edit' type='submit' className='btn' >
                      {
                        <i className={`fa-solid ${editEvent ? 'fa-floppy-disk' : 'fa-pen'}`}
                          onClick={(e) => editEvent ? <></> : <>{e.preventDefault()} {EditEvent(true)}</>}></i>
                      }
                    </button>
                    <button title='Delete' type='button' className='btn' data-bs-toggle="modal" data-bs-target="#confirmBox">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Form>
        </div>
      </div>
    </>
  )
}
// editEvent
//     ?
//     <i id="eventSaveIcon" className='fa-solid fa-floppy-disk' onClick={() => document.querySelector('#updateForm').submit()}></i>
//     :
//     <i id="eventEditIcon" className='fa-solid fa-pen' onClick={() => <>{EditEvent(true)}</>}></i>