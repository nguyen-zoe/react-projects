import React from 'react'
import { useState } from 'react'

function Login() {
    const [status, setStatus] = useState(null);
    const [data, setData] = useState({
        username: "",
        password: ""
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!data.username || !data.password) {
            setStatus(false);
        } else setStatus(true);
    };
    const handleChange = (event) => {
        let {name, value} = event.target;
        setData({ ...data, [name]: value })
    }
    return (
        <div className='container'>
            <div className="card" style={{ width: '50rem' }}>
                <div className="card-header text-center">
                    <h1>Login</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username" className='form-label fw-bold'>Username</label>
                            <input type="text"
                                className='form-control'
                                id='username'
                                placeholder='Enter username'
                                name='username'
                                value={data.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className='form-label fw-bold'>Password</label>
                            <input type="password"
                                className='form-control'
                                id='password'
                                placeholder='Enter Password'
                                name='password'
                                value={data.password}
                                onChange={handleChange}
                            />
                        </div>
                     
                          <div className="form-group mt-3">
                          <button className="btn btn-primary " type='submit'>Login</button>
                          </div>
                      
                        {status ===false && <div className='text-danger'>Enter Username and Password</div>}
                        {status === true && <div className='text-success'>Login Successful</div>}
                    </form>
                </div>
            </div>
            {/* <div className="card" style="width: 18rem;">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div> */}
        </div>
    )
}

export default Login
