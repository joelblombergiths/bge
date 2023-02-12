import { Form } from 'react-router-dom'

export default function Add() {
    return (
        <>
            <h3 className="m-5">Let's create som new memories</h3>
            <div className="container text-dark">
                <div className="col-xl-5 col-md-8 mx-auto">
                    <Form className="bg-white rounded-5 shadow-5-strong p-5" method={'post'} action="/addEvent">
                        <div className="form-outline mb-4">
                            <input type="text" name="name" className="form-control" />
                            <label className="form-label" htmlFor="name">Name the event</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="datetime-local" name="date" className="form-control" />
                            <label className="form-label" htmlFor="date">Set the date</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Add</button>
                    </Form>
                </div>
            </div>
        </>
    )
}