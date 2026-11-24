function Login(){
    return(
        <>
        <form className="form-container">
            <h2 className="d-flex justify-content-center">USER LOGIN</h2>
           <div>
             <label className="form-label">USER ID</label>
            <input type="text" placeholder="Enter Your User ID" className="form-control"></input>
           </div>
           <div>
             <label className="form-label mt-4">PASSWORD</label>
            <input type="password" placeholder="Enter your password" className="form-control"></input>
           </div>
            <button className="btn btn-primary mt-4 w-100">Login</button>
        </form>
        </>
    )
}
export default Login;