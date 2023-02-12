export default function Login() {
    return (
        <>
            <h3 className="m-5">Join the dark side, we got cookies</h3>

            <div className="shadow-2-strong">
                <div className="mask d-flex align-items-center h-100">
                    <div className="container text-dark">
                        <div className="col-xl-5 col-md-8 mx-auto">
                            <form className="bg-white  rounded-5 shadow-5-strong p-5">
                                <div className="form-outline mb-4">
                                    <input type="email" id="form1Example1" className="form-control" />
                                    <label className="form-label" htmlFor="form1Example1">Email address</label>                                    
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="form1Example2" className="form-control" />
                                    <label className="form-label" htmlFor="form1Example2">Password</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}